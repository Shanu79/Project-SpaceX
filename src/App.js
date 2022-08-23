import Launchpads from './pages/Launchpads'
import Launches from './pages/Launches'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Launchpads/>}/>
      <Route path="/:id" element={<Launches/>}/>
    </Routes>
    </>
  );
}

export default App;
