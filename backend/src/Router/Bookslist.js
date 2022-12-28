const express = require("express");
const Books = require("../Model/books");
const router = express.Router();

router.post("/",async(req,res)=>{
    try {
        const BooksData = await Books.create(req.body);
        res.status(200).json({
          status: "Success",
          BooksData,
        });
      } catch (e) {
        res.status(500).json({
          status: "Failed",
          message: e.message,
        });
      }
})

router.get("/",async(req, res) => {
    try {
      const BooksData = await Books.find();
      res.status(200).json({
        status: "Success",
        BooksData,
      });
    } catch (e) {
      res.status(500).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

router.put("/",()=>{})

router.delete("/",()=>{})

module.exports = router;