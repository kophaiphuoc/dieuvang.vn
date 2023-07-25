import React from "react";
function Recruitment() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 550,
        }}
      >
        <img
          style={{ objectFit: "cover", width: "100%", height:'100%' }}
          src="https://salagarden.vn/wp-content/uploads/2021/06/tro-thanh-doi-tac.jpg"
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
          <p style={{ margin: 0, fontSize: "24px" }}>Đang cập nhật</p>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
