import MainLayout from './layouts/main_layout';
import Home from './pages/home';
import Contact from './pages/contact';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';

function App() {
  return (
    <MainLayout>
      <section id="hero">
        <Home />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="portafolio">
        <Portfolio />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      {/* Footer al final de la landing page */}
  <Footer />
    </MainLayout>
  );
}

export default App;