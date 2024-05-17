import React from "react";

const CarSlide = () => {
  const image = [
    "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg",
    "https://img.freepik.com/premium-photo/supercar-futuristic-technological-car-design_950002-129401.jpg?w=360",
    "https://images.hdqwalls.com/wallpapers/lamborghini-terzo-millennio-2019-side-view-car-08.jpg",
    "https://t4.ftcdn.net/jpg/06/04/60/29/360_F_604602905_cz8RwEvOU1upYEKfxOPsidtikeDswez4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_J-ZUMaccO0CT5kle7_5UqbDoW1hYhl1AwoAHNSQ1_o4RenkjD2V9L9DFEzwLfocd8M&usqp=CAU ",
    "https://img.freepik.com/premium-photo/supercar-futuristic-technological-car-design_950002-129401.jpg?w=360",
    "https://images.hdqwalls.com/wallpapers/lamborghini-terzo-millennio-2019-side-view-car-08.jpg",
  ];
  return (
    <div className="my_body">
      <div className="slider">
        <div className="slider__container">
          {image.map((image, index) => (
            <div
              className="slider__item"
              style={{ backgroundImage: `url(${image})` }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSlide;
