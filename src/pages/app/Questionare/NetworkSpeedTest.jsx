import React, { useState, useEffect } from 'react';
import NetworkSpeed from 'network-speed';

const NetworkSpeedTest = ({ onResult }) => {
  const [speed, setSpeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testSpeed = async () => {
      setLoading(true);
      setError(null);

      try {
        const test = new NetworkSpeed();
        const result = await test.checkDownloadSpeed();
        const speedMbps = result / 1e6; // Convert to Mbps
        setSpeed(speedMbps);
        onResult(speedMbps);
      } catch (err) {
        setError('Failed to test network speed.');
      } finally {
        setLoading(false);
      }
    };

    testSpeed();
  }, [onResult]);

  return (
    <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      {loading && <p>Testing network speed...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {speed !== null && !loading && (
        <div>
          <p className="text-lg">Network Speed: {speed.toFixed(2)} Mbps</p>
          {speed > 2 ? (
            <p className="text-green-400">Your network speed is good.</p>
          ) : (
            <p className="text-red-400">Your network speed is below the recommended threshold.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NetworkSpeedTest;
