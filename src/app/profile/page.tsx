export default function ProfilePage() {
  // Mock user data - in a real app, this would come from authentication and database
  const user = {
    id: '1',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    image: 'https://placehold.co/200x200',
    reputation: 452,
    bio: 'AI researcher and enthusiast. Interested in human-centered AI evaluation and responsible development.',
    joinDate: 'March 2023',
    reputationHistory: [
      { date: 'Aug 2023', amount: 15, reason: 'Accepted review of Claude' },
      { date: 'Aug 2023', amount: 10, reason: 'Upvoted review of ChatGPT' },
      { date: 'Jul 2023', amount: 10, reason: 'Upvoted assessment of Gemini' },
      { date: 'Jul 2023', amount: 15, reason: 'Accepted edit on Replika' },
      { date: 'Jun 2023', amount: -2, reason: 'Downvoted review' },
    ],
    privileges: [
      { name: 'Edit Wiki Entries', required: 100, achieved: true },
      { name: 'Vote on Reviews', required: 50, achieved: true },
      { name: 'Create Structured Assessments', required: 200, achieved: true },
      { name: 'Participate in Moderation', required: 500, achieved: false },
      { name: 'Delete Content', required: 1000, achieved: false },
    ],
    contributions: {
      aiSystems: 3,
      reviews: 12,
      edits: 25,
      humaneScores: 18,
    }
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 h-32 md:h-48"></div>
          
          <div className="p-6 md:p-8 -mt-20">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-end">
              <div className="relative">
                <img 
                  src={user.image} 
                  alt={user.name} 
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-2 right-2 bg-gray-800 text-white p-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600 mb-4">Joined {user.joinDate}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
                    <p className="text-sm text-blue-600 mb-1">Reputation</p>
                    <p className="text-xl font-bold text-blue-700">{user.reputation}</p>
                  </div>
                  <div className="bg-gray-50 px-4 py-2 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-1">AI Systems</p>
                    <p className="text-xl font-bold text-gray-700">{user.contributions.aiSystems}</p>
                  </div>
                  <div className="bg-gray-50 px-4 py-2 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-1">Reviews</p>
                    <p className="text-xl font-bold text-gray-700">{user.contributions.reviews}</p>
                  </div>
                  <div className="bg-gray-50 px-4 py-2 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-1">Edits</p>
                    <p className="text-xl font-bold text-gray-700">{user.contributions.edits}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 rounded-md text-white font-medium hover:bg-blue-700">Edit Profile</button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50">Settings</button>
                </div>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">About</h2>
                  <p className="text-gray-700">{user.bio}</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Rated ChatGPT</h3>
                          <p className="text-sm text-gray-500">2 days ago</p>
                        </div>
                      </div>
                      <div className="pl-12">
                        <div className="flex gap-4 text-sm text-gray-700">
                          <span>Cared for: 4/5</span>
                          <span>Present: 5/5</span>
                          <span>Fulfilled: 4/5</span>
                          <span>Connected: 4/5</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Edited Claude</h3>
                          <p className="text-sm text-gray-500">5 days ago</p>
                        </div>
                      </div>
                      <div className="pl-12">
                        <p className="text-gray-700">Updated the technical capabilities section with information about the latest model version.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Reviewed Gemini</h3>
                          <p className="text-sm text-gray-500">1 week ago</p>
                        </div>
                      </div>
                      <div className="pl-12">
                        <p className="text-gray-700">The multimodal capabilities are impressive, especially for visual comprehension tasks. However, the system could improve on contextual understanding across multiple turns.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4">Reputation & Privileges</h2>
                  
                  <div className="bg-white border rounded-lg p-4 mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Progress to next level</span>
                      <span className="text-sm font-medium text-gray-600">452 / 500</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(user.reputation / 500) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">48 reputation points until Moderation privileges</p>
                  </div>
                  
                  <div className="space-y-3">
                    {user.privileges.map((privilege, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {privilege.achieved ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                          )}
                          <span className={privilege.achieved ? 'text-gray-800' : 'text-gray-500'}>
                            {privilege.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">{privilege.required}</span>
                      </div>
                    ))}
                  </div>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-4">Recent Reputation</h2>
                  
                  <div className="bg-white border rounded-lg divide-y">
                    {user.reputationHistory.map((item, i) => (
                      <div key={i} className="p-3 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-800">{item.reason}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                        <span className={`font-medium ${item.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {item.amount > 0 ? '+' : ''}{item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 