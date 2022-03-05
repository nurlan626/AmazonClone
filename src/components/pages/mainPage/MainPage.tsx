import React from 'react'
import AdvertisementFour from '../../advertisement/advertisementFour/AdvertisementFour';
import AdvertisementOne from '../../advertisement/advertisementOne/AdvertisementOne';
import './MainPage.scss'
// import advertisementOne from '../../advertisement/AdvertisementOne.tsx'
const advertaismentData = [
  {title: "Shop by Category", 
   img1: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/07_rq1QhbU5d.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499479450",
   img2: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/04_ImVE-sU1C.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499478236",
   img3: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/03_2x8eYYtrz0J.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499477900",
   img4: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/01_dSSggOeQQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499477825" },
  {title: "Comfy styles for her", 
   img1: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/05_CodcVAdrI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501100415",
   img2: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/02_-XZ3MsH3IGE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501099637",
   img3: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/04_0RzpHiB5s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501099943",
   img4: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/03_-jZ00zaY_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501099721" },
  

]
const advertaismentOneData = [
  {title: "AmazonBasics", img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/05_LpI39lIYg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499478469"},
  {title: "Beauty picks", img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/06_ZAo6bcBgW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499479310"},
  {title: "Electronics", img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/07_rq1QhbU5d.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499479450"},
  {title: "Computers & Accessories", img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/11_BmXv5Y4_M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499480686"},
  {title: "Deals & Promotions", img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/09_CSguUZWRlBk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499480009"},
  {title: "Easy returns", img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/10_La52YnAKj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499480334"},
  {title: "Find your ideal TV", img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/08_XfYTojzn_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499479795"},
  {title: "Get fit at home", img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages/02_NxGZN4CQg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646499477825"},
  {title: 'For your Fitness Needs', img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/01_s3NQzzTko.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501099722"},
  {title: 'Create with strip lights', img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/06_xlGx4k-g5sk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501100584"},
  {title: 'Kindle E readers', img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/07_7mDEb9dBW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501100860"},

  {title: 'Shop activity trackers and smartwatches', img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/08_uUfRd8vRM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501101152"},
  {title: 'Shop Pet supplies', img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/09_HtyIUSKiq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501101419"},
  {title: 'New arrivals in Toys', img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/10_ixLFogk9H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501101754"},
  {title: 'Shop Laptops & Tablets', img: "https://ik.imagekit.io/dq9uhaniye9/Amazon/adverteisment/homePages2/11_VGvUTvZhF4l.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501102186"},



]

const MainPage: React.FC = () => {
  return (
    <div className='mainPage'>
      <div className='advertisementBox'>
        <AdvertisementFour data={advertaismentData[0]}/>
        <AdvertisementOne data={advertaismentOneData[1]}/>
        <AdvertisementOne data={advertaismentOneData[2]}/>
        <AdvertisementOne data={advertaismentOneData[3]}/>
        <AdvertisementOne data={advertaismentOneData[4]}/>
        <AdvertisementOne data={advertaismentOneData[5]}/>
        <AdvertisementOne data={advertaismentOneData[6]}/>
        <AdvertisementOne data={advertaismentOneData[7]}/>
        <img src='https://ik.imagekit.io/dq9uhaniye9/Amazon/01_kugfIdNOE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646500743152' alt="" width='1465px'/>
        <img src='https://ik.imagekit.io/dq9uhaniye9/Amazon/02_t_Q2JPS6M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646500743337' alt="" width='1465px'/>
        <AdvertisementOne data={advertaismentOneData[8]}/>
        <AdvertisementFour data={advertaismentData[1]}/>
        <AdvertisementOne data={advertaismentOneData[9]}/>
        <AdvertisementOne data={advertaismentOneData[10]}/>
        <img src='https://ik.imagekit.io/dq9uhaniye9/Amazon/03_V_Bv3h8lH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646501120345' alt="" width='1465px'/>
        <AdvertisementOne data={advertaismentOneData[11]}/>
        <AdvertisementOne data={advertaismentOneData[12]}/>
        <AdvertisementOne data={advertaismentOneData[13]}/>
        <AdvertisementOne data={advertaismentOneData[14]}/>





      </div>
    </div>
  )
}

export default MainPage;