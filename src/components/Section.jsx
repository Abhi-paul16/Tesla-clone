import React from 'react'
import styled from 'styled-components';
// import teslas from "../images/model-3.jpg"
import downarrow from "../images/down-arrow.svg";
import { Fade } from 'react-reveal';
const Section = ({title , discription , leftbtnText , rightbtnText , bgImage}) => {
    return (
        <Wrap bgImage = {bgImage}>
     <Fade bottom>
  <ItemText>
      <h1>{title}</h1>
      <p>{discription}</p>
  </ItemText>
  </Fade>
  <Buttons>
      <Fade bottom>
  <ButtonGroup>
  <LeftButton>
  {leftbtnText}
  </LeftButton>
  
{ rightbtnText &&  <RightButton>
{rightbtnText}
  </RightButton>}
  </ButtonGroup>
  </Fade>
  <DownArrow src={downarrow} alt="down"/>
  </Buttons>
          </Wrap>
    )
}

const Wrap = styled.div`
width: 100vw;
height:100vh;
background-image: url(${props => props.bgImage}) ; 

background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    cursor: pointer;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 100px;
     opacity: 0.85;
     text-transform: uppercase;
     font-size: 12px;
     margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.85;
    color: black;
`

const  DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
   
`
const Buttons = styled.div`
text-align: center;
`

export default Section







