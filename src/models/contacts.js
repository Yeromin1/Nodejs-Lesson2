import { model, Schema } from 'mongoose';
import { validEnum } from '../constants/index.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: validEnum,
      required: true,
      default: 'personal',
    },
  },
  {
    timestamps: true,
  },
);

export const ContactsCollection = model('Contacts', contactSchema);
