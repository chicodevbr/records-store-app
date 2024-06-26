import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Genre from './Components/Genre/Genre';
import NewReleases from './Pages/NewRelease';
import Vinyl from './Pages/Vinyl';
import CompactDisc from './Pages/CompactDisc';
import RecordDetails from './Components/RecordDetails';
import AllRecords from './Pages/AllRecords';
import CartOrder from './Components/CartOrder';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records/all" element={<AllRecords />} />
          <Route path="/record/details/:albumId" element={<RecordDetails />} />
          <Route path="/genre/:name" element={<Genre />} />
          <Route path="/category/new-releases" element={<NewReleases />} />
          <Route path="/type/vinyl" element={<Vinyl />} />
          <Route path="/type/cd" element={<CompactDisc />} />
          <Route path="order" element={<CartOrder />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
