import CPStatsClient from "./CPStatsClient";

async function getLeetCodeStats() {
  try {
    const solvedRes = await fetch("https://alfa-leetcode-api.onrender.com/TheBeast_07/solved", { next: { revalidate: 3600 } });
    const contestRes = await fetch("https://alfa-leetcode-api.onrender.com/TheBeast_07/contest", { next: { revalidate: 3600 } });
    
    const solvedData = await solvedRes.json();
    const contestData = await contestRes.json();

    return {
      solved: solvedData.solvedProblem || 123,
      rating: contestData.contestRating ? Math.round(contestData.contestRating) : 1518,
    };
  } catch (error) {
    return { solved: 123, rating: 1518 };
  }
}

export default async function CPStats() {
  const lcStats = await getLeetCodeStats();

  return <CPStatsClient lcStats={lcStats} />;
}
