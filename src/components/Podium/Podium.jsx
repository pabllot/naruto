import React from 'react';
import {Container} from "./styles";
import Goku from '../../assets/goku.svg'
import onepiece from '../../assets/onepiece.svg'
import naruto from '../../assets/naruto.svg'



const Podium = () => {

    return (
        <Container>
            <section>
                <img className='img' src={onepiece} />
                <div className='secondPlace'/>
            </section>
            <section>
                <img className='img2' src={naruto} />            
                <div className='firstPlace'/>
            </section>
            <section>
                <img className='img3' src={Goku} />
                <div className='thirdPlace'/>
            </section>
        </Container>
    );
  }
  
  export default Podium;
