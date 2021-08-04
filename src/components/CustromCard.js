import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from '../styles/card.module.css'

const CustromCard = ({icon,title,amount,color,colorlight}) => {


    return (
        <Card className={styles.main}>
            <CardContent>
                <div className={styles.cardwrapper}>
                    <div className={styles.persion} style={{backgroundColor:colorlight}}>
                    {icon}
                    </div>
                    <div className={styles.textwrapper}>
                        <p>{title}</p>
                        <span style={{color:color}}>{amount}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CustromCard
