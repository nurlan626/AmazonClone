import React from 'react'
import './LeftSidePanel.scss'

const LeftSidePanel = () => {
  return (
    <div className='leftSide_main'>
        <div className='leftSide_header'> Brands</div>
        <div className='leftSide_brandName'>
            <label className='brandName'>
                <input type='checkbox' value="Apple" />Apple            
            </label>
            <label className='brandName'>
                <input type='checkbox' value="Samsung" />Samsung
            </label>
            <label className='brandName'>
                    <input type='checkbox' value="Mi" />Mi
            </label>
        </div>
    </div>
  )
}

export default LeftSidePanel