const asyncHandler = require('../middleware/async');
const Contact = require('../models/Contact');


//@desc   create a contact
//@route  api/v1/createcontact
//@access private
exports.createContact = asyncHandler(async(req, res, next)=>{
    req.body.user = req.user.id;
    const contact = await Contact.create(req.body);

    res.status(200).json({
        success: true,
        data: contact
    })
})