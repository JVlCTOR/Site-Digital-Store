import { styled } from "styled-components";

const Footer = () => {
  return(
  <>
  <StyleFooterContainer>
    <StyleFooterColuna1>
        <Img1>
            <img src="src/img/logo2.png" alt="logo1" />        
        </Img1>
        <StyleFooterH1>Digital Store</StyleFooterH1>
        <StyleFooterLoren>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</StyleFooterLoren>
        <Icons>
          <img src="src/img/icons.png" alt="icons" />
        </Icons>
    </StyleFooterColuna1>
    <StyleFooterColuna2>
      
    </StyleFooterColuna2>
  </StyleFooterContainer>
  </>
  )
};
export const Img1 = styled.div`
width: 33px;
height: 33px;
padding-left: 77px;
padding-top: 107px;
`;
export const StyleFooterH1 = styled.h1`
color: #FFF;
font-family: Inter;
font-size: 36.395px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.364px;
padding-left: 115px;
`;
export const Icons = styled.div`
padding: 77px 0 0 74px;
`;
export const StyleFooterContainer = styled.footer`
display: flex;
width: 100%;
height: 454px;
background-color: #1F1F1F;
`;
export const StyleFooterLoren = styled.p`
display: flex;
width: 440px;
height: 78px;
flex-direction: column;
padding: 35px 0 0 74px;

color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
`;
export const StyleFooterColuna1 = styled.div`

`;
export const StyleFooterColuna2 = styled.div`

`;

export default Footer;


