import React from "react";
import box_1 from "./../../assets/images/box-1.png";
import box_2 from "./../../assets/images/box-2.png";
import box_3 from "./../../assets/images/box-3.png";
import box_4 from "./../../assets/images/box-4.png";
import box_5 from "./../../assets/images/box-5.png";

const FeatureBox = () => {
  const featureArr = [
    {
      deals: ["New", "Hot", "Popular"],
      imgBox: box_1,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      deals: ["Popular"],
      imgBox: box_2,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      imgBox: box_3,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      deals: ["Hot"],
      imgBox: box_4,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      deals: ["New"],
      imgBox: box_5,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      imgBox: box_1,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      deals: ["Popular"],
      imgBox: box_2,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      imgBox: box_3,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      imgBox: box_4,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
    {
      deals: ["New"],
      imgBox: box_5,
      title: "Crazy Designers",
      tasks: ["Streetwear", "Watches"],
      price: "$390",
    },
  ];

  const dealClass = (deal) => {
    switch (deal) {
      case "New":
        return "new-btn";
      case "Hot":
        return "hot-btn";
      case "Popular":
        return "popular-btn";
      default:
        return "";
    }
  };

  return (
    <>
      {featureArr.length > 0 ? (
        featureArr.map((item, i) => (
          <div className="card m-0" key={i}>
            <div className="card-body">
              <div className="d-flex align-items-center gap-1 pos">
                {item.deals?.map((deal, idx) => (
                  <button key={idx} className={dealClass(deal)}>
                    {deal}
                  </button>
                ))}
              </div>

              <div className="img-container">
                <img src={item.imgBox} alt={item.title} />
              </div>

              <div>
                <h3 className="box-title">{item.title}</h3>
                <div className="d-flex align-items-center gap-2">
                  {item.tasks.map((task, idx) => (
                    <button key={idx} className="button primary-btn">
                      {task}
                    </button>
                  ))}
                </div>
                <div className="price-container">
                  <span className="price">{item.price}</span>
                  <span className="price-point">.00</span>
                </div>
                <div className="d-flex align-items-center gap-2 btn-container">
                  <button className="gradient-btn">Open case</button>
                  <button className="btn-info">Info</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="not-found">Not Found</p>
      )}
    </>
  );
};

export default FeatureBox;
