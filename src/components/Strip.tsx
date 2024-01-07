import styled from "@emotion/styled";
import themes from "../styles/themes";
import { css } from "@emotion/react";
import { FaArrowRight } from "react-icons/fa6";

interface StripElProps {
  aminate?: boolean;
  variant?: "purple" | "yellow" | "red";
  size?: "big" | "small";
  url?: string;
}

interface Props {
  content: string[] | string;
}

const Strip = (props: React.PropsWithChildren<StripElProps & Props>) => {
  const { content, ...rest } = props;

  return (
    <StripContainer {...rest}>
      {typeof content === "string" ? (
        <div className="flex gap-[20px] justify-center whitespace-nowrap">
          <FaArrowRight
            width={36}
            height={36}
            className="mr-[20px] ml-[20px]"
          />
          <p>{content}</p>
        </div>
      ) : (
        <div className="flex gap-[20px] whitespace-nowrap">
          {content.map((c) => (
            <>
              <div className="w-[36px] h-[36px] rounded-full bg-black mr-[22px] ml-[20px]"></div>
              <p>{c}</p>
            </>
          ))}
        </div>
      )}
    </StripContainer>
  );
};

export default Strip;

const StripContainer = styled.div<StripElProps>`
  padding: 10px 0px;
  overflow-y: scroll;

  ${(props) => {
    switch (props.variant) {
      case "purple":
        return css`
          background-color: ${themes.backgroundColors.purple};
        `;
      case "red":
        return css`
          background-color: ${themes.backgroundColors.red};
        `;
      case "yellow":
      default:
        return css`
          background-color: ${themes.backgroundColors.yellow};
        `;
    }
  }};

  ${(props) => {
    switch (props.size) {
      case "big":
        return css`
          font-family: sans-serif;
          font-size: 96px;
          font-style: normal;
          font-weight: 600;
          line-height: 152px;
          text-transform: uppercase;
        `;
      case "small":
      default:
        return css`
          font-family: sans-serif;
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 36px;
          letter-spacing: -2px;
          text-transform: uppercase;
        `;
    }
  }}
`;
