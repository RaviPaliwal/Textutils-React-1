import React from 'react'
export default function Alert(props) {
  return (
    <div style ={{'height':'60px'}}>
  {props.alert&&<div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show floating`} role="alert">
      <strong> {props.alert.msg} </strong>
</div>
    </div>}
    </div>
  )
}