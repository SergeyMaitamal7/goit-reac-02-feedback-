import { Container, Title } from './Section.styled';
export const Section = ({children, title}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
