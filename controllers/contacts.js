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
});

//@desc      Get all users contacts
//@route     api/v1/contacts
//@access    Private
exports.getAllContacts = asyncHandler(async(req, res) =>{
    const contacts = await Contact.find({user: req.user.id}).sort({name: 1});
    res.status(200).json({
        contacts
    });
});

//@desc      Delete contact
//@route     DELETE api/contacts/:id
//@access    Private
exports.deteleContact = asyncHandler(async(req, res) =>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        return res.status(404).json({
            success: false,
            msg: 'Contact not found'
        })
    }

    if(contact.user.toString()!== req.user.id){
        return res.status(404).json({
            success: false,
            msg: 'Not authorized'
        })
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.json({
        msg: 'contact deleted'
    })
})