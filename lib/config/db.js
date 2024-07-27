import mongoose  from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://mehtatisha35:DyCpKNjYsWtaGUUc@cluster0.92c6aub.mongodb.net/myDatabase?retryWrites=true&w=majority')
    
    console.log("DB Connected")
}