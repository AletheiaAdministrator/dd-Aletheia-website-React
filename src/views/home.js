import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>dd-Aletheia-website</title>
        <meta property="og:title" content="dd-Aletheia-website" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="image"
            src="/horizontal%20v2%20180px.svg"
            className="home-image"
          />
          <div className="home-container01">
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <Link to="/">Home</Link>
                <a href="#about" className="home-nav2">
                  About
                </a>
                <Link to="/services" className="home-nav3">
                  Services
                </Link>
                <span className="home-nav4">Products</span>
                <span className="home-nav5">Contact</span>
              </nav>
            </div>
          </div>
          <button type="button" autoFocus className="home-button button">
            Get in Touch
          </button>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <div className="home-container02">
                  <div
                    data-thq="thq-close-menu"
                    className="home-close-menu"
                  ></div>
                  <img
                    alt="image"
                    src="/horizontal%20v2%20180px.svg"
                    className="home-image1"
                  />
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">Home</span>
                <span className="home-nav21">About</span>
                <span className="home-nav31">Services</span>
                <span className="home-nav41">Products</span>
                <span className="home-nav51">Contact</span>
              </nav>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div
        data-thq="slider"
        data-loop="true"
        data-autoplay="true"
        data-navigation="false"
        data-pagination="true"
        data-disable-autoplay-on-interaction="true"
        className="home-slider swiper"
      >
        <div
          data-thq="slider-wrapper"
          className="home-slider-wrapper swiper-wrapper"
        >
          <div
            data-thq="slider-slide"
            className="home-slider-slide swiper-slide"
          >
            <div className="home-hero">
              <div className="home-hero1">
                <div className="home-container03">
                  <h1 className="home-hero-heading heading1">
                    Technological Solutions
                  </h1>
                  <span className="home-hero-sub-heading">
                    Empowering businesses with innovative solutions
                  </span>
                  <div className="home-btn-group">
                    <button className="home-hero-button1 button">
                      Get Started
                    </button>
                    <button className="home-hero-button2 button">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide1 swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide2 swiper-slide"
          ></div>
        </div>
        <div
          data-thq="slider-pagination"
          className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
        </div>
        <div
          data-thq="slider-button-prev"
          className="home-slider-button-prev swiper-button-prev"
        ></div>
        <div
          data-thq="slider-button-next"
          className="home-slider-button-next swiper-button-next"
        ></div>
      </div>
      <div className="home-details">
        <div id="about" className="home-details1">
          <div className="home-container04">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">About Our Company</h2>
            <span className="home-details-sub-heading">
              We are a technological solutions startup company committed to
              empowering companies and individuals by providing them services
              and expert solutions in a thriving technological world. Our
              services vary from software development, cloud services, IT
              Solutions, and more. 
            </span>
          </div>
          <div className="home-container05">
            <div className="home-container06">
              <div className="home-container07">
                <div className="home-container08">
                  <img alt="image" src="/32x32.svg" className="home-image2" />
                  <Player
                    src="https://lottie.host/72d4624e-a653-4194-912e-a6f7275c964f/RqsOm8utdd.json"
                    loop
                    speed="1"
                    autoplay
                    background="transparent"
                    className="home-lottie-node"
                  ></Player>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Our Technological Solutions in a Glance
          </h1>
          <div className="home-container09">
            <Player
              src="https://lottie.host/41719c99-d3e2-4402-8bc5-005023e57007/vHJ5o3cAAz.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="home-lottie-node1"
            ></Player>
            <Player
              src="https://lottie.host/74045b28-3003-4202-9326-527f3acf39fa/OFbxxuiH0k.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="home-lottie-node2"
            ></Player>
            <Player
              src="https://lottie.host/f3436404-b852-4497-a527-a33d43459737/u6Tn6mW84W.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="home-lottie-node3"
            ></Player>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Transforming Businesses with Technology
          </h1>
          <span className="home-banner-sub-heading">
            Discover our comprehensive range of technological solutions tailored
            to meet your business needs.
          </span>
          <button className="home-banner-button button">Read More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container10">
              <span className="home-text03 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text06 heading2">Common questions</h2>
              <span className="home-text07">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container11">
              <Question
                Answer="Our company offers a wide range of technological solutions including software development, web design, mobile app development, cloud computing, and IT consulting."
                Question="What services does the company offer?"
              ></Question>
              <Question
                Answer="You can contact us by filling out the contact form on our website or by emailing us at support@alethieaino.com"
                Question="How can I contact the company?"
              ></Question>
              <Question
                Answer="Yes, we specialize in providing customized technological solutions tailored to meet the specific needs and requirements of our clients."
                Question="Do you provide customized solutions?"
              ></Question>
              <Question
                Answer="Our company serves a diverse range of industries including healthcare, finance, e-commerce, education, and manufacturing."
                Question="What industries does the company serve?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <img
            alt="image"
            src="/horizontal%20v2%20180px1.svg"
            className="home-image3"
          />
          <div className="home-container12">
            <nav className="home-nav1 home-nav1">
              <span className="home-nav12">Home</span>
              <span className="home-nav22">About</span>
              <span className="home-nav32">Services</span>
              <span className="home-nav42">Products</span>
              <span className="home-nav52">Contact</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container13">
            <span className="home-text24">
              © 2023 AletheiaIno All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
