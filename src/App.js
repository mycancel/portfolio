import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('about');

  return (
  <>
    <Header page={page} setPage={setPage}/>
    <Footer />
  </>
  );
}

export default App;
