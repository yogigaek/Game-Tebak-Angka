alert (`Selamat datang di game tebak angka KUCING :)
\nkamu diminta untuk menebak angka dari 1-3 \ndan kamu akan bermain dalam 5 ronde,
Permainan akan dimainkan dengan 2 player. 
\nPlayer yang berhasil menebak angka kucing terbanyak akan menang. \n\n              
----------------------------SELAMAT BERMAIN---------------------------`);

let skorPlayer1 = 0;
let skorPlayer2 = 0;
let ronde       = 1;


// Validasi Inputan / RULES GAME
function validasi (player1,player2){
    if (player1 < 1 || player2 < 1) {
        alert("Angka Tebakan tidak boleh kurang dari 1");
        // i--;
        return false;
    }
    if (player1 > 3 || player2 > 3){
        alert(`Angka tebakan tidak boleh lebih dari 3`);     
        // i--;
        return false;
    } 
    if(isNaN(player1) || isNaN(player2)){
        alert(`Tebakan hanya berupa angka 1 -3, tidak menggunakan huruf !`);
        // i--;
        return false;
    }
    if (player1 == player2) {
        alert("Angka sudah dipilih, pilihan tidak boleh sama");
        // i--;
        return false;
    }   
    return true;
};  

// Ingin bermain lagi?
const ulangi = () => {
    if (confirm(`Apakah ingin bermain lagi?`)) {
        skorPlayer1 = 0;
        skorPlayer2 = 0;
        ronde       = 1;
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

// SKOR AKHIR
const skorHasilAkhir = () => {
    if (skorPlayer1 > skorPlayer2){
        alert(`Permainan Berakhir.. \n\nTOTAL SKOR : \n----------------------------------- \nPlayer 1 : ${skorPlayer1} \nPlayer 2 : ${skorPlayer2}`);
        alert(`SELAMAT PLAYER 1 ANDA MENANG !!`);
        die = ulangi();
    } else if (skorPlayer2 > skorPlayer1){
        alert(`Permainan Berakhir.. \n\nTOTAL SKOR : \n----------------------------------- \nPlayer 1 : ${skorPlayer1} \nPlayer 2 : ${skorPlayer2}`);
        alert(`SELAMAT PLAYER 2 ANDA MENANG !!`);
        die = ulangi();
    } else {
        alert(`-----------------Hasil Seri-----------------\n
            -------------Tidak Ada Pemenang-------------`);
        die = ulangi();
    }
};


// IN GAME 
let die = true;
const inGame = () => {
    while(die) {
        // input angka tebakan player
        const player1 = parseInt(prompt(`Player 1 masukkan tebakan :`));
        const player2 = parseInt(prompt(`Player 2 masukkan tebakan :`)); 

        const komp    = bilRandom();
        let valid     = validasi(player1,player2);

        
        if (valid === false){
            die = confirm(`Di ulang lagi ya..`);
        }else {
            if (player1 == komp) {
                skorPlayer1++;
                alert(`Player 1 MENANG!`);
            } else if (player2 == komp) {
                skorPlayer2++;
                alert(`Player 2 MENANG!`);
            } else {
                alert(`HASIL SERI!`);
            }
            alert(`Nilai Kucing adalah ${komp} \n\n---------------------------------\n\nTebakan Player 1 : ${player1}\nTebakan Player 2 : ${player2}`);
            alert(`SKOR SEMENTARA : \nPlayer 1 dengan skor = ${skorPlayer1} \nPlayer 2 dengan skor = ${skorPlayer2} `);
            
            ronde++;
            if (ronde <= 5){
                die = confirm(`Lanjut ke ronde ${ronde}?`);
            }else{
                skorHasilAkhir();
            }
        }
    } 
// ulangi();
};

// Play game again
inGame();

// console.log(acak(1,1)); 