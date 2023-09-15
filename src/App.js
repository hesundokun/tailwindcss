import logo from './logo.svg';
// import './App.css';

const H1 = (props) => {
  return (
    <h1 className={`text-3xl font-bold underline ${props.styleClass}`}>
      Hello world!
    </h1>
  )
}

function App(props) {
  return (
    <div className="bg-white dark:bg-black h-screen flex justify-center items-center">
      <button className="border-solid rounded-md bg-slate-400 p-2">Change Theme</button>
    </div>
  );
}

export default App;
