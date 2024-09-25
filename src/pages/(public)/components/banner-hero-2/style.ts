import styled from "styled-components";
import central_fundo from "../../../../assets/images/central-fundo.png"

export const C_BannerHeroSecond = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px;
  width: 100%;
  height: 500px;
  margin-top: -20px;
  margin-bottom: 1px;
  background-image: url(${central_fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0px 100px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 50px;
    
    flex-direction: column;
    justify-content: center;

   
  }

  @media (max-width: 468px) {
    padding: 0px 20px;
    flex-direction: column;
    height: auto;
    margin-bottom: 10px;
    background-image: url();
  }
`;

export const C_BannerHeroSecondImage = styled.img`
  width: 100%;
  height: 500px;
  z-index: -1;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const C_BannerInfoText = styled.div`
  width: 45%;
  
  h2 {
    font-size: 40px;
    color: #121212;
    font-weight: 600;
  }

  p {
    width: 100%;
    max-width: 500px;
    font-weight: 400;
    font-size: 1rem;
    text-align: justify;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    width: 60%;
    
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
    
    h2 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 468px) {
    width: 100%;
    
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const C_B_BTN_OBTERAJUDA = styled.a`
  padding: 8px 32px;
  background: #121212;
  color: #fff;
  border-radius: 8px;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    color: #fff;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 6px 24px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 20px;
  }
`;

export const InforPostUser = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 25px;
  margin-top: 25px;

  h4 {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    margin-left: 20px;
    margin-top: 20px;

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    margin-left: 15px;
    margin-top: 15px;
    display: none;

    h4 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 468px) {
    margin-left: 10px;
    margin-top: 10px;
    display: none;

    h4 {
      font-size: 12px;
    }

    p {
      font-size: 10px;
    }
  }
`;
