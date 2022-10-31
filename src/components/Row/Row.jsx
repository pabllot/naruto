import React from 'react';
import { Container } from "./styles";


const Row = ({name, points, id, img, arrow}) => {
    return (
        <Container>
            <section className='position'>
                <div className='positionWrapper'>
                    <p className='num'>{id}</p>
                    <img src={arrow} alt='' />
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
