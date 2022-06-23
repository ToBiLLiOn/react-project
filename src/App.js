import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import TobillionLogo from './assets/img/'
import './App.css';

function App() {
  return (
          <div className='App'>
            <Navbar dark color='' sticky='' expand=''>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={TobillionLogo} alt='tobillion logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
          </div>
    )
}

export default App;
