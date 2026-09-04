import { ContactsCollection } from '../models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ page, perPage }) => {
  const skip = (page - 1) * perPage;
  const limit = perPage;

  const contactsQuery = ContactsCollection.find();
  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    contacts,
    ...paginationData,
  };
};

export async function getContactById(contactId) {
  return await ContactsCollection.findById(contactId);
}

export async function createContact(payload) {
  return await ContactsCollection.create(payload);
}

export async function deleteContact(contactId) {
  return await ContactsCollection.findByIdAndDelete(contactId);
}

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

// export async function updateContact(contactId, payload) {
//   return await ContactsCollection.findByIdAndUpdate(contactId, payload, {
//     new: true,
//   });
// }
