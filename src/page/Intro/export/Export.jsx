import React from "react";
import { Popover } from "antd";
import { EnvironmentTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import '../export/Export.css'
function Export() {
    const { t } = useTranslation();
  const dotsData = [
    {
      key: 1,
      title: t('export_page.dot_1'),
      content: t('export_page.title_dot_1'),
      left: "25%",
      top: "40%",
    },
    {
      key: 2,
      title: t('export_page.dot_2'),
      content: t('export_page.title_dot_2'),
      left: "50%",
      top: "30%",
    },
    {
      key: 3,
      title: t('export_page.dot_3'),
      content:  t('export_page.title_dot_3'),
      left: "30%",
      top: "20%",
    },
    {
      key: 4,
      title: t('export_page.dot_4'),
      content:  t('export_page.title_dot_4'),
      left: "35%",
      top: "60%",
    },
    {
      key: 5,
      title: t('export_page.dot_5'),
      content:  t('export_page.title_dot_5'),
      left: "80%",
      top: "60%",
    },
  ];

  const renderDots = () => {
    return dotsData.map((dot) => (
      <Popover
        key={dot.key}
        title={dot.title}
        content={dot.content}
        trigger="hover"
      >
        <EnvironmentTwoTone className="dot"
          style={{
            left: dot.left,
            top: dot.top,
            fontSize:25
          }}/>
      </Popover>
    ));
  };
  return (
    <div className="map-container" style={{ position: "relative" }}>
      <img
        style={{ width: "100%", height: "100%",backgroundColor:'#6b6b6b' }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1024px-World_map_blank_without_borders.svg.png"
      ></img>
      {renderDots()}
    </div>
  );
}

export default Export;
