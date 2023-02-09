import styled from "@emotion/styled";

interface WrapperProps {
  size: number;
}

export const Wrapper = styled.span<WrapperProps>`
  & > svg {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;

    * {
      fill: currentColor;
    }
  }
`;
