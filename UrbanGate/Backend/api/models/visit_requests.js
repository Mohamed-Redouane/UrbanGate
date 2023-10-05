import mongoose from "mongoose";// visit request
const visit_requestSchema = new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true,
    },

    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },


    Status:{
    type: String,
    enum: ["pending","approved","rejected"],
    required: true
    },
   
    requestedDate: {
        type: Date,
        default: Date.now,
    },
    
    approvedDate: {
        type: Date,
    },
    
    rejectedDate: {
        type: Date,
    },

});

export default mongoose.model("Vist Request",visit_requestSchema);


