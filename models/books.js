const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema(
    {
        id: {
            type: String,
            trim: true
        },
        volumeInfo:{

            canonicalVolumeLink: {
                type: String,
                trim: true
            },
            title: {
                type: String,
                trim: true
            },
            subtitle: {
                type: String,
                trim: true
            },
            authors: [{
                type: String,
                trim: true
            }],
            imageLinks: {
                thumbnail: {
                    type: String,
                    trim: true
                }
            },
            description: {
                type: String,
                trim: true
            }
        }
    }
);


const Books = mongoose.model("Books", booksSchema);

module.exports = Books;