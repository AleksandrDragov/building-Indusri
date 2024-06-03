import './App.less';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContainer from './MainContainer/MainContainer';
import Partners from './Partners/Partners';
import BackCall from './BackCall/BackCall';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../Pages/HomePage/HomePage'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));
const Services = lazy(() => import('../Pages/Services/Services'));
const Projects = lazy(() => import('../Pages/Projects/Projects'));
export const App = () => {
  return (
    <div className="container">
      {' '}
      <Header />
      <div className="app-shadow-wrapper">
        <MainContainer>
          <Suspense fallback={<Loader />}>
            {' '}
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
        </MainContainer>
        <Partners />
        <BackCall />
        <Footer />
      </div>
    </div>
  );
};
