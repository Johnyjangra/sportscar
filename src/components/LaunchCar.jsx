import React from "react";

const LaunchCar = () => {
  return (
    <div className="position-relative">
      <div className="trnsprnt_div">
        <div className="my_container h-100 d-flex align-items-center ">
          <div className="m_50 mx_md_70 position-relative">
            <div className="bg-white p-md-5 p-4 op_07 rdc_24">
              <p className="ff_pop fs_sm fw-medium mb-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                odio, qui accusantium dolore, nemo officia sit culpa error
                maxime consectetur dignissimos magnam dicta et autem veritatis
                ratione aliquam possimus molestias!
              </p>
            </div>
            <div className="car_red">
              <img
                className="w-100 h-100"
                src="https://cdnb.artstation.com/p/assets/images/images/011/131/393/large/alay-patel-07.jpg?1528020733"
                alt=""
              />
            </div>
            <div className="car_red2 position-relative">
              <img
                className="w-100 h-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonMNOZ-gDBtvxsX8Cf-EBV_aPYgCi2ClV1b4Ai-7rkuD_nVESPFQyxDnhqk3m5_vE_Eo&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="launch_bg"></div>
      {/* <div className="trnsprnt_div"></div> */}
    </div>
  );
};

export default LaunchCar;
