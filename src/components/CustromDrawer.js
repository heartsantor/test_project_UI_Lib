import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Toolbar from '@material-ui/core/Toolbar';

import HomeIcon from '../assets/icons/HomeIcon'
const CustromDrawer = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Toolbar >
                <h2>Gull</h2>
            </Toolbar>
            <List>
                <ListItem button >
                    <HomeIcon />
                </ListItem>
                <ListItem button >
                    <p>hlww</p>
                </ListItem>
            </List>
        </div>
    )
}

export default CustromDrawer
