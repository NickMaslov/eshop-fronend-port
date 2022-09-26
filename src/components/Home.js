import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';

function Home() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);

    console.log('products', products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return <div>Home</div>;
}

export default Home;
