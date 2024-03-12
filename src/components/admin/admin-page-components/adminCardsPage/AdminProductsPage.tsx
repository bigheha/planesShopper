import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import pageStyles from './productPage.module.css'
import productStyles from './product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';

interface ProductMutationProps {
    newAmount: number,
    id: string
}

function AdminProductsPage() {
    const {data, isPending, isError} = useQuery({ queryKey: ['products'], queryFn: () => axios.get('http://localhost:3000/products')});
    const products = data?.data;

    const mutation = useMutation({
        mutationFn: ({newAmount, id}: ProductMutationProps) => {
          return axios.patch('http://localhost:3000/products', {newAmount, id})
        },
      })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Failed to load data</span>
    }

    const handleAddition = useCallback(({newAmount, id}: ProductMutationProps): undefined => {
        newAmount++;
        mutation.mutate({newAmount, id})
    }, [])

    const handleSubstraction = useCallback(({newAmount, id}: ProductMutationProps): undefined => {
        newAmount--;
        mutation.mutate({newAmount, id})
    }, [])

    return (
        <div className={pageStyles.productsGrid}>
            <div className={productStyles.container}>
                <span className={productStyles.productText}>{products[0].title}</span>
                <span className={productStyles.productText}>{products[0].type}</span>
                <div>    
                    <FontAwesomeIcon icon={['fas', 'minus-circle']} onClick={handleAddition({newAmount: products[0].amount, id: products[0].id})}/>
                    <input type='text' className={productStyles.productText}>{products[0].amount}</input>
                    <input type="text" className={productStyles.productText} value={products[0].amount}/>
                    <FontAwesomeIcon icon={['fas', 'plus-circle']} onClick={handleSubstraction({newAmount: products[0].amount, id: products[0].id})}/>
                </div>
                <div>   
                    <FontAwesomeIcon icon={['fas', 'pencil-alt']}/>
                    <FontAwesomeIcon icon={['fas', 'trash-alt']}/>
                </div>
            </div>
        </div>
    )
}

export default AdminProductsPage;