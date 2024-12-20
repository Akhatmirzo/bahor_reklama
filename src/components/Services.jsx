import React from 'react';

import assets from '../assets/assets';

const Services = () => {
  return (
    <div className='padding-global'>
        <div className='global-container'>
            <div className="section-bottom-large">
                <div className="service-component">
                    <div className="service-top-content">
                        <h2>Bizning xizmatlar</h2>
                    </div>
                    <div className='flex flex-col gap-[40px] sm:gap-[30px]'>
                        <div className='flex items-start gap-[40px] media-change lg:flex-wrap sm:gap-[15px]'>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service1} alt="Service" />
                                </div>
                                <h5>Banner</h5>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service2} alt="Service" />
                                </div>
                                <h5>Vizitka</h5>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service3} alt="Service" />
                                </div>
                                <h5>Flayer</h5>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service4} alt="Service" />
                                </div>
                                <h5>Logotip</h5>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service2} alt="Service" />
                                </div>
                                <h5>Belgilar</h5>
                            </div>
                        </div>
                        <div className='flex items-start gap-[40px] media-change lg:flex-wrap sm:flex-col sm:gap-[15px]'>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service1} alt="Service" />
                                </div>
                                <h5>Orakal</h5>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service2} alt="Service" />
                                </div>
                                <h5>Plotter</h5>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service1} alt="Service" />
                                </div>
                                <h5>Tablo</h5>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='service-icon-wrap'>
                                    <img src={assets.Service2} alt="Service" />
                                </div>
                                <h5>Nurli qutilar</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Services;