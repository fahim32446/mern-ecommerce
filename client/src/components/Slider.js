import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { sliderItems } from '../data';
import { mobile } from "../responsive";
import Grid from '@mui/material/Grid';


const Container = styled.div`
    width: 100%; 
    display: flex; 
    position: relative;
    overflow: hidden;
    ${mobile({ marginBottom: "10vw" })}
`
const Arrow = styled.div`
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left:${p => p.direction === "left" && "10px"};
    right:${p => p.direction === "right" && "10px"};;
    margin:auto;
    cursor:pointer;
    z-index:2;
  

`
const Wrapper = styled.div`
    height:100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1s;
`
const Slide = styled.div`
    display:flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    ${mobile({ height: "50vh", position: "relative" })}
    
`
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
    ${mobile({ width: "100vw", height: "50vh", objectFit: "cover" })}
`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
    ${mobile({ position: "absolute" , display: "flex", flexDirection: "column", justifyContent: "center",
    alignContent: "center"})};
`
const Title = styled.h1`
    font-size: 70px; 
    ${mobile({ fontSize: "20px", textAlign: "center", background: "rgba(0,0,0,0.5)", color: "white", borderRadius: "10px", padding: "10px" })};
    
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    
    ${mobile({ fontSize: "15px", textAlign: "center", margin: "20px", background: "rgba(0,0,0,0.5)", color: "white", borderRadius: "10px", padding: "10px"})};
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    ${mobile({  padding: "8px",  fontSize: "10px", width: "30%", backgroundColor: "white", border: "none",
    position:"absolute",
    top: "80%",
    left: "32vw",
    
})}
&:hover{
    background-color: teal;
    color: white;
    transition: all 0.1s linear;
}
 
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowCircleLeftIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>

                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>

                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>

                    </Slide>
                ))}

            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowCircleRightIcon />
            </Arrow>
        </Container>
    )
}

export default Slider