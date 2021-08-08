import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { styled } from '@material-ui/core/styles';

const StyleCard = styled(Card)(({ theme }) => ({
    margin: '5px 12px',
    boxShadow: 'none',
    borderRadius: '24px',
    cursor: 'pointer',
}));

const StyleCardWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& .persion': {
        padding: '27px 10px',
        backgroundColor: theme.palette.common.white,
        borderRadius: '18px'
    },
    '& .textwrapper': {
        marginLeft: '10px',
        '& p': {
            fontSize: '14px',
            lineHeight: '19px',
            margin: '10px 0'
        },
        '& span': {
            fontSize: '30px',
            lineHeight: '41px',
            fontWeight: 'bold',
        }
    }
}));

const CustromCard = ({ icon, title, amount, color, colorlight }) => {

    return (
        <StyleCard>
            <CardContent>
                <StyleCardWrapper>
                    <div className="persion" style={{ backgroundColor: colorlight }}>
                        {icon}
                    </div>
                    <div className="textwrapper">
                        <p>{title}</p>
                        <span style={{ color: color }}>{amount}</span>
                    </div>
                </StyleCardWrapper>
            </CardContent>
        </StyleCard>
    )
}

export default CustromCard
