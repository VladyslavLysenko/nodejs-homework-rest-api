const express = require("express");
const { HttpError } = require("../../helpers");
const { schemas } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");

const router = express.Router();
const { validateBody, isValidId } = require("../../middlewares");

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId,  ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateContact);


router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

router.delete("/:id", isValidId, ctrl.removeContact);







// router.patch("/:contactId/favorite", isValidId, async (req, res, next) => {
//   try {
//     const { error } = schemas.updateFavoriteSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { contactId } = req.params;
//     const result = await ctrl.updateFavorite(contactId, req.body);
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:contactId", isValidId, async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await ctrl.removeContact(contactId);
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json({ message: "contact deleted" });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
