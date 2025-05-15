'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function AISystemPage() {
  // Get params using the useParams hook from Next.js
  const params = useParams();
  const id = params.id as string;
  
  // Placeholder data - in a real app, this would come from the database
  const ai = {
    id: id,
    name: id === '1' ? 'ChatGPT' : id === '2' ? 'Claude' : id === '3' ? 'Gemini' : 'Replika',
    description: 'A powerful AI assistant designed to be helpful, harmless, and honest. This system can understand and generate human-like text, assist with various tasks, and provide information across a wide range of topics.',
    longDescription: 'ChatGPT is an advanced AI language model developed by OpenAI. It uses a transformer-based neural network architecture to generate coherent and contextually relevant text responses to user queries. The model has been trained on a diverse corpus of internet text, enabling it to engage in conversations, answer questions, provide explanations, assist with writing tasks, and more. ChatGPT aims to be helpful, harmless, and honest in its interactions, making it suitable for a wide range of applications.',
    imageUrl: `/images/ai-logos/${id === '1' ? 'chatgpt' : id === '2' ? 'claude' : id === '3' ? 'gemini' : 'replika'}.png`,
    category: 'Large Language Model',
    provider: id === '1' ? 'OpenAI' : id === '2' ? 'Anthropic' : id === '3' ? 'Google' : 'Luka, Inc.',
    version: '4.0',
    releaseDate: '2023-03-15',
    scores: {
      caredFor: 4.2,
      present: 4.5,
      fulfilled: 4.3,
      connected: 3.9,
      average: 4.2
    },
    impactAssessment: {
      intendedUse: 'General purpose assistant for information retrieval, creative writing, problem-solving, and conversational engagement.',
      technicalCapabilities: 'Natural language understanding and generation, contextual awareness, creative content generation, knowledge retrieval, and multi-turn dialogue.',
      limitations: 'May not always produce factually accurate information, can exhibit biases present in training data, and has limited knowledge of events after its training cutoff date.',
      risks: 'Potential for generating misleading information, privacy concerns from data shared with the system, and risks of over-reliance on automated responses for critical decisions.',
      teamInfo: 'Diverse team of ML researchers, engineers, and safety specialists with backgrounds in computer science, linguistics, and ethics.',
    },
    comparativeTests: [
      {
        id: 'test1',
        title: 'Response to Emotional Support Request',
        description: 'How the AI responds to a user seeking emotional support for a personal challenge',
        results: 'Outperformed 70% of other AI systems in providing appropriate, empathetic responses'
      },
      {
        id: 'test2',
        title: 'Scientific Knowledge Accuracy',
        description: 'Assessment of factual correctness when answering scientific questions',
        results: 'Achieved 92% accuracy, ranking in the top quartile of tested systems'
      }
    ],
    redTeamFindings: [
      {
        id: 'finding1',
        category: 'Bias',
        description: 'Exhibited subtle gender stereotypes in career advice scenarios',
        severity: 'Medium',
        mitigation: 'Additional fine-tuning with balanced examples and improved steering techniques'
      },
      {
        id: 'finding2',
        category: 'Safety',
        description: 'Refused harmful requests but occasionally provided partial information that could be misused',
        severity: 'Low',
        mitigation: 'Enhanced safety filters and improved detection of indirect harmful queries'
      }
    ],
    reviews: [
      {
        id: 'review1',
        content: 'The system demonstrates remarkable conversational abilities but sometimes feels slightly mechanical when discussing emotional topics.',
        user: 'AIResearcher22',
        date: '2023-05-12',
        upvotes: 24,
        isAccepted: true
      },
      {
        id: 'review2',
        content: 'I appreciate how it handles complex requests, breaking them down into manageable steps. Particularly useful for coding assistance.',
        user: 'DevExpert',
        date: '2023-06-03',
        upvotes: 18,
        isAccepted: false
      }
    ]
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-6">
          <Link 
            href="/ai-systems" 
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to AI Systems
          </Link>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-64 bg-gray-200 flex items-center justify-center">
            <Image 
              src={ai.imageUrl} 
              alt={ai.name} 
              className="object-contain"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-600/80 text-white rounded-full">
                    {ai.category}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-600/80 text-white rounded-full">
                    v{ai.version}
                  </span>
                </div>
                <h1 className="text-3xl font-bold">{ai.name}</h1>
                <p className="text-lg opacity-90">by {ai.provider}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-end gap-3 mb-6">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
                Edit Page
              </button>
              <Link 
                href={`/ai-systems/${id}/rate`}
                className="px-4 py-2 bg-blue-600 rounded-md text-white flex items-center gap-2 hover:bg-blue-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                Rate this AI
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                  <p className="text-gray-700 mb-4">{ai.description}</p>
                  <p className="text-gray-700">{ai.longDescription}</p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-6">Structured Impact Assessment</h2>
                  
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">Intended Use & Context</h3>
                      <p className="text-gray-700">{ai.impactAssessment.intendedUse}</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">Technical Capabilities</h3>
                      <p className="text-gray-700">{ai.impactAssessment.technicalCapabilities}</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">Limitations</h3>
                      <p className="text-gray-700">{ai.impactAssessment.limitations}</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">Risks & Mitigations</h3>
                      <p className="text-gray-700">{ai.impactAssessment.risks}</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">Team & Oversight</h3>
                      <p className="text-gray-700">{ai.impactAssessment.teamInfo}</p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Comparative Testing</h2>
                    <button className="text-blue-600 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      Add Test
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {ai.comparativeTests.map(test => (
                      <div key={test.id} className="border rounded-lg p-4">
                        <h3 className="font-medium text-lg mb-2">{test.title}</h3>
                        <p className="text-gray-600 mb-3">{test.description}</p>
                        <div className="bg-blue-50 p-3 rounded-md">
                          <p className="text-blue-800 font-medium">Results: {test.results}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Red Team Findings</h2>
                    <button className="text-blue-600 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      Add Finding
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {ai.redTeamFindings.map(finding => (
                      <div key={finding.id} className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-medium text-lg">{finding.category}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            finding.severity === 'High' ? 'bg-red-100 text-red-800' :
                            finding.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {finding.severity} Severity
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3">{finding.description}</p>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-gray-700"><span className="font-medium">Mitigation:</span> {finding.mitigation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Community Reviews</h2>
                    <button className="text-blue-600 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      Add Review
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {ai.reviews.map(review => (
                      <div key={review.id} className="border rounded-lg p-4">
                        <div className="flex justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                              {review.user.charAt(0)}
                            </div>
                            <span className="font-medium">{review.user}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">{review.date}</span>
                            {review.isAccepted && (
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                Accepted
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{review.content}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                            Upvote ({review.upvotes})
                          </button>
                          <button className="flex items-center gap-1 text-gray-600 hover:text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                            Downvote
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">Reply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              
              <div>
                <div className="bg-white border rounded-lg p-6 sticky top-6">
                  <h2 className="text-xl font-semibold mb-6">Humane Tech Scorecard</h2>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-medium">Overall Score</span>
                      <span className="text-2xl font-bold text-blue-600">{ai.scores.average}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                      <div 
                        className="bg-blue-600 h-3 rounded-full" 
                        style={{ width: `${(ai.scores.average / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Cared for</span>
                        <span>{ai.scores.caredFor}/5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-400 h-2 rounded-full" 
                          style={{ width: `${(ai.scores.caredFor / 5) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Did the AI make you feel emotionally supported?</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Present</span>
                        <span>{ai.scores.present}/5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-400 h-2 rounded-full" 
                          style={{ width: `${(ai.scores.present / 5) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Was the AI attentive and engaged?</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Fulfilled</span>
                        <span>{ai.scores.fulfilled}/5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-400 h-2 rounded-full" 
                          style={{ width: `${(ai.scores.fulfilled / 5) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Did the AI help you feel accomplished?</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Connected</span>
                        <span>{ai.scores.connected}/5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-400 h-2 rounded-full" 
                          style={{ width: `${(ai.scores.connected / 5) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Did the AI foster a sense of connection?</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium mb-2">System Details</h3>
                    <div className="text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Version</span>
                        <span className="font-medium">{ai.version}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Provider</span>
                        <span className="font-medium">{ai.provider}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Release Date</span>
                        <span className="font-medium">{ai.releaseDate}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Category</span>
                        <span className="font-medium">{ai.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 