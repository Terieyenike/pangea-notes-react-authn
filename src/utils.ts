import { Client, Databases, ID, Query } from 'appwrite';

const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6550de836c81d837f065');

export const create = (data:any) =>
  databases.createDocument(
    "6550e0840533d448907f",
    "6550e0a836e0927b472f",
    ID.unique(),
    data
  );

export const getList = databases.listDocuments(
  "6550e0840533d448907f",
  "6550e0a836e0927b472f",
  [Query.orderDesc("$createdAt")]
);

export const getDateTime = (dateString: string) => {
  const date = new Date(dateString);
  if (date.toString() === "Invalid Date") {
    return "Never";
  }

  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
  });
};
