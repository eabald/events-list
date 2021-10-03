// External
import styled from 'styled-components';

export const PageLoaderElement = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &:after {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }
`;
