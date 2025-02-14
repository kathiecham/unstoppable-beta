import React from 'react'
<<<<<<< HEAD
=======
import Link from 'next/link'
>>>>>>> 76e47d6 (Updated navigation links)
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const HowItWorks = (props) => {
  return (
    <>
      <div className="how-it-works-container">
        <Head>
          <title>How-It-Works - Final Site</title>
          <meta property="og:title" content="How-It-Works - Final Site" />
        </Head>
        <header
          data-thq="thq-navbar"
          className="how-it-works-navbar-interactive"
        >
          <img
            alt="image"
            src="/v02%2012.31.2024%20logo-200h.png"
            className="how-it-works-image"
          />
          <div data-thq="thq-navbar-nav" className="how-it-works-desktop-menu">
            <nav className="how-it-works-links1">
<<<<<<< HEAD
              <span>Home</span>
              <span className="how-it-works-text2">How it Works</span>
              <span className="how-it-works-text3">FAQ</span>
              <span className="how-it-works-text4">Sign Up</span>
=======
              <Link href="/">
                <a className="how-it-works-link1">Home</a>
              </Link>
              <span className="how-it-works-text1">How it Works</span>
              <Link href="/faq">
                <a className="how-it-works-link2">FAQ</a>
              </Link>
              <Link href="/sign-up-process">
                <a className="how-it-works-link3">Sign Up</a>
              </Link>
>>>>>>> 76e47d6 (Updated navigation links)
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="how-it-works-burger-menu">
            <svg viewBox="0 0 1024 1024" className="how-it-works-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="how-it-works-mobile-menu">
            <div className="how-it-works-nav">
              <div className="how-it-works-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="how-it-works-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="how-it-works-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="how-it-works-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="how-it-works-links2">
<<<<<<< HEAD
                <span className="how-it-works-text5">About</span>
                <span className="how-it-works-text6">Features</span>
                <span className="how-it-works-text7">Pricing</span>
                <span className="how-it-works-text8">Team</span>
                <span className="how-it-works-text9">Blog</span>
=======
                <span className="how-it-works-text2">About</span>
                <span className="how-it-works-text3">Features</span>
                <span className="how-it-works-text4">Pricing</span>
                <span className="how-it-works-text5">Team</span>
                <span className="how-it-works-text6">Blog</span>
>>>>>>> 76e47d6 (Updated navigation links)
              </nav>
              <div className="how-it-works-buttons">
                <button className="how-it-works-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="how-it-works-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="how-it-works-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="how-it-works-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .how-it-works-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .how-it-works-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .how-it-works-image {
            width: 108px;
            height: 33px;
            object-fit: cover;
          }
          .how-it-works-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .how-it-works-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: flex-end;
          }
<<<<<<< HEAD
          .how-it-works-text2 {
            margin-left: var(--dl-space-space-twounits);
          }
          .how-it-works-text3 {
            margin-left: var(--dl-space-space-twounits);
          }
          .how-it-works-text4 {
            margin-left: var(--dl-space-space-twounits);
=======
          .how-it-works-link1 {
            text-decoration: none;
          }
          .how-it-works-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .how-it-works-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .how-it-works-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
>>>>>>> 76e47d6 (Updated navigation links)
          }
          .how-it-works-burger-menu {
            display: none;
          }
          .how-it-works-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .how-it-works-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .how-it-works-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .how-it-works-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .how-it-works-logo {
            height: 2rem;
          }
          .how-it-works-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .how-it-works-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .how-it-works-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
<<<<<<< HEAD
=======
          .how-it-works-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-it-works-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-it-works-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
>>>>>>> 76e47d6 (Updated navigation links)
          .how-it-works-text5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-it-works-text6 {
            margin-bottom: var(--dl-space-space-unit);
          }
<<<<<<< HEAD
          .how-it-works-text7 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-it-works-text8 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-it-works-text9 {
            margin-bottom: var(--dl-space-space-unit);
          }
=======
>>>>>>> 76e47d6 (Updated navigation links)
          .how-it-works-buttons {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .how-it-works-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .how-it-works-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .how-it-works-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .how-it-works-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          @media (max-width: 767px) {
            .how-it-works-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .how-it-works-desktop-menu {
              display: none;
            }
            .how-it-works-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
<<<<<<< HEAD
            .how-it-works-text5 {
=======
            .how-it-works-text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .how-it-works-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .how-it-works-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .how-it-works-text5 {
              margin-left: 0;
>>>>>>> 76e47d6 (Updated navigation links)
              margin-bottom: var(--dl-space-space-unit);
            }
            .how-it-works-text6 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
<<<<<<< HEAD
            .how-it-works-text7 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .how-it-works-text8 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .how-it-works-text9 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
=======
>>>>>>> 76e47d6 (Updated navigation links)
          }
          @media (max-width: 479px) {
            .how-it-works-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .how-it-works-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default HowItWorks
