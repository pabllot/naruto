import React from 'react';
import {Container} from "./styles";
import Row from '../Row/Row'


const SubCard = () => {

    return (
        <Container>
            <section className='subcard'>
                <p>Anime</p>
                <p>Pts</p>
            </section>
            <section className='rowsection'>
                <Row />
                <Row />
                <Row />
            </section>
        </Container>
    );
  }
  
  export default SubCard;

