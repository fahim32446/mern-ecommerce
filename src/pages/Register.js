import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5),
                            rgba(255, 255, 255, 0.5)
                        ),
url("https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg") center;
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
`
const Wrapper = styled.div`
padding: 20px;
width:40%;
background-color: white;
${mobile({ width: "80vw" })}

`
const Title = styled.h2`
font-size:24px;
font-weight:300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width:40%;
margin: 10px 10px;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 10px 10px;
`
const Button = styled.button`
width:40%;
padding: 10px 20px;
margin: 10px 10px;;
border: none;
color: black;
font-weight: bold;
font-size: 16px;
cursor: pointer;
&:hover{
    background-color: teal;
    color: white;
    transition: all 0.1s linear;
}
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title> Create an account</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b></Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register