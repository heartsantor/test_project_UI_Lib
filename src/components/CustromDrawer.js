import { useRouter } from 'next/router';
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
    const router = useRouter();

    function isActive(route) {
        if (route == router.pathname) {
            return 'active';
        } else '';
    }
    return (
        <div className={styles.root}>
            <Toolbar >
                <Link href="/"><h2 className={styles.banner}>Gull</h2></Link>
            </Toolbar>
            <List className={`${styles.lists}`}>
                <Link href="/">
                    <ListItem button className={isActive('/')}>
                        <DashboardIcon />
                        <p>DashBoard</p>
                    </ListItem>
                </Link>
                {/* </div> */}
                <Link href="/table">
                    <ListItem button className={isActive('/table')}>
                        <TableIcon />
                        <p>Table</p>
                    </ListItem>
                </Link>
                <Link href="/clipboard">
                    <ListItem button className={isActive('/clipboard')}>
                        <ClipIcon />
                        <p>ClipBoard</p>
                    </ListItem>
                </Link>
                <Link href="/documents">
                    <ListItem button className={isActive('/documents')}>
                        <DocumentsIcon />
                        <p>Documents</p>
                    </ListItem>
                </Link>
            </List>
        </div>
    )
}

export default CustromDrawer
