import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: {type: Date, default: Date.now()},
  image: { type: String, required: true },
  text: {type: String, required: true}
});

const News = mongoose.model("News", newsSchema);

export default News;