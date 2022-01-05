import React ,{useState} from 'react'
import styled from 'styled-components'
import TeslaLogo from "../images/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



export const Header = () => {

  const [burgerStatus , setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
               <img src={TeslaLogo} alt="" /> 
            </a>

            <Menu>
             <a href="#" > Modle-S </a>
             <a href="#" > Modle-Y </a>
             <a href="#" > Modle-3 </a>
             <a href="#" > Modle-X </a>

            </Menu>

            <RightMenu>
               <a href="#">Shop</a>
               <a href="#">Tesla Account</a>
               <CustomMenu onClick={()=>setBurgerStatus(true)} / >
            </RightMenu>

            <BurgerNav show = {burgerStatus}>
                <CloseWrapper>
                <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                <li><a href="#"> Model S</a></li>
                <li><a href="#"> Model y</a></li>
                <li><a href="#"> Model 3</a></li>
                <li><a href="#"> Model x</a></li>
                <li><a href="#"> Existing Inventory</a></li>
                <li><a href="#"> Used Inventory</a></li>
                <li><a href="#"> Trade-in</a></li>
                <li><a href="#"> Cybertruck</a></li>
                <li><a href="#"> Cybertruck</a></li>
                <li><a href="#"> Cybertruck</a></li>
               
            </BurgerNav>
        </Container>
    )

}

const Container = styled.div`

       min-height: 60px;
       position: fixed;
       display: flex ;
       align-items: center;
       justify-content: space-between;
       padding:  0 20px;
       top: 0;
       left: 0;
       right: 0;
       z-index: 1;
`

const Menu = styled.div`

     display: flex;
     justify-content: center;
     flex-wrap: nowrap;
     flex: 1;
     align-items: center;
     
     a{
        
         font-weight: 400;
         text-transform: uppercase ;
        padding: 0 10px;
     }

     @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
 display: flex;
 align-items: center;
    a{
     
     font-weight: 400;
     text-transform: uppercase ;
     margin-right:  10px;
    }
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`

const BurgerNav = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   background-color: white;
   width: 200px;
   z-index: 100;
   padding: 20px;
   list-style: none;
   transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
   transition: transform 0.4s ease-in;
   li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0,0,2);
       a{
           font-weight: 600;
       }
   }
   `

   const CustomClose = styled(CloseIcon)`
       cursor: pointer;
   `
   const CloseWrapper = styled.div`
      display: flex;
     justify-content: flex-end;
   `