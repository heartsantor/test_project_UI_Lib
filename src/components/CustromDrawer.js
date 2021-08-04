import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';

import HomeIcon from '../assets/icons/HomeIcon'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     appbarcontent:{
//         display: 'flex',
//         justifyContent:'center',
//         flexDirection:'column',
//         alignItems:'center'
//     }
// }));



const CustromDrawer = () => {

    return (
        <div >
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
