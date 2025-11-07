import './App.css';
import Badge from './Badge/Badge';

function App() {
  return (
    <div className="App" style={{ display: 'grid', gap: '12px', padding: '24px' }}>
      <Badge type="coworker" text="동료" />
      <Badge type="other" text="지인" />
      <Badge type="family" text="가족" />
      <Badge type="friend" text="친구" />
      <Badge type="emoji" emoji="😍" count={24} />
    </div>
  );
}

export default App;
