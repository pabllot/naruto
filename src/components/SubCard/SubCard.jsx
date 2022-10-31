import React from 'react';
import {Container} from "./styles";
import Row from '../Row/Row'
import { SecondGroup } from '../../data/data'; 

const SubCard = () => {
    return (
        <Container>
            <section className='subcard'>
                <p>Anime</p>
                <p>Pts</p>
            </section>
            <section className='rowsection'>
                <Row name={SecondGroup[0].name} points={SecondGroup[0].points} id={SecondGroup[0].id} />
                <Row name={SecondGroup[1].name} points={SecondGroup[1].points} id={SecondGroup[1].id} />
                <Row name={SecondGroup[2].name} points={SecondGroup[2].points} id={SecondGroup[2].id} />        
            </section>
        </Container>
    );
  }
  
  export default SubCard;

