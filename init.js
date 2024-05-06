const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [{
    from: "netu",
    to: "Helena",
    msg: "rub se fariyaad",
    created_at: new Date(),
},
{
    from: "Sumit",
    to: "Aditya",
    msg: "oar beti, kissi hai?",
    created_at: new Date(),
},
{
    from: "Shriti",
    to: "Sumit",
    msg: "Hangi",
    created_at: new Date(),
},
{
    from: "Aditya",
    to: "Shriti",
    msg: "Abhi takka hai",
    created_at: new Date(),
},
];

Chat.insertMany(allChats);