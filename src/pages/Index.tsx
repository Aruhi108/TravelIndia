
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import DestinationCard from '@/components/DestinationCard';
import FeaturedHotel from '@/components/FeaturedHotel';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const allDestinations = [
    {
      id: 1,
      name: 'Goa Beaches',
      country: 'Goa',
      category: 'beach',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      price: '₹8,999',
      rating: 4.8,
      reviews: 1205
    },
    {
      id: 2,
      name: 'Kashmir Valley',
      country: 'Jammu & Kashmir', 
      category: 'mountain',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      price: '₹15,999',
      rating: 4.9,
      reviews: 887
    },
    {
      id: 3,
      name: 'Kerala Backwaters',
      country: 'Kerala',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
      price: '₹12,499',
      rating: 4.7,
      reviews: 2341
    },
    {
      id: 4,
      name: 'Rajasthan Palaces',
      country: 'Rajasthan',
      category: 'heritage',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e26?w=800',
      price: '₹18,999',
      rating: 4.8,
      reviews: 1456
    },
    {
      id: 5,
      name: 'Himachal Hills',
      country: 'Himachal Pradesh',
      category: 'mountain',
      image: 'https://images.unsplash.com/photo-1587307069123-c2d9f2729de5?w=800',
      price: '₹13,499',
      rating: 4.6,
      reviews: 982
    },
    {
      id: 6,
      name: 'Tamil Nadu Temples',
      country: 'Tamil Nadu',
      category: 'heritage',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
      price: '₹9,999',
      rating: 4.7,
      reviews: 1234
    }
  ];

  const featuredHotels = [
    {
      id: 1,
      name: 'Taj Beach Resort',
      location: 'Goa, India',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
      price: '₹3,500',
      rating: 4.6,
      amenities: ['Pool', 'Spa', 'Beach Access']
    },
    {
      id: 2,
      name: 'Mountain Heritage Resort',
      location: 'Kashmir, India',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      price: '₹8,200',
      rating: 4.8,
      amenities: ['Mountain View', 'Fireplace', 'Garden']
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      console.log('Searching for:', searchQuery);
      // Scroll to destinations section
      const destinationsSection = document.getElementById('destinations-section');
      if (destinationsSection) {
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredDestinations = isSearching && searchQuery.trim() 
    ? allDestinations.filter(destination => 
        destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allDestinations.slice(0, 3);

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Discover Incredible
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400"> India</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Explore breathtaking destinations across India, book amazing hotels, and create unforgettable memories
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Where do you want to go in India?"
                className="pl-10 py-3 text-lg text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 px-8"
              onClick={handleSearch}
            >
              Search Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations-section" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isSearching && searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Indian Destinations'}
            </h2>
            <p className="text-xl text-gray-600">
              {isSearching && searchQuery ? `Found ${filteredDestinations.length} destinations` : "Discover India's most amazing places"}
            </p>
            {isSearching && (
              <Button 
                variant="outline" 
                onClick={clearSearch}
                className="mt-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Show All Destinations
              </Button>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600">No destinations found matching "{searchQuery}"</p>
                <p className="text-gray-500 mt-2">Try searching for Goa, Kashmir, Kerala, Rajasthan, Himachal, or Tamil Nadu</p>
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Hotels in India</h2>
            <p className="text-xl text-gray-600">Stay in comfort and luxury across India</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredHotels.map((hotel) => (
              <FeaturedHotel key={hotel.id} hotel={hotel} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/hotels">
              <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View All Hotels
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">28+</h3>
              <p className="text-xl">Indian States</p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">50K+</h3>
              <p className="text-xl">Happy Travelers</p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">4.9</h3>
              <p className="text-xl">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
