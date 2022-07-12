import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { useTodoContext } from './hooks/useTodoContext';
import { TodoContext } from './context/TodoContext';
import TodoInput from './components/TodoInput';

function App() {
  const todoContext = useTodoContext();
  return (
    
    <TodoContext.Provider value={{ ...todoContext }}>
      <div className='todo'>
        <TodoInput />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
