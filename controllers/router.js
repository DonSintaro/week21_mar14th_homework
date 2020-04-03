const express = require("express");
const router = express.Router();
const books = require("./controller.js");


router.get("/api/saved", function(req, res){
    console.log("got to router saved");
    books.readBooks()
    .then(function(data){
        console.log("got to .then for data send of getbooks")
        res.send(data);
    })
    .catch(function(err){
        res.status(500).send(err)
    });
});

router.post("/api/save", async function({body}, res) {
    
    await books.saveBook(body);
    res.send("success");
});

router.delete("/api/books/:id", async function({params, body}, res){
    
    let data = await books.deleteBook(params,body)
    res.send(data);
});


///////////////////////////////////////////////////////

module.exports = router;