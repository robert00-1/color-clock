import {format} from "date-fns";
import "./App.css";
function App() {
  const now = new Date();

  return (
    <div className="clock">

    
      Current time: {format(now, "PPpp")};
    </div>
  );
}

export default App
