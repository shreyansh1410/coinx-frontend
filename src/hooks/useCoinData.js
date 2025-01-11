import { useState, useEffect } from 'react';
import { fetchCoinPrice, fetchCoinDetails } from '../api/coinGeckoApi';

export const useCoinData = (coinId) => {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [priceData, details] = await Promise.all([
          fetchCoinPrice(coinId),
          fetchCoinDetails(coinId)
        ]);
        
        setCoinData({
          price: priceData[coinId],
          details
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [coinId]);

  return { coinData, loading, error };
};