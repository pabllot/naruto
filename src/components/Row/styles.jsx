import styled from "styled-components";

export const Container = styled.div`
width: 320px;
height: 80px;

display: flex;

background: #FFFFFE;
border-radius: 10px;

.position {
    display: flex;
    width: 30%;
    margin-left: 1rem;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin-right: 1rem;
}
.positionWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}


`;
