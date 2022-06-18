import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import statisticsData from '../data-json/data.json';
import FriendList from './FriendList/FriendList';
import transactions from '../data-json/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

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
      <Profile />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList />
      <TransactionHistory items={transactions} />
    </div>
  );
};
