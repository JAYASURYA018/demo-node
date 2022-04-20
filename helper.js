import { client } from "./index.js";

export async function getmovies() {
  return await client.db("newdb").collection("movies").find({}).toArray();
}


export async function updatemoviesbyid(id, update) {
  return await client
    .db("newdb")
    .collection("movies")
    .updateOne({ id: id }, { $set: update });
}

export async function deletemoviesbyid(id) {
  return await client
    .db("newdb")
    .collection("movies")
    .deleteOne({ id: id });
}

export async function getmoviesbyid(id) {
  return await client.db("newdb").collection("movies").findOne({ id });
}

export async function createmovies(data) {
  return await client.db("newdb").collection("movies").insertMany(data);
}
