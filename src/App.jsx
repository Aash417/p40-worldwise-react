import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProctedRoute from './pages/ProctedRoute';

import CityList from './components/cityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Applayout = lazy(() => import('./pages/Applayout'));
const Login = lazy(() => import('./pages/Login'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

// dist/assets/index-a8475545.css   31.88 kB │ gzip:   5.27 kB
// dist/assets/index-be89f39c.js   531.91 kB │ gzip: 150.19 kB

function App() {
   return (
      <div>
         <AuthProvider>
            <CitiesProvider>
               <BrowserRouter>
                  <Suspense fallback={<SpinnerFullPage />}>
                     <Routes>
                        <Route index element={<Homepage />} />
                        <Route path="product" element={<Product />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="login" element={<Login />} />
                        <Route
                           path="app"
                           element={
                              <ProctedRoute>
                                 <Applayout />
                              </ProctedRoute>
                           }
                        >
                           <Route
                              index
                              element={<Navigate replace to="cities" />}
                           ></Route>
                           <Route path="cities" element={<CityList />}></Route>
                           <Route path="cities/:id" element={<City />} />
                           <Route
                              path="countries"
                              element={<CountryList />}
                           ></Route>
                           <Route path="form" element={<Form />}></Route>
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                     </Routes>
                  </Suspense>
               </BrowserRouter>
            </CitiesProvider>
         </AuthProvider>
      </div>
   );
}

export default App;
