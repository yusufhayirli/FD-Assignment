import React from "react";
import styles from './App.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderMenuProps {
  menus: {
    label: string,
    icon: string,
    header: string,
    text: string
  }[];
  selectedMenu: {
    icon: string,
    label: string,
    header: string,
    text: string
  };
  setSelectedMenu: (value: React.SetStateAction<{
    icon: string,
    label: string,
    header: string,
    text: string
  }>) => void
}

const SliderMenu:React.FC<SliderMenuProps> = ({ menus, selectedMenu, setSelectedMenu }) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {menus.map(item => (
          <div
            key={item.label}
            className={`${styles.menuItem} ${item.label === selectedMenu.label ? styles.menuItemSelected : ''}`}
            onClick={() => setSelectedMenu(item)}
          >
            <div className={styles.icon}><img src={item.icon} alt="" /></div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderMenu;