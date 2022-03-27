
import RoutesApp from './application/routes';
import Footer from './components/footer/footer';
import CookiesMessage from './components/cookiesMessage/cookiesMessage';

const App = (_) => {

  return (
    <>
      <RoutesApp />
      
      <Footer />
      <CookiesMessage />
    </>
  );

}

export default App;
