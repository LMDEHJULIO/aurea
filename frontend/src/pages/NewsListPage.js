import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createNews, deleteNews, listNews } from '../actions/newsActions';
import Loading from '../components/Loading';
import MessageBox from '../components/Message';
import { NEWS_CREATE_RESET, NEWS_DELETE_RESET } from '../constants/newsConstants';
import { ListTable } from './styles/ListPageStyle';



const ListPageStyle = styled.div`
  padding-top: 3rem;
  grid-template-columns: 3rem auto 3rem;

  header {
    grid-column: 2;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: 3rem auto 3rem;
    max-width: 1800px;
    margin: 0 auto;
  }

`

export default function NewsListPage(props) {
  const newsList = useSelector((state) => state.newsList);
  const { loading, error, news } = newsList;

  const newsCreate = useSelector((state) => state.newsCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    news: createdNews,
  } = newsCreate;

  const newsDelete = useSelector((state) => state.newsDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = newsDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: NEWS_CREATE_RESET });
      props.history.push(`/product/${createdNews._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: NEWS_DELETE_RESET });
    }
    dispatch(listNews());
  }, [createdNews, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (news) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteNews(news._id));
    }
  };
  const createHandler = () => {
    dispatch(createNews());
  };
  return (
    <ListPageStyle forNews={true}>
      <header>
        <h1>Blogs</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create New Blog
        </button>
      </header>

      {loadingDelete && <Loading></Loading>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <Loading></Loading>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <ListTable className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {news.map((news) => (
              <tr key={news._id}>
                <td className="news-table-label">{news._id}</td>
                <td className="news-table-label">{news.title}</td>
                <td className="news-table-label">
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/news/${news._id}/edit`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(news)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ListTable>
      )}
    </ListPageStyle>
  );
}