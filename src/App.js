import './App.css';
import NotFound from "./pages/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from './layout/Frame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
