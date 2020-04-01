const express = require("express");
const router = express.Router();
const books = require("./controller.js");


router.get("/api/saved", function(req, res){
    books.readBooks()
    .then(function(data){
        console.log(data);
        res.send(data);
    })

    .catch(function(){
        res.send(undefined)
    });
});

router.post("/api/save", async function({body}, res) {
    
    await books.saveBook(body);
});

router.delete("/api/workouts/:id", async function({params, body}, res){
    await books.deleteBook(params,body);
});

///////////////////////////////////////////////////////

module.exports = router;