import React, { useState, useEffect } from "react";

// Fetch data from JSON file
const fetchData = async () => {
  const res = await fetch("/data.json"); // Ensure the file is in the public folder
  const data = await res.json();
  return data.data;
};

const Home = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setMatches(data));
  }, []);

  return (
    <div>
      <h1>MLB Matches Data</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Global ID</th>
            <th>Name</th>
            <th>Matches</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((item) => (
            <tr key={item.gid}>
              <td>{item.gid}</td>
              <td>{item.name}</td>
              <td>
                {Array.isArray(item.matches.match) ? (
                  <div style={{ overflowX: "auto", maxWidth: "100%" }}>
                    <table
                      border="1"
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <thead>
                        <tr>
                          <th>Match ID</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Mlb ID</th>
                          <th>Status</th>
                          <th>Away Teams Name vs local Teams Name</th>
                          <th>Away Teams Errors vs local Teams Errors</th>
                          <th>Away Teams hits vs local Teams hits</th>
                          <th>Away Teams id vs local Teams id</th>
                          <th>Away Teams in1 vs local Teams in1</th>
                          <th>Away Teams in2 vs local Teams in2</th>
                          <th>Away Teams in3 vs local Teams in3</th>
                          <th>Away Teams in4 vs local Teams in4</th>
                          <th>Away Teams in5 vs local Teams in5</th>
                          <th>Away Teams in6 vs local Teams in6</th>
                          <th>Away Teams in7 vs local Teams in7</th>
                          <th>Away Teams in8 vs local Teams in8</th>
                          <th>Away Teams in9 vs local Teams in9</th>
                          <th>Away Teams total score vs local Teams total score</th>
                          <th>Odds</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.matches.match.map((match, matchIndex) => (
                          <tr key={matchIndex}>
                            <td>{match.id}</td>
                            <td>{match.date}</td>
                            <td>{match.time || "N/A"}</td>
                            <td>{match.mlbid || "N/A"}</td>
                            <td>{match.status || "N/A"}</td>
                            <td>
                              {match.localteam?.name || "N/A"} vs.{" "}
                              {match.awayteam?.name || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.errors || "N/A"} vs.{" "}
                              {match.awayteam?.errors || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.extra || "N/A"} vs.{" "}
                              {match.awayteam?.extra || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.hits || "N/A"} vs.{" "}
                              {match.awayteam?.hits || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.id || "N/A"} vs.{" "}
                              {match.awayteam?.id || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in1 || "N/A"} vs.{" "}
                              {match.awayteam?.in1 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in2 || "N/A"} vs.{" "}
                              {match.awayteam?.in2 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in3 || "N/A"} vs.{" "}
                              {match.awayteam?.in3 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in4 || "N/A"} vs.{" "}
                              {match.awayteam?.in4 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in5 || "N/A"} vs.{" "}
                              {match.awayteam?.in5 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in6 || "N/A"} vs.{" "}
                              {match.awayteam?.in6 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in7 || "N/A"} vs.{" "}
                              {match.awayteam?.in7 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in8 || "N/A"} vs.{" "}
                              {match.awayteam?.in8 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.in9 || "N/A"} vs.{" "}
                              {match.awayteam?.in9 || "N/A"}
                            </td>
                            <td>
                              {match.localteam?.totalscore || "N/A"} vs.{" "}
                              {match.awayteam?.totalscore || "N/A"}
                            </td>
                            <td>
                              {match.odds?.type ? (
                                <div style={{ overflowX: "auto" }}>
                                  <table
                                    border="1"
                                    style={{
                                      width: "100%",
                                      borderCollapse: "collapse",
                                    }}
                                  >
                                    <thead>
                                      <tr>
                                        <th>Type</th>
                                        <th>Bookmakers</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {match.odds.type.map((oddType, typeIndex) => (
                                        <tr key={typeIndex}>
                                          <td>{oddType.value}</td>
                                          <td>
                                            {Array.isArray(oddType.bookmaker) ? (
                                              <table
                                                border="1"
                                                style={{
                                                  width: "100%",
                                                  borderCollapse: "collapse",
                                                }}
                                              >
                                                <thead>
                                                  <tr>
                                                    <th>Name</th>
                                                    <th>Odds</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {oddType.bookmaker.map(
                                                    (bookmaker, bookmakerIndex) => (
                                                      <tr key={bookmakerIndex}>
                                                        <td>{bookmaker.name}</td>
                                                        <td>
                                                          {Array.isArray(bookmaker.odd) ? (
                                                            <ul>
                                                              {bookmaker.odd.map((odd, oddIndex) => (
                                                                <li key={oddIndex}>
                                                                  {odd.name}: {odd.value} (US: {odd.us})
                                                                </li>
                                                              ))}
                                                            </ul>
                                                          ) : (
                                                            "No odds available"
                                                          )}
                                                        </td>
                                                      </tr>
                                                    )
                                                  )}
                                                </tbody>
                                              </table>
                                            ) : (
                                              "No bookmakers available"
                                            )}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              ) : (
                                "No odds available"
                              )}
                            </td>
                            <td>
                              {/* Match extra data */}
                              <h3>Match Details</h3>
                              <table
                                border="1"
                                style={{
                                  width: "100%",
                                  borderCollapse: "collapse",
                                }}
                              >
                                <thead>
                                  <tr>
                                    <th>Date</th>
                                    <th>Extra Innings</th>
                                    <th>MLB ID</th>
                                    <th>Rotation Away</th>
                                    <th>Rotation Home</th>
                                    <th>Timestamp</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{match.date || "N/A"}</td>
                                    <td>{match.extra_inn || "N/A"}</td>
                                    <td>{match.mlbid || "N/A"}</td>
                                    <td>{match.odds?.rotation_away || "N/A"}</td>
                                    <td>{match.odds?.rotation_home || "N/A"}</td>
                                    <td>{match.odds?.ts || "N/A"}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  "No matches available"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
