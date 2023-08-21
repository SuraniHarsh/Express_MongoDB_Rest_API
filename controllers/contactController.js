const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc Get all contacts
// @route GET /api/v1/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    try {

        const contact = await Contact.find();

        res.status(200).json({contacts : contact })

    } catch (error) {
        res.status(500).json({message : 'Error Get contact', error : error.message})
    }
});

//@desc Get contacts
// @route GET /api/v1/contact/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    try {

        const contact = await Contact.findById(req.params.id);
        
        if (!contact) {
            res.status(404);
            throw new Error("Contact not Found");
        }    
        
        res.status(200).json({contact : contact});
    } catch (error) {
        res.status(500).json({message : 'Error Get Contact by ID', error : error.message})
    }
});

//@desc create contacts
// @route POST /api/v1/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    try{

        const {name, email, phone} = req.body;

        if (!name || !email || !phone) {

            res.status(400);
            throw new Error("All fields are mandatory !");

        }

        const contact = await Contact.create({
            name ,
            email,
            phone
        });

        res.status(200).json({message : 'Contact Created successfully', contact : contact });
    }catch(error){
        res.status(500).json({message : 'Error Createing contact', error : error.message})
    }
});

//@desc update contacts
// @route PUT /api/v1/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    try{
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            res.status(404);
            throw new Error("Contact not Found!");
        }
    
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
    
        res.status(200).json({message : 'Contact update successfully', updatedContact : updatedContact})
    
    }catch(error){
        res.status(500).json({message : 'Error Updating contact', error : error.message })
    }
});

//@desc delete contacts
// @route DELETE /api/v1/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        await Contact.findByIdAndRemove(req.params.id);

        res.status(200).json({ message: 'Contact deleted successfully', deletedContact: contact });
    
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact', error: error.message });
    }
});

module.exports = {  getContacts,
                    getContact,
                    createContact,
                    updateContact,
                    deleteContact }