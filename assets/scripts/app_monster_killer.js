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

const enteredValue = prompt("Maximum Life for you and the monster", "100");

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
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
    for(let i = 0; i < 3; i++ )
    console.log('------');

    // for(let i = 10; i > 10;){
    //     i--;
    //     console.log(i);
    // }

    // for(let i = 0; i <battleLog.length; i++){
    //     console.log(battleLog[i]);
    // }

    let i = 0;
    for (const logEntry of battleLog){
        console.log(i);
        console.log(logEntry);
        i++
    }

}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);