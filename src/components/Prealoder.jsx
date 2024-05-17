import React, { useEffect, useState } from "react";
import Load from "../assets/images/loader.svg";
const Prealoder = () => {
  const [load, setload] = useState(0);
  useEffect(() => {
    setload(0);
    setTimeout(() => {
      setload(1);
      document.body.classList.remove("overflow-hidden");
    }, 4000);
  }, []);
  return (
    <>
      {load === 0 ? (
        <div className="prealoder overflow _hidden">
          <div className="load_size">
            <img className="w-100" src={Load} alt="" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Prealoder;
