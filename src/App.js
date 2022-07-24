import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('about');

  return (
  <>
    <Header />
    <Navigation page={page} setPage={setPage}/>
    <Footer />
  </>
  );
}

export default App;
