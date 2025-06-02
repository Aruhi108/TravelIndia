
import { Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  amenities: string[];
}

interface FeaturedHotelProps {
  hotel: Hotel;
}

const FeaturedHotel = ({ hotel }: FeaturedHotelProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src={hotel.image} 
            alt={hotel.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        
        <div className="md:w-1/2 p-6">
          <div className="flex items-center text-gray-500 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{hotel.location}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{hotel.name}</h3>
          
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{hotel.rating}</span>
            <span className="ml-2 text-2xl font-bold text-orange-600">{hotel.price}</span>
            <span className="text-gray-500">/night</span>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Amenities:</p>
            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((amenity, index) => (
                <span 
                  key={index}
                  className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotel;
