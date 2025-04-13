import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  // Sample direct image URLs
  const sliderImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.istockphoto.com/id/146765403/photo/a-luxurious-florida-beach-hotel-during-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=dQ7RaR3U9eevzCS08Hs45oToRAtrJT4wI69QZ06L0W0=',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
  ];

  return (
    <div className="pt-9 min-h-screen">
      {/* Hero Section with Swiper */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 max-w-6xl mx-auto mt-24 px-5 sm:px-10">
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-slate-700 font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Find your next <span className="text-blue-600">perfect</span>
            <br />
            place with ease
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mb-6">
            Rentzy is the best place to find your next perfect place to live.
            <br />
            We have a wide range of properties for you to choose from.
          </p>
          <Link
            to={'/search'}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Let’s get started
          </Link>
        </div>

        {/* Right Swiper Section with Direct Image URLs */}
          <div className="flex-1 w-full max-w-xl h-[300px] sm:h-[400px] lg:h-[500px]">
            <Swiper
              navigation
              autoplay={{ delay: 30, disableOnInteraction: false }}
              className="rounded-lg overflow-hidden w-full h-full"
            >
              {sliderImages.map((url, index) => (
                <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${url}) center center / cover no-repeat`,
              }}
              className="w-full h-full rounded-lg"
            ></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
              </div>

              {/* Listings Section */}
      <div className="max-w-6xl mx-auto p-7 flex flex-col gap-12 my-10">
        {/* Offers */}
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={'/search?offer=true'}
              >
                Show more offers
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Rent */}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Places for Rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={'/search?type=rent'}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Sale */}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Places for Sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={'/search?type=sale'}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}