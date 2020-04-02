import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/saved", {port:(process.env.PORT || 80)});
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id, {port:(process.env.PORT || 80)});
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/save", bookData);
  }
};
