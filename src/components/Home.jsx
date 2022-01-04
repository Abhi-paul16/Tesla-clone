import React from 'react'
import styled from 'styled-components'

import Section from './Section'

import model3 from "../images/model-3.jpg";
import modelY from "../images/model-y.jpg";
import modelX from "../images/model-x.jpg";
import modelS from "../images/model-s.jpg";
import SolarPanel from "../images/solar-panel.jpg";
import SolarRoof from "../images/solar-roof.jpg";
import accessories from "../images/accessories.jpg";

const Home = () => {
    return (
        <Container>
        <Section
           title = "Model S "  
           discription = "Order Online for TouchLess Delivery"
           leftbtnText = "Custom Order"
           rightbtnText = "Existing Inventory"
           bgImage = {modelS}

        />
        <Section
                      title = "Model Y "  
                      discription = "Order Online for TouchLess Delivery"
                      leftbtnText = "Custom Order"
                      rightbtnText = "Existing Inventory"
                      bgImage = {modelY}
        />

        <Section
                       title = "Model 3 "  
                       discription = "Order Online for TouchLess Delivery"
                       leftbtnText = "Custom Order"
                       rightbtnText = "Existing Inventory"
                       bgImage = {model3}
        />
        <Section
                      title = "Model X "  
                      discription = "Order Online for TouchLess Delivery"
                      leftbtnText = "Custom Order"
                      rightbtnText = "Existing Inventory"
                      bgImage = {modelX}
        />

        <Section 
                      title = "Lowerst Cost Solar Panels in America "  
                      discription = "Money-back guarantee"
                      leftbtnText = "Order Now"
                      rightbtnText = "Learn More"
                      bgImage = {SolarPanel}
        />

        <Section
                      title = "Solar for New Roofs"  
                      discription = "Solar Roof Costs Less Than a New"
                      leftbtnText = "Order"
                      rightbtnText = "Learn More"
                      bgImage = {SolarRoof}
        />

        <Section
                     title = "Accessories"  
                    
                     leftbtnText = "Shop Now"
                    
                     bgImage = {accessories}
        />
     </Container>
 )
}

const Container = styled.div`
height:100vh;
`


export default Home;
