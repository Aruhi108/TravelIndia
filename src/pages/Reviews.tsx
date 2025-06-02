
import { useState } from 'react';
import { Star, ThumbsUp, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';

const Reviews = () => {
  const [newReview, setNewReview] = useState('');
  const [selectedRating, setSelectedRating] = useState('5');
  const [selectedDestination, setSelectedDestination] = useState('');

  const reviews = [
    {
      id: 1,
      user: 'Sarah Johnson',
      destination: 'Bali, Indonesia',
      rating: 5,
      date: 'March 15, 2024',
      review: 'Absolutely incredible experience! The beaches were pristine and the local culture was so welcoming. Would definitely go back!',
      helpful: 24,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100'
    },
    {
      id: 2,
      user: 'Mike Chen',
      destination: 'Swiss Alps, Switzerland',
      rating: 5,
      date: 'February 28, 2024',
      review: 'The skiing was phenomenal and the mountain views took my breath away. Perfect winter getaway destination.',
      helpful: 18,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      id: 3,
      user: 'Elena Rodriguez',
      destination: 'Santorini, Greece',
      rating: 4,
      date: 'February 20, 2024',
      review: 'Beautiful sunsets and amazing architecture. The food was exceptional too. Only downside was it was quite crowded during peak season.',
      helpful: 31,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
    },
    {
      id: 4,
      user: 'David Park',
      destination: 'Tokyo, Japan',
      rating: 5,
      date: 'February 10, 2024',
      review: 'Tokyo exceeded all my expectations! The blend of traditional and modern culture is fascinating. Great food scene too.',
      helpful: 27,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    },
    {
      id: 5,
      user: 'Lisa Thompson',
      destination: 'Machu Picchu, Peru',
      rating: 5,
      date: 'January 25, 2024',
      review: 'Life-changing experience! The hike was challenging but so worth it. The historical significance and views are unmatched.',
      helpful: 42,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100'
    }
  ];

  const destinations = [
    'Bali, Indonesia',
    'Swiss Alps, Switzerland', 
    'Santorini, Greece',
    'Tokyo, Japan',
    'Machu Picchu, Peru',
    'Maldives'
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const handleSubmitReview = () => {
    if (newReview.trim() && selectedDestination) {
      // In a real app, this would submit to a backend
      console.log('New review:', {
        destination: selectedDestination,
        rating: selectedRating,
        review: newReview
      });
      setNewReview('');
      setSelectedDestination('');
      setSelectedRating('5');
      // Show success message
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Traveler Reviews</h1>
          <p className="text-xl text-gray-600">Share your experiences and read what others have to say</p>
        </div>

        {/* Write Review Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Write a Review</h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Destination" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map(destination => (
                    <SelectItem key={destination} value={destination}>
                      {destination}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Rating" />
                </SelectTrigger>
                <SelectContent>
                  {[5, 4, 3, 2, 1].map(rating => (
                    <SelectItem key={rating} value={rating.toString()}>
                      <div className="flex items-center">
                        {renderStars(rating)}
                        <span className="ml-2">{rating} Star{rating !== 1 ? 's' : ''}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Textarea
              placeholder="Share your travel experience..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              className="min-h-[120px]"
            />
            
            <Button 
              onClick={handleSubmitReview}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              disabled={!newReview.trim() || !selectedDestination}
            >
              Submit Review
            </Button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Reviews</h2>
          
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <img 
                  src={review.avatar} 
                  alt={review.user}
                  className="w-12 h-12 rounded-full object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">{review.user}</h3>
                      <p className="text-sm text-gray-500">{review.destination}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{review.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="ml-2 font-semibold">{review.rating}.0</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">Helpful ({review.helpful})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Load More Reviews
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
