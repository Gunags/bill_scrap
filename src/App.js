import { UserLogin } from './components/login/UserLogin';
import { AdminLogin } from './components/login/AdminLogin';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Pages/Home';
import bg from './Image/2RNb.gif';
import React from 'react';
import { NavigationBar } from './components/Navbar/NavigationBar';

const App = () => {
  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={myStyle}>
      <NavigationBar />
      <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/adminlogin' component={AdminLogin} />
      </Routes>
    </div>
  );
};

export default App;

// export const App = () => {

//   return;
//   <div style={myStyle}>
//     APP
//     {/* <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/adminlogin" element={<AdminLogin />} />
//         <Route path="/userlogin" element={<UserLogin />} />
//       </Routes>
//     </Router> */}
//   </div>;
// };
