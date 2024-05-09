const {Review} = require('../models/index');
class ReviewController{
    static async addReview(req,res){
        const {review_theme,review_body,review_user} = req.body;
        const reviewCreated = await Review.create({
            review_theme,
            review_body,
            review_user
        });
        reviewCreated ? res.json({msg:'Отзыв отправлен'}) : res.json({msg:'Не удалось'});
    }
    static async getAll(req,res){
        const reviews = await Review.findAll();
        reviews ? res.send(reviews) : res.json({msg:'Не найдены'});
    }
    static async deleteReview(req,res){
        const {id} = req.body;
        const deletedReview = await Review.delete({where:{id:id}});
        deletedReview ? res.json({msg:'Отзыв удалён'}) : res.json({msg:'Не удалось'});
    }
    static async updateReview(req,res){
        const {id,review_theme,review_body,review_user} = req.body;
        const updatedReview = await Review.update({review_theme, review_body, review_user},{where:{id:id}});
        updatedReview ? res.json({msg:'Отзыв обновлен'}) : res.json({msg:'Не удалось'});
    }
}
module.exports = ReviewController;