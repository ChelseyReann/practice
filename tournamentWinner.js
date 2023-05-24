//Algos tournament taking place - teams of programmers compete against each other to solve alo problems as fast as possible. TeOnly 2 teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competiton there is always one winner and one loser; ther are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

function tournamentWinner(competitions, results) {
   let maxValue
   let winners = {}
   let tWinner

   for (let i = 0; i < competitions.length; i++){
    if (results[i] === 0) {
        winners [competitions[i][1]] = (winners[competitions[i][1]] || 0) + 3
    } else {
        winners[competitions[i][0]] = (winners[competitions[i][0]] || 0) + 3
    }
   }

   maxValue = Math.max(...Object.values(winners))
   tWinner = Object.keys(winners).find(tWinner => winners[tWinner] === maxValue)
   return tWinner
}

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ['Python', 'HTML']
]

let results = [0, 0, 1]

console.log(tournamentWinner(competitions,results))