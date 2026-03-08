import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPages from './routes/RoutesPages';

function App() {
  return (
    <>
      <Router>
        <RoutesPages />
      </Router>
    </>
  )
}

export default App;