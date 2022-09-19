import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import MessageBox from '../components/Message';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';
import { ListPageStyle, ListTable } from './styles/ListPageStyle';

export default function OrderListPage(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch, successDelete]);
  const deleteHandler = (order) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order._id));
    }
  };
  return (
    <ListPageStyle>

        <header>
          <h1>Orders</h1>
        </header>

      {loadingDelete && <Loading></Loading>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <ListTable className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className='order-table-label'>{order._id}</td>
                <td className='order-table-label'>{order.user.name}</td>
                <td className='order-table-label'>{order.createdAt.substring(0, 10)}</td>
                <td className='order-table-label'>{order.totalPrice.toFixed(2)}</td>
                <td className='order-table-label'>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td className='order-table-label'>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td className='order-table-label'>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
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