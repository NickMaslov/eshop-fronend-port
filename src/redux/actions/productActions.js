import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/products');

        dispatch({
            type: 'GET_PRODUCTS',
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
