import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Overview from './pages/Dashboard/Overview';
import Terms from './pages/Terms';
import "./css/App.css";



function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
  
        <Route
          index
          element={
            <>
              <PageTitle title="Ad Collector" />
              <Overview />
            </>
          }
        />
         <Route
          path='/Privacy'
          element={
            <>
              <PageTitle title="Ad Collector Privacy Policy" />
              <Terms />
            </>
          }
        />

    
      </Routes>
    </>
  );
}

export default App;
