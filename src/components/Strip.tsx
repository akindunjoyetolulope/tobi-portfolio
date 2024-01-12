import styled from "@emotion/styled";
import themes from "../styles/themes";
import { css } from "@emotion/react";
import media from "../styles/media";
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
        <p className="whitespace-nowrap words">{content}</p>
      ) : (
        <>
          {content.map((c) => (
            <div className="flex gap-[20px] whitespace-nowrap words">
              <div className="w-[36px] h-[36px] rounded-full bg-black"></div>
              <p>{c}</p>
            </div>
          ))}
        </>
      )}
    </StripContainer>
  );
};

export default Strip;

const StripContainer = styled.div<StripElProps>`
  padding: 10px;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

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

  .words {
    @keyframes move-words {
      0% {
        left: 100%;
      }
      100% {
        left: -100%;
      }
    }

    ${(props) =>
      props.aminate
        ? css`
            position: relative;
            animation: move-words 50s linear infinite;
            margin: 0;
          `
        : css``}
  }

  ${(props) => {
    switch (props.size) {
      case "big":
        return css`
          font-size: 96px;
          font-style: normal;
          font-weight: 600;
          line-height: 152px;
          text-transform: uppercase;

          ${media.mobile} {
            font-size: 60px;
            line-height: 72px;
          }
        `;
      case "small":
      default:
        return css`
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 36px;
          letter-spacing: -2px;
          text-transform: uppercase;

          ${media.mobile} {
            font-size: 48px;
            line-height: 36px; /* 75% */
          }
        `;
    }
  }}
`;
