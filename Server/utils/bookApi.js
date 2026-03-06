import mongoose from "mongoose";
import fetch from "node-fetch";
import { Service } from "../models/service-model.js";
import dotenv from "dotenv"
dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI);

async function fetchBooksAndSave(query = "fiction") {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
  );
  const data = await res.json();
  const books = data.items;

  for (const book of books) {
    const info = book.volumeInfo;

    const service = new Service({
      name: info.authors?.[0] || "Unknown Author",
      title: info.title || "Untitled",
      price: 0, // Random price
      category: info.categories?.[0] || "General",
      downloadLink: info.previewLink || "",
      image: info.imageLinks?.thumbnail || "https://via.placeholder.com/150",
    });

    await service.save();
  }

  console.log("Books saved successfully.");
}

// Sequentially fetch and save books for different queries, then close the connection
async function runAll() {
  await fetchBooksAndSave("programming");
  await fetchBooksAndSave("fiction");
  await fetchBooksAndSave("adventure");
  await fetchBooksAndSave("horror");
  await fetchBooksAndSave("romance");
  await fetchBooksAndSave("history");
  await fetchBooksAndSave("science");
  await fetchBooksAndSave("fantasy");
  await fetchBooksAndSave("mystery");
  await fetchBooksAndSave("thriller");
  await fetchBooksAndSave("children");
  await fetchBooksAndSave("self-help");
  await fetchBooksAndSave("business");
  await fetchBooksAndSave("travel");
  await fetchBooksAndSave("health");
  await fetchBooksAndSave("poetry");
  await fetchBooksAndSave("art");
  await fetchBooksAndSave("biography");
  mongoose.connection.close();
}

runAll();
