const app = Vue.createApp({
    watch:{
        monsterhealth:80,
        playerhealth:100
    }
})
const playerattack = () => {
    const attack= Math.random(0.05,0.12)*100
    monsterhealth-=attack
    monsterattack()
}
const monsterattack = () => {
    const attack= Math.random(0.08,0.15)*100
    playerhealth-=attack
}
const specialattack = () => {
    const attack= Math.random(0.10,0.25)*100
    monsterhealthhealth-=attack
    monsterattack()
}
const heal = () => {
    const heal= Math.random(0.08,0.20)*100
    playerhealth+=heal
    monsterattack()
}

app.mount('#game')