import "./App.css";
import HeaderMenu from "./layout/Header";
import Header2 from "./layout/Header2";
import Footer from "./layout/Footer";
import Home from "./page/Home/Home";
import Company from "./page/Intro/company/Company";
import Cashew1 from "./page/Products/Cashew1/Cashew1";
import Cashew2 from "./page/Products/Cashew1/Cashew2";
import Cashew3 from "./page/Products/Cashew1/Cashew3";
import Packaging from "./page/Products/Cashew1/Packaging";
import Certicate from "./page/Intro/certificate/Certicate";
import Recruitment from "./page/News/Recruitment";
import Conttact from "./page/Contact/Conttact";
import Brcsgs from "./page/BRCGS/Brcgs";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import Standard from "./page/Products/Cashew1/Standard";
import Loadscreen from "./page/Loadscreen/Loadscreen";
import Login from "./page/Login/Login";
import Export from "./page/Intro/export/Export";
import Afi_index from "./page/AFI/Afi_index";
import i18n from "./utils/ConfigLang";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PhoneOutlined, HomeOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<Loadscreen />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </I18nextProvider>
    </Router>
  );
}

function MainContent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const phoneNumber = "+84 937685758";
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleGoMap = () => {
    window.location.href =
      "https://www.google.com/maps/place/C%C3%94NG+TY+TNHH+%C4%90I%E1%BB%80U+V%C3%80NG/@11.5689598,106.5897551,17z/data=!3m1!4b1!4m6!3m5!1s0x3174ab5caffe8ab5:0x194b770fc2f3a60!8m2!3d11.5689598!4d106.59233!16s%2Fg%2F11p0wc88jt?entry=ttu";
  };
  return (
    <div>
      <div style={{ position: 'fixed', width: '100%', zIndex: 3}}>
        {window.location.pathname === "/" ? null : (windowWidth <= 786 ? <Header2/> : <HeaderMenu/>)}
      </div>
      <div style={{paddingTop:80}}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/intro/company" element={<Company />} />
          <Route path="/intro/export" element={<Export />} />
          <Route path="/intro/certificate" element={<Certicate />} />
          <Route path="/intro/certificate/brcgs" element={<Brcsgs />} />
          <Route path="/product/cashewcore" element={<Cashew1 />} />
          <Route path="/product/cashewsalted" element={<Cashew2 />} />
          <Route path="/product/cashewsraw" element={<Cashew3 />} />
          <Route path="/product/packaging" element={<Packaging />} />
          <Route path="/product/standard" element={<Standard />} />
          <Route path="/news/recruitment" element={<Recruitment />} />
          <Route path="/productdetail/*" element={<ProductDetail />} />
          <Route path="/product/standard/afi" element={<Afi_index />} />
          <Route path="/hotline" element={<Conttact />} />
        </Routes>
        <FloatButton.Group
          shape="circle"
          style={{
            right: 24,
          }}
        >
          <FloatButton
            onClick={() => handlePhoneClick()}
            icon={<PhoneOutlined />}
          />
          <FloatButton onClick={() => handleGoMap()} icon={<HomeOutlined />} />
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>
      </div>
      {window.location.pathname === "/" ? null : <Footer />}
    </div>
  );
}

export default App;
