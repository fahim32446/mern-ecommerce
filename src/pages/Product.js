import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../responsive";


const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column" })}
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
    background-color: ${p=>p.color };
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
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.pinimg.com/564x/53/07/aa/5307aa79e5a24fde88d33f26125bb563.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Lorem, ipsum dolor.</Title>
                    <Des>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi blanditiis totam voluptatem, quaerat quidem quibusdam.</Des>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="Black" />
                            <FilterColor color="DarkBlue" />
                            <FilterColor color="Gray" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>Xl</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product