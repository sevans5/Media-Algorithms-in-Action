import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header.jsx'
import Content from './components/content.jsx'
import Footer from './components/footer.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
