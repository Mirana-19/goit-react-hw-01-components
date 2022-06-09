import Profile from './Profile/Profile';
import user from '../data-json/user.json';
import Statistics from './Statistics/Statistics';
import statisticsData from '../data-json/data.json';
import FriendList from './FriendList/FriendList';
import friendsData from '../data-json/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data-json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile key={user.tag} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
