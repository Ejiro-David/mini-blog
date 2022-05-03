import './App.css';

function App() {
const title = 'welcome to the new blog';
const likes = 50;


  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>

        <p>{title}</p>
        <p>Liked {likes } times</p>
        <p>[1,2,34,6,5,6,]</p>
        <p>{Math.random() * 100}</p>
      </div>
    </div>
  );
}

export default App;
