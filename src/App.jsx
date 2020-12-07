import Container from './components/Container';
import Profile from './components/Profile';

import user from './data/user.json';

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};

export default App;
