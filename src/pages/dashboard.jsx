import React from 'react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import './Dashboard.css'; // Using Tailwind for styling

const Dashboard = () => {
  const [progress, setProgress] = useState(50);

  return (
    <div className="dashboard-container bg-gray-100 p-6 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome, User!</h1>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Switch Theme</button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Cards */}
        <div className="card bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Taxable Income</h2>
          <p className="text-2xl text-purple-500">$75,000</p>
        </div>
        <div className="card bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Deductions</h2>
          <p className="text-2xl text-green-500">$15,000</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-card bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Tax Filing Progress</h2>
          <CircularProgressbar value={progress} text={`${progress}%`} />
        </div>

        {/* Chart */}
        <div className="chart-card bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Income Breakdown</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
