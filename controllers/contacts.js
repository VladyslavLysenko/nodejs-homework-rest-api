const { ctrlWrapper } = require("../helpers");
const { Contact } = require("../models/contact");

const listContacts = async () => {
  const result = await Contact.find();
  return result;
};

const getContactById = async (contactId) => {
  const result = await Contact.findById(contactId);
  return result || null;
};

const updateStatusContact = async (contactId) => {
  const result = await Contact.findById(contactId);
  return result || null;
};

const addContact = async (body) => {
  const result = await Contact.create(body);
  console.log(result);
  return result;
};

const updateContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return result;
};

const removeContact = async (contactId) => {
  const result = await Contact.findByIdAndRemove(contactId);
  return result;
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  removeContact,
};
