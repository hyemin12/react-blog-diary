import "./App.css";
import { useRef, useState } from "react";
import Data from "./data.js";

function App() {
  let [contents, setContents] = useState(Data);
  let [plusContent, setPlusContent] = useState("");

  const nextId = useRef(2);

  // 현재 날짜 가져오기
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let weekArray = ["일", "월", "화", "수", "목", "금", "토"];
  let week = weekArray[today.getDay()];
  let date = today.getDate();

  function plusSubmit() {
    const contextData = contents.concat({
      id: nextId.current,
      text: plusContent,
      week,
      date,
    });

    setContents(contextData);
    nextId.current += 1; // nextId를 1씩 더하기
  }

  return (
    <div className="App">
      <header>
        <div className="inner">
          <div className="logo">한줄 일기</div>
          <a
            className="icon-github"
            href="https://github.com/hyemin12"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </header>

      <section className="contents">
        <div className="inner">
          <div className="top">
            <div className="month">
              {year}년 {month + 1}월
            </div>
            <div className="input-box">
              <input
                type="text"
                name="text"
                placeholder="오늘 하루는 어땠나요?"
                value={plusContent}
                onChange={(e) => {
                  setPlusContent(e.target.value);
                }}
              />
              <button
                type="submit"
                onClick={() => {
                  plusSubmit();
                  // addHeart();
                }}
              >
                ADD
              </button>
            </div>
          </div>

          {contents.map((a, i) => {
            return <Post content={a} i={i} key={i} />;
          })}
        </div>
      </section>
    </div>
  );

  function Post(props) {
    return (
      <div className="post">
        <ul className="left">
          <li className="week">{props.content.week}</li>
          <li className="date">{props.content.date}</li>
        </ul>
        <div className="diary">{props.content.text}</div>
      </div>
    );
  }
}

export default App;
