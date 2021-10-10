import {
    NEWS_LIST_REQUEST,
    NEWS_LIST_SUCCESS, 
    NEWS_LIST_FAIL, 
    NEWS_CREATE_REQUEST,
    NEWS_CREATE_SUCCESS,
    NEWS_CREATE_FAIL,
    NEWS_DELETE_REQUEST, 
    NEWS_DELETE_SUCCESS, 
    NEWS_DELETE_FAIL, 
    NEWS_SAVE_FAIL,
    NEWS_SAVE_REQUEST,
    NEWS_SAVE_SUCCESS,
    NEWS_DETAILS_REQUEST,
    NEWS_DETAILS_SUCCESS,
    NEWS_DETAILS_FAIL,
    NEWS_UPDATE_REQUEST,
    NEWS_UPDATE_SUCCESS,
    NEWS_UPDATE_FAIL
} from '../constants/newsConstants';
import Axios from "axios";

const listNews = () => async (dispatch) => {
try {

  dispatch({ type: NEWS_LIST_REQUEST });
  const { data } = await Axios.get("/api/news");
  dispatch({ type: NEWS_LIST_SUCCESS, payload: data });
}
catch (error) {

  dispatch({ type: NEWS_LIST_FAIL, payload: error.message });
}
}

const detailsNews = (newsId) => async (dispatch, getState) => {
try {
  const {userSignin: {userSignin}} = getState();

  dispatch({ type: NEWS_DETAILS_REQUEST, payload: newsId });
  const { data } = await Axios.get(`/api/news/${newsId}`);
  dispatch({ type: NEWS_DETAILS_SUCCESS, payload: data });
} catch (error) {
  dispatch({ type: NEWS_DETAILS_FAIL, payload: error.message });

}
}

const createNews = () => async (dispatch, getState ) =>{
dispatch({type: NEWS_CREATE_REQUEST});
const {userSignin: {userInfo}} = getState();

try {

  const {data} = await Axios.post('/api/news/', 
  {}, 
  {
    headers: {Authorization: `Bearer ${userInfo.token}`},
  });

  dispatch({
    type: NEWS_CREATE_SUCCESS,
    payload: data.news
  });

} catch (error) {
  const message = 
  
  error.response && error.response.data.message ?
  error.response.data.message:
  error.message;

  dispatch({
    type: NEWS_CREATE_FAIL,
    payload: message

  })
}
}

const saveNews = (news) => async (dispatch, getState) => {
try {
  dispatch({type: NEWS_SAVE_REQUEST, payload: news});
  const {userSignin: {userInfo}} = getState();

  if(!news._id){
    const {data} = await Axios.post('api/news', news, {headers: {
      'Authorization': `Bearer ${userInfo.token}`
    }});

    dispatch({type: NEWS_SAVE_SUCCESS, payload: data}) 
  } else {
    const {data} = await Axios.put(`api/news/${news._id}`, news, {headers: {
      'Authorization': `Bearer ${userInfo.token}`
    }});

    dispatch({type: NEWS_SAVE_SUCCESS, payload: data})
  }

} catch (error) {
  dispatch({type: NEWS_SAVE_FAIL, payload: error.message})
}
}

const deleteNews = (newsId) => async (dispatch, getState) => {
try {

  const {userSignin: {userInfo}} = getState();

  dispatch({ type: NEWS_DELETE_REQUEST, payload: newsId });
  const { data } = await Axios.delete(`/api/news/${newsId}`, {headers: {
    Authorization: `Bearer ${userInfo.token}`
  }});
  dispatch({ type: NEWS_DELETE_SUCCESS, payload: data, success: true });
} catch (error) {
  dispatch({ type: NEWS_DELETE_FAIL, payload: error.message });

}
}

const updateNews = (news) => async (dispatch, getState) => {

dispatch({ type: NEWS_UPDATE_REQUEST, payload: news });

const {
  userSignin: { userInfo },
} = getState();

console.log(userInfo)

try {
  const { data } = await Axios.put(`/api/news/${news._id}`, news, {
    headers: { Authorization: `Bearer ${userInfo.token}` },
  });

  dispatch({ type: NEWS_UPDATE_SUCCESS, payload: data });
} catch (error) {
  const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  dispatch({ type: NEWS_UPDATE_FAIL, error: message });
}
};

export {listNews, createNews, deleteNews, saveNews, updateNews, detailsNews}