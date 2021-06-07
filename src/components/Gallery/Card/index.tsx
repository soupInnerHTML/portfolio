import React, { FC } from 'react';
import styles from './Card.module.scss'
import InnerImage from './InnerImage';

const Card:FC<IWork> = ({ name, image, }) => {
    return (
        <div className={styles.container}>
            <InnerImage src={image} />
            <p className={styles.title}>{name}</p>
        </div>
    );
};

export default Card;
