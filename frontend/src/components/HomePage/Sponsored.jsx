import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/btechproject2023/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1685102776/BTech%20Project%20Ecommerce%20Web%20App/sony.jpg?_s=public-apps"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/btechproject2023/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1685102898/BTech%20Project%20Ecommerce%20Web%20App/dell.jpg?_s=public-apps"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/btechproject2023/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1685100035/BTech%20Project%20Ecommerce%20Web%20App/lg.jpg?_s=public-apps"
            style={{ height: "80px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/btechproject2023/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1685103134/BTech%20Project%20Ecommerce%20Web%20App/apple.jpg?_s=public-apps"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/btechproject2023/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1685103267/BTech%20Project%20Ecommerce%20Web%20App/microsoft.jpg?_s=public-apps"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/btechproject2023/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1685103370/BTech%20Project%20Ecommerce%20Web%20App/samsung.jpg?_s=public-apps"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
