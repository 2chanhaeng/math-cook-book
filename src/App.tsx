import React from 'react';
import './App.css';

// 숫자 하나를 입력 받는 컴포넌트
function NumInput(props: any) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    // If the value is not a number, clear the input
    if (isNaN(Number(input.value))) {
      input.value = '';
    }
    if (input.value !== '') {
      input.value = input.value.slice(-1);
      input.style.backgroundColor = 'transparent';
    } else {
      input.style.backgroundColor = props.color;
    }
    props.onChange(event, event.target.value);
  }

  // The font color is props.color
  // If input has a value then textarea is transparent
  // else the textarea color is props.color
  // const style = {
  //   color: props.color,
  // }
  const style = {
    backgroundColor: props.color,
    color: props.color,
    border: 'none',
    borderRadius: 'min(3vh, 3vw)',
    margin: 'min(1vh, 1vw)'
  }
  return (
    <input
      type="number"
      onChange={onChange}
      style={style}
      />
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
      </header>
    </div>
  );
}

export default App;
