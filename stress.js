
let skorPlayer1 = 0;
let skorPlayer2 = 0;
let ronde       = 5;

let komp      = bilRandom();

// Tebakan Player
const tebakanPlayer = (player1,player2) => {
    if (player1 == komp) {
        skorPlayer1++;
        alert(`Player 1 MENANG!`);
    } else if (player2 == komp) {
        skorPlayer2++;
        alert(`Player 2 MENANG!`);
    } else {
        alert(`Hasil SERI!`);
    }
    alert(`Nilai Kucing adalah ${komp} \n\n---------------------------------\n\nTebakan Player 1 : ${player1}\nTebakan Player 2 : ${player2}`);
};

// Ingin bermain lagi
const ulangi = () => {
    if (confirm(`Apakah ingin bermain lagi?`)) {
        skorPlayer1 = 0;
        skorPlayer2 = 0;
        inGame();
    } else {
        alert(`Terima Kasih sudah bermain`);
    }
};

// Angka random 1-3
function bilRandom (){
    let acak = Math.random();
    if (acak <= 0.35){
        acak = 1;
    } else if (acak <= 0.7){
        acak = 2;
    } else {
        acak =3;
    }
    return acak;
};


// IN GAME
const inGame = () => {
    for (let i=1; i<=ronde; i++) {
        alert(`ronde ${i}`);
        // input angka tebakan player
        const player1 = parseInt(prompt(`Player 1 masukkan tebakan :`));
        const player2 = parseInt(prompt(`Player 2 masukkan tebakan :`)); 
        

        // Validasi Inputan
        if (player1 < 1 || player2 < 1) {
            alert("Angka Tebakan tidak boleh kurang dari 1");
            i--;
        }else if (player1 > 3 || player2 > 3){
            alert(`Angka tebakan tidak boleh lebih dari 3`);
            i--;
        } else if(isNaN(player1) || isNaN(player2)){
            alert(`Tebakan hanya berupa angka 1 -3, tidak menggunakan huruf !`);
            i--;
        } else if (player1 == player2) {
            alert("Angka sudah dipilih, pilihan tidak boleh sama");
            i--;
        } else {
            tebakanPlayer(player1, player2);
            alert(`SKOR SEMENTARA\n-----------------\nPlayer 1 : ${skorPlayer1}\nPlayer 2 : ${skorPlayer2}`);
        }    
        
    }
    // SKOR AKHIR
    if (skorPlayer1 > skorPlayer2){
        alert(`TOTAL SKOR : \n----------------------------------- \nPlayer 1 : ${skorPlayer1} \nPlayer 2 : ${skorPlayer2}`);
        alert(`SELAMAT PLAYER 1 ANDA MENANG !!`);
    } else if (skorPlayer2 > skorPlayer1){
        alert(`TOTAL SKOR : \n----------------------------------- \nPlayer 1 : ${skorPlayer1} \nPlayer 2 : ${skorPlayer2}`);
        alert(`SELAMAT PLAYER 2 ANDA MENANG !!`);
    } else {
        alert(`-----------------Hasil Seri-----------------\n
           -------------Tidak Ada Pemenang-------------`);
    }

    ulangi();
};

// Play game again
inGame();