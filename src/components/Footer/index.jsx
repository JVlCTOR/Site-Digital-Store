import { styled } from "styled-components";

const Footer = () => {
  return(
  <>
  <StyleFooterContainer>
    <StyleFooterColuna1>
        <Img1>
            <img src="src/img/logo2.png" alt="logo1" />        
        </Img1>
        <StyleFooterH1>Digital Store </StyleFooterH1>
        <StyleFooterLoren>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</StyleFooterLoren>
        <Icons>
          <img src="src/img/icons.png" alt="icons" />
        </Icons>
    </StyleFooterColuna1>
    <StyleFooterColuna2>
      <StyleFooterP>Informação</StyleFooterP>
      <StyleFooterP1>Sobre Drip Store Segurança Wishlist ㅤ ㅤ ㅤBlog ㅤ ㅤ Trabalhe Conosco Meus Pedidos
        
      </StyleFooterP1>
    </StyleFooterColuna2>
    <StyleFooterColuna3>
      <StyleFooterP>Categoria</StyleFooterP>
    </StyleFooterColuna3>
    <StyleFooterColuna4>
      <StyleFooterP>Contatos</StyleFooterP>
    </StyleFooterColuna4>
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

color: #FFFFFF60;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
`;
export const StyleFooterP = styled.p`
color: #FFF;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
export const StyleFooterP1 = styled.p`
width: 140px;
padding-top:20px;
color: #ffffff60;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 38px;
`;
export const StyleFooterColuna1 = styled.div`
padding-right: 120px;

`;
export const StyleFooterColuna2 = styled.div`
padding-top: 107px;
`;
export const StyleFooterColuna3 = styled.div`
padding-left: 138px;
padding-top: 107px;
`;
export const StyleFooterColuna4 = styled.div`
padding-left: 168px;
padding-top: 107px;
`;

export default Footer;


