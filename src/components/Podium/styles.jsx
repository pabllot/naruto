import styled from "styled-components";

export const Container = styled.div`
height: 377px;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-end;

position: relative;

.firstPlace {
    width: 96px;
    height: 180px;

    background: #F75435;
    border-radius: 10px 10px 0px 0px;
}

.secondPlace {
    width: 96px;
    height: 146px;

    background: #FDAE38;
    border-radius: 10px 10px 0px 0px;
}

.thirdPlace {
    width: 96px;
    height: 112px;

    background: #4FA3A5;
    border-radius: 10px 10px 0px 0px;
}

.img2 {
    position: absolute;
    top: 17%;
}

.img {
    margin-bottom: -22px;
}

.img3 {
    margin-bottom: -10px;
}
`
