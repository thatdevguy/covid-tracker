import React from 'react';
import { Button } from '@material-ui/core';

import styles from './Info.module.css';

const Info = () => {
    const WHO_url = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public";
    return (
        <div className={styles.container}>
            <Button href={WHO_url} target="_blank" color="primary">Advice from WHO</Button>
        </div>
    )
}

export default Info;