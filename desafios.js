//Desafio surpresa (iniciante)
//Crie um código para armazenar o máximo de informações possível dos 
//pokemon da imagem ao lado e ao final, para cada um, exiba uma 
//mensagem de saída escrita o nome do pokemon concatenado com "Cadastrado com sucesso"

//declarando cada variável com seus respectivos dados
let nome = ["Poochyena", "Zigzagoon", "Dragonite", "Dragonite", "Pikachu", "Poochyena", "Hurhple", "Zubat", "Spearow", "Nidoran"]
let sexo = ["H" , "M" , "M" , "H" , "H" , "M" , "H" , "H" , "M" , "H"]
let level = [ "Lv 2" , "Lv 2" , "Lv 5" , "Lv 5" , "Lv 7" , "Lv 3" , "Lv 2" , "Lv 4" , "Lv 1" , "Lv 4"]
let hp = [ "13/13" , "13/13" , "25/25" , "24/24" , "30/30" , "15/15" , "7/14" , "8/10" , "10/10" , "5/10"]

for(let i = 0; i < nome.length; i++) {  //para ir sequencialmente

//saída
console.log(nome[i] + " pokemon cadastrado com sucesso!")  //nome[i] para pegar de um a um 
}
