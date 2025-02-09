import './assets/css/app.css';
import Header from './components/Header'
import Products from './components/Products';
import Footer from './components/Footer';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <Header/>
      <Shop/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
