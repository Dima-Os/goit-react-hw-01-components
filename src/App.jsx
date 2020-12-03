import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Stats from './components/Stats/Stats';
import Title from './components/Title/Title';
import StatsList from './components/StatsList/StatsList';
import user from './user.json';
import statisticalData from './statistical-data.json';

const App = () => {
  return (
    <Container>
      <Section>
        <Description />
        <Stats userStats={user.stats} />
      </Section>
      <Section>
        <Title titleDescription={'Upload stats'} />
        <StatsList statsData={statisticalData} />
      </Section>
    </Container>
  );
};

export default App;
