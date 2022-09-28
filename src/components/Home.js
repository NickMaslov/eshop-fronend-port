// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../redux/actions/productActions';

// import Product from './product/Product';

function Home() {
    // const dispatch = useDispatch();

    // const { products } = useSelector((state) => state.products);

    // console.log('products', products);

    // useEffect(() => {
    //     dispatch(getProducts());
    // }, [dispatch]);

    return (
        <div>
            <div className='col-6 col-md-9 bg-primary'>
                <h1>Home</h1>
                {/* <div className='row'>
                    {products.map((product) => (
                        <Product key={product._id} product={product} col={4} />
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default Home;
