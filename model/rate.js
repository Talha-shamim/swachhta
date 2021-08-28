import mongoose from "mongoose";


const rateSchema = mongoose.Schema({
    rateIn5 : Number,
    person : Number,
})

const Rate = mongoose.model("Rate",rateSchema);
export default Rate;