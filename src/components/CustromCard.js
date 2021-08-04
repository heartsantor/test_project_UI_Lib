import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PersionIcon from '../assets/icons/PersionIcon'

import styles from '../styles/card.module.css'

const CustromCard = () => {


    return (
        <Card className={styles.main}>
            <CardContent>
                <div className={styles.cardwrapper}>
                    <div className={styles.persion}>
                    <PersionIcon/>
                    </div>
                    <div className={styles.textwrapper}>
                        <p>New Leds</p>
                        <span>102</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CustromCard
