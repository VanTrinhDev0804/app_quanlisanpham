import React from "react";
import Homepage from './pages/HomePage/Homepage';
import NotFoundpage from './pages/NotFoundpage/NotFoundpage';
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductActionPage from "./pages/ProductsActionPage/ProductActionPage";

const routes =[
    {
        path : '/',
        exact : true ,
        main : ()=> <Homepage />
    },
    {
        path : '/product-list',
        exact : false ,
        main : ()=> <ProductListPage />
    },
    {
        path : '/product/add',
        exact : false ,
        main : ({history})=> <ProductActionPage  history = {history}/>
    },
    {
        path : '/product/:id/edit',
        exact : false ,
        main : ({match, history})=> <ProductActionPage  match ={match} history = {history}/>
    },
    {
        path : '',
        exact : false ,
        main : ()=> <NotFoundpage />
    }
];

export default routes;