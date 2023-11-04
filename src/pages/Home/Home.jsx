import { SectionHero, Section, Container,MainTitle, Title, Link, List, Item, ItemTitle, ItemDescription } from './Home.styled';
import { advantage } from '../../constants';

const Home = () => {
  return (
    <>
      <SectionHero>
        <Container>
          <MainTitle>Feel what freedom on the roads means</MainTitle>
          <Link to="/catalog">Browse cars</Link>
        </Container>
      </SectionHero>
      <Section>
        <Title>Our Advantage</Title>
        <List>
          {advantage.map((item) => (
            <Item key={item.id}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          ))}
        </List>
      </Section>
      <Section>
        <Title>Move forward with us!</Title>
        <Link to="/catalog">Go to Catalog</Link>
      </Section>
    </>
  );
};

export default Home;
