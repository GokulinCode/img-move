import {useRef, useEffect} from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Trigger() {
  const imgRef = useRef(null);
  const imgRef1 = useRef(null);
  useEffect(() => {
    const el = imgRef1.current;
    gsap.fromTo(el, {transform: "translateX(0px)", opacity: "0.2"}, {transform: "translateX(-120px)",opacity: "1", duration: 3, scrollTrigger:{
      trigger: el
    }})
  },[])
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, {transform: "translateX(0px)", opacity: "0.2"}, {transform: "translateX(-120px)",opacity: "1", duration: 3, scrollTrigger:{
      trigger: el
    }})
  },[])
 
  return (
    <>
    <div className="container-fluid model">
      <div className="container ">
      <div className="row">
<div className="col-lg-12 model1">
<h1>
Why AR ?</h1>
<h5>Out-of-the-box experience - Augmented reality allows brands to offer unique and immersive digital experiences, and to engage consumers in a memorable way.
Leverage marketing filters are everywhere. What started off with just bunny ears and a bit of makeup, now uses AR and has become a powerful tool for brands to market themselves.
Fun and easy - Brands can leverage these creative and fun ways to increase brand awareness and boost the sales of their products or services!</h5>
</div>
      </div>
      </div>
      </div>
    <div className="container-fluid model2">
    <div className="row">
        <div className="col-lg-4">
         
        </div>
        <div className="col-lg-4 mikki"><h1>
MIKKI GALAN</h1>
<p>We joined hands with the most colorful and talented lifestyle influencer from the Philippines to make a personalized filter for her that vibes well with her personality. She loved the final filter with real-looking flying butterflies & hazel grey lenses with sparkles around like her sparkling smile.</p>
<a href="">TRY NOW</a></div>
  
        <div className="col-lg-4 move-image">
          <img src="https://static.wixstatic.com/media/198499_0803465314724fc1950a474b13baa380~mv2.png/v1/fill/w_498,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ButterFly.png" alt="spiderman" ref={imgRef}/>
        </div>
      </div>
     
    </div>
    <div className="container-fluid oreo">
    <div className="row">
        <div className="col-lg-4">
         
        </div>
        <div className="col-lg-4"><h1>

        OREO</h1>
<p>We collaborated with Oreo and V-serv in the spirit of international cookie day to make it more special and scrumpy for oreo lovers. Dunk as much Oreo in the milk in the span of 30 seconds, this campaign was a huge success as the virtual cookie environment brings life to the whole concept of finding your own cookie & dunking into the world surrounded by Oreo. The audience enjoyed this luscious virtual treat by tapping on the Oreo and dunking it right into the milk.</p>
</div>
  
        <div className="col-lg-4 move-image1">
          <img src="https://static.wixstatic.com/media/198499_912d856f92684977a45f1fdbaf8bb655~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Oreo%20cookie.png" alt="spiderman" ref={imgRef1}/>
        </div>
      </div>
     
    </div>
    
    </>
  )
}

export default Trigger;
