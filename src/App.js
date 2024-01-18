import './App.css';
import CounterClass from './components/ClassComponents';
import MouseListener from './components/ClassMouseListener';
import HookArray from './components/HookArray';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookEffect from './components/HookEffect';
import HookMouse from './components/HookMouse';
import HookWithObject from './components/HookWithObject';
import MouseContainer from './components/MouseContainer';
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
      <MouseContainer/>
    </div>
  );
}

export default App;
