import App from 'next/app'
import './../../styles/main.scss'
import "./../../styles/books.scss";

class MyApp extends App  {

    render() {

        const  { Component, pageProps } = this.props

        return (
            <div className="App">
                <Component {...pageProps}  />
            </div>
        )
    }

}

export default MyApp;