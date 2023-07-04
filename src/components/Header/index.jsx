import { styled } from "styled-components";
import "./index.css";
import 'boxicons';

const Header = () => {
  return (
    <>
      <StyleHeaderContainer>
        <Parte1>
          <StyleHeaderImg>
            <img src="src/img/Group.png" alt="logo1" />
          </StyleHeaderImg>
          <StyleHeaderH1>Digital Store</StyleHeaderH1>

          <StyleHeaderInputContainer>
            <StyleHeaderInput placeholder="Pesquise o produto..." />
            <box-icon name="search"></box-icon>
          </StyleHeaderInputContainer>
          <StyleHeaderButton1>Cadastra-se</StyleHeaderButton1>
          <StyleHeaderButton2>Entrar</StyleHeaderButton2>
          <StyleHeaderImg2>
            <img src="src/img/Buy.png" alt="logo2" />
          </StyleHeaderImg2>
        </Parte1>
      </StyleHeaderContainer>
    </>
  );
};
export const StyleHeaderContainer = styled.div`
  width: 100%;
  height: 192px;
  background-color: #fff;
  padding-top: 30px;
`;
export const Parte1 = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const StyleHeaderH1 = styled.h1`
width: 300px;
  color: #c92071;
  font-size: 36.395px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.364px;
  padding: 0 30px 0 18px;
`;
export const StyleHeaderImg = styled.div`
  width: 33px;
  height: 33px;
  padding: 0 20px 0 104px;
`;
export const StyleHeaderImg2 = styled.div`
  width: 24px;
  height: 24px;
  padding: 0 100px 0 70px;
`;

export const StyleHeaderInputContainer = styled.div`
    flex: 1;
    position: relative;
    border-radius: 8px;
    background-color: #00000010;
    & box-icon{
        width: 40px;
        height: 40px;
        padding: 6px;
        position: absolute;
        top: calc(50% - 20px);
        right: 10px;
        transition-duration: 200ms;
    }
    & input:focus + box-icon{
        fill: #c92071;
    }
`;
export const StyleHeaderInput = styled.input`
  width: 100%;
  height: 60px;
  background-color: transparent;
  padding: 20px;
  font-size: 17px;
  font-weight: 500;
  /* opacity: 0.03999999910593033; */
  color: #666666;
  border: none;
`;
export const StyleHeaderButton1 = styled.button`
min-width: 200px;
  background-color: initial;
  color: #474747;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-decoration-line: underline;
  border: none;
  padding: 0 30px 0 48px;
`;
export const StyleHeaderButton2 = styled.button`
  width: 114px;
  height: 40px;
  border-radius: 8px;
  color: #f5f5f5;
  background-color: #c92071;
  border: none;
`;

export default Header;
