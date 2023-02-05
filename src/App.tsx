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

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre/:name" element={<Genre />} />
          <Route path="/category/new-releases" element={<NewReleases />} />
          <Route path="/type/vinyl" element={<Vinyl />} />
          <Route path="/type/cd" element={<CompactDisc />} />
          <Route path="/record/details/:albumId" element={<RecordDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
