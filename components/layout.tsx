import Head from  'next/head'
import Navbar from './navbar'

const Layout = (props) => {
    return (
        <div className="layout">
            <Head> 
                <title>Book Store</title>
            </Head>

            <Navbar />

            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout