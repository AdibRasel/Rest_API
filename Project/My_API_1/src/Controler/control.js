exports.home = (req, res)=>{
    res.status(200);
    res.json({
        status:"Success",
        Data:"Your API is success <h1> Home</h1>"
    })
}

exports.about = (req, res)=>{
    res.status(303);
    res.json({
        status:"wow just fun",
        data:"about success"
    })
}

exports.person = (req, res)=>{
    res.status(200);
    res.json({
        Name:"Rasel Hossain Adib",
        Father_Name : "Harun Or Roshid",
        Mother_Name: "Firoza Begum",
        Brother_Name:"Md Firoz Alom",
        Sister_Name:["Rina Akther", "Sumi Akther", "Lipi Akter"],
        Study:{
            Praimari_School:"Narayonpur 1 Gov School",
            Highe_School:"Shahapur M.L High School",
            College:"Sompara College",
            Sub:["Business", "ICT", "English"]
        },
        Mobile_No:["01934544352", "01626757897"]
    })
}