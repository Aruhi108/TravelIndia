
import { Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Destination {
  id: number;
  name: string;
  country: string;
  category: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
            {destination.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg">
            {destination.price}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{destination.country}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3">{destination.name}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{destination.rating}</span>
            <span className="ml-1 text-gray-500">({destination.reviews} reviews)</span>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700">
          Explore Destination
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
