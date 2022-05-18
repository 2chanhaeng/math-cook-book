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
  }
  return (
    <input
      type="number"
      onChange={onChange}
      style={style}
      />
  )
}

function Num2Input(props: any) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    // If the value is not a number, clear the input
    if (isNaN(Number(input.value))) {
      input.value = '';
    }
    if (input.value !== '') {
      input.value = input.value.slice(-2);
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
  const marginLeft_ = [0, 11, 22][props.margin];
  const marginRight_ = [23, 12, 1][props.margin];
  const style = {
    backgroundColor: props.color,
    color: props.color,
    marginLeft : `min(${marginLeft_}vw, ${marginLeft_}vh)`,
    marginRight : `min(${marginRight_}vw, ${marginRight_}vh)`,
  }
  return (
    <input
      type="number"
      className='num2'
      onChange={onChange}
      style={style}
      />
  )
}

//세로식
function VerticalForm(props: any) {
  const onChange = props.onChange;
  const lowerLast = props.lower.length - 1;
  return (
    <div style={{display: 'flex', alignItems: "flex-end"}}>
      <p>×</p>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          { 
            props.upper.map((color: String) => (
              <NumInput
                color = {color}
                onChange = {(event: any, value: any) => {
                  onChange(event);
                }}
                key = {`upper${color}`}
              />
            ))
          }
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          { 
            props.lower.map((color: String, index: number) => (
              <NumInput
                color = {color}
                onChange = {(event: any, value: any) => {
                  if (index !== lowerLast) {
                    onChange(event);
                  }
                }}
                key = {`lower${color}`}
              />
            ))
          }
        </div>
      </div>
    </div>
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
        <VerticalForm
          onChange = {focusNextNumInput}
          upper = {["yellow", "orange", "red"]}
          lower = {["#a0c","blue","green"]}
        />
        <div style={{backgroundColor : 'white', width: 'min(55vh, 55vw)', height:'1vh', margin: '2vh'}}/>
        <div  style={{display: 'flex', flexDirection: 'column', alignItems: "flex-end"}}>
        <VerticalForm
          onChange = {focusNextNumInput}
          upper = {["yellow", "orange", "red"]}
          lower = {["green"]}
        />
          <div style={{backgroundColor : 'white', width: 'min(55vh, 55vw)', height:'1vh', margin: '2vh'}}/>
          <div style={{display: 'flex', flexDirection: "row"}}>
            <NumInput
              color = "red"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <p>×</p>
            <NumInput
              color = "green"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <p>=</p>
            <Num2Input
              color = "red"
              margin = "2"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
          </div>
          <div style={{display: 'flex', flexDirection: "row"}}>
            <NumInput
              color = "orange"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <p>×</p>
            <NumInput
              color = "green"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <p>=</p>
            <Num2Input
              color = "orange"
              margin = "1"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
          </div>
          <div style={{display: 'flex', flexDirection: "row"}}>
            <NumInput
              color = "yellow"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <p>×</p>
            <NumInput
              color = "green"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
            <p>=</p>
            <Num2Input
              color = "yellow"
              margin = "0"
              onChange={(event: any, value: any) => {
                focusNextNumInput(event);
            }}/>
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
