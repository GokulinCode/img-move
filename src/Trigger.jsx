import { useRef, useEffect } from "react";
import logo from "./Assets/coinbanc logo black (1).png";
import logo1 from "./Assets/logo (2).png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Trigger() {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef1.current;
    gsap.fromTo(
      el,
      { transform: "translateX(0px)", opacity: "0.2" },
      {
        transform: "translateX(-120px)",
        opacity: "1",
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  const imgRef1 = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { transform: "translateX(160px)", opacity: "0.2" },
      {
        transform: "translateX(100px)",
        opacity: "1",
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="container-fluid model">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 model1">
              <h1>Why AR ?</h1>
              <h5>
                Out-of-the-box experience - Augmented reality allows brands to
                offer unique and immersive digital experiences, and to engage
                consumers in a memorable way. Leverage marketing filters are
                everywhere. What started off with just bunny ears and a bit of
                makeup, now uses AR and has become a powerful tool for brands to
                market themselves. Fun and easy - Brands can leverage these
                creative and fun ways to increase brand awareness and boost the
                sales of their products or services!
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid model2">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 mikki">
            <h1>COINBANC</h1>
            <p>
            It is a ongoing DeFi Blockchain Project in BNB. It is a 2 Phase project with IDO in the 
first launch and DeFi in the second Phase
            </p>
            <a target="_blank" href="https://www.coinbanc.app">TRY NOW</a>
          </div>

          <div className="col-lg-4 move-image">
            <img src={logo} alt="spiderman" ref={imgRef} />
          </div>
        </div>
      </div>
      <div className="container-fluid oreo">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <h1>Golden Kitty</h1>
            <p>
            Golden Kitty cake is a DeFi application where in 
a cake bank is created that can be claimed for 
every 4 hours.A smart way to earn additional 
income by investing in Cake token 
            </p>
            <a target="_blank" href="https://goldenkittycake.com/">TRY NOW</a>
          </div>

          <div className="col-lg-4 move-image1">
            <img
              src="https://goldenkittycake.com/images/IMG_4659-p-500.png"
              alt="spiderman"
              ref={imgRef1}
            />
          </div>
        </div>
      </div>








      
    </>
  );
}

export default Trigger;
