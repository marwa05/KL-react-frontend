import styled from "styled-components";

const Spinner = styled.div.attrs((props) => ({
  "data-testid": props["data-testid"] || "loader"
}))`
  width: ${({ theme }) => theme.sizes.small};
  height: ${({ theme }) => theme.sizes.small};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 100%;
  border-bottom: none;
  border-right: none;
  animation: spin 1s infinite linear 2s;
  margin-right: ${({ theme }) => theme.sizes.large};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => <Spinner />;

export default Loader;
