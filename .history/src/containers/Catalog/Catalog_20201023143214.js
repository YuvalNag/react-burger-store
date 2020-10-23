import React, { Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';

import ProductCard from '../../components/ProductCard/ProductCard';
import classes from './Catalog.module.css'
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import * as catalogActions from '../../store/actions/index'



const mockProducts = [
    {
        title: `לביבות צ'יפס `,
        description: `2 ק''ג תפוגן אריזת חסכון
        קפוא`,
        price: '40.00',
        imageSrc: 'data:image/jpeg;base64,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',
    }, {
        title: `מלאווח 800 גר' `,
        description: `ינון`,
        price: '10.00',
        imageSrc: 'data:image/jpeg;base64,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',
    }
    , {
        title: `בורקס תפוחי אדמה 800 גר`,
        description: `ינון`,
        price: '10.00',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAWofXkl5HNlKmp-K5j4ktH_dZNr6Tuv5s1g&usqp=CAU',
    }, {
        title: `שניצל תירס 1 ק''ג`,
        description: `שף הטבע`,
        price: '18.00',
        imageSrc: 'data:image/jpeg;base64,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',
    }
]
const Catalog = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.idToken)

    // const onAddToCart = (newProduct) => dispatch(catalogActions.tryAddProduct(newProduct,token));
    // const onRemoveFromCart = (removedProduct) => dispatch(catalogActions.removeProduct(removedProduct,token))

    // const selectedProducts = useSelector(state => state.catalog.selectedProducts)
    const [selectedProducts, setSelectedProducts] = useState({})
    console.log('selectedProducts', selectedProducts);
    const onAddToCart = (productKey) => {
        if (selectedProducts[productKey]) {
            selectedProducts[productKey] = selectedProducts[productKey] + 1
        }
        else {
            selectedProducts[productKey] = 1
        }
        setSelectedProducts({ ...selectedProducts })
    };
    const onRemoveFromCart = (productKey) => {
        if (selectedProducts[productKey]) {
            selectedProducts[productKey] = selectedProducts[productKey] - 1
        }
        else {
            console.error('product key is not exist');
        }
        setSelectedProducts({ ...selectedProducts })
    };
    const products = useSelector(state => state.catalog.products)


    useEffect(() => dispatch(catalogActions.fetchProducts()), [])

    const totalPrice = Object.keys(products)
        .filter(productKey => selectedProducts[productKey])
        .map(productKey => selectedProducts[productKey] * products[productKey].price)
        .reduce((cur, sum) => cur + sum, 0);
    const purchaseContinueHandler = () => {
        this.props.history.push('./checkout')
    }

    return (
        <Fragment>

            <div
                className={classes.Catalog}
            >
                {Object.keys(products).map(productKey => <ProductCard {...products[productKey]} amount={selectedProducts[productKey]} productKey={productKey} onAdd={() => onAddToCart(productKey)} onRemove={() => onRemoveFromCart(productKey)} />)}

            </div>
            <BottomNavigation
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
                showLabels
                // className={classes.footer}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    // backgroundColor: '#e5e5c5',
                    backgroundColor: '#CF8F2E',
                    width: '100%'

                }}
            >

                <BottomNavigationAction label="הזמן עכשיו" icon={<ShoppingCartOutlined />} onClick={() => purchaseContinueHandler()} />
                <Typography align="center" color='textSecondary' variant='p' component='p' style={{ alignSelf: 'center', fontWeight: 'bold' }}>
                    סיכום:  ₪{totalPrice}

                </Typography>
            </BottomNavigation>
        </Fragment >
    )
}
export default Catalog