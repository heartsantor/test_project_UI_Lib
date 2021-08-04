import Header from '../components/Header'
const Layout = ({ children }) => {
    return (
        <>
            <Header>
                {children}
            </Header>
        </>
    )
}

export default Layout
