import styled from "@emotion/styled";
import cx from "classnames";

interface Props {
  withPadding?: boolean;
}

const Wrapper = (props: React.PropsWithChildren<Props>) => {
  const { withPadding, ...rest } = props;
  return (
    <WrapperContainer
      className={cx("withPadding", { withPadding })}
      {...rest}
    ></WrapperContainer>
  );
};

export default Wrapper;

const WrapperContainer = styled.div`
  .withPadding {
    padding: 20px 0px;
  }
`;
