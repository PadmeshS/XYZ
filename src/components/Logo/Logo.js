import React from 'react';

import styles from './Logo.module.css';
import Eden_Logo from '../../icons/Eden_Logo.PNG';

const Logo = () => {
    return <div className={styles.logo}>
        <img src={Eden_Logo} alt="" />
    </div>
};

export default Logo;