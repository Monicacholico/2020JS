const attackValue = 10;
const monsterAttackValue = 14;
const strongAtttackValue = 17;
const healthValue = 20;

const modeAttack = 'ATTACK';
const modeStrongAttack = 'STRONG_ATTACK';
const logEventPlayerAttack = 'PLAYER_ATTACK';
const logEventPlayerStrongAttack = 'PLAYER_STRONG_ATTACK';
const logEventMonsterAttack = 'MONSTER_ATTACK';
const logEventPlayerHeal = 'PLAYER_HEAL';
const logEventGameOver = 'GAME_OVER';

let battleLog = [];
let lastLoggedEntry;

function getMaxLifeValues(){
    const enteredValue = prompt("Maximum Life for you and the monster", "100");

    const parsedValue = parseInt(enteredValue);
    
    if(isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: 'Invalid user input, not a number'};
    }
    return parsedValue;
}

let chosenMaxLife;

try {
    let chosenMaxLife = getMaxLifeValues();
} catch(error){
    console.log(error);
    chosenMaxLife = 100;
    alert("You entered something wrong, default value of 100 was used");
}




let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth){
    let logEntry;
    if(ev === logEventPlayerAttack, monsterHealth){
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        switch(ev){
            case logEventPlayerAttack:
                logEntry.target = 'MONSTER';
                break;
            case logEventPlayerStrongAttack:
                logEntry = {
                    event: ev,
                    value: val,
                    target: 'MONSTER',
                    finalMonsterHealth: monsterHealth,
                    finalPlayerHealth: playerHealth
                };
                break;
                case logEventMonsterAttack:
                    logEntry = {
                    event: ev,
                    value: val,
                    target: 'PLAYER',
                    finalMonsterHealth: monsterHealth,
                    finalPlayerHealth: playerHealth
                        };
                break;
                case logEventPlayerHeal:
                    logEntry = {
                    event: ev,
                    value: val,
                    target: 'PLAYER',
                    finalMonsterHealth: monsterHealth,
                    finalPlayerHealth: playerHealth
                        };
                break;
                case logEventGameOver:
                    logEntry = {
                    event: ev,
                    value: val,
                    finalMonsterHealth: monsterHealth,
                    finalPlayerHealth: playerHealth
                    };
                break;
            default:
                logEntry = {};
                
        }
    // } else if(ev === logEventPlayerStrongAttack) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'MONSTER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // } else if(ev === logEventMonsterAttack){
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // } else if (ev === logEventPlayerHeal){
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }  else if (ev === logEventGameOver){
    //     logEntry = {
    //     event: ev,
    //     value: val,
    //     finalMonsterHealth: monsterHealth,
    //     finalPlayerHealth: playerHealth
    //     };
    }
    battleLog.push(logEntry);
}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    hasBonusLife = true;
    resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(monsterAttackValue);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        logEventMonsterAttack,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
        );
    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("You would be dead but the bonus life saved you")
    }
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You won');
        writeToLog(
            logEventMonsterAttack,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
            );
    } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){
        alert('You lost');
        writeToLog(
            logEventMonsterAttack,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth
            );
    } else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0){
        alert('You have a draw!');
        writeToLog(
            logEventMonsterAttack,
            'DRAW',
            currentMonsterHealth,
            currentPlayerHealth
            );
    }
    if(
        currentMonsterHealth <=0 || currentPlayerHealth <=0
    ) {
        reset();
    }
}

function attackMonster(mode){
    let maxDamage = mode === modeAttack ? attackValue : strongAtttackValue;
    let logEvent = mode === modeAttack ? logEventPlayerAttack : logEventPlayerStrongAttack;
    // if(mode === modeAttack){
    //     maxDamage = attackValue;
    //     logEvent = logEventPlayerStrongAttack;
    // } else if (mode === modeStrongAttack) {
    //     maxDamage = strongAtttackValue;
    //     logEvent = logEventPlayerStrongAttack;
    // }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
        );
    endRound();
}

