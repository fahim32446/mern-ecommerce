import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
text-align: center;
font-weight: bold;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px
;`
const Bottom = styled.div`
display: flex;
justify-content: space-between;

`
const TopButton = styled.button`
padding:10px;
font-weight: bold;
cursor: pointer;
border: ${(p) => p.type === "filled" && "none"};
background-color: ${(p) => p.type === "filled" ? "black" : "transparent"};
color: ${(p) => p.type === "filled" && "White"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`

const Info = styled.div`
flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.div`

`
const ProductId = styled.div`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(p) => p.color}

`
const ProductSize = styled.div`

`
const PriceDetails = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`
const ProductAmount = styled.div`
    font-weight: bold;
    margin: 5px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const SummaryTitle = styled.h1`
 font-weight: bold;

`
const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;

`

const SummaryItemText = styled.span`
    font-weight:${(p)=>p.type === 'total' && "bold"};
    font-size:${(p)=>p.type === 'total' && "24px"};
`

const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 15px;
    border-radius: 5px;
`

const Summary = styled.div`
flex: 1;
border: 1px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;
`


const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>Check Out</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                                <Details>
                                    <ProductName><b>Product: </b>Demo Product 1 </ProductName>
                                    <ProductId><b>ID: </b>215565215 </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$300</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <hr style={{ margin: "10px 0px" }} />










                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                                <Details>
                                    <ProductName><b>Product: </b>Demo Product 2 </ProductName>
                                    <ProductId><b>ID: </b>215565215 </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$500</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <hr style={{ margin: "10px 0px" }} />










                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                                <Details>
                                    <ProductName><b>Product: </b>Demo Product 3 </ProductName>
                                    <ProductId><b>ID: </b>215565215 </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$1000</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <hr style={{ margin: "10px 0px" }} />
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Charge</SummaryItemText>
                            <SummaryItemPrice>$ 5.60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -2.00 </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>$ 80 </SummaryItemPrice>
                        </SummaryItem>
                        <Button>Check Out Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart