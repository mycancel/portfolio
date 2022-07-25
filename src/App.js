import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('About Me');

  useEffect(() => {
    document.title = page;
  }, [page]);

  return (
  <>
    <Header page={page} setPage={setPage}/>
    <Footer />
  </>
  );
}

export default App;
