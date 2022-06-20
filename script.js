// int
var Hp = 100;
var wzorHp=100;
var Money = 0;
var EnemyTier = 1;
var Wyplata = 100;
var AttackDm=1;
//Przeciwnicy / string
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

//Funkcje
function Start(){
    let Playername = prompt("Podaj imie Postaci: ");
    document.getElementById("PlayerName").innerText="Imię: "+Playername;
}
function Attack(){
    Hp-=AttackDm;
    document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
    if(Hp<=25){
        document.getElementById("zdj").src='RabbitLowHp.jpg';
    }
    if(Hp<=0){
        alert("Zabito "+EnemyName+"!");
        Money+=Wyplata*EnemyTier;
        document.getElementById("Money").innerText= "Pieniądze: "+Money+"$";
        PlayerExp+=ExpForEnemy*EnemyTier;
        document.getElementById("Exp").innerText="Exp: "+PlayerExp+"/"+NextLevel;
        if(PlayerExp>=NextLevel){
            NextLevel+=150*EnemyTier;
            document.getElementById("Exp").innerText="Exp: "+PlayerExp+"/"+NextLevel;
            Lvl++;
            document.getElementById("Level").innerText="Lvl: "+Lvl;
            alert("Gratulacje udało ci się zdobyć "+Lvl+" poziom!")
        }
        //wyświetlenie xp lvl itd.
        EnemyTier++;
        Hp=wzorHp*EnemyTier;
        document.getElementById("Zdrowie").innerText="Zdrowie: "+Hp;
        document.getElementById("zdj").src="Rabbit.jpg";
        
    }
}


//Kupno Broni
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