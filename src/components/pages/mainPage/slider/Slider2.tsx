import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import './Slider2.scss'

const images = [
    'https://ik.imagekit.io/dq9uhaniye9/Amazon/slider/03_O3oDCj9ql.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646473805161',
    'https://ik.imagekit.io/dq9uhaniye9/Amazon/slider/02_lowrdEbqm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646473805157',
    'https://ik.imagekit.io/dq9uhaniye9/Amazon/slider/04_y4H530Gh7vWl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646473805151',
    'https://ik.imagekit.io/dq9uhaniye9/Amazon/slider/01_1nmDLkJApus.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646473805086'
]
const Slider = () => {
    const [index, setIndex] = useState(0);
    useEffect(() =>{
        const lastIndex = images.length - 1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if (index > lastIndex){
            setIndex(0);
        }
    },[index, images]);
    
    useEffect(() => {
        let slider = setInterval(() =>{
            setIndex(index + 1);
        }, 3000);
        return () => {
            clearInterval(slider);
        }
    },[index])
     
    return (
        <div className='section'>
            <div className="section-center">
                     {images.map((image, indexImage) =>{
                         let position = 'nextSlide';
                         if(indexImage === index){
                             position = 'activeSlide'
                         }
                         if(indexImage === index - 1 || (index === 0 && indexImage === image.length -1) ){
                             position = "lastSlide"
                         }
                         return (
                             <article className={position} key={indexImage}>
                                 <img src={image} alt="banner_image" className='banner-img'/>

                             </article>
                         )
                     })}
                     <p className='prev' onClick={() => setIndex(index - 1)}>
                     <MdKeyboardArrowLeft />
                     </p>
                     <p className='next' onClick={() => setIndex(index + 1)}>
                     <MdKeyboardArrowRight />
                     </p>
            </div>
 
            
        </div>
    )
}

export default Slider