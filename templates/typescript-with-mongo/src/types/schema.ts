import type { Document } from 'mongoose';

export interface BaseSchema extends Document {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
