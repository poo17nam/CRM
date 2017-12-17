//'use strict';
var contactController = require('../controllers/crmController');

module.exports = function(app) {
  app.route('/contact')
  .get((req,res,next)=> {
    //middleware
    console.log(`Request from ${req.originalUrl}`);
    console.log(`Request from ${req.method}`);
    next(); //makes sure we get out of the middleware and allows us to get to the second function.
  }, contactController.getContacts)

  //POST endpoint
  .post(contactController.addNewContact);


  app.route('/contact/:contactId')
  // get specific contact
  .get(contactController.getContactWithID)

  // put request
  .put(contactController.updateContact)

  //delete request
  .delete(contactController.deleteContact);

};
