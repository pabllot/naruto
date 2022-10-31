import styled from "styled-components";

export const Container = styled.div`
height: 377px;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-end;

position: relative;

.firstPlace {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 96px;
    height: 180px;

    background: #F75435;
    border-radius: 10px 10px 0px 0px;
}

.secondPlace {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 96px;
    height: 146px;

    background: #FDAE38;
    border-radius: 10px 10px 0px 0px;
}

.thirdPlace {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
    margin-left: 3px;
}

p {
    font-style: normal;
font-weight: 900;
font-size: 14px;
line-height: 17px;

letter-spacing: 0.01em;
text-transform: capitalize;

color: #FFFFFE;

}

h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;

    letter-spacing: 0.01em;
    text-transform: capitalize;

    color: #FFFFFE;

    margin-top: -11px;

}

.num {
    font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 49px;
text-transform: capitalize;

color: #FFFFFF;

display: flex;
align-items: center;
justify-content: center;
}

.num2 {     font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 49px;
text-transform: capitalize;

color: #FFFFFF;

display: flex;
align-items: center;
justify-content: center;
}
.num3 {     font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 49px;
text-transform: capitalize;

color: #FFFFFF;

display: flex;
align-items: center;
justify-content: center;
}

.podiumwrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}




`
