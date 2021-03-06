import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/saved");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/save", bookData);
  }
};
