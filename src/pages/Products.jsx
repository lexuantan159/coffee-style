import React from 'react'
import MainProducts from '../components/main-products/MainProducts'
import MainCategory from '../components/main-category/MainCategory'

const Products = () => {
  return (
    <>
      <MainCategory idItem={0}/>
      <MainProducts/>
    </>
  )
}

export default Products