import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../resources-slider.css'

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <>
      <section className="md:px-20 md:py-20 py-10 px-5 relative bg-[#f4faf3]">
        <div class="bg-white shadow-lg h-14 px-10 absolute md:flex hidden -rotate-12 drop-shadow-xl items-center justify-center gap-x-3 rounded-[2.5rem] border-2 border-primary z-10 left-[35rem] -top-5">
          <img src="/svg/hands-shake.svg" alt="" class="w-10 h-10" />
          <h1 class="text-primary milik text-xs">
            If They Trust Us, So Can You
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="mySwiper relative pb-20"
        >
          <SwiperSlide>
            <div>
              <div class="testimonial-cards font-red-hat">
                <div class="card card-3 rounded-xl relative">
                  <img src="/webp/lanre.webp" />
                  <div className="w-full bg-black/30 text-white py-3 absolute bottom-0 px-3">
                    <h3 className="milik text-lg pt-2">Lanre Edun</h3>
                    <p className="text-xs uppercase">
                      Head of Marketing at Brains & Hammers
                    </p>
                  </div>
                  <div class="card-details text-white cursor-pointer">
                    <img src="/svg/play.svg" alt="" className="play-icon" />
                    <h3 className="milik text-lg pt-2">Hear From Lanre Edun</h3>
                    <p className="text-xs uppercase">
                      Head of Marketing at Brains & Hammers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="testimonial-cards font-red-hat">
                <div class="card card-3 rounded-xl relative">
                  <img src="/webp/kunle.webp" />
                  <div className="w-full bg-black/30 text-white py-3 absolute bottom-0 px-3">
                    <h3 className="milik text-lg pt-2">Kunle Fatimehin</h3>
                    <p className="text-xs md:capitalize ">
                      Director of Digital & Innovation at Kairos HOF
                    </p>
                  </div>
                  <div class="card-details text-white cursor-pointer">
                    <img src="/svg/play.svg" alt="" className="play-icon" />
                    <h3 className="milik pt-2">Hear From Kunle Fatimehin</h3>
                    <p className="text-xs md:capitalize ">
                      Director of Digital & Innovation at Kairos HOF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="testimonial-cards font-red-hat">
                <div class="card card-3 rounded-xl relative">
                  <img src="/webp/emmanuel.webp" />
                  <div className="w-full bg-black/30 text-white py-3 absolute bottom-0 px-3">
                    <h3 className="milik text-lg pt-2">Emmanuel Uge</h3>
                    <p className="text-xs md:capitalize">
                      Director of Sales at Wigwe Infractructure
                    </p>
                  </div>
                  <div class="card-details text-white cursor-pointer">
                    <img src="/svg/play.svg" alt="" className="play-icon" />
                    <h3 className="milik text-lg pt-2">
                      Hear From Emmanuel Uge
                    </h3>
                    <p className="text-xs md:capitalize">
                      Director of Sales at Wigwe Infractructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="testimonial-cards font-red-hat">
                <div class="card card-3 rounded-xl relative">
                  <img src="/webp/doo.webp" className="" />
                  <div className="w-full bg-black/30 text-white py-3 absolute bottom-0 px-3">
                    <h3 className="milik text-lg pt-2">Dooshima Anakaa</h3>
                    <p className="text-xs">
                      Director of Finance at Ikpaahindi Ventures
                    </p>
                  </div>
                  <div class="card-details text-white cursor-pointer">
                    <img src="/svg/play.svg" alt="" className="play-icon" />
                    <h3 className="milik text-lg pt-2">
                      Hear From Dooshima Anakaa
                    </h3>
                    <p className="text-xs">
                      Director of Finance at Ikpaahindi Ventures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="testimonial-cards font-red-hat">
                <div class="card card-3 rounded-xl relative">
                  <img src="/webp/lanre.webp" />
                  <div className="w-full bg-black/30 text-white py-3 absolute bottom-0 px-3">
                    <h3 className="milik text-lg pt-2">Lanre Edun</h3>
                    <p className="text-xs uppercase">
                      Head of Marketing at Brains & Hammers
                    </p>
                  </div>
                  <div class="card-details text-white cursor-pointer">
                    <img src="/svg/play.svg" alt="" className="play-icon" />
                    <h3 className="milik text-lg pt-2">Hear From Lanre Edun</h3>
                    <p className="text-xs uppercase">
                      Head of Marketing at Brains & Hammers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="testimonial-cards font-red-hat">
                <div class="card card-3 rounded-xl relative">
                  <img src="/webp/kunle.webp" />
                  <div className="w-full bg-black/30 text-white py-3 absolute bottom-0 px-3">
                    <h3 className="milik text-lg pt-2">Kunle Fatimehin</h3>
                    <p className="text-xs md:capitalize ">
                      Director of Digital & Innovation at Kairos HOF
                    </p>
                  </div>
                  <div class="card-details text-white cursor-pointer">
                    <img src="/svg/play.svg" alt="" className="play-icon" />
                    <h3 className="milik pt-2">Hear From Kunle Fatimehin</h3>
                    <p className="text-xs md:capitalize ">
                      Director of Digital & Innovation at Kairos HOF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="testimonial-cards font-red-hat">
                <div class="card card-3 rounded-xl relative">
                  <img src="/webp/emmanuel.webp" />
                  <div className="w-full bg-black/30 text-white py-3 absolute bottom-0 px-3">
                    <h3 className="milik text-lg pt-2">Emmanuel Uge</h3>
                    <p className="text-xs md:capitalize">
                      Director of Sales at Wigwe Infractructure
                    </p>
                  </div>
                  <div class="card-details text-white cursor-pointer">
                    <img src="/svg/play.svg" alt="" className="play-icon" />
                    <h3 className="milik text-lg pt-2">
                      Hear From Emmanuel Uge
                    </h3>
                    <p className="text-xs md:capitalize">
                      Director of Sales at Wigwe Infractructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="testimonial-cards font-red-hat">
                <div class="card card-3 rounded-xl relative">
                  <img src="/webp/doo.webp" className="" />
                  <div className="w-full bg-black/30 text-white py-3 absolute bottom-0 px-3">
                    <h3 className="milik text-lg pt-2">Dooshima Anakaa</h3>
                    <p className="text-xs">
                      Director of Finance at Ikpaahindi Ventures
                    </p>
                  </div>
                  <div class="card-details text-white cursor-pointer">
                    <img src="/svg/play.svg" alt="" className="play-icon" />
                    <h3 className="milik text-lg pt-2">
                      Hear From Dooshima Anakaa
                    </h3>
                    <p className="text-xs">
                      Director of Finance at Ikpaahindi Ventures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Testimonials
