import './App.css';
import States from './components/States';
import Cities from './components/Cities';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SearchResults from './components/SearchResults';
import Place from './components/Place';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <SearchBar />
        </div>
        <Routes>
          <Route path="/" element={<States />} />
          <Route path="/cities/:countryCode/:stateCode" element={<Cities />} />
          <Route path="/:countryCode/:stateCode/:city/car-insurance" element={<SearchResults />} />
          <Route path="/:city/:placeId" element={<Place />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
