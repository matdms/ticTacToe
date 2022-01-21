console.log("Tic Tac Toe")

// gameboard
const Gameboard = () => {
  const array = [["_","_","_"],["_","_","_"],["_","_","_"]]
  return { array }
}

const gameboard = Gameboard()
console.table(gameboard.array)
