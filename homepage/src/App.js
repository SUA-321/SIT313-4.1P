import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainSection from './MainSection';
import FeaturedFreelancers from './FeaturedFreelancers';
import FeaturedCustomers from './FeaturedCustomers';
import SignupSection from './SignupSection';


function App() {
  return (
    <body>
      <Navbar />
      <MainSection />
      <FeaturedFreelancers />
      <FeaturedCustomers />
      <SignupSection />


    </body>
  );
}

export default App;
