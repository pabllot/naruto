import React from 'react';
import { Container } from "./styles";
import naruto from '../../assets/naruto.svg'
import greenArrow from '../../assets/greenarrow.svg'


const Row = ({name, points, id}) => {
    return (
        <Container>
            <section className='position'>
                <div className='positionWrapper'>
                    <p>{id}</p>
                    <img src={greenArrow} alt='' />
                </div>
                <img src={naruto} alt=''/>
            </section>
            <section className='info'>
                    <p className='name'>{name}</p>
                    <p className='number'>{points}</p>
            </section>
        </Container>
    );
  }
  
  export default Row;
