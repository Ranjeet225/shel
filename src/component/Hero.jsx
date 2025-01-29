import React from 'react'


const services = [
    { img: "./public/h2.png", name: "Hair Services" },
    { img: "./public/h3.png", name: "Nail Services" },
    { img: "./public/h3.png", name: "Skincare" },
    { img: "./public/h2.png", name: "Waxing and Hair Removal" },
    { img: "./public/h2.png", name: "Makeup Services" },
    { img: "./public/h2.png", name: "Spa Services" },
];
const Hero = () => {
  return (
    <div className="container">
            <h2>What are you looking for?</h2>
            <div className="services">
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        <img src={service.img} alt={service.name} />
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Hero