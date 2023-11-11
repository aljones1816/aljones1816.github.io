import "../styles/App.css";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Header />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
