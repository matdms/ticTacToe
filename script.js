console.log("Tic Tac Toe")

// gameboard
const Gameboard = () => {
  const array = [["_","_","_"],["_","_","_"],["_","_","_"]]
  return { array }
}

const gameboard = Gameboard()
console.table(gameboard.array)

// render gameboard
const gameDiv = document.getElementById('game')
const table = document.createElement('table')
table.className = 'gameboardTable'

for (let i = 0; i<3; i++) {
  const tr = document.createElement('tr')
  for (let j = 0; j<3; j++) {
    const td = document.createElement('td')
    td.className = 'gameboardCell'
    td.textContent = `Case ${i}x${j}`
    tr.appendChild(td)
  }
  table.appendChild(tr)
}
gameDiv.appendChild(table)
