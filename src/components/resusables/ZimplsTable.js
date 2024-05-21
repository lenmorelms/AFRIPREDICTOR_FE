const TeamPoints = [
      {
        "rank": 1,
        "name": "Simba Bhora",
        "wins": 6,
        "draws": 2,
        "losses": 3,
        "goals_for": 14,
        "goals_against": 10,
        "points": 20
      },
      {
        "rank": 2,
        "name": "Highlanders FC",
        "wins": 5,
        "draws": 4,
        "losses": 1,
        "goals_for": 15,
        "goals_against": 7,
        "points": 19
      },
      {
        "rank": 3,
        "name": "Manica Diamonds FC",
        "wins": 6,
        "draws": 1,
        "losses": 3,
        "goals_for": 11,
        "goals_against": 8,
        "points": 19
      },
      {
        "rank": 4,
        "name": "FC Platinum",
        "wins": 5,
        "draws": 3,
        "losses": 2,
        "goals_for": 14,
        "goals_against": 8,
        "points": 18
      },
      {
        "rank": 5,
        "name": "Chicken Inn FC",
        "wins": 4,
        "draws": 5,
        "losses": 2,
        "goals_for": 9,
        "goals_against": 6,
        "points": 17
      },
      {
        "rank": 6,
        "name": "CAPS United",
        "wins": 5,
        "draws": 1,
        "losses": 5,
        "goals_for": 13,
        "goals_against": 10,
        "points": 16
      },
      {
        "rank": 7,
        "name": "Bulawayo Chiefs FC",
        "wins": 4,
        "draws": 4,
        "losses": 3,
        "goals_for": 10,
        "goals_against": 8,
        "points": 16
      },
      {
        "rank": 8,
        "name": "Green Fuel",
        "wins": 4,
        "draws": 3,
        "losses": 4,
        "goals_for": 10,
        "goals_against": 11,
        "points": 15
      },
      {
        "rank": 9,
        "name": "Bikita Minerals",
        "wins": 3,
        "draws": 4,
        "losses": 2,
        "goals_for": 9,
        "goals_against": 7,
        "points": 13
      },
      {
        "rank": 10,
        "name": "Ngezi Platinum FC",
        "wins": 2,
        "draws": 6,
        "losses": 3,
        "goals_for": 9,
        "goals_against": 11,
        "points": 12
      },
      {
        "rank": 11,
        "name": "ZPC Kariba FC",
        "wins": 2,
        "draws": 6,
        "losses": 3,
        "goals_for": 6,
        "goals_against": 8,
        "points": 12
      },
      {
        "rank": 12,
        "name": "Dynamos FC",
        "wins": 2,
        "draws": 5,
        "losses": 2,
        "goals_for": 7,
        "goals_against": 7,
        "points": 11
      },
      {
        "rank": 13,
        "name": "Telone FC",
        "wins": 2,
        "draws": 5,
        "losses": 3,
        "goals_for": 12,
        "goals_against": 13,
        "points": 11
      },
      {
        "rank": 14,
        "name": "Herentals FC",
        "wins": 2,
        "draws": 4,
        "losses": 3,
        "goals_for": 7,
        "goals_against": 9,
        "points": 10
      },
      {
        "rank": 15,
        "name": "Yadah FC",
        "wins": 2,
        "draws": 4,
        "losses": 5,
        "goals_for": 10,
        "goals_against": 14,
        "points": 10
      },
      {
        "rank": 16,
        "name": "Arenel Movers FC",
        "wins": 1,
        "draws": 6,
        "losses": 3,
        "goals_for": 5,
        "goals_against": 10,
        "points": 9
      },
      {
        "rank": 17,
        "name": "Chegutu Pirates FC",
        "wins": 2,
        "draws": 2,
        "losses": 5,
        "goals_for": 4,
        "goals_against": 9,
        "points": 8
      },
      {
        "rank": 18,
        "name": "Hwange FC",
        "wins": 1,
        "draws": 3,
        "losses": 6,
        "goals_for": 5,
        "goals_against": 14,
        "points": 6
      }
]

const ZimplsTable = () => {
  return (
    <table className="table">
      <thead>
        <tr className="p-2" style={{ backgroundColor: "navy", color: "white" }}>
          <th>PO</th>
          <th>TEAM</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GOALS</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {TeamPoints.map((team) => (
          <tr>
          <td>{team.rank}</td>
          <td>{team.name}</td>
          <td>{team.wins}</td>
          <td>{team.draws}</td>
          <td>{team.losses}</td>
          <td>{team.goals_for} : {team.goals_against}</td>
          <td>{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default ZimplsTable;
  