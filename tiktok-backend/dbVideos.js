import mongoose from "mongoose";
const videoSchema = mongoose.Schema({
    url:String,
    likes:Number,
    messages:String,
    shares:String,
    channel:String,
    description:String,
    song:String
})
export default mongoose.model('Videos', videoSchema);