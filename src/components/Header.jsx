import React from 'react'
import styled from 'styled-components'

import Section from './Section'


export const Header = () => {
    return (
        <Container>
           <Section
              title = "Model S "  
              discription = "Order Online for TouchLess Delivery"
              leftbtnText = "Custom Order"
              rightbtnText = "Existing Inventory"
              bgImage = "model-3.jpg"

           />
           {/* <Section/>
           <Section/>
           <Section/> */}
        </Container>
    )
}

const Container = styled.div`
height:100vh;
`

