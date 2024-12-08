import { useEffect, useState } from "react";

export default function DataPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the public directory
    fetch("/data.json")
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Game Data</h1>
      {data?.data?.map((game, gameIndex) => (
        <div key={game?.id || gameIndex} style={{ marginBottom: "40px" }}>
          <h2>Game {gameIndex + 1}</h2>
          <p><strong>GID:</strong> {game?.gid}</p>
          <p><strong>ID:</strong> {game?.id}</p>
          <p><strong>Name:</strong> {game?.name}</p>

          <h3>Match Details</h3>
          <table border="1" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Time</th>
                <th>MLB ID</th>
                <th>Extra Innings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{game?.matches?.match?.date}</td>
                <td>{game?.matches?.match?.status}</td>
                <td>{game?.matches?.match?.time}</td>
                <td>{game?.matches?.match?.mlbid}</td>
                <td>{game?.matches?.match?.extra_inn}</td>
              </tr>
            </tbody>
          </table>

          <h4>Teams</h4>
          <table border="1" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
            <thead>
              <tr>
                <th>Team</th>
                <th>Name</th>
                <th>Errors</th>
                <th>Hits</th>
                <th>Total Score</th>
                {[...Array(9)].map((_, inningIndex) => (
                  <th key={inningIndex}>Inning {inningIndex + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
  <tr>
    <td>Local</td>
    <td>{game?.matches?.match?.localteam?.name}</td>
    <td>{game?.matches?.match?.localteam?.errors}</td>
    <td>{game?.matches?.match?.localteam?.hits}</td>
    <td>{game?.matches?.match?.localteam?.totalscore}</td>
    {[...Array(9)].map((_, inningIndex) => (
      <td key={inningIndex}>
        {game?.matches?.match?.localteam?.[`in${inningIndex + 1}`] || "-"}
      </td>
    ))}
  </tr>
  <tr>
    <td>Away</td>
    <td>{game?.matches?.match?.awayteam?.name}</td>
    <td>{game?.matches?.match?.awayteam?.errors}</td>
    <td>{game?.matches?.match?.awayteam?.hits}</td>
    <td>{game?.matches?.match?.awayteam?.totalscore}</td>
    {[...Array(9)].map((_, inningIndex) => (
      <td key={inningIndex}>
        {game?.matches?.match?.awayteam?.[`in${inningIndex + 1}`] || "-"}
      </td>
    ))}
  </tr>
</tbody>
          </table>

          <h4>Odds</h4>
          <table border="1" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
            <thead>
              <tr>
                <th>Bookmaker</th>
                <th>Odd Name</th>
                <th>US</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {game?.matches?.match?.odds?.type?.map((type, typeIndex) =>
                type?.bookmaker?.odd?.map((odd, oddIndex) => (
                  <tr key={`${typeIndex}-${oddIndex}`}>
                    <td>{type?.bookmaker?.name}</td>
                    <td>{odd?.name}</td>
                    <td>{odd?.us}</td>
                    <td>{odd?.value}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

