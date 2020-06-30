import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='sign-in'>
      <div className='wrapper'>
        <div className='sign-in-page'>
          <div className='signin-popup'>
            <div className='signin-pop'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='cmp-info'>
                    <div className='cm-logo'>
                      <img src='images/cm-logo.png' alt='' />
                      <p>
                        Workwise, is Link global freelancing platform and social
                        networking where businesses and independent
                        professionals connect and collaborate remotely
                      </p>
                    </div>
                    <img src='images/cm-main-img.png' alt='' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='login-sec'>
                    <ul className='sign-control'>
                      <li data-tab='tab-1' className='animated fadeIn'>
                        <Link to='#' title=''>
                          Sign in
                        </Link>
                      </li>
                      <li data-tab='tab-2' className='animated fadeIn current'>
                        <Link to='#' title=''>
                          Sign up
                        </Link>
                      </li>
                    </ul>
                    <div className='sign_in_sec animated fadeIn' id='tab-1'>
                      <h3>Sign in</h3>
                      <form>
                        <div className='row'>
                          <div className='col-lg-12 no-pdd'>
                            <div className='sn-field'>
                              <input
                                type='text'
                                name='username'
                                placeholder='Username'
                              />
                              <i className='la la-user' />
                            </div>
                          </div>
                          <div className='col-lg-12 no-pdd'>
                            <div className='sn-field'>
                              <input
                                type='password'
                                name='password'
                                placeholder='Password'
                              />
                              <i className='la la-lock' />
                            </div>
                          </div>
                          <div className='col-lg-12 no-pdd'>
                            <div className='checky-sec'>
                              <div className='fgt-sec'>
                                <input type='checkbox' name='cc' id='c1' />
                                <label htmlFor='c1'>
                                  <span />
                                </label>
                                <small>Remember me</small>
                              </div>
                              <a to='#' title=''>
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          <div className='col-lg-12 no-pdd'>
                            <button type='submit' value='submit'>
                              Sign in
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className='login-resources'>
                        <h4>Login Via Social Account</h4>
                        <ul>
                          <li>
                            <Link to='#' title='' className='fb'>
                              <i className='fa fa-facebook' />
                              Login Via Facebook
                            </Link>
                          </li>
                          <li>
                            <Link to='#' title='' className='tw'>
                              <i className='fa fa-twitter' />
                              Login Via Twitter
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className='sign_in_sec animated fadeIn current'
                      id='tab-2'
                    >
                      <div className='signup-tab'>
                        <ul>
                          <li data-tab='tab-3' className='current'>
                            <Link to='#' title=''>
                              User
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className='dff-tab current' id='tab-3'>
                        <form>
                          <div className='row'>
                            <div className='col-lg-12 no-pdd'>
                              <div className='sn-field'>
                                <input
                                  type='text'
                                  name='name'
                                  placeholder='Full Name'
                                />
                                <i className='la la-user' />
                              </div>
                            </div>
                            <div className='col-lg-12 no-pdd'>
                              <div className='sn-field'>
                                <input
                                  type='text'
                                  name='country'
                                  placeholder='Country'
                                />
                                <i className='la la-globe' />
                              </div>
                            </div>
                            <div className='col-lg-12 no-pdd'>
                              <div className='sn-field'>
                                <input
                                  type='password'
                                  name='password'
                                  placeholder='Password'
                                />
                                <i className='la la-lock' />
                              </div>
                            </div>
                            <div className='col-lg-12 no-pdd'>
                              <div className='sn-field'>
                                <input
                                  type='password'
                                  name='repeat-password'
                                  placeholder='Repeat Password'
                                />
                                <i className='la la-lock' />
                              </div>
                            </div>
                            <div className='col-lg-12 no-pdd'>
                              <div className='checky-sec st2'>
                                <div className='fgt-sec'>
                                  <input type='checkbox' name='cc' id='c2' />
                                  <label htmlFor='c2'>
                                    <span />
                                  </label>
                                  <small>
                                    Yes, I understand and agree to the workwise
                                    Terms &amp; Conditions.
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-12 no-pdd'>
                              <button type='submit' value='submit'>
                                Get Started
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className='dff-tab' id='tab-4'>
                        <form>
                          <div className='row'>
                            <div className='col-lg-12 no-pdd'>
                              <button type='submit' value='submit'>
                                Get Started
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footy-sec'>
            <div className='container'>
              <ul>
                <li>
                  <Link to='help-center.html' title=''>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to='about.html' title=''>
                    About
                  </Link>
                </li>
                <li>
                  <Link to='#' title=''>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to='#' title=''>
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link to='#' title=''>
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link to='#' title=''>
                    Career
                  </Link>
                </li>
                <li>
                  <a to='forum.html' title=''>
                    Forum
                  </a>
                </li>
                <li>
                  <a to='#' title=''>
                    Language
                  </a>
                </li>
                <li>
                  <a to='#' title=''>
                    Copyright Policy
                  </a>
                </li>
              </ul>
              <p>
                <img src='images/copy-icon.png' alt='' />
                Copyright 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
