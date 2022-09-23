import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { login } from '../redux/apiCalls';
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
                              rgba(255, 255, 255, 0.5)), 
  url("https://wallpaperaccess.com/full/1900851.png") center;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
padding: 20px;
width:30%;
background-color: white;
${mobile({ width: "80vw" })}

`
const Title = styled.h2`
font-size:24px;
font-weight:300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width:40%;
margin: 10px 0px;
padding: 10px;
`

const Button = styled.button`
width:40%;
padding: 10px 20px;
border: none;
color: black;
font-weight: bold;
font-size: 16px;
cursor: pointer;
margin-bottom: 5px;
&:hover{
    background-color: teal;
    color: white;
    transition: all 0.1s linear;
}
&:disabled{
  background-color: red;
  cursor: not-allowed;
}
`

const Link = styled.a`
margin: 5px 0px;
font-size:14px;
text-decoration: underline;
cursor: pointer;
`
const Error = styled.span`
color: red;
`


const Login = () => {
  const [username, setUsername] = useState(" ")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  const {isFetching, error} = useSelector(state => state.user)

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{username, password})
  }



  return (
    <Container>
      <Wrapper>
        <Title> Login Your account</Title>
        <Form>
          <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />

          <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>Login</Button>
         { error && <Error>Something went wrong...</Error>}
          <Link>Forgot Password</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login