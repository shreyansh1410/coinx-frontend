import React from 'react';

const TokenomicsSection = () => {
  const distribution = [
    { name: 'Crowdsale Investors', percentage: 80, color: '#0082FF' },
    { name: 'Foundation', percentage: 20, color: '#FAA002' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Initial Distribution</h3>
        
        <div className="flex items-center gap-8">
          {/* Donut Chart */}
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="transform -rotate-90">
              {distribution.map((item, index) => {
                const prevTotal = distribution
                  .slice(0, index)
                  .reduce((sum, curr) => sum + curr.percentage, 0);
                return (
                  <circle
                    key={item.name}
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="20"
                    stroke={item.color}
                    fill="transparent"
                    strokeDasharray={`${item.percentage} 100`}
                    strokeDashoffset={-prevTotal}
                    className="transition-all duration-1000"
                  />
                );
              })}
            </svg>
          </div>
          
          {/* Legend */}
          <div className="flex flex-col gap-4">
            {distribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span>
                  {item.name} {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;