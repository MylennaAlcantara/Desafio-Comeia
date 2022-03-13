import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50vh 50vh;
    grid-template-areas: 
        "slider sign-up"
        "slider sign-up"
    ;
  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    grid-template-areas:
      "slider"
      "sign-up"
    ;
  }
`;

export const SignUp = styled.div`
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    display: flex;
    width: 100%;
    height: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    grid-area: sign-up;
`;

export const Slider = styled.div`
    flex-direction: column;
    justify-content: center;
    display: flex;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #A9C5BA 0% 0% no-repeat padding-box;
    opacity: 1;
    grid-area: slider;
`;