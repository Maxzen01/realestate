import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cityData = [
  {
    name: 'Thullur',
    properties: 3,
    image: 'https://media.andhrajyothy.com/media/2024/20241116/Pamchayat_office_f960052f5f_v_gif.webp',
  },
  {
    name: 'Tadepalli',
    properties: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Mangalagiri_town.jpg/1200px-Mangalagiri_town.jpg',
  },
  {
    name: 'Venkatapalem',
    properties: 2,
    image: 'https://content.jdmagicbox.com/comp/guntur/t3/9999px863.x863.230311211237.v3t3/catalogue/ttd-sri-venkateswara-swami-temple-guntur-temples-mZHmjhZTPC.jpg',
  },
  {
    name: 'Mangalagiri',
    properties: 4,
    image: 'https://media.assettype.com/newindianexpress%2F2025-03-20%2F5f1qallc%2FMangalagiri-poised.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100',
  },
  {
    name: 'Rayapudi',
    properties: 6,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Government_complex_under_construction_near_Rayapudi_%28January_2019%29_6.jpg',
  },
  {
    name: 'Mandadam',
    properties: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Aerial_view_of_Mandadam.jpg/1200px-Aerial_view_of_Mandadam.jpg',
  },
];

const CityCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
          Amaravati City
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Buy & sell prime properties in Amaravati – 9 Cities of Amaravati, with Topline Realty!!
        </p>
      </motion.div>

      <Slider {...settings} className="max-w-7xl mx-auto">
        {cityData.map((city, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="px-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-md group hover:shadow-2xl transition duration-300">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                <h3 className="text-lg font-semibold">{city.name}</h3>
                <p className="text-sm">{city.properties} Properties</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default CityCards;
