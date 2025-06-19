import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, they live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 2,
      name: "John De Marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the skyline of her hometown.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They helped me solve my problems and were always available.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional.",
    },
  ];

  return (
    <section id='testimonials' className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">What Our Happy Clients Say</h2>
        <p className="text-gray-600">Things that make it the best place to start trading</p>
      </div>

      {/* Swiper Section */}
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="testimonial-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-full md:py-12 py-4">
              <div className="text-center bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 md:mt-8 mt-4">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
            <BsChevronLeft className="size-6" />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
            <BsChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
