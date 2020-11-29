import Profile from './components/Profile/Profile';
import user from './user.json';

const App = () => {
  return <Profile {...user} />;
};
export default App;
