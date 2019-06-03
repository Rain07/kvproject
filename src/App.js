import React from 'react';
import './App.css';
import './components/css/menu.css';
import './components/css/material-icon.css';
import './components/materialize/css/materialize.min.css';
import './components/css/base_site.css';
import './components/css/main-page.css';
import './components/plugins/fontawesome/css/font-awesome.min.css';
import './components/plugins/hover-effects/set2.css';
import './components/plugins/weather-icon-font/css/weather-icons.css';
import './components/plugins/weather-icon-font/css/weather-icons-wind.css';
import './components/plugins/animateCss/animate.css';
import './components/plugins/flip-clock/flipclock.css';
import './components/plugins/tooltipster/css/tooltipster.bundle.css';
import './components/css/block-header.css';
import './components/css/menu.css';
import './components/css/menu.css';
import Header from './components/Header/Header';
import Footer from './components/footer/footer'
import Slider from './components/Slidebar/slidebar';





function App() {
  return (
<div className="App">

{/*If not work use app1.js */}
  <meta property="og:viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta> 
  <meta httpEquiv="og:content-language" content="fa" > </meta>
  <meta name="og:language" content="Persian" > </meta>
  <meta name="og:theme-color" content="#35b995" ></meta>
  {/* Windows Phone */}
  <meta name="msapplication-navbutton-color" content="#35b995" />
  {/* iOS Safari */}
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#35b995" />
  <meta name="clckd" content="552cfd999206c3c5d79340aac0b26178" />
  <style dangerouslySetInnerHTML={{__html: " body { padding-top: 50px; } .next-banner-root { width: 100%; color: #fff; display: flex; padding: 10px; box-sizing: border-box; align-items: center; justify-content: center; background-color: #2ca7ff; direction: rtl; position: absolute; top: 0; right: 0; z-index: 5; } .next-banner-root:hover .next-banner-button-icon { right: 3px; } .next-banner-text { color: #fff; font-size: 20px; font-weight: 400; line-height: 1.5; } .next-banner-button { color: #2ca7ff; padding: 2px 8px; min-height: 0; margin-right: 10px; border-radius: 30px; background-color: #fff; overflow: hidden; font-size: 0.75rem; min-width: 64px; box-sizing: border-box; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; line-height: 1.75; font-weight: 500; text-transform: uppercase; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; } .next-banner-button-icon { position: relative; right: 0; transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; } " }} /> 
  <title>کارناوال | راهنمای سفر</title>
  <meta property="og:title" content="کارناوال | راهنمای سفر" />
  <meta property="og:description" content="کارناوال : معرفی ، نقد و بررسی جاذبه های گردشگری ایران و جهان  ، سفرنامه و راهنمای سفر ،  تماشای ویدیو و تصاویر با کیفیت از جاذبه های توریستی و طبیعت گردی" />
  <meta property="og:image" content="images/icons/site-logo.jpg" />
  <meta property="og:url" content="https://www.karnaval.ir" />
  <meta property="og:site_name" content="karnaval" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="کارناوال | راهنمای سفر" />
  <meta name="twitter:description" content="کارناوال : معرفی ، نقد و بررسی جاذبه های گردشگری ایران و جهان  ، سفرنامه و راهنمای سفر ،  تماشای ویدیو و تصاویر با کیفیت از جاذبه های توریستی و طبیعت گردی" />
  <meta name="twitter:url" content="" />
  <meta name="twitter:image" content="images/icons/site-logo.jpg" />
  <link href="css/posts-editor.css" rel="stylesheet" />
  <link href="plugins/light-slider/dist/css/lightslider.min.css" rel="stylesheet" />
  <link href="css/post-style.css" rel="stylesheet" />
  <link href="css/home-index.css" rel="stylesheet" />
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        #header {\n            margin-bottom: -13px;\n        }\n    " }} />

           <Header />
                <Slider />
                      <footer/>

           
            </div>
      
  
  );
}

export default App;
