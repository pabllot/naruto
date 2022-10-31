import React from 'react';
import {Container} from "./styles";
import Navbar from '../Navbar/Navbar'
import SubCard from '../SubCard/SubCard';
import Podium from '../Podium/Podium';


const Card = () => {

    return (
        <Container>
            <Navbar />
            <Podium />
            <SubCard />
        </Container>
    );
  }
  
  export default Card;
