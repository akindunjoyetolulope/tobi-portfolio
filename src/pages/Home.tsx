import styled from "@emotion/styled";
import media from "../styles/media";
import { ReactComponent as Purple } from "../assets/purple.svg";
import Tobi from "../assets/tobi.jpeg";
import Strip from "../components/Strip";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <img
            src={Tobi}
            width={327}
            height={702}
            className="mt-4 mr-7"
            alt="Mayowa Tobi's"
          />
        </div>
        <div className="header-text">
          <p>
            THE BEST WAY TO{" "}
            <Purple className="inline text-center mb-3 mobile:hidden" /> PREDICT
            THE future is to{" "}
            <Purple className="hidden text-center mb-3 mobile:inline w-[57px] h-[58px]" />{" "}
            DESIGN it.
          </p>
        </div>
      </HeaderContainer>
      <Strip
        content={[
          "interaction design",
          "micro-interactions",
          "data driven ux",
          "interaction design",
        ]}
        variant="purple"
      />
      <Strip
        content={["interaction design", "data driven ux", "interaction design"]}
      />

      <Section>
        <div className="expricence">
          <p>
            In the past 7+ years, I have led the usability of digital products
            across travel, fintech, and health, providing value to businesses
            and delighting users with my knowledge of data-driven, goal-centered
            design. With the knowledge gathered from my mathematics and
            management degrees, I leverage qualitative / quantitative analytical
            skills in driving high-level strategic decisions while championing
            cross-functional collaboration.
          </p>
        </div>
        <hr className="border-black mx-[40px] mobile:mx-[20px]" />

        <div className="py-[24px] px-[40px] pb-[120px] mobile:px-[20px]">
          <p className="text-[16px] font-medium ">
            SOME BRANDS I’VE WORKED WITH
          </p>
          <div className="flex mt-[24px] mobile:flex-col">
            <div className="w-[524px]"></div>
            <div className="max-w-[720px] text-[64px] font-medium mobile:text-[40px]">
              Zalando / Unilever / eHealth / AZA Finance / Carbon / Ona /
              Talarian / Afriex / TravelBeta
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55px;
  padding-bottom: 115px;

  ${media.mobile} {
    flex-direction: column-reverse;
    margin-top: 35px;
    padding: 44px 20px;
    padding-bottom: 0px;
  }

  .header-text {
    max-width: 680px;
    font-size: 105px;
    font-style: normal;
    font-weight: 700;
    line-height: 92px;
    letter-spacing: -4px;
    text-transform: uppercase;

    ${media.mobile} {
      font-size: 62px;
      font-style: normal;
      font-weight: 900;
      line-height: 54px;
      letter-spacing: -2.6px;
      text-transform: uppercase;
    }
  }
`;

const Section = styled.section`
  max-width: 1440px;
  margin: auto;

  .expricence {
    max-width: 974px;
    padding: 60px 0px 120px 40px;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px; /* 126.316% */
    letter-spacing: -0.6px;

    ${media.mobile} {
      padding: 60px 20px 120px 20px;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 36px; /* 120% */
      letter-spacing: -0.2px;
    }
  }
`;
