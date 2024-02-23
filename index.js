
let nickname = ["Estrela", "Lua", "Sol", "Planeta", "Raio"];
let xp = [12000, 5640, 9300, 570, 7480];
let nivel;

for (let i = 0; i < nickname.length; i++) {

    if (xp[i] <= 1000) {
        nivel = "Ferro";
    } else if (xp[i] >= 1001 && xp[i] <= 2000) {
        nivel = "Bronze;"
    } else if (xp[i] >= 2001 && xp[i] <= 5000) {
        nivel = "Prata"
    } else if (xp[i] >= 5001 && xp[i] <= 7000) {
        nivel = "Ouro"
    } else if (xp[i] >= 7001 && xp[i] <= 8000) {
        nivel = "Platina"
    } else if (xp[i] >= 8001 && xp[i] <= 9000) {
        nivel = "Ascendente"
    } else if (xp[i] >= 9001 && xp[i] <= 10000) {
        nivel = "Imortal"
    } else if (xp[i] >= 10001) {
        nivel = "Radiante"
    }

    console.log("O herói de nome " + nickname[i] + " está no nível de " + nivel);
}