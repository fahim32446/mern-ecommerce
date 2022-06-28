import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { sliderItems } from '../data';
import { mobile } from "../responsive";

const Container = styled.div`
width: 100%; 
height: 100vh; 
display: flex; 
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
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
bottom: 100px;
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


`
const ImgContainer = styled.div`
flex:1;
height: 100%;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
flex:1;
padding: 50px;

`
const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

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