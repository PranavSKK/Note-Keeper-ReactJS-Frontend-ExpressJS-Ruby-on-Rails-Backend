import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/notekeeperdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('Mongodb Connected')).catch((err)=> console.log('Mongodb Error', err));

export default mongoose;

