import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsNews, updateNews } from '../actions/newsActions'; 
import { NEWS_UPDATE_RESET } from '../constants/newsConstants';

export default function NewsEditScreen(props){
    const newsId = props.match.params.id;
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
 
    const newsDetails = useSelector((state) => state.newsDetails);
    const {loading, error, news} = newsDetails;
    const newsUpdate = useSelector(state=>state.newsUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = newsUpdate;

    const dispatch = useDispatch(); 

    useEffect(() => {

      if(successUpdate){
        //   dispatch({type: NEWS_UPDATE_RESET});
          props.history.push('/news/managenews');
      } 

      //get news details in order to clear out original form values after update

      if (!news || news._id !== newsId || successUpdate) {
        dispatch({type: NEWS_UPDATE_RESET});
        dispatch(detailsNews(newsId));
      } else {
        setTitle(news.title);
        setText(news.text);
        setImage(news.image);
      }
    }, [news, dispatch, newsId, successUpdate, props.history]);


    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(updateNews({
        _id: newsId,
        title,
        text,
        image
      }))
    };

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');

    // Grab signed in user from store
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const uploadFileHandler = async (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append('image', file);
      setLoadingUpload(true);
      try {
        const { data } = await Axios.post('/api/uploads/', bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userInfo.token}`,
          },
        });
        setImage(data);
        setLoadingUpload(false);
      } catch (error) {
        setErrorUpload(error.message);
        setLoadingUpload(false);
      }
    };
 
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                <h1>Edit News {newsId}</h1>
                </div>
                {loadingUpdate && <h1>Loading</h1>}
                {errorUpdate && <h1>{error}</h1>}


                {loading ? (
                <h1>Loading</h1>
                ) : error ? (
                <h1>{error}</h1>
                ) : (
                <>
                    <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    </div>
                    <div>
                    <label htmlFor="text">Text</label>
                    <input
                        id="text"
                        type="text"
                        placeholder="Enter text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></input>

                    </div>


                    <div>
                      <label htmlFor="image">Image</label>
                      <input
                          id="image"
                          type="text"
                          placeholder="Enter image"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                      ></input>
                    </div>


                    <div>
                        <label htmlFor="imageFile">Image File</label>
                        <input
                            type="file"
                            id="imageFile"
                            label="Choose Image"
                            onChange={uploadFileHandler}
                        ></input>
                        {loadingUpload && <h1>Loading...</h1>}
                        {errorUpload && (
                            <h1>{errorUpload}</h1>
                        )}
                    </div>
                   
                    <div>
                    <label></label>
                    <button className="primary" type="submit">
                        Update
                    </button>
                    </div>
                </>
                )}
            </form>
        </div>
    )
}