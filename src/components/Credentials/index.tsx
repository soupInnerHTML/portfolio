import React from 'react';
import { useTypedSelector } from '../../hooks/storeHooks';

const Credentials = () => {
    const { gmail, telegram, github, } = useTypedSelector((state) => state.credentials)
    return (
        <div>
            <p>{gmail}</p>
            <p>{telegram}</p>
            <p>{github.profileLink}</p>
            <p>{github.profileName}</p>
        </div>
    );
};

export default Credentials;
