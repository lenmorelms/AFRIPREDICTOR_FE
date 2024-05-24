const TeamPoints = [
  {
    "rank": 1,
    "name": "Manica Diamonds FC",
    "wins": 8,
    "draws": 2,
    "losses": 3,
    "goals_for": 15,
    "goals_against": 9,
    "points": 26
  },
  {
    "rank": 2,
    "name": "FC Platinum",
    "wins": 7,
    "draws": 4,
    "losses": 2,
    "goals_for": 20,
    "goals_against": 10,
    "points": 25
  },
  {
    "rank": 3,
    "name": "Highlanders FC",
    "wins": 5,
    "draws": 6,
    "losses": 2,
    "goals_for": 17,
    "goals_against": 11,
    "points": 21
  },
  {
    "rank": 4,
    "name": "Chicken Inn FC",
    "wins": 5,
    "draws": 6,
    "losses": 2,
    "goals_for": 13,
    "goals_against": 9,
    "points": 21
  },
      {
        "rank": 5,
        "name": "Simba Bhora",
        "wins": 6,
        "draws": 3,
        "losses": 4,
        "goals_for": 16,
        "goals_against": 13,
        "points": 21
      },
      {
        "rank": 6,
        "name": "CAPS United",
        "wins": 5,
        "draws": 3,
        "losses": 5,
        "goals_for": 15,
        "goals_against": 12,
        "points": 18
      },
      {
        "rank": 7,
        "name": "Ngezi Platinum FC",
        "wins": 4,
        "draws": 6,
        "losses": 3,
        "goals_for": 13,
        "goals_against": 12,
        "points": 18
      },
      {
        "rank": 8,
        "name": "Bikita Minerals",
        "wins": 4,
        "draws": 5,
        "losses": 3,
        "goals_for": 12,
        "goals_against": 10,
        "points": 17
      },
      {
        "rank": 9,
        "name": "Bulawayo Chiefs FC",
        "wins": 4,
        "draws": 5,
        "losses": 4,
        "goals_for": 11,
        "goals_against": 11,
        "points": 17
      },
      {
        "rank": 10,
        "name": "Dynamos FC",
        "wins": 3,
        "draws": 7,
        "losses": 2,
        "goals_for": 11,
        "goals_against": 10,
        "points": 16
      },
      {
        "rank": 11,
        "name": "Green Fuel",
        "wins": 4,
        "draws": 4,
        "losses": 5,
        "goals_for": 11,
        "goals_against": 14,
        "points": 16
      },
      {
        "rank": 12,
        "name": "Herentals FC",
        "wins": 3,
        "draws": 6,
        "losses": 3,
        "goals_for": 10,
        "goals_against": 10,
        "points": 15
      },
      {
        "rank": 13,
        "name": "Yadah FC",
        "wins": 3,
        "draws": 5,
        "losses": 5,
        "goals_for": 13,
        "goals_against": 15,
        "points": 14
      },
      {
        "rank": 14,
        "name": "ZPC Kariba FC",
        "wins": 2,
        "draws": 8,
        "losses": 3,
        "goals_for": 7,
        "goals_against": 9,
        "points": 14
      },
      {
        "rank": 15,
        "name": "Telone FC",
        "wins": 2,
        "draws": 6,
        "losses": 5,
        "goals_for": 13,
        "goals_against": 18,
        "points": 12
      },
      {
        "rank": 16,
        "name": "Chegutu Pirates FC",
        "wins": 3,
        "draws": 2,
        "losses": 7,
        "goals_for": 8,
        "goals_against": 13,
        "points": 11
      },
      {
        "rank": 17,
        "name": "Arenel Movers FC",
        "wins": 1,
        "draws": 7,
        "losses": 5,
        "goals_for": 7,
        "goals_against": 15,
        "points": 10
      },
      {
        "rank": 18,
        "name": "Hwange FC",
        "wins": 1,
        "draws": 5,
        "losses": 7,
        "goals_for": 7,
        "goals_against": 18,
        "points": 8
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
  