// const fs = require("fs").promises;
// const path = require("node:path");
// const { randomUUID } = require("crypto");
// const contactsPath = path.join("./models", "contacts.json");
const { ctrlWrapper } = require("../helpers");
const { Contact } = require("../models/contact");

const listContacts = async () => {
  const result = await Contact.find();
  return result;
};

const getContactById = async (contactId) => {
  const result = await Contact.findById(contactId);
  return result || null;
  // const contacts = await listContacts();
  // const result = contacts.find((item) => item.id === contactId);
  // return result || null;
};

const updateStatusContact = async (contactId) => {
  const result = await Contact.findById(contactId);
  return result || null;
};

const addContact = async (body) => {
  // console.log(body);
  const result = await Contact.create(body);
  console.log(result);
  return result;

  // const contacts = await listContacts();
  // const newContacts = {
  //   id: randomUUID(),
  //   name: body.name,
  //   email: body.email,
  //   phone: body.phone,
  // };
  // contacts.push(newContacts);
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  // return newContacts;
};

const updateContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return result;

  // const contacts = await listContacts();
  // const index = contacts.findIndex((item) => item.id === contactId);
  // console.log("index", index);
  // if (index === -1) {
  //   return null;
  // }
  // contacts[index] = { contactId, ...body };
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const removeContact = async (contactId) => {
  const result = await Contact.findByIdAndRemove(contactId);
  return result;
  // const contacts = await listContacts();
  // const index = contacts.findIndex((item) => item.id === contactId);
  // if (index === -1) {
  //   return null;
  // }
  // const [result] = contacts.splice(index, 1);
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  // return result;
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  removeContact,
};
