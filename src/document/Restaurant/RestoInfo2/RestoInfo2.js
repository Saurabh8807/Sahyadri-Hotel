import React from 'react'
import './RestoInfo2.css'
import dish from './dish.jpg'
import dish2 from './dish2.png'
import party from './party.jpg'

export default function RestoInfo2() {
  return (
    <div>
        <div>
            <div className='RestoInfo211'>
                <h1 className='RestoInfo211h1'>Our Pride, Our Restaurant</h1>
                <p className='RestoInfo211p'>
                    Asli Taste, one of the best restaurants in Mumbai, which is our family restaurant in Mumbai, adds to the charm of experiencing our hospitality. The roof top restaurant in Mumbai does not merely offer scrumptious foods and an excellent view of the city. It has the right ambience that seldom fails to feed the soul.
                    <br/>We have clients who love to soak in nature's bounty early in the morning. Also, we cater to families really looking forward to spending family time far away from the usual madding crowd and away from the recurrent pings from the cellphones. Either way, our rooftop hotel in Mumbai has not failed to make a lasting impression.
                </p>
            </div>
            <div>
                <img className='RestoInfo212' src={dish} alt="" />
            </div>
        </div>
        <div>
            <div>
                <img className='RestoInfo221' src={dish2} alt="" />
            </div>
            <div className='RestoInfo222'>
                <h1 className='RestoInfo222h1'>Best Places to Eat in Mumbai</h1>
                <p className='RestoInfo222p'>We have an exquisite range of cuisines to offer, making us of the best places to eat in Mumbai. There are native dishes that resonate with the magic that our chefs have created through generations. Our chefs pick the choicest of vegetables and spices and adhere to the traditional ways of cooking. <br/>They don't believe in shortcuts.
                                            Also, anyone having a liking for the finesse of Continental cuisines can make their choices from our kitchen. We also offer vegetarian-friendly as well vegan delicacies. So when our guests think of Mumbai famous foods, the name of our Govardhan restaurant definitely pops in.
                </p>
            </div>  
            {/* <button className='btn btn-primary BookTable'>Book Table</button> */}
        </div>
        <div>
            <img className='RestoInfo231' src={party} alt="" />
            <h1 className='RestoInfo231h1'>When It Comes To Party</h1>
            <p className='RestoInfo231p'>As one of the top restaurants in Mumbai, we do receive a lot of requests to host family parties, receptions, and similar social gatherings. While we happily accommodate the requests, we do stick to our basic rules. By all means, we are a family restaurant and would not have it in any other way. That is to say. We do not entertain any requests to play music or serve alcohol of any kind. Also, there is no elevator to reach our rooftop restaurant, which is on the 3rd floor. So we welcome one and all to have our hospitality, provided they understand our limitations.</p>
        </div>
    </div>
  )
}
