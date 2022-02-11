

$('.flex').css('display','none');
$('.grid').css('display','none');
$('.wrapper').css('display','none');
(function(){
	
	let loadingTimeOut = setTimeout(function(){
	$('.flex').css('display','flex');
	},5000);
	setTimeout(function(){
		$('.grid').css('display','grid');
		$('.wrapper').css('display','flex');
		$('#load').css('display', 'none');
	},6000);
	
})()
 
let board = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
];

let jogadorOneCount = 1;
let jogadorTwoCount = 1;

class Player {
  constructor() {
    this.isTurn = false;
    this.win = false;
  }
}

class Space {
  constructor(id) {
    this.played = false;
    this.id = id;
  }

  addSymbolX(space) {
    $(space).append("<div class='x'>X</div>");
    $('.typePlay').text('O ');
  }
  
  addSymbolO(space) {
    $(space).append("<div class='o'>O</div>");
    $('.typePlay').text('X ');
  }
}

//create players
const player1 = new Player();
const player2 = new Player();

//create spaces
const space1 = new Space('one');
const space2 = new Space('two');
const space3 = new Space('three');
const space4 = new Space('four');
const space5 = new Space('five');
const space6 = new Space('six');
const space7 = new Space('seven');
const space8 = new Space('eight');
const space9 = new Space('nine');

// Audio
const clickAudio = document.getElementById("click");

//switch turns
function switchTurns(one, two) {
  one.isTurn = true;
  two.isTurn = false;
}

