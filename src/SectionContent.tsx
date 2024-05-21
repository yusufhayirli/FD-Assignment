import React from 'react';
import styles from './App.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

interface SectionContentProps {
  label: string;
  menus: {
    label: string,
    icon: string,
    header: string,
    text: string
  }[];
}

const SectionContent: React.FC<SectionContentProps> = ({ label, menus }) => {

  const labelContent = menus.find(item => item.label === label);

  if (!labelContent) {
    return (
      <div className={styles.selectedContentField}>
        <div>
          <h2>{label}</h2>
          <div>No content available for this label.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.selectedContentField}>
      <div className={styles.ContentDiv}>
        <h1>{label}</h1>
        <h2>{labelContent.header}</h2>
        <div className={styles.TextField}>{labelContent.text}</div>
        <Button className={styles.learnMoreButton} variant="outline-dark">Learn More</Button>
      </div>
    </div>
  );  
};

export default SectionContent;
