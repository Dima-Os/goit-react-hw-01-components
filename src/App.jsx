import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Stats from './components/Stats/Stats';
import Title from './components/Title/Title';
import StatsList from './components/StatsList/StatsList';
import FriendsList from './components/FriendList/FriendList';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

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
      <Section>
        <FriendsList friendsData={friends} />
      </Section>
    </Container>
  );
};

export default App;
