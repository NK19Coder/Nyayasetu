import Lawyer from '../models/LawyerSchema.js';

export const updateLawyer = async(req,res)=>{
    const id  = req.params.id

    try{

        const updatedLawyer = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})

        res.status(200).json({success:true, message:"Successfully Updated", data:updatedLawyer})

    }catch(err){

        res.status(500).json({success:false, message:"Failed to Update"})


    }
}

export const deleteLawyer = async(req,res)=>{
    const id  = req.params.id

    try{

        await Lawyer.findByIdAndDelete(id)

        res.status(200).json({success:true, message:"Successfully Deleted"})

    }catch(err){

        res.status(500).json({success:false, message:"Failed to Delete"})


    }
}

export const getSingleLawyer = async(req,res)=>{
    const id  = req.params.id

    try{

        const lawyer = await Lawyer.findById(id).populate('reviews').select("-password")

        res.status(200).json({success:true, message:"User Found", data:lawyer})

    }catch(err){

        res.status(404).json({success:false, message:"No user found"})


    }
}

export const getAllLawyer = async(req,res)=>{
    try{
        const {query} = req.query;
        let lawyers;

        if(query){
            lawyers = await Lawyer.find({
                isApproved:'approved', 
                $or: [
                    {name: {$regex: query, $options: "i"}},
                    {specialization: {$regex: query, $options: "i"}}
            ],
        }).select('-password');
        }else{
            lawyers = await Lawyer.find({isApproved: 'approved'}).select("-password")
        }

        res.status(200).json({success:true, message:"Users Found", data:lawyers})
    
    }catch(err){

        res.status(404).json({success:false, message:"Not found"})


    }
}