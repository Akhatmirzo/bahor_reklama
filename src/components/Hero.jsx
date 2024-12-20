import React, { useEffect, useRef } from "react";
import Navbar from './Navbar';

import assets from '../assets/assets';
import { gsap } from "gsap";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Footer from "./Footer";

const Hero = () => {
    const items = [
        "Logotip", 
        "●", 
        "Vizitka", 
        "●", 
        "Tablo", 
        "●", 
        "Flayer",
        "●", 
        "Plotter",
        "●", 
        "Org oyna",
        "●", 
        "Svetodiod",
        "●", 
        "Banner",
        "●", 
        "Orakal",
        "●", 
        "To'rli orakal",
        "●", 
        "Volumetrik harflar",
        "●", 
        "Nurli qutilar",
        "●", 
        "Belgilar",
        "●",
    ];

    const headerRef = useRef(null);
    const iconRefs = useRef([]);
    iconRefs.current = [];
    const trackerRef = useRef(null);
  
    const addToRefs = (el) => {
      if (el && !iconRefs.current.includes(el)) {
        iconRefs.current.push(el);
      }
    };
  
    useEffect(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }
      );
  
      gsap.fromTo(
        iconRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
      );
    }, []);

    useEffect(() => {
        const trackerElement = trackerRef.current;
    
        gsap.to(trackerElement, {
          x: "-100%",
          duration: 25,
          repeat: -1,
          ease: "linear",
        });
    }, []);

  return (
    <>
        <Navbar />
        <div className="pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px]">
            <div className="padding-global">
                <div className="global-container">
                <div className="flex b-hero">
                    <div className="header-bottom-content">
                    <div className="b-hero-top-content">
                        <div className="top-content">
                            <h1 ref={headerRef}>Biznesingiz uchun reklama xizmatlari.</h1>
                        </div>
                    </div>
                    <div className="b-hero-bottom-content">
                        <div className="rate-content" ref={headerRef}>
                            <h4>100%</h4>
                            <h5>Mukammal dizaynlar</h5>
                        </div>
                        <div className="scrollbar" ref={headerRef}>
                            <div className="text-scrollbar">Scroll</div>
                            <div className="b-icon-wrapper">
                                <img src={assets.Arrow} alt="arrow" className="animate-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="b-header-content">
                        <div
                            className="b-header-icon"
                            ref={(el) => addToRefs(el)}
                        >
                            <img src={assets.Rectangle} alt="Rectangle" className="anim-icon" />
                        </div>
                        <div
                            className="b-header-icon _2"
                            ref={(el) => addToRefs(el)}
                        >
                            <img src={assets.Ellipse} alt="Ellipse" className="anim-icon _2" />
                        </div>
                        <div
                            className="b-header-icon _3"
                            ref={(el) => addToRefs(el)}
                        >
                            <img src={assets.Polygon} alt="Polygon" className="anim-icon _3" />
                        </div>
                        <div
                            className="b-header-icon _4"
                            ref={(el) => addToRefs(el)}
                        >
                            <img src={assets.Star} alt="Star" className="anim-icon _4" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="b-hero-banner">
            <div className="padding-global">
                <div className="banner-component">
                    <div className="banner-tracker" style={{ overflow: "hidden" }}>
                        <div
                            className="flex banner-tracker-item"
                            ref={trackerRef}
                            style={{ display: "flex", whiteSpace: "nowrap" }}
                        >
                            {[...items, ...items].map((item, index) => (
                                <div
                                    key={index}
                                    className="banner-tracker-wrap"
                                    style={{ marginRight: "1rem" }}
                                >
                                    <h4>{item}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About />
        <Services />
        <Projects/>
        <Footer />
    </>
  );
};

export default Hero;