//gameplay
player1.isTurn = true;
if(player1.isTurn){
  $('.typePlay').text('X ');
}
$('.grid').on('click', (e) => {
	clickAudio.play();
  if(player1.win !== true && player2.win !== true) {
    if(e.target.id === space1.id && space1.played === false) {
       if(player1.isTurn) {
         space1.addSymbolX(e.target);
         let index = board[0].indexOf(1);
         if(index !== -1) {
           board[0][index] = 'x';
         }
         switchTurns(player2, player1);
         space1.played = true;
       } else {
           space1.addSymbolO(e.target);
           let index = board[0].indexOf(1);
           if(index !== -1) {
             board[0][index] = 'o';
           }
           switchTurns(player1, player2);
           space1.played = true;
       }
    } 

    else if (e.target.id === space2.id && space2.played === false) {
       if(player1.isTurn) {
         space2.addSymbolX(e.target);
         let index = board[0].indexOf(2);
         if(index !== -1) {
           board[0][index] = 'x';
         }
         switchTurns(player2, player1);
         space2.played = true;
       } else {
           space2.addSymbolO(e.target);
           let index = board[0].indexOf(2);
           if(index !== -1) {
             board[0][index] = 'o';
           }
           switchTurns(player1, player2);
           space2.played = true;
       } 
    }

    else if (e.target.id === space3.id && space3.played === false) {
       if(player1.isTurn) {
         space3.addSymbolX(e.target);   
         let index = board[0].indexOf(3);
         if(index !== -1) {
           board[0][index] = 'x';
         }
         switchTurns(player2, player1);
         space3.played = true;
       } else {
           space3.addSymbolO(e.target); 
           let index = board[0].indexOf(3);
           if(index !== -1) {
             board[0][index] = 'o';
           }
           switchTurns(player1, player2);
           space3.played = true;
       }   
    }

   else if (e.target.id === space4.id && space4.played === false) {
       if(player1.isTurn) {
         space4.addSymbolX(e.target);  
         let index = board[1].indexOf(4);
         if(index !== -1) {
           board[1][index] = 'x';
         }
         switchTurns(player2, player1);
         space4.played = true;
       } else {
           space4.addSymbolO(e.target);
           let index = board[1].indexOf(4);
           if(index !== -1) {
             board[1][index] = 'o';
           }
           switchTurns(player1, player2);
           space4.played = true;
       } 
    }

    else if (e.target.id === space5.id && space5.played === false) {
       if(player1.isTurn) {
         space5.addSymbolX(e.target); 
         let index = board[1].indexOf(5);
         if(index !== -1) {
           board[1][index] = 'x';
         }
         switchTurns(player2, player1);
         space5.played = true;
       } else {
           space5.addSymbolO(e.target); 
           let index = board[1].indexOf(5);
           if(index !== -1) {
             board[1][index] = 'o';
           }
           switchTurns(player1, player2);
           space5.played = true;
       }   
    }  

    else if (e.target.id === space6.id && space6.played === false) {
       if(player1.isTurn) {
         space6.addSymbolX(e.target);
         let index = board[1].indexOf(6);
         if(index !== -1) {
           board[1][index] = 'x';
         }
         switchTurns(player2, player1);
         space6.played = true;
       } else {
           space6.addSymbolO(e.target);
           let index = board[1].indexOf(6);
           if(index !== -1) {
             board[1][index] = 'o';
           }
           switchTurns(player1, player2);
           space6.played = true;
       } 
    }

    else if (e.target.id === space7.id && space7.played === false) {
       if(player1.isTurn) {
         space7.addSymbolX(e.target);
         let index = board[2].indexOf(7);
         if(index !== -1) {
           board[2][index] = 'x';
         }
         switchTurns(player2, player1);
         space7.played = true;
       } else {
           space7.addSymbolO(e.target); 
           let index = board[2].indexOf(7);
           if(index !== -1) {
             board[2][index] = 'o';
           }
           switchTurns(player1, player2);
           space7.played = true;
       }   
    }

   else if (e.target.id === space8.id && space8.played === false) {
       if(player1.isTurn) {
         space8.addSymbolX(e.target);
         let index = board[2].indexOf(8);
         if(index !== -1) {
           board[2][index] = 'x';
         }
         switchTurns(player2, player1);
         space8.played = true;
       } else {
           space8.addSymbolO(e.target);
           let index = board[2].indexOf(8);
           if(index !== -1) {
             board[2][index] = 'o';
           }
           switchTurns(player1, player2);
           space8.played = true;
       } 
    }

    else if (e.target.id === space9.id && space9.played === false) {
       if(player1.isTurn) {
         space9.addSymbolX(e.target);
         let index = board[2].indexOf(9);
         if(index !== -1) {
           board[2][index] = 'x';
         }
         switchTurns(player2, player1);
         space9.played = true;
       } else {
           space9.addSymbolO(e.target); 
           let index = board[2].indexOf(9);
           if(index !== -1) {
             board[2][index] = 'o';
           }
           switchTurns(player1, player2);
           space9.played = true;
       }   
    }

    //check if playerX wins
    // top row
    if(board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") {
      modalGameWin('Play One Wins!', '1');
    }  
    // middle row 
    else if (board[1][0] === "x" && board[1][1] === "x" && board[1][2] === "x") {
      modalGameWin('Play One Wins!', '1');
    }
    // bottom row
    else if (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x") {
      modalGameWin('Play One Wins!', '1');
    }
    // first column
    else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
      modalGameWin('Play One Wins!', '1');
    }
    // second column
    else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
      modalGameWin('Play One Wins!', '1');
    }
    // third column
    else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
      modalGameWin('Play One Wins!', '1');
    }
    // diaganol right
    else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
      modalGameWin('Play One Wins!', '1');
    }
    // diaganol left
    else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
      modalGameWin('Play One Wins!', '1');
    } 

    // check if player 2 wins

    //top row
    if(board[0][0] === "o" && board[0][1] === "o" && board[0][2] === "o") {
      modalGameWin('Player Two Wins!', '2');
    }  
    // middle row 
    else if (board[1][0] === "o" && board[1][1] === "o" && board[1][2] === "o") {
      modalGameWin('Player Two Wins!', '2');
    }
    // bottom row
    else if (board[2][0] === "o" && board[2][1] === "o" && board[2][2] === "o") {
      modalGameWin('Player Two Wins!', '2');
    }
    // first column
    else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
      modalGameWin('Player Two Wins!', '2');
    }
    // second column
    else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
      modalGameWin('Player Two Wins!', '2');
    }
    // third column
    else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
      modalGameWin('Player Two Wins!', '2');
    }
    // diaganol right
    else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
      modalGameWin('Player Two Wins!', '2');
    }
    // diaganol left
    else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
      modalGameWin('Player Two Wins!', '2');
    }
  }
});

$('.return').on('click', () => {
  reset();
});

// dark mode
$('.darkModeButton').click(function(event) {
  darkMode();
});
function reset(){
  player1.isTurn = true;
  if(player1.isTurn){
    $('.typePlay').text('X ');
  }
  player2.isTurn = false;
  player1.win = false;
  player2.win = false;
  $('.x').remove();
  $('.o').remove();
  board = [[1,2,3],[4,5,6],[7,8,9]];
  space1.played = false;
  space2.played = false;
  space3.played = false;
  space4.played = false;
  space5.played = false;
  space6.played = false;
  space7.played = false;
  space8.played = false;
  space9.played = false;
}

function modalGameWin(mensagemGanhador, winPlayer){
  $('.modalWin').css('display', 'block');
  $('.venceu').text(mensagemGanhador);
  if(winPlayer == '2'){
    $('.p2').text (jogadorTwoCount);
    jogadorTwoCount += 1;
    player2.win = true;
  }else{
    $('.p1').text (jogadorOneCount);
    jogadorOneCount += 1;
    player1.win = true;
  }
  adicionaEventoModalGameWin();
}

function adicionaEventoModalGameWin(){
  $('.closeModal').click(function(event) {
     $('.modalWin').css('display', 'none');
  });
  $('.playAgain').click((event) => {
    $('.modalWin').css('display', 'none');
    reset();
  });
}