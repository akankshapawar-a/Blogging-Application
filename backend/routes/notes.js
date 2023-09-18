const express =require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');
const Blog=require('../model/Notes');
const {body ,validationResult}=require('express-validator');

router.get('/fetchblog',fetchuser ,async(req,res)=>{
    
    try{
        const blogs=await Blog.find({user:req.user.id});
        res.json(blogs)
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

/*router.post('/create', (req, res) => {
    const { title, tags } = req.body;
  
    if (!title || !tags || tags.length === 0) {
      return res.status(400).json({ error: 'Title and tags are required.' });
    }
  
    const newBlog = new Blog({ title, tags });
  
    newBlog.save((err) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while saving the blog post.' });
      }
  
      return res.status(201).json({ message: 'Blog post created successfully.' });
    });
  });
  
*/













router.post('/addblogs',fetchuser,[
body('title','Enter a valid title').isLength({min:3}),
body('description', 'Description must be atleast 20 characters').isLength({min:20}),],async(req,res)=>{
   try{
    const{title,description,tag}=req.body;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()});
    }
    const blog=new Blog({
        title,description,tag,user:req.user.id
    })
    const saveBlog=await blog.save()

    res.json(saveBlog)
   } catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error");
   }

})

router.put('/edit/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
       
        const eblog= {};
        if (title) { eblog.title = title };
        if (description) { eblog.description = description };
        if (tag) {eblog.tag = tag };

       
        let blog = await Blog.findById(req.params.id);
        if (!blog) { return res.status(404).send("Not Found") }

        if (blog.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        blog = await Blog.findByIdAndUpdate(req.params.id, { $set: eblog }, { new: true })
        res.json({ blog });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.delete('/deleteblog/:id', fetchuser, async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);
        if (!blog) { return res.status(404).send("Not Found") }

        if (blog.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

       blog = await Blog.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", blog:blog});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router
