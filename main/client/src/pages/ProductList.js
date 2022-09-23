import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';


const Container = styled.div`
`
const Title = styled.h2` margin: 20px;
`
const FilterContainer = styled.div`
    display: flex; 
    justify-content:space-between;
    margin: 20px;
`
const Filter = styled.div`
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
`
const Select = styled.select`
padding:10px;
margin-right: 10px;
`
const Option = styled.option`
`


const ProductList = () => {

    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const handleFilter = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText> Filter Products: </FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled selected >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                    </Select>

                    <Select name='size' onChange={handleFilter}>
                        <Option disabled selected >Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText> Sort Products: </FilterText>
                    <Select onChange={(e) => { setSort(e.target.value) }}>
                        <Option disabled selected >Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filter={filter} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList