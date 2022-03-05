import React from 'react'
import './AdvertisementFour.scss'
interface AdvertisementFourProps {
    data: any
}
const AdvertisementFour: React.FC<AdvertisementFourProps> = ({data}) => {
    return (
        <div className="advertisementFour_main">
            <div className='advertisementFour__header'>{data.title}</div>
            <div className='advertisementFour__body'>
                <img src={data.img1} width='300px' alt="img" />
                <img src={data.img2} width='300px' alt="img" />
                <img src={data.img3} width='300px' alt="img" />
                <img src={data.img4} width='300px' alt="img" />
            </div>
            <div className='advertisementFour__footer'>See more</div>
        </div>
  )
}

export default AdvertisementFour