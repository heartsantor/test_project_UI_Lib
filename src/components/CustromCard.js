import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { styled, alpha } from '@material-ui/core/styles';

import styles from '../styles/card.module.css'

const StyleCard = styled(Card)(({ theme }) => ({
    margin: '5px 12px',
    boxShadow: 'none',
    borderRadius: '24px',
    cursor: 'pointer',
}));

const CustromCard = ({ icon, title, amount, color, colorlight }) => {

    return (
        <StyleCard>
            <CardContent>
                <div className={styles.cardwrapper}>
                    <div className={styles.persion} style={{ backgroundColor: colorlight }}>
                        {icon}
                    </div>
                    <div className={styles.textwrapper}>
                        <p>{title}</p>
                        <span style={{ color: color }}>{amount}</span>
                    </div>
                </div>
            </CardContent>
        </StyleCard>
    )
}

export default CustromCard
