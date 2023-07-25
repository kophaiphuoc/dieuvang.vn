import React, { useState } from "react";
import { Avatar, Card, Row, Col, Typography, Pagination } from "antd";
const { Title, Paragraph } = Typography;
const { Meta } = Card;
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo2 from "../../../assets/logo_dieuvang_50x50.png";
import Data from "../../../Data";
function Cashew3() {
  const navigate = useNavigate();

  const nextProductDetail = (item) => {
    const state = { item };
    navigate(`/productdetail/${item.name}`, { state });
  };
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const ProductList = ({ productList }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
    return (
      <Row gutter={[16, 16]}>
        {currentItems.map((item) => (
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
                  src={item.image[0]}
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
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
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
        <Title style={{ textAlign: "center" }}>{t("product_page.product_3")}</Title>
        <ProductList productList={Data?.cashew_origin} />
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={Data?.cashew_origin.length}
          onChange={handlePageChange}
          style={{ marginTop: 16, textAlign: "center" }}
        />
      </div>
    </div>
  );
}

export default Cashew3;
