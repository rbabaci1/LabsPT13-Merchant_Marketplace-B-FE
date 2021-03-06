import { removeCartItem } from '../../api';
import { addCartItem } from '../../api';
import { getCartItems } from '../../api';

export const fetchCart = (profile_id,authState) => dispatch => {
  try {
    console.log('FETCHING ITEMS FROM THE CART');
    dispatch({ type: 'CARTS_LOADING' });
    getCartItems(profile_id,authState).then(cart => {
      console.log({cart})
      dispatch({ type: 'CARTS_LOADED', payload: cart });
    });
  } catch (err) {
    dispatch({
      type: 'CART_ERROR',
      payload: 'Request failed, please try again!',
    });
    console.error(err);
  }
};

export const removeFromCart = (profile_id, product_id, authState) => dispatch => {
  try {
    console.log('DELETING ITEM FROM THE CART')
    dispatch({ type: 'REMOVING_FROM_CART'});
    removeCartItem(profile_id, product_id, authState).then(cart => {
      dispatch({ type: 'ITEM_REMOVED', payload: cart})
    })
  } catch (err) {
    dispatch({
      type: 'ERROR_REMOVING_ITEM',
      payload: 'Request failed, please try again!',
    });
    console.error(err)
  }
}

export const addToCart = (profile_id, product_id, authState) => dispatch => {
  try {
    console.log('ADDING ITEM TO THE CART')
    dispatch({ type: 'ADDING_TO_CART'});
    addCartItem(profile_id, product_id, authState).then(cart => {
      dispatch({ type: 'ITEM_ADDED', payload: cart})
    })
  } catch (err) {
    dispatch({
      type: 'ERROR_ADDING_ITEM',
      payload: 'Request failed, please try again!',
    });
    console.error(err)
  }
}
