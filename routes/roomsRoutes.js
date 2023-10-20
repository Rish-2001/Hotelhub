const express=require('express');
const router=express.Router();

const Room=require('../models/room');      // here we access the mongoosedata which is on the mongoose campus

router.get("https://hotelhub-wy2e.onrender.com/getallrooms",async(req,res)=>{

    try {
        const rooms = await Room.find({});
        // return res.json({rooms});
        res.send(rooms);
    } catch (error) {
        return res.status(400).json({message:error});
    }

});

router.post("https://hotelhub-wy2e.onrender.com/getroombyid",async(req,res)=>{
        const roomid=req.body.roomid 
    try {
        const room = await Room.findOne({_id:roomid});
        // return res.json({rooms});
        res.send(room);
    } catch (error) {
        return res.status(400).json({message:error});
    }

}); 

//add newroom

router.post('https://hotelhub-wy2e.onrender.com/addroom',async(req,res)=>{
    try {
        const newroom=new Room(req.body)
        await newroom.save();
        res.send("New Room Added Successfully");
    } catch (error) {
        return res.status(400).json({error});
    }
})

module.exports=router;



