const Recipes=require("../models/recipe")


const getRecipes=async(req,res)=>{
   const recipes=await Recipes.find()
    res.json(recipes)
}

const getRecipe=async(req,res)=>{
    const recipe= await Recipes.findById(req.params.id)
    res.json(recipe)
}

const editRecipe=async(req,res)=>{
    const{title,ingredients,instructions,time}=req.body
    let recipe= await Recipes.findById(req.params.id)
   try{
    if(recipe){
        await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
   res.json({title,ingredients,instructions,time})
    }

   }

   catch{
    return res.status(404).json({message:"error"})
   }
   }


const addRecipe=async(req,res)=>{
    const{title,ingredients,instructions,time}=req.body
    if(!title||!ingredients||!instructions){
        res.json({message:"Required fiends can't be empty"})
    }
const newRecipe=await Recipes.create({
title,ingredients,instructions,time
})
return res.json(newRecipe)
}

const deleteRecipe=(req,res)=>{
    res.json({message:"hello"})
}

module.exports= {getRecipes, getRecipe, editRecipe, addRecipe, deleteRecipe}