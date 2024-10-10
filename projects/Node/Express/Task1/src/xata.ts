import { buildClient } from "@xata.io/client";
import type { BaseClientOptions, SchemaInference, XataRecord } from "@xata.io/client";
import dotenv from 'dotenv';

dotenv.config();

const tables = [
  {
    name: 'users',
    columns: [
      { name: 'email', type: 'string' },
      { name: 'password', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'school', type: 'string' },
      { name: 'sport', type: 'string' }
    ]
  }
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type UserRecord = XataRecord & {
  email: string;
  password: string;
  name: string;
  school: string;
  sport: string;
};

export type DatabaseSchema = {
  users: UserRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: process.env.DATABASE_URL,
  apiKey: process.env.XATA_API_KEY,
  branch: process.env.XATA_BRANCH,
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};