import styled from "@emotion/styled";

interface WrapperProps {
  size: number;
  color: string;
}

export const Wrapper = styled.span<WrapperProps>`
  & > svg {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;

    * {
      fill: ${(props) => props.color};
    }
  }

  & > i {
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color};
  }
`;
