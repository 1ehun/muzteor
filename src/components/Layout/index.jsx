import React, { useState } from "react";
import './index.css'
import Header from "../Header";
import Footer from "../Footer";





const Layout = (props) => {



    return (
    <div className='content'>


          <Header/>
            <div className="content-block">
              {props.children}
            </div>
          <Footer/>

    </div>

    )
}

export default Layout