import './App.css';
import CounterClass from './components/ClassComponents';
import HookArray from './components/HookArray';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookEffect from './components/HookEffect';
import HookWithObject from './components/HookWithObject';
function App() {
  return (
    <div className="App">
      <CounterClass/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookWithObject/>
      <HookArray/>
      <HookEffect/>
    </div>
  );
}

export default App;
