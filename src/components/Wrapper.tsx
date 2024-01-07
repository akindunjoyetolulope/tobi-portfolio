import styled from "@emotion/styled";

interface Props {
  withPadding?: boolean;
  className?: string;
}

const Wrapper = (props: React.PropsWithChildren<Props>) => {
  const { withPadding, className, ...rest } = props;
  return <WrapperContainer className={className} {...rest}></WrapperContainer>;
};

export default Wrapper;

const WrapperContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;
