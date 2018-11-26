import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
`;

const Counter = styled.h3`
  color: ${(props) => props.color};
  transition: all 0.5s;
`;

export { Title, Counter };
