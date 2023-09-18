const express=require('express');
const User=require('../model/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SECRET='Harraybhai';

router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
body('email','Enter a valid email').isEmail(),
body('password','Password must be five characters').isLength({min:5}),
],async(req,res)=>{
 
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
      }
    

        try{
            let user=await User.findOne({email:req.body.email});
            if(user){
              return res.status(400).json({ error:"sorry a user with this email already exists"})  
            }
            const salt=await bcrypt.genSalt(10);
            secPass=await bcrypt.hash(req.body.password,salt);
            user=await User.create({
                name:req.body.name,
                password:secPass,
                email:req.body.email,
            });
const data={
    user:{
        id:user.id
    }
}
const authtoken=jwt.sign(data,JWT_SECRET);

sucess=true;
res.json({ authtoken})
        }
      catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
      }

})

/*router.post('/login' ,[
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be five characters').exists(),
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }

    const{email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"please login with correct credentials"});
        }

        const data={
            user:{
                id:user.id
            }
        }
      
        const authtoken=jwt.sign(data,JWT_SECRET);
        res.json({authtoken})
    }
    catch(error){
        console.error(error,message);
        res.status(500).send("Internal server error");
    }
});*/



router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be five characters').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please login with correct credentials" });
    }

    // Assuming you have stored hashed passwords in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Please login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, 'JWT_SECRET'); // Replace with your JWT_SECRET
    res.json({ authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

router.post('/getuser',fetchuser,async(req,res)=>{
  try{
      userId=req.user.id;
      const user=await User.findById(userId).select("-password")
      res.send(user);
  }catch(error){
      console.error(error.message);
      res.status(500).send("Internal server error");
  }
})






module.exports=router