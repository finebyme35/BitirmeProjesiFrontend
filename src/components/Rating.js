import React, { useEffect } from 'react'

function Rating({ value, text, color }) {
    
    return (
        <div className="rating">
            <span>
                <i style={{ color }} className={
                    value >= 1
                        ? 'fa fa-star' : ''
                        
                }>
                    
                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 2
                        ? 'fa fa-star' : ''
                        
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 3
                        ? 'fa fa-star' : ''                        
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 4
                        ?  'fa fa-star' : ''
                       
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value == 5
                        ? 'fa fa-star' : ''
                        
                }>

                </i>
            </span>

            <span>{text && text}</span>
        </div>
    )
}

export default Rating