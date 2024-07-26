import './App.css'
import MainLayout from './Panel/MainLayout';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <MainLayout />
    </Router>
  )
}

export default App
