// int
var Hp = 100;
var wzorHp=100;
var Money = 0;
var EnemyTier = 1;
var Wyplata = 100;
var AttackDm=2;
//Przeciwnicy / string
var Biom = "łąka";
var EnemyName= "Królika";

//Statystyki (Level)
var Lvl=1;
var PlayerExp=0;
var ExpForEnemy=10;
var NextLevel=100;

// kupiono broń? / boolean
var isBuyMT1=false;
var isBuyMT2=false;
var isBuyMT3=false;
var isBuyMT4=false;
var isBuyMT5=false;
var isBuyMT6=false;
var isBuyMT7=false;
var isBuyMT8=false;
var isBuyMT9=false;
var isBuyMT10=false;

//Funkcje UI
function Start(){
    var Playername = prompt("Podaj imie Postaci: ");
    if(Playername.length<1){
        Playername="Player";
    }
    document.getElementById("PlayerName").innerText="Imię: "+Playername;
}
function Attack(){
    Hp-=AttackDm;
    document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
    EnemyCategoriesEtc();
}
function EnemyCategoriesEtc(){
    //
    // wizualizacja obrażeń ptrzeciwników
    //
    if(Hp<=25 && EnemyName=="Królika"){
        document.getElementById("zdj").src='RabbitLowHp.jpg';
    }
    else if(Hp<=50 && EnemyName=="Ptaka"){
        document.getElementById("zdj").src='BirdLowHp.jpg';
    }
    else if(Hp<=200 && EnemyName=="Kożę"){
        document.getElementById("zdj").src='GoatLowHp.jpg';
    }
    else if(Hp<=350 && EnemyName=="Pająk"){
        document.getElementById("zdj").src='SpiderLowHp.jpg';
    }
    else if(Hp<=200 && EnemyName=="Kaktusa"){
        document.getElementById("zdj").src='KaktusLowHp.jpg';
    }
    else if(Hp<=350 && EnemyName=="Skorpiona"){
        document.getElementById("zdj").src='SkorpionLowHp.jpg';
    }
    
    //
    // zabity przeciwnik
    //
    if(Hp<=0){
        alert("Zabito "+EnemyName+"!");
        Money+=Wyplata*EnemyTier;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        PlayerExp+=ExpForEnemy*EnemyTier*Lvl;
        document.getElementById("Exp").innerText="Exp: "+PlayerExp+"/"+NextLevel;
        if(PlayerExp>=NextLevel){
            NextLevel+=PlayerExp;
            document.getElementById("Exp").innerText="Exp: "+PlayerExp+"/"+NextLevel;
            Lvl++;
            document.getElementById("Level").innerText="Lvl: "+Lvl;
            alert("Gratulacje udało ci się zdobyć "+Lvl+" poziom!")
        }
        //losowanie przeciwnika
        EnemyType = parseInt((Math.random() * (2 - 1 + 1)), 10) + 1;
        // 
        // łąka
        // 
        if(EnemyType==1 && Biom=="łąka"){
            EnemyName="Królika";
            EnemyTier=1;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Rabbit.jpg";
        }
        else if(EnemyType==2 && Biom=="łąka"){
            EnemyName="Ptaka";
            EnemyTier=2;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Bird.jpg";
        }
        //
        // góry
        //
        else if(EnemyType==1 && Biom=="góry"){
            EnemyName="Kożę";
            EnemyTier=3;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier*2;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Goat.jpg";
        }
        else if(EnemyType==2 && Biom=="góry"){
            EnemyName="Pająka";
            EnemyTier=4;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier*2;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Spider.jpg";
        }
        //
        // pustynni wrogowie
        //
        else if(EnemyType==1 && Biom=="pustynia"){
            EnemyName="Kaktusa";
            EnemyTier=5;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier*2;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Kaktus.jpg";
        }
        else if(EnemyType==2 && Biom=="pustynia"){
            EnemyName="Skorpiona";
            EnemyTier=6;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier*2;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Skorpion.jpg";
        }
    }
}
// Biomy
function laka(){
    if(Lvl>=1 && Biom!="łąka"){
    document.getElementById("Grass").value="łąka: tu jesteś";
    document.getElementById("Hill").value="góry(wymaga 5 lvl)";
    document.getElementById("Dust").value="pustynia(wymaga 10 lvl)";
    Biom="łąka";
    EnemyType = parseInt((Math.random() * (2 - 1 + 1)), 10) + 1;
        // 
        // łąka
        // 
        if(EnemyType==1 && Biom=="łąka"){
            EnemyName="Królika";
            EnemyTier=1;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Rabbit.jpg";
        }
        else if(EnemyType==2 && Biom=="łąka"){
            EnemyName="Ptaka";
            EnemyTier=2;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Bird.jpg";
        }
    }
}
function gora(){
    if(Lvl>=5 && Biom!="góry"){
        document.getElementById("Grass").value="łąka(wymaga 1 lvl);"
        document.getElementById("Hill").value="góry: tu jesteś";
        document.getElementById("Dust").value="pustynia(wymaga 10 lvl)";
        Biom="góry";
        EnemyType = parseInt((Math.random() * (2 - 1 + 1)), 10) + 1;
        if(EnemyType==1 && Biom=="góry"){
            EnemyName="Kożę";
            EnemyTier=3;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier*2;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Goat.jpg";
        }
        else if(EnemyType==2 && Biom=="góry"){
            EnemyName="Pająka";
            EnemyTier=4;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier*2;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Spider.jpg";
        }
    }
    else if(Lvl<5){
        alert("Masz zbyt niski poziom!")
    }
}
function pustynia(){
    if(Lvl>=10 && Biom!="pustynia"){
        document.getElementById("Grass").value="łąka(wymaga 1 lvl);"
        document.getElementById("Hill").value="góry(wymaga 5 lvl)";
        document.getElementById("Dust").value="pustynia tu jesteś";
        Biom="pustynia";
        EnemyType = parseInt((Math.random() * (2 - 1 + 1)), 10) + 1;
        //
        // pustynni wrogowie
        //
        if(EnemyType==1 && Biom=="pustynia"){
            EnemyName="Kaktusa";
            EnemyTier=5;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier*2;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Kaktus.jpg";
        }
        else if(EnemyType==2 && Biom=="pustynia"){
            EnemyName="Skorpiona";
            EnemyTier=6;
            document.getElementById("Enemylevel").innerText="Poziom(trudność): "+EnemyTier;
            Hp=wzorHp*EnemyTier*2;
            document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
            document.getElementById("zdj").src="Skorpion.jpg";
        }
    }
    else  if(Lvl<10){
        alert("Masz zbyt niski poziom!")
    }
}
// Kupno Broni
function BuyMT1(){
    if(Money>=100 && Lvl>=1 && !isBuyMT1){
        Money-=100;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=5;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT1").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 1");
        isBuyMT1=true;
    }
}
function BuyMT2(){
    if(Money>=500 && Lvl>=2 && !isBuyMT2){
        Money-=500;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=10;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT2").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 2");
        isBuyMT2=true;
    }
}
function BuyMT3(){
    if(Money>=1000 && Lvl>=4 && !isBuyMT3){
        Money-=1000;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=15;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT3").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 3");
        isBuyMT3=true;
    }
}
function BuyMT4(){
    if(Money>=5000 && Lvl>=6 && !isBuyMT4){
        Money-=5000;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=20;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT4").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 4");
        isBuyMT4=true;
    }
}
function BuyMT5(){
    if(Money>=15000 && Lvl>=6 && !isBuyMT5){
        Money-=15000;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=50;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT5").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 5");
        isBuyMT5=true;
    }
}
function BuyMT6(){
    if(Money>=20000 && Lvl>=7 && !isBuyMT6){
        Money-=20000;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=100;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT6").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 6");
        isBuyMT6=true;
    }
}
function BuyMT7(){
    if(Money>=25000 && Lvl>=7 && !isBuyMT7){
        Money-=25000;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=150;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT7").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 7");
        isBuyMT7=true;
    }
}
function BuyMT8(){
    if(Money>=50000 && Lvl>=9 && !isBuyMT5){
        Money-=50000;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=200;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT8").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 8");
        isBuyMT8=true;
    }
}
function BuyMT9(){
    if(Money>=100000 && Lvl>=10 && !isBuyMT9){
        Money-=100000;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=500;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT9").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 9");
        isBuyMT9=true;
    }
}
function BuyMT10(){
    if(Money>=150000 && Lvl>=12 && !isBuyMT5){
        Money-=150000;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        AttackDm=1000;
        document.getElementById("AttackDamage").innerText="Siła Ataku: "+AttackDm;
        document.getElementById("BMT10").value="Już Posiadasz ten przedmiot";
        alert("Kupiono Miecz tier 10");
        isBuyMT10=true;
    }
}