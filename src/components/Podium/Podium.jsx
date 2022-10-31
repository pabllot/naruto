import React from 'react';
import {Container} from "./styles";
import { FirstGroup } from '../../data/data';



const Podium = () => {

    return (
        <Container>
            <section>
                <img className='img3' src={FirstGroup[2].img} />
                <div className='secondPlace'>
                    <div className='podiumwrapper'>
                        <p>{FirstGroup[2].name}</p>
                        <h2>{FirstGroup[2].points}</h2>
                    </div>
                    <div className='num2'>{FirstGroup[2].id}</div>
                </div>
            </section>

            <section>
                <img className='img2' src={FirstGroup[0].img} />            
                <div className='firstPlace'>
                    <div className='podiumwrapper'>
                        <p>{FirstGroup[0].name}</p>
                        <h2>{FirstGroup[0].points}</h2>
                    </div>
                    <div className='num'>{FirstGroup[0].id}</div>
                </div>
            </section>

            <section>
                <img className='img' src={FirstGroup[1].img} />
                <div className='thirdPlace'>
                    <div className='podiumwrapper'>
                        <p>{FirstGroup[1].name}</p>
                        <h2>{FirstGroup[1].points}</h2>
                    </div>
                    <div className='num3'>{FirstGroup[1].id}</div>
                </div>
            </section>
        </Container>
    );
  }
  
  export default Podium;
