import Navbar from "./Navbar";
import React from 'react'

export default function About(props) {
  return (<> 
    <div>
        <Navbar head='Text-Utils' mode={props.mode==='light'?"light":"dark"} toggleMode={props.toggleMode}/>
        <div className="container mt-5">
            <div className="jumbotron">
            <h1 className="display-4">About Text-Utils</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead mb-5" >
                <a className="btn btn-primary btn-lg mb-5" href="#" role="button">Learn more</a>
            </p>
            </div>
        </div>
    </div></>
  )
}
