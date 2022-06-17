import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          Join the membership
        </h1>
        <p className='footer-subscription-text'>
          You can join your membership and post your available services.
        </p>
        <div className='input-areas'>
          <form>
            {/* <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            /> */}
            <Link to = '/membership'><button className ='btnSection btnFooter'><h3>Join</h3></button></Link>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to = '/aboutUs' style = {{fontSize : "25px", fontWeight : "bold", marginBottom : "10px"}}>About Us</Link>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Investors</Link>
          </div>
          <div class='footer-link-items'>
          <Link to = '/contactUs' style = {{fontSize : "25px", fontWeight : "bold", marginBottom : "10px"}}>Contact Us</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
          <div class='footer-link-items'>
          <Link to = '/legalTerms' style = {{fontSize : "25px", fontWeight : "bold", marginBottom : "10px"}}>Legal</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Privacy</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Build Nepal
              <i class='fa fa-industry' />
            </Link>
            <h4>Less time, good quality, best service.</h4>
          </div>
          <small class='website-rights'>Build Nepal © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;