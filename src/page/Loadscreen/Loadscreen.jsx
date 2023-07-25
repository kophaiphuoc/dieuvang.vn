import React from "react";
import { Card, Space, Typography,Avatar  } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_dieuvang_250x250.png";
import bgr from "../../assets/dieu_12.png";
import i18n from "../../utils/ConfigLang";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
function Loadscreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const changeLanguageSelector = (lang_key) => {
    i18n.changeLanguage(
      lang_key == "language_vi"
        ? "vi"
        : lang_key == "language_eng"
        ? "en"
        : null
    );
  };

  const nextProductDetail = (lang) => {
    changeLanguageSelector(lang);
    navigate("/home");
  };
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={bgr}
          alt="Image 1"
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "10px",
            width: "80%"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Card title={<span style={{ color: 'white' }}>DIEU VANG COMPANY LTD</span>} style={{ width: 400,textAlign:'center',backgroundColor:'transparent',color:'white', border: 'none' }}>
              <Space direction="vertical" align="center">
                <Avatar src={logo} size={120} />
                <Text style={{color:'white'}}>
                  Add: Group 2, Quarter 6, Tan Khai Town, Hon Quan District,
                  Binh Phuoc Province, Vietnam
                </Text>
                <Text style={{color:'white'}}>Mobile: +84(0) 937 68 5758</Text>
                <Text style={{color:'white'}}>E-mail: goldcashewvietnam@gmail.com</Text>
              </Space>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 10,
              flexWrap: "wrap",
            }}
          >
            <Card
              onClick={() => nextProductDetail("language_vi")}
              style={{
                marginBottom: 16,
                width: 250,
                height: 70,
                display: "flex",
                alignItems: "center",
                padding: 10
              }}
              cover={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingRight: 20,
                  }}
                >
                  <img
                    style={{ height: 40, width: 40, objectFit: "contain" }}
                    alt="example"
                    src="https://cdn-icons-png.flaticon.com/128/5373/5373330.png"
                  />
                  <strong style={{fontSize:22}}>TIẾNG VIỆT</strong>
                </div>
              }
              hoverable
            >
              <div className="mask"></div>
            </Card>

            <Card
              onClick={() => nextProductDetail("language_eng")}
              style={{
                marginBottom: 16,
                width: 250,
                height: 70,
                display: "flex",
                alignItems: "center",
                padding: 10,
              }}
              cover={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                    paddingRight: 20,
                  }}
                >
                  <img
                    style={{ height: 40, width: 40, objectFit: "contain" }}
                    alt="example"
                    src="https://cdn-icons-png.flaticon.com/128/330/330425.png"
                  />
                  <strong style={{fontSize:22}}>ENGLISH</strong>
                </div>
              }
              hoverable
            >
              <div className="mask"></div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loadscreen;
