import Wrapper from "./Wrapper";
import world from "../assets/world.png";
import { ReactComponent as SocialMedia } from "../assets/social-media.svg";
import Strip from "./Strip";

interface Props {
  variant?: "purple" | "yellow" | "red";
}

const Footer = (props: Props) => {
  const { variant } = props;
  return (
    <>
      <Wrapper className="pt-[80px]">
        <div className="flex justify-between px-[40px] pb-[40px] mobile:flex-col mobile:px-[20px]">
          <p>
            Feel free to reach out if you want to <br />
            collaborate or simply have a chat.
          </p>
          <div className="mobile:mt-[32px]">
            <img src={world} alt="world" />
          </div>
        </div>
      </Wrapper>
      <Strip content={"→ WORK@MAYOWATOBI.COM"} size="big" variant={variant} />
      <Wrapper className="font-mono pt-[120px] px-[40px] pb-[40px] mobile:px-[20px] mobile:pt-[50px]">
        <div className="flex justify-between mobile:flex-col">
          <p>
            LESS IS LESS. MORE IS
            <br className="mobile:hidden" /> MORE.
          </p>
          <p className="mobile:mt-[24px]">TIMEZONE: EUROPE/BERLIN</p>
        </div>
        <div className="flex justify-between mt-[21px] mobile:flex-col-reverse">
          <p className="text-[#9B9287]">@2024 MAYOWA/TOBI</p>
          <SocialMedia />
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
