import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { mobile } from "../responsive";

const Container = styled.div`
display:flex;

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
${mobile({ display: "none" })}
`
const Logo = styled.h1`
`
const Desc = styled.div`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcone = styled.div`
margin-right: 5px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap; 
${mobile({ flexDirection: "column" })}
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px
`
const ContactItem = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Logo.</Logo>
                <Desc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio aspernatur aut assumenda impedit consectetur quas!
                </Desc>
                <SocialContainer>
                    <SocialIcone>
                        <FacebookIcon />
                    </SocialIcone>

                    <SocialIcone>
                        <InstagramIcon />
                    </SocialIcone>

                    <SocialIcone>
                        <TwitterIcon />
                    </SocialIcone>

                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About Us</ListItem>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>My Profile</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Wishlist</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem> <AddLocationAltOutlinedIcon sx={{marginRight:'10px'}} /> 
                    Dhaka- 1000, Bangladesh
                </ContactItem>

                <ContactItem> 
                    <LocalPhoneOutlinedIcon sx={{marginRight:'10px'}} />
                    Phone: 01345678910
                </ContactItem>

                <ContactItem>
                    <MailOutlinedIcon sx={{marginRight:'10px'}} />
                    Email: logo@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer