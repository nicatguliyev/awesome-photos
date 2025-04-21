import logo from './logo.svg';
import './App.css';
import SearchHeader from './components/SearchHeader';
import SideBar from './components/SideBar';
import ImageList from './components/ImageList';

function App() {

  return (
    <div className="App">
      <div className='body'>
        <SideBar/>
        <div className="main">
          <SearchHeader />
          <ImageList />
        </div>
      </div>
    </div>
  );
}

export default App;
