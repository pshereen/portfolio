import './App.css';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '40px' }}>
      <img 
        src="/profile.jpg" 
        alt="Profile" 
        style={{ borderRadius: '50%', width: '150px' }} 
      />
      <h1>Hello, I'm Shereen Punnassery 👋</h1>
      <p>I’m a React developer passionate about UI/UX and modern web technologies.</p>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        GitHub
      </a> | <a href="mailto:you@email.com">Email Me</a>
    </div>
  );
}

export default App;
