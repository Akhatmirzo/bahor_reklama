import React from 'react';

import assets from '../assets/assets';

const About = () => {
  return (
    <div className='padding-global'>
        <div className="global-container">
            <div className="section-large section-bottom-large">
                <div className="about-component">
                    <div className="about-top-content">
                      <h2>Biz haqimizda</h2>
                      <div className='b-top-content'>
                        <p className='text-size-regular'>Bizning reklama agentligimiz — kompaniyangizning muvaffaqiyatli va o'ziga xos brend qiyofasini yaratishga ixtisoslashgan jamoa. Biz professional logo dizayn, brend identifikatsiyasi, va boshqa barcha turdagi grafik dizayn xizmatlarini taklif etamiz.</p>
                      </div>
                    </div>
                    <div className="about-bottom-content">
                      <div className="image-wrapper">
                        <img src={assets.About1} alt="" />
                      </div>
                      <div className="image-wrapper">
                        <img src={assets.About2} alt="" />
                      </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;