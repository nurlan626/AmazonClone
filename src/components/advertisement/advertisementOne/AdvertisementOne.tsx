import React from 'react'
import "./AdvertisementOne.scss"

interface AdvertisementOneProps {
    data: any
}
const AdvertisementOne: React.FC<AdvertisementOneProps> = ({ data }) => {
    return (
        <>
            <div className="advertisementOne_main">
                <div>
                    <div className='advertisementOne__header'>{data.title}</div>
                    <div className='advertisementOne__body'>
                        <img src={data.img} width='300px' alt="img" />
                    </div>
                </div>

                <div className='advertisementOne__footer'>See more</div>
            </div>

        </>

    )
}

export default AdvertisementOne