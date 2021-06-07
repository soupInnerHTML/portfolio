import React, { FC, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/storeHooks';
import { fetchWorks } from '../../store/gallery/worksSlice';
import { fetchCredentials } from '../../store/credentionals/credentialsSlice';
import Card from './Card';
import styles from './Gallery.module.scss'

const Grid:FC<{}> = () => {
    const { worksList, } = useTypedSelector((state) => state.works)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchWorks())
        dispatch(fetchCredentials())
    }, [])
    return (
        <div className={styles.container}>
            {worksList.map(({ id, ...work }) => (
                <Card
                    key={id}
                    {...work}
                />
            ))}
            <div className={styles.offset}/>
        </div>
    );
};

export default Grid;
