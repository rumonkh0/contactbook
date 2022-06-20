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
        return res.status(400).json({
            error: 'Please enter email and password' 
        });
    }

    //check for user
    const user = await User.findOne({email}).select('+password');

    if(!user){
        return res.status(400).json({
            error: 'User not found' 
        });
    }
   

    const isMatch = await user.matchPassword(password);

    if(!isMatch){
        return res.status(400).json({
            error: 'Password does not match' 
        })
    }

    sendTokenResponse(user, res);

})

//@desc   Logout user
//@Route  GET api/v1/auth/logout
//@acess  public
exports.logout = asyncHandler(async(req, res, next) =>{
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 2*1000),
        httponly: true
    });

    res.status(200).json({
        success: true,
        data: {}
    });
});





//@desc   update user details
//@route  PUT api/v1/auth/updatedetails
//@access private
exports.updateDetails = asyncHandler(async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.user.id, req.body);
    res.status(200).json({
        success: true,
        data: user,
      });
})

//@desc    update password
//@route   api/v1/auth/updatepassword
//@access  private
exports.updatePassword = asyncHandler(async(req, res) =>{
    const user = await (await User.findById(req.user.id)).isSelected('+password');

    if(!await User.matchPassword(req.password)){
        return res.status(400).json({
            success: false,
            msg: 'invalid credential'
        })
    }

user.password = req.body.newpassword;

await user.save();

sendTokenResponse(user, res);

});


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