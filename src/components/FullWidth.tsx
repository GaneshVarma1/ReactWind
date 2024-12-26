import React from 'react';
import styled from 'styled-components';

const FullWidthWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 0 20px;
`;

const FullWidth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <FullWidthWrapper>{children}</FullWidthWrapper>;
};

export default FullWidth;