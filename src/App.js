import './App.css';
import NotFound from "./pages/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from './layout/Frame';
import Buy from './pages/Buy';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
