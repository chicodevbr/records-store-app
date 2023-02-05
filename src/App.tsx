import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Genre from './Components/Genre/Genre';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre/:name" element={<Genre />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
