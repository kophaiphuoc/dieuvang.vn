import React,{useState,useEffect} from "react";
import { Carousel } from "antd";
import { Avatar, Card, Row, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "../Home/Home_css.css";
import logo2 from "../../assets/logo_dieuvang_50x50.png";
import bgr1 from "../../assets/bgr1.png";
import bgr2 from "../../assets/bgr2.png";
import bgr3 from "../../assets/bgr3.png";
import { useTranslation } from "react-i18next";
import ProductServices from "../../services/ProductServices";
import Company from "../Intro/company/Company"
function Home() {
  const { Title, Paragraph } = Typography;
  const { Meta } = Card;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [data,setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ProductServices.getListProduct();
        setData(res)
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);
  const ProductList = ({ productList }) => {
    return (
      <Row gutter={[16, 16]}>
        {productList.map((item) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Card
              onClick={() => nextProductDetail(item)}
              style={{
                marginBottom: 16,
                width: 300,
                position: "relative",
                objectFit: "cover",
              }}
              cover={
                <img
                  style={{ height: 200, objectFit: "cover" }}
                  alt="example"
                  src={item.image}
                />
              }
              hoverable
            >
              <div className="mask"></div>
              <Meta avatar={<Avatar src={logo2} />} title={item.name} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const nextProductDetail = (item) => {
    const state = { item };
    navigate(`/productdetail/${item.name}`, { state });
  };

  return (
    <div className="container">
      <div className="container_carousel">
        <Carousel autoplay dotPosition="bottom">
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 550,
              }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={bgr1}
                alt="Image 1"
              />
              {/* <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{ margin: 0, fontSize: "24px", textAlign: "center" }}
                  >
                    {t("home_page.img_silde1")},
                  </p>
                  <img src={logo}></img>
                </div>
              </div> */}
            </div>
          </div>

          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 550,
              }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={bgr2}
                alt="Image 1"
              />
              {/* <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{ margin: 0, fontSize: "24px", textAlign: "center" }}
                  >
                    {t("home_page.img_silde2")},
                  </p>
                  <img src={logo}></img>
                </div>
              </div> */}
            </div>
          </div>

          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 550,
              }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={bgr3}
                alt="Image 1"
              />
              {/* <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{ margin: 0, fontSize: "24px", textAlign: "center" }}
                  >
                    {t("home_page.img_silde3")},
                  </p>
                  <img src={logo}></img>
                </div>
              </div> */}
            </div>
          </div>
        </Carousel>
      </div>
      {/* start giới thiệu */}
      <div className="container_intro">
        <Title style={{ textAlign: "center" }}>
          {" "}
          {t("home_page.title_intro")}{" "}
        </Title>
        <div>
          <Row gutter={[16, 16]} align="middle" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            {/* <Col
              xs={24}
              sm={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://i.pinimg.com/564x/a4/42/bd/a442bd8f88b75075ad39104c6e35b8db.jpg"
                alt="Introduction"
                style={{ maxWidth: "100%" }}
              />
            </Col> */}
            <Col xs={24} sm={20}>
              <div>
                <Title level={2}> {t("home_page.title_intro_2")}</Title>
                <Paragraph>{t("home_page.content_intro")}</Paragraph>
              </div>
            </Col>
          </Row>
        </div>
        <Company></Company>
      </div>
      {/* end giới thiệu */}

      {/* start list sản phẩm */}
      <div>
        <Row
          gutter={[16, 16]}
          align="middle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col xs={24} sm={15}>
            <div style={{ padding: 20 }}>
              <Title style={{ textAlign: "center" }} level={2}>
                {t("home_page.review_product_title")}
              </Title>
              <Paragraph strong style={{ textAlign: "center" }}>
                {t("home_page.content_review_product")}
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
      {/* end list sản phẩm */}
      {/* start điều nhân */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
          }}
        >
          <Title style={{ textAlign: "center" }}>
            {t("home_page.product_1")}
          </Title>
          <ProductList productList={data} />
        </div>
      </div>
      {/* end điều nhân */}

      {/* start điều rang muối */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderBottomColor: "#ada182",
            borderBottomStyle: "dashed",
          }}
        >
          <Title style={{ textAlign: "center" }}>{t("home_page.product_2")}</Title>
          <ProductList productList={Data?.cashew_salt} />
        </div>
      </div> */}
      {/* end điều rang muối */}

      {/* start điều thô */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderBottomColor: "#ada182",
            borderBottomStyle: "dashed",
          }}
        >
          <Title style={{ textAlign: "center" }}>{t("home_page.product_3")}</Title>
          <ProductList productList={Data?.cashew_origin} />
        </div>
      </div> */}
      {/* end điều thô */}
    </div>
  );
}

export default Home;
