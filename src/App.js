import './App.css';
import NotFound from "./pages/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from './layout/Frame';
import MovieTicketOrder from './pages/MovieTicketOrder';
import MovieInfo from './pages/MovieInfo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/movie-ticket-order" element={<MovieTicketOrder />} />
        <Route path="/movie-info" element={<MovieInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
