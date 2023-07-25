import React from "react";
import { Row, Col, Card,Image } from "antd";
import { useTranslation } from "react-i18next";
import images from "../../../utils/Importimg";
import brg from "../../../assets/bgr_staff.png"
import staff from "../../../assets/staff_sub.png"
function Company() {
  const { t } = useTranslation();

  return (
    <div>
      {/* start img giới thiệu */}
      {/* <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 400,
          }}
        >
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={brg}
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
            }}
          >
            <p style={{ margin: 0, fontSize: "24px" }}>
              {t("intro_page.intro_title")}
            </p>
          </div>
        </div>
      </div> */}
      {/* end img giới thiệu */}

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "83%" }}>
            <Row
              gutter={16}
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col xs={24} sm={12} md={8}>
                <img
                  src={staff}
                  alt="Company Image"
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
              <Col xs={24} sm={12} md={16}>
                <div>
                  <h2>{t("intro_page.intro_content_us_title")}</h2>
                  <p>{t("intro_page.intro_content_1")}</p>
                  <p>
                    <strong> {t("intro_page.intro_content_2_strong")}</strong>{" "}
                    {t("intro_page.intro_content_2")}
                  </p>
                  <p>
                    <strong>{t("intro_page.intro_content_3_strong")}</strong>{" "}
                    {t("intro_page.intro_content_3")}
                  </p>
                  <p> {t("intro_page.intro_content_4")}</p>
                </div>
              </Col>
            </Row>
          </Card>
        </div>

        <div>
          <Row
            gutter={16}
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Col span={20}>
              <Card>
                <h2>{t("intro_page.intro_content_main_1_title")}</h2>
                <p>{t("intro_page.intro_content_main_1")}</p>
              </Card>
            </Col> */}
          </Row>
          <Row
            gutter={16}
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Col span={20}>
              <Card>
                <h2>{t("intro_page.intro_content_main_2_title")}</h2>
                <p>{t("intro_page.intro_content_main_2")}</p>
              </Card>
            </Col> */}
          </Row>
          <Row
            gutter={16}
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col span={20}>
              <Card>
                <h2>{t("intro_page.intro_content_main_3_title")}</h2>
                <p>{t("intro_page.intro_content_main_3")}</p>
              </Card>
            </Col>
          </Row>
          <Row
            gutter={16}
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col span={20}>
              <Card>
                <h2>{t("intro_page.intro_content_main_4_title")}</h2>
                <p>
                  <strong>
                    {t("intro_page.intro_content_main_4_strong")}
                  </strong>{" "}
                  {t("intro_page.intro_content_main_4")}
                </p>
                <p>
                  <strong>
                    {t("intro_page.intro_content_main_5_strong")}
                  </strong>
                  {t("intro_page.intro_content_main_5")}
                </p>
                <p>
                  <strong>
                    {t("intro_page.intro_content_main_6_strong")}
                  </strong>
                  {t("intro_page.intro_content_main_6")}
                </p>
              </Card>
            </Col>
          </Row>
        </div>

        <div>
          <Row
            gutter={16}
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col span={20}>
              <Card>
                <h2>{t("intro_page.list_image")}</h2>
                <Row gutter={16} style={{ display: "flex", flexWrap: "wrap" }}>
                  {images.map((image, index) => (
                    <Col
                      xs={24}
                      sm={12}
                      md={8}
                      lg={6}
                      key={index}
                      style={{ marginBottom: 16 }}
                    >
                      <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{width:'100%' ,height: 200,objectFit:'cover'}}
                      />
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Company;
