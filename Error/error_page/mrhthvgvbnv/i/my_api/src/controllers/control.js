exports.Hello = (req, res)=>{
    res.status(200).json({status:"Success", Data:"This is my First express rest api. bujtechi aste aste"})
}
exports.My_Info = (req, res)=>{
    res.status(200),
    res.json(
        {
            my_Name:"Rasel Hossain Adib",
            father_Name:"Harun Or Roshid",
            Brother_Name:"Firoz Alom",
            Sister_Name:["Rina Akther", "Sumi Akther", "Lipi Akther"],
            Study:{
                Primari_School:"Narayonpur 1 Gomvent School",
                High_School:"Shahapur M.L High School",
                College:"Sompara College"
            },
            Email_Address:["adibrasel.com@gmail.com","adibrasel.2018@gmail.com","adibrasel.2022@gmail.com"],
            Number:["01934544352", "01626757897"]
        }
    )
}