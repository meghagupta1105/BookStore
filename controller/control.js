const User=require('../model/user')
const bcrypt = require('bcrypt');

exports.signup =async (req,res) =>{

    const {username,email,password,address}=req.body;

    if(username.length < 4)
        return res.status(400).json({msg:"Username should be at least 4 characters long"})
    
    if(password.length < 5)
        return res.status(400).json({msg:"Username should be at least 5 characters long"})

    
    try {
        
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);

        
        user = new User({
            username,
            email,
            password: hashedPassword,
            address
        });

        await user.save();
        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

    
