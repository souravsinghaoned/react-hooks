import React from 'react';
import { useReducer } from 'react';
import './App.css';
import CounterClass from './components/ClassComponents';
import MouseListener from './components/ClassMouseListener';
import ComponentA from './components/ComponentA';
import HookArray from './components/HookArray';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookEffect from './components/HookEffect';
import HookMouse from './components/HookMouse';
import HookWithObject from './components/HookWithObject';
import MouseContainer from './components/MouseContainer';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentP from './components/ComponentP';
import ComponentR from './components/ComponentR';
import ComponentQ from './components/ComponentQ';
import DataFatchingOne from './components/DataFatchingOne';
import DataFatchingTwo from './components/DataFatchingTwo';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div className="App">
      {/* <CounterClass/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookWithObject/>
      <HookArray/>
      <HookEffect/>
      <MouseListener/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <UserContext.Provider value={'sourav'}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne/>
      <CounterTwo/>
      <CounterThree/> */}
      {/* <CountContext.Provider value = {{countState : count, countDispatch : dispatch}}>
        Count : {count}
        <ComponentP />
        <ComponentQ />
        <ComponentR />
      </CountContext.Provider> */}
      <DataFatchingOne/>
      <DataFatchingTwo/>
    </div>
  );
}

export default App;
