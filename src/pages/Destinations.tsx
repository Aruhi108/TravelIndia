
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import DestinationCard from '@/components/DestinationCard';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const destinations = [
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
      name: 'Mumbai City',
      country: 'Maharashtra',
      category: 'city',
      image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800',
      price: '₹9,999',
      rating: 4.6,
      reviews: 1987
    },
    {
      id: 5,
      name: 'Leh Ladakh',
      country: 'Ladakh',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      price: '₹18,999',
      rating: 4.9,
      reviews: 1456
    },
    {
      id: 6,
      name: 'Taj Mahal, Agra',
      country: 'Uttar Pradesh',
      category: 'heritage',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
      price: '₹7,999',
      rating: 4.8,
      reviews: 2103
    },
    {
      id: 7,
      name: 'Jaipur Pink City',
      country: 'Rajasthan',
      category: 'heritage',
      image: 'https://images.unsplash.com/photo-1599661046827-dacde742904a?w=800',
      price: '₹11,999',
      rating: 4.7,
      reviews: 1854
    },
    {
      id: 8,
      name: 'Manali Hill Station',
      country: 'Himachal Pradesh',
      category: 'mountain',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
      price: '₹13,499',
      rating: 4.6,
      reviews: 1342
    },
    {
      id: 9,
      name: 'Andaman Islands',
      country: 'Andaman & Nicobar',
      category: 'beach',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      price: '₹22,999',
      rating: 4.8,
      reviews: 987
    },
    {
      id: 10,
      name: 'Mysore Palace',
      country: 'Karnataka',
      category: 'heritage',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
      price: '₹8,499',
      rating: 4.5,
      reviews: 1123
    },
    {
      id: 11,
      name: 'Darjeeling Tea Gardens',
      country: 'West Bengal',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      price: '₹10,999',
      rating: 4.6,
      reviews: 876
    },
    {
      id: 12,
      name: 'Rann of Kutch',
      country: 'Gujarat',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      price: '₹14,999',
      rating: 4.7,
      reviews: 654
    }
  ];

  const states = ['all', 'Goa', 'Jammu & Kashmir', 'Kerala', 'Maharashtra', 'Ladakh', 'Uttar Pradesh', 'Rajasthan', 'Himachal Pradesh', 'Andaman & Nicobar', 'Karnataka', 'West Bengal', 'Gujarat'];
  const categories = ['all', 'beach', 'mountain', 'city', 'adventure', 'heritage', 'nature'];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState === 'all' || destination.country === selectedState;
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    
    return matchesSearch && matchesState && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Explore India</h1>
          <p className="text-xl text-gray-600">Discover amazing places across incredible India</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search destinations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {states.map(state => (
                  <SelectItem key={state} value={state}>
                    {state === 'all' ? 'All States' : state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={() => {
                setSearchQuery('');
                setSelectedState('all');
                setSelectedCategory('all');
              }}
            >
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-lg text-gray-600">
            Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🇮🇳</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
