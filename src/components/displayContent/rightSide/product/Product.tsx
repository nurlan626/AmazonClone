import React from 'react'
import "./product.scss"

const Product: React.FC = () => {
  return (
    <div>
        <div className='product_image'><img src="https://ik.imagekit.io/dq9uhaniye9/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65__oxGXB8Kyo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646048487182"  height='280px' alt="img" /></div>
        <div className='product_name'>Apple iPhone 12 Pro, 128GB, Pacific Blue - Unlocked (Renewed Premium)</div>
        <div className='product_rating'>36.78</div>
        <div className='product_price'>50.999</div>
    </div>
  )
}

export default Product; 