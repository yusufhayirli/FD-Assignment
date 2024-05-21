import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import DocumentPhone from "./icons/DocumentPhone.svg";
import SignStampPhone from "./icons/SignStampPhone.svg";
import EmptyPhone from "./icons/EmptyPhone.svg";
import UniqueFiltersPhone from "./icons/UniqueFiltersPhone.svg";
import ExportPhone from "./icons/ExportPhone.svg";
import CompletedImage from "./icons/CompletedImage.svg";
import SignatureImage from "./icons/SignatureImage.svg";
import LeftBar from "./icons/LeftBar.svg";
import RightBar from "./icons/RightBar.svg";
import Batch1 from "./icons/Batch1.svg";
import Batch2 from "./icons/Batch2.svg";
import Batch3 from "./icons/Batch3.svg";
import Vector from "./icons/Vector.svg";
import PDFImage from "./icons/pdfImage.svg";
import JPGImage from "./icons/jpgImage.svg";
import TXTImage from "./icons/txtImage.svg";

interface SectionAnimationProps {
  label: string;
}

const SectionAnimation: React.FC<SectionAnimationProps> = ({ label }) => {

  // Animation times
  const [inTime, setInTime] = useState<boolean>(false);
  const [firstBatch, setFirstBatch] = useState<boolean>(false);
  const [secondBatch, setSecondBatch] = useState<boolean>(false);
  const [thirdBatch, setThirdBatch] = useState<boolean>(false);
  const [vectorSlideIn, setVectorSlideIn] = useState<boolean>(false);
  const [pdfSlideIn, setPdfSlideIn] = useState<boolean>(false);
  const [jpgSlideIn, setJpgSlideIn] = useState<boolean>(false);
  const [txtSlideIn, setTxtSlideIn] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      setInTime(true);
      setFirstBatch(true);
      setVectorSlideIn(true);
    }, 1000);
    setInterval(() => {
      setPdfSlideIn(true);
    }, 1200);
    setInterval(() => {
      setJpgSlideIn(true);
    }, 1400);
    setInterval(() => {
      setTxtSlideIn(true);
    }, 1600);
    setInterval(() => {
      setSecondBatch(true);
    }, 1500);
    setInterval(() => {
      setThirdBatch(true);
    }, 2000);
  }, [label]);

  return (
    <div className={styles.selectedAnimationField}>
      {label === 'Document Scanner' ? (
        <div>
          <div className={styles.PhoneLayout}>
            <img src={DocumentPhone} alt="" />
          </div>
        </div>
      ) : label === 'Sign & Stamp' ? (
        <div className={styles.PhoneLayout}>
          {inTime && <img className={styles.SignatureImage} src={SignatureImage} alt="" />}
          <div>
            <img src={SignStampPhone} alt="" />
          </div>
          {inTime && <img className={styles.CompletedImage} src={CompletedImage} alt="" />}
        </div>
      ) : label === 'Batch Scanning' ? (
        <div>
          <div className={styles.PhoneLayout}>
            <img src={EmptyPhone} alt="" />
              {firstBatch && <img className={styles.FirstBatchImage} src={Batch1} alt="" />}
              {secondBatch && <img className={styles.SecondBatchImage} src={Batch2} alt="" />}
              {thirdBatch && <img className={styles.ThirdBatchImage} src={Batch3} alt="" />}
          </div>
        </div>
      ) : label === 'Advanced Filters' ? (
        <div>
          <div className={styles.PhoneLayout}>
            {inTime && <img className={styles.LeftBarImage} src={LeftBar} alt="" />}
            <img src={UniqueFiltersPhone} alt="" />
            {inTime && <img className={styles.RightBarImage} src={RightBar} alt="" />}
          </div>
        </div>
      ) : label === 'Export & Share' ? (
        <div>
          <div className={styles.PhoneLayout}>
            <img src={ExportPhone} alt="" />
            {vectorSlideIn && <img className={styles.Vector} src={Vector} alt="" />}
            {pdfSlideIn && <img className={styles.PDFImage} src={PDFImage} alt="" />}
            {jpgSlideIn && <img className={styles.JPGImage} src={JPGImage} alt="" />}
            {txtSlideIn && <img className={styles.TXTImage} src={TXTImage} alt="" />}
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.PhoneLayout}>
            No content available for this label.
          </div>
        </div>
      )}
    </div>
  );  
};

export default SectionAnimation;
