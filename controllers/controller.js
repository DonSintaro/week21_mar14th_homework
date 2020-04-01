const Books = require("../models/books.js");


async function saveBook(item){
    
    let savedBook = await new Books(
        {
        id: item.id,
        volumeInfo: {
            canonicalVolumeLink: item.volumeInfo.canonicalVolumeLink,
            title: item.volumeInfo.title,
            subtitle: item.volumeInfo.subtitle,
            authors: item.volumeInfo.authors,
            imageLinks: {thumbnail: item.volumeInfo.imageLinks.thumbnail},
            description: item.volumeInfo.description
        }}
    );
    await savedBook.save()
}

async function deleteBook(params){
    
    await Books.findOneAndDelete({id:params.id});
    return "success delete on mongo";
}

async function readBooks(){
    return await Books.find({});
}

module.exports = {
    saveBook:saveBook,
    readBooks:readBooks,
    deleteBook:deleteBook
}