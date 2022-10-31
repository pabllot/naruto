import React from 'react';
import {Container} from "./styles";
import Goku from '../../assets/goku.svg'
import onepiece from '../../assets/onepiece.svg'
import naruto from '../../assets/naruto.svg'



const Podium = () => {

    return (
        <Container>
            <section>
                <img className='img3' src={Goku} />
                <div className='secondPlace'>
                    <div className='podiumwrapper'>
                        <p>Goky</p>
                        <h2>1500 pts</h2>
                    </div>
                    <div className='num'>2</div>
                </div>
            </section>

            <section>
                <img className='img2' src={naruto} />            
                <div className='firstPlace'>
                    <div className='podiumwrapper'>
                        <p>Naruto</p>
                        <h2>1800 pts</h2>
                    </div>
                    <div className='num'>1</div>
                </div>
            </section>

            <section>
                <img className='img' src={onepiece} />
                <div className='thirdPlace'>
                    <div className='podiumwrapper'>
                        <p>One Piece</p>
                        <h2>1350 pts</h2>
                    </div>
                    <div className='num'>1</div>
                </div>
            </section>
        </Container>
    );
  }
  
  export default Podium;
