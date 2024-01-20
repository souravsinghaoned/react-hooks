import React from 'react';
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

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
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
      <CounterOne/>
      <CounterTwo/>
    </div>
  );
}

export default App;
