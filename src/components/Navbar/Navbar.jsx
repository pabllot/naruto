import React from 'react';
import {Container} from "./styles";

import { HiDotsVertical } from 'react-icons/hi'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Navbar = () => {

    return (
        <Container>
            <AiOutlineArrowLeft />
            Leaderboard
            <HiDotsVertical />
        </Container>
    );
  }
  
  export default Navbar;
