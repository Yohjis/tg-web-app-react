import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {onToggleButton   } = useTelegram()

    useEffect(() => {
        tg.ready();
    }, []);



  return (
    <div className="App">
        <button onClick={onToggleButton}>ZALUPA</button>
    </div>
  );
}

export default App;
