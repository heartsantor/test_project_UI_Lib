
import Link from 'next/link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';

import HomeIcon from '../assets/icons/HomeIcon'
import DashboardIcon from '../assets/icons/DashboardIcon'
import TableIcon from '../assets/icons/TableIcon'
import ClipIcon from '../assets/icons/ClipIcon'
import DocumentsIcon from '../assets/icons/DocumentsIcon'

import styles from '../styles/drower.module.css'
const CustromDrawer = () => {

    return (
        <div className={styles.root}>
            <Toolbar >
                <h2 className={styles.banner}>Gull</h2>
            </Toolbar>
            <List className={styles.lists}>
                <Link href="/">
                    <ListItem button >
                        <DashboardIcon />
                        <p>DashBoard</p>
                    </ListItem>
                </Link>
                <Link href="/table">
                    <ListItem button >
                        <TableIcon />
                        <p>Table</p>
                    </ListItem>
                </Link>
                <Link href="/clipboard">
                    <ListItem button >
                        <ClipIcon />
                        <p>ClipBoard</p>
                    </ListItem>
                </Link>
                <Link href="/clipboard">
                    <ListItem button >
                        <DocumentsIcon />
                        <p>Documents</p>
                    </ListItem>
                </Link>
            </List>
        </div>
    )
}

export default CustromDrawer
