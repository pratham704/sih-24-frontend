import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', Hours: 4 },
  { name: 'Tue', Hours: 3 },
  { name: 'Wed', Hours: 5 },
  { name: 'Thu', Hours: 2 },
  { name: 'Fri', Hours: 4 },
  { name: 'Sat', Hours: 6 },
  { name: 'Sun', Hours: 3 },
];

const HomeStudent = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6"
    style={{


        backgroundImage:
"linear-gradient(to left, #FFFFFF, #D9F0FF 50%, #FFFFFF)"
    }}
    
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Hello, Arka <span role="img" aria-label="wave">👋</span></h1>
          <img src="https://via.placeholder.com/150" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
        
        {/* Today's Course */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Today's course</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Biology Molecules</h3>
              <p className="text-gray-500">75%</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Continue</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Color Theory</h3>
              <p className="text-gray-500">64%</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Continue</button>
            </div>
          </div>
        </div>
        
        {/* Stats and Learning Activity */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-1">
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="text-lg font-semibold">XP Points</h3>
              <p className="text-purple-500 text-2xl">2400 XP</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Achievements</h3>
              <p className="text-gray-500">24 Badges</p>
            </div>
          </div>
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Learning Activity</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Hours" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Your Class */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Class</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Microprocessor Theory</h3>
            <p className="text-gray-500">Today at 10:00 AM</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Join Class</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStudent;
