import './App.css';
import CounterClass from './components/ClassComponents';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookWithObject from './components/HookWithObject';
function App() {
  return (
    <div className="App">
      <CounterClass/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookWithObject/>
    </div>
  );
}

export default App;
