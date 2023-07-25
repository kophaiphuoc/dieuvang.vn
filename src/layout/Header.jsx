import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
import logo from "../assets/logo_dieuvang_50x50.png";
import i18n from "../utils/ConfigLang";
import { useTranslation } from 'react-i18next';
function HeaderMenu() {
  const { t } = useTranslation();
  const changeLanguageSelector = (lang_key) => {
    i18n.changeLanguage(lang_key == "language_vi" ? 'vi' : (lang_key == "language_eng" ? 'en' : null));
  };

  const menuData = [
    {
      key: "home",
      title: t('header.home'),
      link: "/home",
    },
    {
      key: "intro",
      title: t('header.intro'),
      link: "/intro",
      submenu: [
        // {
        //   key: "company",
        //   title: t('header_sub.intro.company'),
        //   link: "/intro/company",
        // },
        {
          key: "certificate",
          title: t('header_sub.intro.certificate'),
          link: "/intro/certificate",
        },
        {
          key: "export",
          title: t('header_sub.intro.export'),
          link: "/intro/export",
        },
        // {
        //   key: "procedure",
        //   title:  t('header_sub.intro.procedure'),
        //   link: "/intro/procedure",
        // },
        // {
        //   key: "processing",
        //   title:  t('header_sub.intro.processing'),
        //   link: "/intro/processing",
        // },
      ],
    },
    {
      key: "product",
      title: t('header.products'),
      submenu: [
        {
          key: "cashew1",
          title: t('header_sub.product.cashew1'),
          link: "/product/cashewcore",
        },
        // {
        //   key: "cashew2",
        //   title:  t('header_sub.product.cashew2'),
        //   link: "/product/cashewsalted",
        // },
        // {
        //   key: "cashew3",
        //   title:  t('header_sub.product.cashew3'),
        //   link: "/product/cashewsraw",
        // },
        // {
        //   key: "cashew4",
        //   title:  t('header_sub.product.cashew4'),
        //   link: "/product/packaging",
        // },
        {
          key: "cashew5",
          title:  t('header_sub.product.cashew5'),
          link: "/product/standard",
        },
      ],
    },
    {
      key: "news",
      title: t('header.news'),
      submenu: [
        {
          key: "news1",
          title:  t('header_sub.news.news1'),
          link: "/news/recruitment",
        },
      ],
    },
    {
      key: "hotline",
      title: t('header.hotline'),
      link: "/hotline",
    },
    {
      key: "language",
      title: t('header.language'),
      submenu: [
        {
          key: "language_vi",
          title: "TIẾNG VIỆT",
          icon: "https://cdn-icons-png.flaticon.com/128/5373/5373330.png",
        },
        {
          key: "language_eng",
          title: "ENGLISH",
          icon: "https://cdn-icons-png.flaticon.com/128/330/330425.png",
        },
      ],
    },
    {
      key: "login",
      title: t('header.login'),
      link: "/login",
    },
  ];

  const renderMenuItem = (item) => {
    if (item.submenu) {
      return (
        <SubMenu key={item.key} title={item.title}>
          {item.submenu.map((submenu) => (
            <Menu.Item key={submenu.key}>
              <div onClick={()=>changeLanguageSelector(submenu.key)}>
                <Link to={submenu.link}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {submenu.icon && (
                      <img
                        style={{ height: 30, width: 30, marginRight: 5 }}
                        src={submenu.icon}
                        alt={submenu.title}
                      />
                    )}
                    <span style={{textTransform:'uppercase'}}>{submenu.title}</span>
                  </div>
                </Link>
              </div>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    }

    return (
      <Menu.Item key={item.key}>
        <Link to={item.link}>{item.title}</Link>
      </Menu.Item>
    );
  };

  return (
    <div style={{display:'flex',alignItems:'center',width:'100%',backgroundColor:'white',padding:20}}>
      <div
        className="logo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="Logo"/>
      </div>
      <div style={{width:'100%'}}>
        <Menu
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          mode="horizontal"
        >
          {menuData.map(renderMenuItem)}
        </Menu>
      </div>
    </div>
  );
}

export default HeaderMenu;
