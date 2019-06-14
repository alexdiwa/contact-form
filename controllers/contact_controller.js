// const contacts = []; becomes:
const ContactModel = require("./../database/models/contact_model");

async function index(req, res) {
  const contacts = await ContactModel.find();

  res.render("contacts/index", { contacts });
}

async function create(req, res) {
  const { name, email } = req.body;
  const newContact = { name, email };

  try {
    const contact = await ContactModel.create(newContact);
    res.redirect("/contacts");
  } catch(err) {
    res.status(500).send(`Error: ${err}`);
  }
}

function newResource(req, res) {

  res.render("contacts/form");
}

module.exports = {
  index,
  create,
  newResource
}