import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">한줄 일기</div>
      </header>
      <section className="contents">
        <div className="month">2022년 2월</div>
        <div className="post">
          <ul className="left">
            <li className="index">월</li>
            <li className="date">14</li>
          </ul>
          <div className="diary">
            열심히 공부중인데, 아직 너무 어렵다... ㅠㅠ
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
