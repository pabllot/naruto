import React from 'react';
import { Container } from "./styles";
import greenArrow from '../../assets/greenarrow.svg'


const Row = ({name, points, id, img}) => {
    return (
        <Container>
            <section className='position'>
                <div className='positionWrapper'>
                    <p>{id}</p>
                    <img src={greenArrow} alt='' />
                </div>
                <img src={img} alt=''/>
            </section>
            <section className='info'>
                    <p className='name'>{name}</p>
                    <p className='number'>{points}</p>
            </section>
        </Container>
    );
  }
  
  export default Row;
