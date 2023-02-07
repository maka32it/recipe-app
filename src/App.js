import { BrowserRouter, Link } from 'react-router-dom';
import Category from './components/Category/Category';
import Search from './components/Search/Search';
import Pages from './pages/Pages'
import {GrRestaurant} from 'react-icons/gr'

function App() {
  return (
   
    <div className="App">
     <BrowserRouter>
     <nav>
     <Link to={'/'}
      className='logo'><GrRestaurant/>Eat/It</Link>
     </nav>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
