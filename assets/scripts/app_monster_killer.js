const attackValue = 10;
const MonsterAttackValue = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler(){
    const damage = dealMonsterDamage(attackValue);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MonsterAttackValue);
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth <= 0){
        alert('You won');
    } else if (currentPlayerHealth <=0){
        alert('You lost');
    }
}

attackBtn.addEventListener('click', attackHandler);