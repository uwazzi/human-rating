'use client';

import { useState } from 'react';

interface RatingFormProps {
  aiSystemId: string;
  aiSystemName: string;
  onSubmit?: (data: RatingData) => void;
}

interface RatingData {
  caredFor: number;
  present: number;
  fulfilled: number;
  connected: number;
  average: number;
  comment: string;
}

export default function RatingForm({ aiSystemName, onSubmit }: RatingFormProps) {
  const [ratings, setRatings] = useState<RatingData>({
    caredFor: 0,
    present: 0,
    fulfilled: 0,
    connected: 0,
    average: 0,
    comment: ''
  });

  const [hoveredRatings, setHoveredRatings] = useState({
    caredFor: 0,
    present: 0,
    fulfilled: 0,
    connected: 0
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateRating = (category: keyof Omit<RatingData, 'average' | 'comment'>, value: number) => {
    const newRatings = { ...ratings, [category]: value };
    
    // Calculate average
    const { caredFor, present, fulfilled, connected } = newRatings;
    const validRatings = [caredFor, present, fulfilled, connected].filter(r => r > 0);
    const avg = validRatings.length ? 
      parseFloat((validRatings.reduce((a, b) => a + b, 0) / validRatings.length).toFixed(1)) : 0;
    
    setRatings({ ...newRatings, average: avg });
  };

  const handleHover = (category: keyof typeof hoveredRatings, value: number) => {
    setHoveredRatings({ ...hoveredRatings, [category]: value });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRatings({ ...ratings, comment: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Validate all ratings are provided
    const { caredFor, present, fulfilled, connected } = ratings;
    if (caredFor === 0 || present === 0 || fulfilled === 0 || connected === 0) {
      alert('Please provide a rating for all categories');
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real app, this would send data to an API
      if (onSubmit) {
        onSubmit(ratings);
      } else {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('There was an error submitting your rating. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to render stars
  const renderStars = (
    category: keyof typeof hoveredRatings, 
    currentRating: number, 
    hoveredRating: number
  ) => {
    return [1, 2, 3, 4, 5].map(star => (
      <button
        key={star}
        type="button"
        className="focus:outline-none"
        onClick={() => updateRating(category, star)}
        onMouseEnter={() => handleHover(category, star)}
        onMouseLeave={() => handleHover(category, 0)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={star <= (hoveredRating || currentRating) ? 'currentColor' : 'none'} 
          className={`w-8 h-8 ${
            star <= (hoveredRating || currentRating) 
              ? 'text-yellow-400' 
              : 'text-gray-300 stroke-gray-400'
          }`}
          strokeWidth={1.5}
        >
          <path 
            fillRule="evenodd" 
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
            clipRule="evenodd" 
          />
        </svg>
      </button>
    ));
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h3 className="mt-3 text-lg font-medium text-gray-900">Thanks for your rating!</h3>
          <p className="mt-2 text-sm text-gray-500">
            Your feedback helps improve our understanding of AI systems and their impact.
          </p>
          <div className="mt-4">
            <button 
              type="button" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              onClick={() => setIsSubmitted(false)}
            >
              Rate again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Rate {aiSystemName}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Cared For */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Cared for
              </label>
              <span className="text-sm text-gray-500">
                {ratings.caredFor > 0 ? `${ratings.caredFor}/5` : 'Not rated'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-2">Did the AI make you feel emotionally supported?</p>
            <div className="flex gap-1">
              {renderStars('caredFor', ratings.caredFor, hoveredRatings.caredFor)}
            </div>
          </div>
          
          {/* Present */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Present
              </label>
              <span className="text-sm text-gray-500">
                {ratings.present > 0 ? `${ratings.present}/5` : 'Not rated'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-2">Was the AI attentive and engaged in your interaction?</p>
            <div className="flex gap-1">
              {renderStars('present', ratings.present, hoveredRatings.present)}
            </div>
          </div>
          
          {/* Fulfilled */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Fulfilled
              </label>
              <span className="text-sm text-gray-500">
                {ratings.fulfilled > 0 ? `${ratings.fulfilled}/5` : 'Not rated'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-2">Did the AI help you feel accomplished or satisfied?</p>
            <div className="flex gap-1">
              {renderStars('fulfilled', ratings.fulfilled, hoveredRatings.fulfilled)}
            </div>
          </div>
          
          {/* Connected */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Connected
              </label>
              <span className="text-sm text-gray-500">
                {ratings.connected > 0 ? `${ratings.connected}/5` : 'Not rated'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-2">Did the AI foster a sense of connection or belonging?</p>
            <div className="flex gap-1">
              {renderStars('connected', ratings.connected, hoveredRatings.connected)}
            </div>
          </div>
          
          {/* Average Display */}
          {ratings.average > 0 && (
            <div className="border-t border-b py-4 my-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Overall Average</span>
                <span className="text-lg font-semibold text-blue-600">{ratings.average}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(ratings.average / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {/* Comments */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments (Optional)
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              placeholder="Share your experience with this AI system..."
              value={ratings.comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : 'Submit Rating'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
} 