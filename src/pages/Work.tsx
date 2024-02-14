import styled from "@emotion/styled";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

const Work = () => {
  return (
    <>
      {" "}
      <Wrapper>
        <HeaderContainer>
          <p className="text-header">SELECTEDDESIGN WORK</p>
          <p className="sub-header-text">
            The works here have been abstracted to protect confidential
            information. If you need to see the full, detailed version, please
            contact me at work@mayowatobi.com
          </p>
        </HeaderContainer>
        <SectionContainer></SectionContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Work;

const HeaderContainer = styled.div`
  padding: 99px 0px 120px 40px;
  max-width: 1081px;

  .text-header {
    font-size: 105px;
    font-style: normal;
    font-weight: 700;
    line-height: 92px; /* 87.619% */
    letter-spacing: -4px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .sub-header-text {
    max-width: 900px;
    color: #000;
    font-family: monospace;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.36px;
  }
`;

const SectionContainer = styled.div``;
