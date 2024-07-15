const Tag=required("../models/tags");

exports.createTag=(res,req)=>{

try{
const{name,description}=req.body;

if(!name || !description){
    return res.status(400).json({
        success:false,
        message:'all fields are required',
    })
    
}
const tagDetail = Tag.create({
    name:name,
    description:description,
});

console.log(tagDetail);

return res.status(200).json({
    success:true,
    message:'tags created successfully',

})
}
catch(error){
    return res.status(500).json({
        success:false,
        message:error.message,
    })
}
};

exports.showAlltags=(req,res)=>{

    try{
const allTags=Tag.find({},{name:true,description:true});
res.status(200).json({
    success:true,
    message:"all tags returned successfully",
    allTags,
})
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })

    }
};