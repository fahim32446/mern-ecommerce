import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data.js'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`



const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products")
        setProducts(res.data)

      } catch (error) {

      }
    };
    getProducts();
  }, [cat])




  useEffect(() => {
    cat && setFilterProducts(
      products.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [products, cat, filter])


  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Container>
      {cat ? filterProducts.map(item => (
        <Product item={item} key={item.id} />
      )) :
        products.slice(0, 6).map(item => (
          <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products