import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

import "./Banner.css";
type Props = {};

const Banner = (props: Props) => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#000",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        backgroundImage: "url(images/slider.jpg)",
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Eid Collection
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Let customers speak for us
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            The handbag has now become a very important part of
                            the wardrobes of modern women. Where they are
                            labeled as fashion staples of the modernized world,
                            they also represent several benefits for the users.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Handbags
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        How to select the accurate size and style of handbags?
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Whether you want a shoulder bag, tote, crossbody
                            bag, satchels, clutch, a bucket, hobo, or a
                            backpack, you will get a huge and unique range of
                            handbags at astore to create magic in your
                            wardrobes.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
