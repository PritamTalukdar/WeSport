import { FC } from 'react';
import { CoachingStaff } from './components/CoachingStaff';
import { Gallery } from './components/Gallery';
import Header from './components/Header';
import { LandingView } from './components/LandingView';
import { Locations } from './components/Locations';
import { OurServices } from './components/OurServices';
import { Reviews } from './components/Reviews';
import Topbar from './components/Topbar';
import Welcome from './components/Welcome';
import ContactUs from './components/ContactUs';

import './style.css';

export const App: FC = () => {
  return (
    <>
      {/* <Header /> */}
      <Topbar />
      <Welcome />
      <OurServices />
      <LandingView />
      <Gallery />
      <Locations />
      <Reviews />
      <CoachingStaff />
      <ContactUs />
    </>
  );
};
