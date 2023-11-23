import React from 'react'
import { Container, Figure } from 'react-bootstrap'

import Ic_5 from "@/public/ic-5.svg";
import Ic_6 from "@/public/ic-6.svg";
import Ic_7 from "@/public/ic-7.svg";
import Ic_8 from "@/public/ic-8.svg";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='inner-container _230px'>
          <h3>Menu</h3>
          <div className='nav-menu-list-main-wrapper'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Blog posts</li>
            </ul>
            <ul>
              <li>Plans</li>
              <li>Plan single</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
        <div className='inner-container _230px'>
          <h3>Utility pages</h3>
          <div className='nav-menu-list-main-wrapper'>
            <ul>
              <li>Start here</li>
              <li>Styleguide</li>
              <li>Password protected</li>
              <li>404 Not found</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li><span>Browse More Templates</span></li>
            </ul>
          </div>
        </div>
        <div className='inner-container _502px'>
          <h3>Available in</h3>

          <div className='footer-country-available-service'>
            <div className='flex-horizontal'>
              <Ic_5 />
              <h5>San Francisco, CA</h5>
            </div>
            <div className='flex-horizontal'>
              <Ic_6 />
              <h5>New York, NY</h5>
            </div>
            <div className='flex-horizontal'>
              <Ic_7 />
              <h5>Los Angeles, CA</h5>
            </div>
            <div className='flex-horizontal'>
              <Ic_8 />
              <h5>Seattle, WA</h5>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer