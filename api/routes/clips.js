const expres=require("express");
const router = expres.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({message:"clips works!"});
});

router.post('/',(req,res,next)=>{
    res.status(200).json({message:"clips added works!"});
});
router.get('/:clipId',(req,res,next)=>{
    const id = req.params.clipId;
    res.status(200).json({message:"clips works with id !"});
});
router.patch('/:clipId',(req,res,next)=>{
    const id = req.params.clipId;
    res.status(200).json({message:"clips updated !"});
});
router.delete('/:clipId',(req,res,next)=>{
    const id = req.params.clipId;
    res.status(200).json({message:"clips deleted!"});
});
module.exports=router;