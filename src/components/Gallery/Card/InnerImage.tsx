import React, { FC } from 'react';
import styles from './Card.module.scss';

const InnerImage:FC<{src: string}> = ({ src, }) => {
    return (
        <div className={styles.img} style={{ background: `url(${src})`, }}>

        </div>
    );
};

export default InnerImage;
