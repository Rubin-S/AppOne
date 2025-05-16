import React from 'react'
import {images, review_stats} from '../assets/assets.js'
import SearchBar from '../components/common/SearchBar'
import { FiArrowRight} from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import CTAButton from '../components/common/CTA';
import ProfileBadge from '../components/common/ProfileBadge'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { reviews } from '../assets/assets'; 

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <header className="w-full h-[32rem] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${images.homeBanner})` }}>
        <div className="container flex flex-col justify-center  h-full w-full lg:ml-25 md:ml-15 bg-opacity-50">
          <div className="">
            <p className="text-lg text-white ">Learn about AskIT</p>
            <h1 className="text-3xl text-white  font-bold mt-2 leading-tight md:text-4xl lg:text-5xl">
              Over million skilled Professionals <br /> at your fingertips
            </h1>
            <p className="text-lg text-white  mt-4 md:text-xl lg:text-2xl">
              Your go-to destination for finding trusted experts.
            </p>
            <div className="mt-6">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>

      <section className="md:flex justify-around inline-center mx-10">

        <div className="flex flex-col py-5 px-7 bg-white rounded-3xl shadow-sm/30 text-sm w-fit my-10 mx-auto">
          <h1 className="text-black text-xl font-bold ml-2 mt-2">Post your service</h1>
          <p className="text-gray-800 mt-3 ml-2">Have a service to offer? List it here to reach more people.</p>
          <div className="flex items-end justify-between mt-4">
            <CTAButton
                text="Get Started"
                onClick={handleClick}
                icon={<FiArrowRight />}
              />
            <img src={images.card1} className=' h-30'></img>
          </div>
        </div>

        <div className="flex flex-col py-5 px-7 bg-white rounded-3xl shadow-sm/30 text-sm w-fit my-10 mx-auto">
          <h1 className="text-black text-xl font-bold ml-2 mt-2">Find service</h1>
          <p className="text-gray-800 mt-3 ml-2">Need a reliable service? Find trusted professionals here.</p>
          <div className="flex items-end justify-between mt-4">
            <CTAButton
                text="Get Started"
                onClick={handleClick}
                icon={<FiArrowRight />}
              />
            <img src={images.card2} className='h-30'></img>
          </div>
        </div>


      </section>

      <section className='mx-10'>
        <h1 className="text-3xl text-black  font-bold mt-2 leading-tight md:text-4xl lg:text-5xl">We're BIG on what matters to you</h1>
        <p className="text-lg text-black  mt-4 md:text-xl lg:text-2xl">Find your trustable connection effortlessly, without the hassle. Get the job done quickly, and with confidence</p>

        <section className="md:flex justify-around inline-center">
          <div className="flex flex-col py-5 px-7 bg-white rounded-3xl shadow-sm/30 text-sm w-fit my-10 mx-auto">
            <h1 className="text-black text-center text-3xl font-semibold ml-2 mt-2" >Search</h1>
            <p className="text-gray-800 text-center mt-3 ml-2">Search for what you need <br/> with ease and precision.</p>
            <img src={images.feature1} className='h-60'></img>
          </div>
          <div className="flex flex-col py-5 px-7 bg-white rounded-3xl shadow-sm/30 text-sm w-fit my-10 mx-auto">
            <h1 className="text-black text-center text-3xl font-semibold ml-2 mt-2">Shortlist</h1>
            <p className="text-gray-800 text-center mt-3 ml-2">Save and organize your top picks <br /> effortlessly.</p>
            <img src={images.feature2} className='h-60'></img>
          </div>
          <div className="flex flex-col py-5 px-7 bg-white rounded-3xl shadow-sm/30 text-sm w-fit my-10 mx-auto">
            <h1 className="text-black text-center text-3xl font-semibold ml-2 mt-2">Select</h1>
            <p className="text-gray-800 text-center mt-3 ml-2">Choose confidently and <br/> connect directly with the <br/> best options.</p>
            <img src={images.feature3} className='h-60 '></img>
          </div>
        </section>
      </section>

      <section className='md:flex bg-gray-100 mx-10 p-5 rounded-3xl'>
        <div className='shrink'>
        <img src={images.video1} className='w-auto h-full rounded-xl' atl="how to video thumbnail"></img>
        </div>
        <div className='md:shrink-0  flex flex-col justify-between ml-5'>
          <header>
          <h1 className="text-3xl text-black font-bold mt-2 leading-tight md:text-4xl lg:text-5xl">Quick how to videos</h1>
          <p>Watch our simple guides to make the most of AskIT</p>
          </header>
          <footer>
            <h3>How to Search for Service</h3>
            <CTAButton
                text="View More"
                onClick={handleClick}
                icon={<FiArrowRight />}
              />
          </footer>
        </div>
      </section>

      <section className='mx-10 mt-10'>
        <h1 className="text-3xl text-black  font-bold mt-2 leading-tight md:text-4xl lg:text-5xl" >
          Explore thousands of trusted connection <br /> tailored for your everyday needs.
        </h1>
        <div className="md:flex justify-around items-center flex-wrap gap-5 mt-10">
          {review_stats.map((items, index) => (
            <div key={index}>
              <h3 className="text-3xl text-black  font-medium mt-2 leading-tight md:text-4xl lg:text-5xl">{items.number}</h3>
              <p>{items.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-gray-100 mx-10 my-10 p-5 rounded-3xl'>
        <div className="md:flex justify-between items-center">
          <h1 className="text-3xl text-black font-semibold mt-2 leading-tight md:text-4xl lg:text-5xl">What our users say</h1>
          <p>Rated 4.7/5 based on 28,370 reviews. Showing our 4 & 5 star reviews.</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col py-5 px-7 bg-white rounded-3xl shadow-sm/30 text-sm w-fit my-10 mx-auto">
                <div className='flex justify-between'>
                  <h3 className="text-xl text-black font-medium mt-2 leading-tight md:text-2xl lg:text-3xl">{item.highlight}</h3>
                  <p>"</p>
                </div>
                <p className='text-sm text-gray-700 mt-2'>{item.review}</p>
                <ProfileBadge name={item.name} location={item.location} icon={MdLocationPin} className='text-black mt-2'/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
</>
  )
}

export default Home