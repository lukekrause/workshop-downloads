// YOUR CODE BELOW
let ticTacToe = {
    board:  [
            [null, null, null] ,
            [null, null, null] ,
            [null, null, null]
        ],

    move: function(character, rowNum, colNum) {

        if (character === typeof Number) {
            return character.toString()
        } 
        
        if (this.board[rowNum][colNum] === null) {

            this.board[rowNum].splice(colNum, 1, character)
            
            return this.board
        }
        
        return this.board
    },

    clear: function() {
        return this.board = [
            [null, null, null] ,
            [null, null, null] ,
            [null, null, null]
        ]
    }
}
