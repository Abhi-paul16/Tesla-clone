import React from 'react'
import styled from 'styled-components';
import teslas from "../images/model-3.jpg"
import downarrow from "../images/down-arrow.svg"

const Section = () => {
    return (
        <Wrap>
                       
  <ItemText>
      <h1>Model S</h1>
      <p>Order Online for TouchLess Delivery</p>
  </ItemText>
  <Buttons>
  <ButtonGroup>
  <LeftButton>
  Custom Order
  </LeftButton>
  
  <RightButton>
  Existing Inventory
  </RightButton>
  </ButtonGroup>
  
  <DownArrow src={downarrow} alt="down"/>
  </Buttons>
          </Wrap>
    )
}

const Wrap = styled.div`
width: 100vw;
height:100vh;
background-image: url(${teslas}); 
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
`

const RightButton = styled(LeftButton)`
    
`

const  DownArrow = styled.img`
display: block;
    margin-top: 20px;
    height: 40px;
   
`
const Buttons = styled.div``

export default Section

