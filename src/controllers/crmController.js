var mongoose = require('mongoose');
var ContactSchema = require('../models/crmModel');

const Contact = mongoose.model('Contact',ContactSchema); // leverage ContactSchema on Contact collection

exports.addNewContact = (req,res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if(err) {
      res.send(err);
    }
    res.json(contact);
  });
};

exports.getContacts = (req,res) => {
  Contact.find({},(err,contact) => {
    if(err){
      res.send(err);
    }
    res.json(contact);
  });
};

exports.getContactWithID = (req,res) => {
  Contact.findById(req.params.contactId, (err,contact) =>{
    if(err){
      res.send(err);
    }
    res.json(contact);
  });
}

exports.updateContact = (req,res) => {
  Contact.findOneAndUpdate({_id:req.params.contactId},req.body, {new:true},(err,contact) => {
    if(err){
      res.send(err);
    }
    res.json(contact);
  })
}

exports.deleteContact = (req,res) => {
  Contact.remove({_id: req.params.contactId}, (err,contact) => {
    if(err){
      res.send(err);
    }
    res.json({message: 'Successfully deleted contact'});
  })
}

/*module.exports = addNewContact;
module.exports = getContacts;
module.exports = getContactWithID;
module.exports = updateContact;
module.exports = deleteContact;*/
