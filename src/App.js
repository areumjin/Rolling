import logo from './logo.svg';
import './App.css';
import Badge from './Badge/Badge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-blue-500">
          4팀 화이팅!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React or TailwindCSS
        </a>
        
        {/* Badge 컴포넌트 테스트 */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h2 style={{ color: '#000', marginBottom: '20px' }}>Badge 컴포넌트</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <Badge type="coworker" text="동료" />
            <Badge type="other" text="지인" />
            <Badge type="family" text="가족" />
            <Badge type="friend" text="친구" />
            <Badge type="emoji" emoji="😍" count={24} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
