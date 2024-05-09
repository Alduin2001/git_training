const express = require('express');
const { Post } = require('../models/index');
const {User} = require('../models/index');
class PostController{
    static async findPost(req,res){

    }
    static async addPost(req,res){
        const {header,description, user } = req.body;
        const post_added = await Post.create({header:header,description:description,post_datetime:new Date(),user_post:user});
        post_added ? res.json({msg:'Пост добавлен'}) : res.json({msg:'Пост не добавлен'});
    }
    static async deletePost(req,res){

    }
    static async getPosts(req,res){
        const posts = await Post.findAll({
            include:[
                {
                    model:User,
                    as:'author_post',
                    attributes:['firstname','lastname']
                }
            ]
        });
        if(posts){
            res.send(posts);
        }else{
            res.json({msg:'Посты не найдены'});
        }
    }
    static async updatePost(req,res){
        const {header,description} = req.body;
        
    }
}
module.exports = PostController;