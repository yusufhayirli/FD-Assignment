import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import SectionContent from "./SectionContent";
import SelectedAnimation from "./SelectedAnimation";
import SliderMenu from "./SliderMenu";
import DocumentIcon from "./icons/DocumentIcon.svg";
import CertifiedIcon from "./icons/CertifiedIcon.svg";
import QRIcon from "./icons/QRIcon.svg";
import TimeCircleIcon from "./icons/TimeCircleIcon.svg";
import FileExportIcon from "./icons/FileExportIcon.svg";

const menuItems = [
  { icon: DocumentIcon, label: 'Document Scanner', header: 'Scan with Ease', text: 'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT and Word Format'},
  { icon: CertifiedIcon, label: 'Sign & Stamp', header: 'One-Tap Focus', text: 'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!'},
  { icon: QRIcon, label: 'Batch Scanning', header: 'Multiple Page Scan', text: 'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.' },
  { icon: TimeCircleIcon, label: 'Advanced Filters', header: 'Unique Filters', text: 'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.' },
  { icon: FileExportIcon, label: 'Export & Share', header: 'All-Round Conversion', text: 'Export your cans as PDF, JPG, ZIP, TXT and Word.' },
];

const NavigationMenu = () => {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1000px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1000px)")
    .addEventListener('change', e => setMatches( e.matches ));
    handleReload();
  }, [selectedItem]);

  const [reloadKey, setReloadKey] = useState(0);

  const handleReload = () => {
    setReloadKey(prevKey => prevKey + 1);
  };

  return (
    <div className='container'>
      <div className={styles.contentWrapper}>
        <div className={styles.media} key={reloadKey}>
          <SelectedAnimation
            label={selectedItem.label}
          />
        </div>
        <div className={styles.description}>
          <SectionContent
            label={selectedItem.label}
            menus={menuItems}
          />
        </div>
      </div>
      {matches ? 
        <div className={styles.menuContainer}>
        {menuItems.map(item => (
          <div
            key={item.label}
            className={`${styles.menuItem} ${item.label === selectedItem.label ? styles.menuItemSelected : ''}`}
            onClick={() => setSelectedItem(item)}
          >
            <div className={styles.icon}>
                <img src={item.icon} alt="" />
            </div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
          
        </div>
      :
        <div>
          <SliderMenu 
            menus={menuItems}
            selectedMenu={selectedItem}
            setSelectedMenu={setSelectedItem}
          />
        </div>
      }
      
    </div>
  );
};

export default NavigationMenu;
