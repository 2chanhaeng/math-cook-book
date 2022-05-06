import React from 'react';
import logo from './logo.svg';
import './App.css';

// 숫자 하나를 입력 받는 컴포넌트
function NumInput(props: any) {
  const onChange = (e: any) => {
    e.target.value = e.target.value % 10;
    props.onChange(e, e.target.value);
  }
  return (
    <input type="number" onChange={onChange} />
  )
}


function App() {
  const focusNextNumInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const div = event.target.parentNode;
    if (div !== null) {
      // focus the next html element
      const index = Array.prototype.indexOf.call(div.children, event.target);
      if (index < div.children.length - 1) {
        const next = div.children[index + 1] as HTMLElement | null;
        if (next !== null) {
          next.focus();
        }
      } else {
        const parentDiv = div.parentNode as HTMLElement | null;
        if (parentDiv !== null) {
          const nextDiv = parentDiv.children[1] as HTMLElement | null;
          if (nextDiv !== null) {
            const jump = nextDiv.children[0] as HTMLElement | null;
            if (jump !== null) {
              jump.focus();
            }
          }
        }
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi! This is my first React app.
        </p>
        <div>
          <div>
          {/* If input get a number, then focus next input. */}
            <NumInput onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <NumInput onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <NumInput onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
          </div>
          <div>
            <NumInput onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <NumInput onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <NumInput onChange={(event: any, value: any) => {
            }}/>
          </div>
        </div>
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
