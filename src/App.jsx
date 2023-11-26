import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Applayout from './pages/Applayout';

function App() {
  return (
    <div>
      <h2>hello</h2>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<Applayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
