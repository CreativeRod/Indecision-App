var nameVar = 'Roderick';
console.log('nameVar', nameVar);

let nameLet = 'Jaylen';
console.log('nameLet', nameLet);

function greatestPlayer() {
  let playerName = 'Michael Jordan';
  let playerName2 = 'Lebron James';

  if (playerName.length >= playerName2.length) {
    console.log(playerName + ' name is longer!');
  } else {
    console.log(playerName2  + ' name is longer!');
  }
}

greatestPlayer();
