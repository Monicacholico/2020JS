const attackValue = 10;
const monsterAttackValue = 14;
const strongAtttackValue = 17;
const healthValue = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(monsterAttackValue);
    currentPlayerHealth -= playerDamage;

    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("You would be dead but the bonus life saved you")
    }
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You won');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){
        alert('You lost');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0){
        alert('You have a draw!');
    }
}

function attackMonster(mode){
    let maxDamage;
    if(mode === 'ATTACK'){
        maxDamage = attackValue;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = strongAtttackValue;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler(){
    attackMonster('ATTACK');
}

function strongAttackHandler(){
    attackMonster('STRONG_ATTACK');
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
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);