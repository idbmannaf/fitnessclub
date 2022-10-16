import React from 'react'

const OtherHeader = ({title,image,children}) => {
  return (
    <div className="header">
        <div className="header_container">
            <div className="header_container_bg">
                <img src={image} alt="" />
            </div>
           <div className="header_content">
           <h2>{title}</h2>
            <p>{children}</p>
           </div>
        </div>
    </div>
  )
}

export default OtherHeader