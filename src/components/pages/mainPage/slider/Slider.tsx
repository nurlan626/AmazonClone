import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import './Slider.scss'

const imagesURL = [
    'https://ik.imagekit.io/dq9uhaniye9/Amazon/slider/03_O3oDCj9ql.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646473805161',
    'https://ik.imagekit.io/dq9uhaniye9/Amazon/slider/02_lowrdEbqm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646473805157',
    'https://ik.imagekit.io/dq9uhaniye9/Amazon/slider/04_y4H530Gh7vWl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646473805151',
    'https://ik.imagekit.io/dq9uhaniye9/Amazon/slider/01_1nmDLkJApus.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646473805086'
]
const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = imagesURL.length;
    
    useEffect(() => {
        let sliderTiming = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
        }, 5000);
        return () => {
            clearInterval(sliderTiming)
        }
    },[current]);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(imagesURL) || imagesURL.length <= 0) {
        return null;
    }

    

    return (
        <section className='slider'>
            <MdKeyboardArrowLeft className='left-arrow' onClick={prevSlide} />
            <MdKeyboardArrowRight className='right-arrow' onClick={nextSlide} />
            {imagesURL.map((image, index) => {
                return (
                    <div className={index === current ? "slide active" : 'slide'} key={index}>
                        {index === current && (
                            <img src={image} alt="travelImage" className='image' />
                        )}
                    </div>
                )
            })}
        </section>

    )
}

export default Slider