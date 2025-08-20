import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/home";
import MainLayout from "./layouts/main_layout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Home />
      </MainLayout>
    </Router>
  );
}

export default App;