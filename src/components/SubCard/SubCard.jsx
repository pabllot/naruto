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
                <Row name={SecondGroup[0].name} points={SecondGroup[0].points} id={SecondGroup[0].id} img={SecondGroup[0].img} arrow={SecondGroup[0].arrow} />
                <Row name={SecondGroup[1].name} points={SecondGroup[1].points} id={SecondGroup[1].id} img={SecondGroup[1].img} arrow={SecondGroup[1].arrow} />
                <Row name={SecondGroup[2].name} points={SecondGroup[2].points} id={SecondGroup[2].id} img={SecondGroup[2].img} arrow={SecondGroup[2].arrow}/>        
            </section>
        </Container>
    );
  }
  
  export default SubCard;

