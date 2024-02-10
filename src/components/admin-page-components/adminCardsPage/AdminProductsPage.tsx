import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import pageStyles from './productPage.module.css'
import productStyles from './product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AdminProductsPage() {

    const {data, isPending, isError} = useQuery({ queryKey: ['products'], queryFn: () => axios.get('http://localhost:3000/products')});
    const products = data?.data;

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Failed to load data</span>
    }

    return (
        <div className={pageStyles.productsGrid}>
            <div className={productStyles.container}>
                <span>{products[0].title}</span>
                <span>{products[0].type}</span>
                <span>{products[0].amount}</span>
                <FontAwesomeIcon icon={['fas', 'pencil-alt']}/>
            </div>
        </div>
    )
}

export default AdminProductsPage;