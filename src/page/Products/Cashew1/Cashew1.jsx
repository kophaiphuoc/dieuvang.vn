import React, { useState, useEffect, useMemo } from "react";
import {
  Avatar,
  Card,
  Row,
  Col,
  Typography,
  Pagination,
  Button,
  Modal,
  Form,
  Input,
  notification,
  Spin,
  Popconfirm
} from "antd";
const { Title, Paragraph } = Typography;
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const { Meta } = Card;
import logo2 from "../../../assets/logo_dieuvang_50x50.png";
import ProductServices from "../../../services/ProductServices";
import Cookies from "js-cookie";
import { PlusOutlined, SmileTwoTone, FrownTwoTone } from "@ant-design/icons";
function Cashew1() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editData, setEditData] = useState("");
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 8;
  const [api, contextHolder] = notification.useNotification();
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        setToken(token);
        const res = await ProductServices.getListProduct();
        setData(res);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const addProduct = useMemo(() => {
    return () => {
      setModal1Open(true);
    };
  }, [modal1Open]);

  const editproduct = useMemo(() => {
    return (data) => {
      setModal2Open(true);
      setEditData(data);
    };
  }, [modal2Open]);

  const handleImageUpload = useMemo(() => {
    return (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };
  }, [selectedImage]);

  const onFinish = async (values) => {
    setLoading(true);
    const resUploadImg = await ProductServices.uploadImage(selectedImage);
    if (resUploadImg) {
      const newProduct = {
        name: values.name,
        description: values.description,
        image: resUploadImg,
      };
      ProductServices.addProduct(newProduct)
        .then(async (res) => {
          if (res === 1) {
            setLoading(false);
            openNotification("Thành Công", "Bạn đã thêm sản phẩm thành công");
            const res = await ProductServices.getListProduct();
            setData(res);
            setModal1Open(false);
            setSelectedImage("");
          } else {
            setLoading(false);
            openNotification2(
              "Thất Bại",
              "Hệ thống đang lỗi hãy liên hệ (0356363154) cho tôi để khắc phục"
            );
            setModal1Open(false);
            setSelectedImage("");
          }
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
          setModal1Open(false);
        });
    }
  };
  const onFinish2 = async (values) => {
    const id = editData.id;
    console.log(values.name);
    setLoading(true);
    const resUploadImg = await ProductServices.uploadImage(selectedImage);
    if (resUploadImg) {
      const newProduct = {
        name: values.name,
        description: values.description,
        image: resUploadImg,
      };
      ProductServices.editProduct(id, newProduct)
        .then(async (res) => {
          if (res === 1) {
            setLoading(false);
            openNotification(
              "Thành Công",
              "Bạn đã cập nhật sản phẩm thành công"
            );
            const res = await ProductServices.getListProduct();
            setData(res);
            setModal2Open(false);
            setSelectedImage("");
          } else {
            setLoading(false);
            openNotification2(
              "Thất Bại",
              "Hệ thống đang lỗi hãy liên hệ (0356363154) cho tôi để khắc phục"
            );
            setModal2Open(false);
            setSelectedImage("");
          }
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
          setModal1Open(false);
        });
    }
  };
  const openNotification = (title, mess) => {
    api.open({
      message: title,
      description: mess,
      icon: (
        <SmileTwoTone
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  };
  const openNotification2 = (title, mess) => {
    api.open({
      message: title,
      description: mess,
      icon: (
        <FrownTwoTone
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  };
  const confirm = (id) => {
    deleteProduct(id);
  };
  const cancel = () => {
    null;
  };
  const deleteProduct = (productId) => {
    setLoading(true);
    ProductServices.deleteProduct(productId)
      .then(async (res) => {
        if (res === 1) {
          setLoading(false);
          openNotification("Thành Công", "Bạn đã xóa sản phẩm thành công");
          const res = await ProductServices.getListProduct();
          setData(res);
        } else {
          setLoading(false);
          openNotification2(
            "Thất Bại",
            "Hệ thống đang lỗi hãy liên hệ (0356363154) cho tôi để khắc phục"
          );
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        openNotification2(
          "Thất Bại",
          "Hệ thống đang lỗi hãy liên hệ (0356363154) cho tôi để khắc phục"
        );
      });
  };

  const editProduct = (data) => {
    console.log(data);
    // ProductServices.editProduct(productId)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  const ProductList = React.memo(({ productList }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = useMemo(() => {
      return productList.slice(indexOfFirstItem, indexOfLastItem);
    }, [productList, currentPage]);
    const navigate = useNavigate();
    const nextProductDetail = (item) => {
      const state = { item };
      navigate(`/productdetail/${item.name}`, { state });
    };
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
              style={{
                marginBottom: 16,
                width: 300,
                position: "relative",
                objectFit: "cover",
              }}
              cover={
                <img
                  key={item.id}
                  loading="lazy"
                  onClick={() => nextProductDetail(item)}
                  style={{ height: 200, objectFit: "cover" }}
                  alt="example"
                  src={item.image}
                />
              }
              hoverable
            >
              <Meta avatar={<Avatar src={logo2} />} title={item.name} />
              {token === "dieuvang.vn" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 10,
                  }}
                >
                  <Popconfirm
                    title="Xóa sản phẩm"
                    description={`Bạn có muốn xóa sản phẩm ${item.name} không ?`}
                    onConfirm={() => confirm(item.id)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button style={{ width: 80 }} type="primary" danger>
                      Delete
                    </Button>
                  </Popconfirm>

                  <Button
                    onClick={() => editproduct(item)}
                    style={{ width: 80 }}
                    type="primary"
                  >
                    Edit
                  </Button>
                </div>
              ) : null}
            </Card>
          </Col>
        ))}
      </Row>
    );
  });

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
        <Title style={{ textAlign: "center" }}>
          {" "}
          {t("product_page.product_1")}
        </Title>
        {token === "dieuvang.vn" ? (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => addProduct()}
              type="primary"
              icon={<PlusOutlined />}
            >
              Add Product
            </Button>
          </div>
        ) : null}
        <Modal
          centered
          open={modal1Open}
          closable={true}
          onCancel={() => setModal1Open(false)}
          footer={null}
        >
          <div>
            <div>
              <h2 className="login-title">Thêm sản phẩm</h2>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="name product" />
                </Form.Item>

                <Form.Item
                  name="image"
                  rules={[
                    { required: true, message: "Please input your image!" },
                  ]}
                >
                  <Input
                    type="file"
                    placeholder="image"
                    onChange={handleImageUpload}
                  />
                </Form.Item>

                <Form.Item
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please input your description!",
                    },
                  ]}
                >
                  <Input placeholder="description" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-button"
                  >
                    Thêm sản phẩm
                  </Button>
                </Form.Item>
              </Form>
              {loading === true ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <Spin />
                </div>
              ) : null}
            </div>
          </div>
        </Modal>

        <Modal
          centered
          open={modal2Open}
          closable={true}
          onCancel={() => setModal2Open(false)}
          footer={null}
        >
          <div>
            <div>
              <h2 className="login-title">Sửa sản phẩm {editData.name}</h2>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish2}
                // onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="name product" value={"dasd"} />
                </Form.Item>

                <Form.Item
                  name="image"
                  rules={[
                    { required: true, message: "Please input your image!" },
                  ]}
                >
                  <Input
                    type="file"
                    placeholder="image"
                    onChange={handleImageUpload}
                  />
                </Form.Item>

                <Form.Item
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please input your description!",
                    },
                  ]}
                >
                  <Input placeholder="description" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-button"
                  >
                    Cập nhật sản phẩm
                  </Button>
                </Form.Item>
              </Form>
              {loading === true ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <Spin />
                </div>
              ) : null}
            </div>
          </div>
        </Modal>

        {contextHolder}
        <ProductList productList={data} />
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={data?.length}
          onChange={handlePageChange}
          style={{ marginTop: 16, textAlign: "center" }}
        />
      </div>
    </div>
  );
}

export default Cashew1;
