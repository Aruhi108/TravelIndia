
import { useState } from 'react';
import { Search, Star, MapPin, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';

const Hotels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const hotels = [
    {
      id: 1,
      name: 'Ocean View Resort',
      location: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
      price: 120,
      originalPrice: 150,
      rating: 4.6,
      reviews: 324,
      amenities: ['Wifi', 'Pool', 'Spa', 'Beach Access'],
      description: 'Luxurious beachfront resort with stunning ocean views'
    },
    {
      id: 2,
      name: 'Mountain Lodge',
      location: 'Swiss Alps, Switzerland',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      price: 280,
      originalPrice: 320,
      rating: 4.8,
      reviews: 187,
      amenities: ['Wifi', 'Ski Access', 'Fireplace', 'Mountain View'],
      description: 'Cozy alpine lodge perfect for mountain adventures'
    },
    {
      id: 3,
      name: 'Santorini Suites',
      location: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      price: 200,
      originalPrice: 250,
      rating: 4.7,
      reviews: 456,
      amenities: ['Wifi', 'Pool', 'Restaurant', 'Sunset View'],
      description: 'Elegant suites with breathtaking sunset views'
    },
    {
      id: 4,
      name: 'Tokyo Grand Hotel',
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
      price: 180,
      originalPrice: 220,
      rating: 4.5,
      reviews: 892,
      amenities: ['Wifi', 'Gym', 'Restaurant', 'City View'],
      description: 'Modern hotel in the heart of Tokyo'
    }
  ];

  const locations = ['all', 'Bali, Indonesia', 'Swiss Alps, Switzerland', 'Santorini, Greece', 'Tokyo, Japan'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200-300', label: '$200 - $300' },
    { value: '300+', label: '$300+' }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      case 'restaurant': return <Coffee className="w-4 h-4" />;
      case 'gym': return <Dumbbell className="w-4 h-4" />;
      default: return <span className="w-4 h-4 text-center">•</span>;
    }
  };

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || hotel.location === selectedLocation;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      if (priceRange === '300+') {
        matchesPrice = hotel.price >= 300;
      } else {
        const [min, max] = priceRange.split('-').map(Number);
        matchesPrice = hotel.price >= min && hotel.price <= max;
      }
    }
    
    return matchesSearch && matchesLocation && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Find Your Perfect Stay</h1>
          <p className="text-xl text-gray-600">Discover amazing hotels around the world</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search hotels..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('all');
                setPriceRange('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-lg text-gray-600">
            Showing {filteredHotels.length} hotel{filteredHotels.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Hotels Grid */}
        {filteredHotels.length > 0 ? (
          <div className="space-y-6">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center text-gray-500 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                        <p className="text-gray-600 mb-4">{hotel.description}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center mb-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold">{hotel.rating}</span>
                          <span className="text-gray-500 ml-1">({hotel.reviews})</span>
                        </div>
                        <div className="text-right">
                          {hotel.originalPrice > hotel.price && (
                            <span className="text-gray-400 line-through text-sm">${hotel.originalPrice}</span>
                          )}
                          <div className="text-2xl font-bold text-blue-600">
                            ${hotel.price}<span className="text-sm text-gray-500">/night</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-3">
                        {hotel.amenities.map((amenity, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-1 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                          >
                            {getAmenityIcon(amenity)}
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No hotels found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;
