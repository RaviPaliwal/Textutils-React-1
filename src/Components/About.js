import Navbar from "./Navbar";
import React from 'react'

export default function About(props) {
  return (<> 
    <div>
        <Navbar head='Text-Utils' mode={props.mode==='light'?"light":"dark"} toggleMode={props.toggleMode}/>
        <div className="container" >
            <div className="jumbotron">
            <h1 className="display-4" >About Text-Utils</h1>
            <p className="lead">This is a Simple App created by me as a starting to learn React js.</p>
            <hr className="my-4"/>
            <p>It has simple functionalities of converting your tezt into Uppercase Lowercase copy and many more</p>
            <p className="lead mb-5 mt-5" >
                <a className="btn btn-primary btn-lg mb-5" href="#" role="button">Thankyou For Visiting</a>
            </p>
            </div>
        </div>
    </div></>
  )
}