function attackHandler(){
    attackMonster(modeAttack);
}

function strongAttackHandler(){
    attackMonster(modeStrongAttack);
}

function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - healthValue){
        alert("You can't heal to more than your max initial health.")
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = healthValue;
    }
    increasePlayerHealth(healthValue);
    currentPlayerHealth += healthValue;
    writeToLog(
        logEventPlayerHeal,
        healthValue,
        currentMonsterHealth,
        currentPlayerHealth
        );
    endRound();
}

function printLogHandler(){
    // for(let i = 0; i < 3; i++ )
    // console.log('------');

    let j = 0;
    while (j < 3){
        console.log('whats up');
        j++;
    }

    // for(let i = 10; i > 10;){
    //     i--;
    //     console.log(i);
    // }

    // for(let i = 0; i <battleLog.length; i++){
    //     console.log(battleLog[i]);
    // }

    // let i = 0;
    // for (const logEntry of battleLog){
    //     console.log(i);
    //     console.log(logEntry);
    //     i++
    // }

    let i = 0;
    for(const logEntry of battleLog){
        console.log(`#${i}`);
        for(const key in logEntry){
            console.log(key);
            console.log(logEntry[key]);
        }
        i++
    }

}

let randomNumbers = [];
let finished = false;
while(!finished){
    const rndNumber = Math.random();
    randomNumbers.push(rndNumber);
    if(rndNumber > 0.5) {
        finished = true;
        console.log(randomNumbers);
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);



    pointeShoes = [
      {
        "name": " Alpha",
        "brand": " Bloch",
        "feetType": "Egyptian",
        "level": "Advanced",
        "strength": "Strong",
        "toesLength": "Long",
        "arcProfile": "High",
        "width": "Narrow",
        "id": 6
      },
      {
        "name": " Elite",
        "brand": " Grishko",
        "feetType": "Giselle",
        "level": "Intermediate",
        "strength": "Medium",
        "toesLength": "Short",
        "arcProfile": "Low",
        "width": "Wide",
        "id": 7
      },
      {
        "name": " Balance",
        "brand": " Bloch",
        "feetType": "Giselle",
        "level": "Beginner",
        "strength": "Low",
        "toesLength": "Short",
        "arcProfile": "Low",
        "width": "Wide",
        "id": 8
      },
      {
        "name": " Balance",
        "brand": " Bloch",
        "feetType": "Giselle",
        "level": "Beginner",
        "strength": "Low",
        "toesLength": "Short",
        "arcProfile": "Low",
        "width": "Wide",
        "id": 9
      },
      {
        "name": " Balance",
        "brand": " Bloch",
        "feetType": "Giselle",
        "level": "Beginner",
        "strength": "Low",
        "toesLength": "Short",
        "arcProfile": "Low",
        "width": "Wide",
        "id": 10
      },
      {
        "name": " Balance",
        "brand": " Bloch",
        "feetType": "Giselle",
        "level": "Beginner",
        "strength": "Low",
        "toesLength": "Short",
        "arcProfile": "Low",
        "width": "Wide",
        "id": 11
      },
      {
        "name": " Balance",
        "brand": " Bloch",
        "feetType": "Giselle",
        "level": "Beginner",
        "strength": "Low",
        "toesLength": "Short",
        "arcProfile": "Low",
        "width": "Wide",
        "id": 12
      },
      {
        "name": " [object Htmlinputelement]",
        "brand": " [object Htmlinputelement]",
        "id": 13
      },
      {
        "name": " Balance",
        "brand": " Bloch",
        "feetType": "Giselle",
        "level": "Beginner",
        "strength": "Low",
        "toesLength": "Short",
        "arcProfile": "Low",
        "width": "Wide",
        "id": 14
      }
    ]
  
    let i = 0;
for (const pointeShoe of pointeShoes) {
    console.log(`#${i}`);
    for(const key in pointeShoe){
        // console.log(key);
        console.log(pointeShoe.brand);
    }
    i++;
}