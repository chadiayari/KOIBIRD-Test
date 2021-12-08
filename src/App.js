import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import NewIn from './components/newIn/NewIn';
import Bestsellers from './components/bestsellers/Bestsellers';
import Categories from './components/categories/Categories';
import Koiski from './components/koiski/Koiski';
import Footer from './components/footer/Footer';

/**
 * 
 * @returns all components
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NewIn />
      <Categories />
      <Bestsellers />
      <Koiski />
      <Footer />
    </div>
  );
}

export default App;
