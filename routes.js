const express = require("express");
const router = express.Router();
const ContactController = require("./controllers/contact_controller")

router.get("/contacts", ContactController.index);
router.post("/contacts", ContactController.create);
router.get("/contacts/new", ContactController.newResource);

module.exports = router;