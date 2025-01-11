const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchCoinPrice = async (coinId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/simple/price?ids=${coinId}&vs_currencies=inr,usd&include_24hr_change=true`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching coin price:", error);
    throw error;
  }
};

export const fetchTrendingCoins = async () => {
  try {
    const response = await fetch(`${BASE_URL}/search/trending`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    throw error;
  }
};

export const fetchCoinDetails = async (coinId) => {
  try {
    const response = await fetch(`${BASE_URL}/coins/${coinId}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching coin details:", error);
    throw error;
  }
};
