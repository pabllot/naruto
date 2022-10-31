import React from 'react';
import { Container } from "./styles";
import naruto from '../../assets/naruto.svg'
import greenArrow from '../../assets/greenarrow.svg'


const Row = () => {
    return (
        <Container>
            <section className='position'>
                <div className='positionWrapper'>
                    <p>4</p>
                    <img src={greenArrow} alt='' />
                </div>
                <img src={naruto} alt=''/>
            </section>
            <section className='info'>
                    <p>Demon Slayer</p>
                    <p>1498</p>
            </section>
        </Container>
    );
  }
  
  export default Row;
