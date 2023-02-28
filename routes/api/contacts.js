// const path = require("node:path");
// const contactsPath = path.join("./models", "contacts.json");
// const fs = require("fs").promises;
const express = require("express");
// const contacts = require("../../controllers/contacts");
const { HttpError } = require("../../helpers");
const { schemas } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");
// const Joi = require("joi");
const router = express.Router();
const { isValidId } = require("../../middlewares");
// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

router.get("/", async (req, res, next) => {
  try {
    const result = await ctrl.listContacts();
    console.log('====================================');
    console.log(result);
    console.log('====================================');
    res.json(result);
    // console.log(res.json(result));
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", isValidId, async (req, res, next) => {
  try {
    const { contactId } = req.params;
    console.log(contactId);
    const result = await ctrl.getContactById(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const { error } = schemas.addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing required name field");
    }
    const result = await ctrl.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", isValidId, async (req, res, next) => {
  try {
    const { error } = schemas.addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await ctrl.updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.patch("/:contactId/favorite", isValidId, async (req, res, next) => {
  try {
    const { error } = schemas.updateFavoriteSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await ctrl.updateFavorite(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", isValidId, async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await ctrl.removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
