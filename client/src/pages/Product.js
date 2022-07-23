import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../reqMethods.js'
import { addProduct } from '../redux/cartRedux'
import {useDispatch, useSelector} from 'react-redux'

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImageContainer = styled.div`
flex: 1;

`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit:cover;
${mobile({ height: "40vh" })};
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })};
`
const Title = styled.h2`
font-weight: bold;
`
const Des = styled.p`
margin: 20px 0;
`
const Price = styled.span`
font-weight: 200;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 30px 0px;
${mobile({ width: "90%" })}
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${p => p.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterTitle = styled.span`
font-size: 17px;
font-weight: 200;
margin-right: 10px;
`

const FilterSize = styled.select`
    padding:5px;

`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;

${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: bold;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius:10px;
    &:hover{
        background-color: teal;
        color: white;
        transition: all 0.1s linear;
    }
`

const Product = () => {


    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data);
            } catch (error) {

            }
        }
        getProduct();
    }, [id]);

    const dispatch = useDispatch();

    const handleClick = () => {

       dispatch(addProduct({...product, quantity, color, size}));
    }


    const av = useSelector(state=>state.cart)
    console.log(av);

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Des>{product.des}</Des>
                    <Price>{product.price}$</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            ))}
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => quantity > 0 && setQuantity(quantity - 1)} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => setQuantity(quantity + 1)} />
                        </AmountContainer>
                        <Button onClick={handleClick}>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product