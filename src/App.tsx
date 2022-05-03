import React from 'react';
import logo from './logo.svg';
import './App.css';

// 숫자 하나를 입력 받는 컴포넌트
function NumInput(props: any) {
  const onChange = (e: any) => {
    props.onChange(e.target.value);
  }
  return (
    <input type="number" onChange={onChange} />
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi! This is my first React app.
        </p>
        {/* 입력을 받아서 출력하는 컴포넌트 */}
        <NumInput onChange={
          function (value: any) {
            console.log(value);
        }}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
