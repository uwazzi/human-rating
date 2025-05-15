'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import RatingForm from '@/components/RatingForm';

export default function RateAISystem() {
  // Get params using the useParams hook from Next.js
  const params = useParams();
  const id = params.id as string;

  // In a real app, you would fetch the AI system details from your database
  const aiSystemNames: Record<string, string> = {
    '1': 'ChatGPT',
    '2': 'Claude',
    '3': 'Gemini',
    '4': 'Replika'
  };

  const aiSystemName = aiSystemNames[id] || 'Unknown AI System';

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-6">
          <Link 
            href={`/ai-systems/${id}`} 
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to {aiSystemName}
          </Link>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Rate {aiSystemName}</h1>
            
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-2">Humane Tech Scorecard</h2>
              <p className="text-gray-600">
                Your feedback helps our community provide a human-centered evaluation of AI systems and companions.
                Please rate your experience with {aiSystemName} on the following dimensions.
              </p>
            </div>
            
            <RatingForm 
              aiSystemId={id} 
              aiSystemName={aiSystemName} 
            />
          </div>
        </div>
      </div>
    </main>
  );
} 