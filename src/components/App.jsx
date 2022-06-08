import Profile from './Profile/Profile';
import user from '../data-json/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data-json/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile key={user.tag} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
