import { useState } from "react";
import { Menu, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo_dieuvang_50x50.png";
import i18n from "../utils/ConfigLang";
import { useTranslation } from "react-i18next";
const { SubMenu } = Menu;

const Header2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  const { t } = useTranslation();
  const changeLanguageSelector = (lang_key) => {
    i18n.changeLanguage(
      lang_key === "language_vi"
        ? "vi"
        : lang_key === "language_eng"
        ? "en"
        : null
    );
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const menuData = [
    {
      key: "home",
      title: t("header.home"),
      link: "/home",
    },
    {
      key: "intro",
      title: t("header.intro"),
      link: "/intro",
      submenu: [
        // {
        //   key: "company",
        //   title: t("header_sub.intro.company"),
        //   link: "/intro/company",
        // },
        {
          key: "certificate",
          title: t("header_sub.intro.certificate"),
          link: "/intro/certificate",
        },
        {
          key: "export",
          title: t("header_sub.intro.export"),
          link: "/intro/export",
        },
      ],
    },
    {
      key: "product",
      title: t("header.products"),
      submenu: [
        {
          key: "cashew1",
          title: t("header_sub.product.cashew1"),
          link: "/product/cashewcore",
        },
        {
          key: "cashew5",
          title: t("header_sub.product.cashew5"),
          link: "/product/standard",
        },
      ],
    },
    {
      key: "news",
      title: t("header.news"),
      submenu: [
        {
          key: "news1",
          title: t("header_sub.news.news1"),
          link: "/news/recruitment",
        },
      ],
    },
    {
      key: "hotline",
      title: t("header.hotline"),
      link: "/hotline",
    },
    {
      key: "language",
      title: t("header.language"),
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
      title: t("header.login"),
      link: "/login",
    },
  ];

  const renderMenuItems = (menuItems) => {
    return menuItems.map((menuItem) => {
      if (menuItem.submenu) {
        const submenuItems = renderMenuItems(menuItem.submenu);
        return (
          <SubMenu
            key={menuItem.key}
            title={menuItem.title}
            icon={menuItem.icon}
          >
            {submenuItems}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={menuItem.key} onClick={toggleMenu}>
          <div onClick={() => changeLanguageSelector(menuItem.key)}>
            <Link to={menuItem.link}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {menuItem.icon && (
                  <img
                    style={{ height: 30, width: 30, marginRight: 5 }}
                    src={menuItem.icon}
                    alt={menuItem.title}
                  />
                )}
                <span style={{ textTransform: "uppercase" }}>
                  {menuItem.title}
                </span>
              </div>
            </Link>
          </div>
        </Menu.Item>
      );
    });
  };

  const renderMenu = () => {
    return (
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <Button className="menu-button" onClick={toggleMenu}>
          <CloseOutlined />
        </Button>
        <Menu
          className="menu"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
        >
          {renderMenuItems(menuData)}
        </Menu>
      </div>
    );
  };

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {showMenu == true ? null : (
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="Logo" />
        </div>
      )}
      {showMenu == true ? null : (
        <Button className="menu-button" onClick={toggleMenu}>
          <MenuOutlined />
        </Button>
      )}
      {showMenu && renderMenu()}
    </div>
  );
};

export default Header2;
