import '../App.css';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
function Home() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default Home