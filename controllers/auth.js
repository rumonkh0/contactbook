const asyncHandler = require('../middleware/async');
const User = require('../models/User');

//@desc     Register user
//@route    POST api/v1/auth/register
//@access   public
exports.register = asyncHandler(async(req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        data: user
    });

    sendTokenResponse(user, res);
});

//@desc   Login user
//@Route  POST api/v1/auth/login
//@acess  public
exports.login = asyncHandler(async (req, res, next) =>{
    const {email, password} = req.body;

    if(!email || !password){
        return next(err);
    }

    //check for user
    const user = await (await User.findOne({email}).select('+password'));

    if(!user){
        return res.status(400).json({
            error: 'User not found' 
        })
    }
   

    const isMatch = await user.matchPassword(password);

    if(!isMatch){
        return res.status(400).json({
            error: 'Password does not match' 
        })
    }

    sendTokenResponse(user, res);

})

const sendTokenResponse = (user, res) => {
    //create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + 10*24*60*60*1000),
        httponly: true
    }

    res.status(200).cookie('token', token, options).json({
        success: true,
        token
    })
}