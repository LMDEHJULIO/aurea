import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
// import data from '../data';
import News from '../models/newsModel.js';
import { isAdmin, isAuth } from '../utils.js';

const newsRouter = express.Router();  

newsRouter.get('/seed', expressAsyncHandler(async (req, res) => {
  const createdNews = await News.insertMany(data.news)
  res.send({createdNews});
}));

newsRouter.get('/', async (req, res) => {
  const news = await News.find({});

  res.send(news);
})

newsRouter.get('/:id', async (req, res) => {
  const news = await News.findOne({_id: req.params.id});

  if(news) {
    res.send(news)
  } else { 
    res.status(404).send({message: 'News post not found'})
  }
})
 


newsRouter.put("/:id", isAuth, isAdmin, async (req, res) => {
  const newsId = req.params.id;
  const news = await News.findById(newsId);

  if (news) {
    news.title = req.body.title;
    news.text = req.body.text;
    news.image = req.body.image;

    const updatedNews = await news.save();

    if (updatedNews) {
      return res.status(200).send({ message: 'News Post Updated', data: updatedNews });
    } else {
      res.status(404).send({message: 'News Post not found'});
    }
  }
  return res.status(500).send({ message: ' Error in Updating News Post.' });

});

newsRouter.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedNews = await News.findById(req.params.id);

  if(deletedNews){
    await deletedNews.remove();
    res.send({message: "News Deleted"});
  } else {
    res.status(404).send("News not found");
  } 
})

export default newsRouter;