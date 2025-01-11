import { useState, useEffect } from 'react';
import { fetchTrendingCoins } from '../api/coinGeckoApi';

export const useTrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingCoins();
        setTrendingCoins(data.coins.slice(0, 3));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return { trendingCoins, loading, error };
};