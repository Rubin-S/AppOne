import {images} from "../assets/home/assets.jsx"
import { review_stats, reviews } from "../assets/assets.js";
import SearchBar from '../components/common/SearchBar'
import { MdLocationPin } from 'react-icons/md';
import CTAButton from '../components/common/CTA';
import ProfileBadge from '../components/common/ProfileBadge'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <header
        className="w-full h-[32rem] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.banner_overlay}),url(${images.banner})`,
        }}
        role="banner"
        aria-label="AskIT hero section promoting skilled professionals"
      >
        <div className="container flex flex-col justify-center h-full lg:ml-24 md:ml-16 ">
          <div>
            <div className="size-fit  rounded-full bg-primary p-1">
              {images.play()}
            </div>
            <p className="text-lg text-white" aria-hidden="true">
              Learn about AskIT
            </p>

            <h1
              className="text-3xl text-white font-bold mt-2 leading-tight md:text-4xl lg:text-5xl"
              tabIndex={0}
            >
              Over a million skilled professionals <br /> at your fingertips
            </h1>

            <p
              className="text-lg text-white mt-4 md:text-xl lg:text-2xl"
              tabIndex={0}
            >
              Your go-to destination for finding trusted experts.
            </p>

            <div
              className="mt-6"
              role="search"
              aria-label="Search for services"
            >
              <SearchBar />
            </div>
          </div>
        </div>
      </header>

      <section
        className="md:flex lg:gap-30 md:gap-15 lg:mx-30 md:mx-15 justify-around items-stretch sm:mx-30 "
        aria-label="Service actions section"
      >
        {/* Post Your Service Card */}
        <article
          className="flex flex-col py-5 px-7 bg-[#F4FFF3] rounded-3xl shadow-sm/30 text-sm w-full my-10 "
          role="region"
          aria-labelledby="post-service-title"
        >
          <h2
            id="post-service-title"
            className="text-black text-3xl font-normal ml-2 mt-2"
          >
            Post your service
          </h2>
          <p className="text-gray-800 text-md mt-3 ml-2">
            Have a service to offer? List it here to reach more people.
          </p>
          <div className="flex items-end justify-between mt-4">
            <CTAButton
              text="Get Started"
              onClick={handleClick}
              icon={images.crossArrow()}
              aria-label="Post your service - Get Started"
            />
            <img
              src={images.post_service}
              alt="Illustration of service provider"
              className="lg:h-30 h-20"
              loading="lazy"
            />
          </div>
        </article>

        {/* Find Service Card */}
        <article
          className="flex flex-col py-5 px-7 bg-white rounded-3xl shadow-sm/30 text-sm w-full my-10"
          role="region"
          aria-labelledby="find-service-title"
        >
          <h2
            id="find-service-title"
            className="text-black text-3xl font-bold ml-2 mt-2"
          >
            Find service
          </h2>
          <p className="text-gray-800 text-md mt-3 ml-2">
            Need a reliable service? Find trusted professionals here.
          </p>
          <div className="flex items-end justify-between mt-4 gap-4">
            <CTAButton
              text="Get Started"
              onClick={handleClick}
              icon={images.crossArrow()}
              aria-label="Find service - Get Started"
            />
            <img
              src={images.find_service}
              alt="Illustration of service search"
              className="lg:h-30 h-20"
              loading="lazy"
            />
          </div>
        </article>
      </section>

      <section className="mx-10 mt-24">
        <h1 className="text-3xl text-black font-normal leading-tight md:text-4xl lg:text-5xl">
          We're BIG on what matters to you
        </h1>
        <p className="text-lg text-black  mt-4 md:text-xl lg:text-2xl">
          Find your trustable connection effortlessly, without the hassle. Get
          the job done quickly, and with confidence
        </p>

        <section className="md:flex mt-10 justify-around inline-center">
          {[
            {
              title: "Search",
              description: (
                <>
                  Search for what you need <br /> with ease and precision.
                </>
              ),
              image: images.search_card,
            },
            {
              title: "Shortlist",
              description: (
                <>
                  Save and organize your top picks <br /> effortlessly.
                </>
              ),
              image: images.shortlist_card,
            },
            {
              title: "Select",
              description: (
                <>
                  Choose confidently and <br /> connect directly with the <br />{" "}
                  best options.
                </>
              ),
              image: images.select_card,
            },
          ].map(({ title, description, image }, index) => (
            <article
              key={index}
              className="flex flex-col py-5 px-6  md:px-7 bg-[#F4F4F4] rounded-3xl shadow-sm/30 text-sm max-w-2xs lg:max-w-xs md:max-w-3xs my-6 mx-auto"
            >
              <h2 className="text-black text-center text-3xl font-semibold ml-2 mt-2">
                {title}
              </h2>
              <p className="text-gray-800 text-center mt-3 ml-2">
                {description}
              </p>
              <img src={image} alt={title} className="h-60" loading="lazy" />
            </article>
          ))}
        </section>
      </section>

      <section className="max-w-screen-xl my-10 mx-auto px-4 md:px-10 py-4 flex flex-col md:flex-row bg-gray-100 rounded-3xl items-center">
        <img
          src={images.thumbnail}
          className="rounded-xl w-full md:w-1/2"
          loading="lazy"
        />
        <div className="md:ml-10 mt-6 md:mt-0 flex-1">
          <h2 className="text-4xl font-bold">Quick how to videos</h2>
          <p className="mt-2">
            Watch our simple guides to make the most of AskIT
          </p>
          <h3 className="mt-4 text-lg font-semibold">
            How to Search for Service
          </h3>
          <div className="mt-2">
            <CTAButton
              text="View More"
              onClick={handleClick}
              icon={images.crossArrow()}
            />
          </div>
        </div>
      </section>

      <section className="mx-10 my-24">
        <h1 className="text-3xl text-black  font-normal mt-2 leading-tight md:text-4xl lg:text-5xl">
          Explore thousands of trusted connection <br /> tailored for your
          everyday needs.
        </h1>
        <div className="md:flex justify-around items-center flex-wrap gap-5 mt-10">
          {review_stats.map((items, index) => (
            <div key={index}>
              <h3 className="text-3xl text-black  font-medium mt-2 leading-tight md:text-4xl lg:text-5xl">
                {items.number}
              </h3>
              <p>{items.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EDF4F9] mx-10 my-10 p-5 rounded-3xl">
        <div className="md:flex justify-between items-center">
          <h1 className="text-3xl text-black font-semibold mt-2 leading-tight md:text-4xl lg:text-5xl">
            What our users say
          </h1>
          <p>
            Rated 4.7/5 based on 28,370 reviews. Showing our 4 & 5 star reviews.
          </p>
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
          {reviews.map(({ name, review, highlight, location }, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col py-5 px-7 bg-white rounded-3xl shadow-sm/30 text-sm w-fit my-10 mx-auto">
                <div className="flex justify-between">
                  <h3 className="text-xl text-black font-medium mt-2 leading-tight md:text-2xl lg:text-3xl">
                    {highlight}
                  </h3>
                  <p>{images.hook()}</p>
                </div>
                <p className="text-sm text-gray-700 mt-2">{review}</p>
                <ProfileBadge
                  name={name}
                  location={location}
                  icon={MdLocationPin}
                  className="text-black mt-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Home