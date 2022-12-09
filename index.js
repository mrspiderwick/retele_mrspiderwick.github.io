
let getpass,password = 1169;
getpass = 1169;
// prompt("Introdu pasword",getpass);
if(getpass == password){
function LungBit(){
 let a,n,i,b;
    n=2;
    i=1;
    
    a = document.getElementById("LungB").value;
    a=parseInt(a);

    while (Math.pow(n,i) <= a) {
        i++
    }
    b=a+i;
    console.log(b);
    document.getElementById("1").innerHTML=b ;
}

function LungOct(){
 let a,b,i,n;
    n=2;
    i=1;
    a = document.getElementById("LungO").value;
    a=parseInt(a);
    b=a*8;

    while (Math.pow(n,i) <= b) {
        i++
    }
    b+=i;

    console.log(b);
    document.getElementById("2").innerHTML=b;
}

function BitContr(){
    let a,n,i;
       n=2;
       i=1;
       a = document.getElementById("BContr").value;
       a=parseInt(a);
   
       while (Math.pow(n,i) <= a) {
           i++
       }
   
   console.log(i);
   document.getElementById("3").innerHTML=i;

}

function OctContr(){
    let a,b,i,n;
       n=2;
       i=1;
       a = document.getElementById("OContr").value;
       a=parseInt(a);
       b=a*8;
   
       while (Math.pow(n,i) <= b) {
           i++
       }
       b+=i; 
   
       console.log(i);
       document.getElementById("4").innerHTML= i;
   }

   function Ruter(){
    let show = document.getElementById("rut");
    show.innerHTML = ""; 
    let DA = document.getElementById("DA").value;
    let DI = document.getElementById("DI").value;
    let DE = document.getElementById("DE").value;
    // console.log(DA+" "+DI+" "+DE+" ");
    let ba=3,bi=8,be=12;
    let fa=20,fi=8,fe=14;
    let ga=15,gi=8,ge=10;
    let ha=2,hi=5,he=8;
    let rs1,rs2,rs3,rs4;

    DA = parseInt(DA);
    DI = parseInt(DI);
    DE = parseInt(DE);

//B
    if ((DE+be) <= (DI+bi) && (DE+be)<=(DA+ba)) {
        rs1 = (DE+be)+"E";
    } else if((DI+bi) <= (DA+ba) && (DI+bi) <= (DE+be)){rs1 = (DI+bi)+"I"}else {rs1 = (DA+ba)+"A"}
//F
    if ((DE+fe) <= (DI+fi) && (DE+fe)<=(DA+fa)) {
        rs2 = (DE+fe)+"E";
    } else if((DI+fi) <= (DA+fa) && (DI+fi) <= (DE+fe)){rs2 = (DI+fi)+"I"}else {rs2 = (DA+fa)+"A"}
//G
    if ((DE+ge) <= (DI+gi) && (DE+ge)<=(DA+ga)) {
        rs3 = (DE+ge)+"E";
    } else if((DI+gi) <= (DA+ga) && (DI+gi) <= (DE+ge)){rs3 = (DI+gi)+"I"}else {rs3 = (DA+ga)+"A"}
//H
    if ((DE+he) <= (DI+hi) && (DE+he)<=(DA+ha)) {
        rs4 = (DE+he)+"E";
    } else if((DI+hi) <= (DA+ha) && (DI+hi) <= (DE+he)){rs4 = (DI+hi)+"I"}else {rs4 = (DA+ha)+"A"}
    show.innerHTML +=("B: "+rs1+"<br>F: "+rs2+"<br>G "+rs3+"<br>H "+rs4);
   }

function Calc(){
    console.log("------------------------New--------------------");
    let show = document.getElementById("5") ;
    show.innerHTML = ""; 
    let ip,masc,m,clasa,cl;
    ip = document.getElementById("IpCalc").value;
    masc = document.getElementById("MascaCalc").value;
    console.log("Ip adresa: "+ip +" Masca "+masc);
    m="";
    clasa="";
    cl="1";
    clasa = ip.charAt(0)+ip.charAt(1)+ip.charAt(2);
clasa = parseInt(clasa);

(clasa>=0 && clasa<=126)?cl="A":
(clasa>=128 && clasa<=191)?cl="B":
(clasa>=192 && clasa<=223)?cl = "C":
(clasa>=224 && clasa<=239)?cl = "D":
(clasa>=240 && clasa<=255)?cl = "E":"Mai mare"

console.log("Clasa IP adresei "+cl);
show.innerHTML += "Clasa IP adresei "+cl+"<br>";

let c,c1;

cl=="A"?c=8:
cl=="B"?c=16:
cl=="C"?c=24:"Mai mare"    
c = parseInt(c);
c1=masc-c;



    switch (cl) {
        case "A":cl = "255.0.0.0";
            break;
        case "B":cl = "255.255.0.0";
            break;
        case "C":cl = "255.255.255.0";
            break;   
        default:
            break;
    }

    console.log("Masca implicită de reţea "+cl);
    show.innerHTML +="Masca implicită de reţea "+cl+"<br>"
m=" ";

masc = parseInt(masc);
    switch (masc) {
        case 30:m = "255.255.255.252";
            break;
        case 29:m = "255.255.255.248";
            break;
        case 28:m = "255.255.255.240";
            break;
        case 27:m = "255.255.255.224";
            break;
        case 26:m = "255.255.255.192";
            break;
        case 25:m = "255.255.255.128";
            break;
        case 24:m = "255.255.255.0";
            break;
        case 23:m = "255.255.254.0";
            break;
        case 22:m = "255.255.252.0";
            break;
        case 21:m = "255.255.248.0";
            break;
        case 20:m = "255.255.240.0";
            break;
        case 19:m = "255.255.224.0";
            break;
        case 18:m = "255.255.192.0";
            break;
        case 17:m = "255.255.128.0";
            break;
        case 16:m = "255.255.0.0";
            break;
        case 15:m = "255.254.0.0";
            break;
        case 14:m = "255.252.0.0";
            break;
        case 13:m = "255.248.0.0";
            break;
        case 12:m = "255.240.0.0";
            break;
        case 11:m = "255.224.0.0";
            break;
        case 10:m = "255.192.0.0";
            break;
        case 9:m = "255.128.0.0";
            break;
        case 8:m = "255.0.0.0";
            break;   
        default:
            break;
    }
    //masca elemente
    let a=['','','',''];
    let j = 0;
    for (let i = 0; i < cl.length; i++) {
        if (cl.charAt(i)=='.') {
            j++;
        }else a[j]+=cl.charAt(i)+'';
    }

    //ip elemente 
    let b=['','','',''];
    j = 0;
    for (let i = 0; i < ip.length; i++) {
        if (ip.charAt(i)=='.') {
            j++;
        }else b[j]+=ip.charAt(i)+'';
    }

   //compararea
    let a5 = "";

    a[3]=="255"?a5=b[0]+'.'+b[1]+'.'+b[2]+'.'+b[3]:
    a[2]=="255"?a5=b[0]+'.'+b[1]+'.'+b[2]+'.0':
    a[1]=="255"?a5=b[0]+'.'+b[1]+'.0'+'.0':
            a5=b[0]+'.0'+'.0'+'.0';

    //Identificator subretea
    let l=['','','',''];
    j = 0;
    for (let i = 0; i < m.length; i++) {
        if (m.charAt(i)=='.') {
            j++;
        }else l[j]+=m.charAt(i)+'';
    }
    
     
//  ip binar
    let decimal1;
    if(l[1]<255){
        decimal1=b[1];
    }else if(l[2]<255){decimal1=b[2];}
    else{decimal1=b[3];}
    let binary1="";

    while (decimal1 > 0) {
        if (decimal1 & 1) {
           binary1 = "1" + binary1;
        } else {
           binary1 = "0" + binary1;
        }
        decimal1 = decimal1 >> 1;
     }; 

     while (binary1.length < 8) {
        binary1='0'+binary1;
     }


//   masca binar
    let decimal;
    
    if(l[1]<255){
        decimal=l[1];
    }else if(l[2]<255){decimal=l[2];}
    else{decimal=l[3];}

    let binary="";

    while (decimal > 0) {
        if (decimal & 1) {
           binary = "1" + binary;
        } else {
           binary = "0" + binary;
        }
        decimal = decimal >> 1;
     }
   
    while (binary.length < 8) {
        binary='0'+binary;
     }


// afisarea binar;
    let rsbin="";
    for (let i = 0; i < binary.length; i++) {
        if (binary[i]==binary1[i]) {
            rsbin+=binary[i];
        }else rsbin+="0";
    }

    console.log("Masca extinsa a IP adresei: " + m);
    show.innerHTML += "Masca extinsa a IP adresei: " + m +"<br>"
    console.log("Numărul de biţi rezervaţi pentru subreţea: "+masc+"-"+c+"="+c1+"<br>");
    show.innerHTML += "Numărul de biţi rezervaţi pentru subreţea: "+masc+"-"+c+"="+c1 +"<br>"
    c2 = Math.pow(2,c1);
    console.log("Numărul maximal de subreţele posibile: 2**"+c1+"="+c2 );
    show.innerHTML += "Numărul maximal de subreţele posibile: 2**"+c1+"="+c2 +"<br>"
    c3=32-masc;
    console.log("Numărul de biţi rezervaţi pentru nod: "+ 32 +"-"+masc+"="+c3 );
    show.innerHTML += "Numărul de biţi rezervaţi pentru nod: "+ 32 +"-"+masc+"="+c3 +"<br>"
    c4 = Math.pow(2,c3)-2;
    console.log("Numărul maximal de noduri posibile în fiecare subreţea: 2**"+c3+"-2"+"="+c4 );
    show.innerHTML += "Numărul maximal de noduri posibile în fiecare subreţea: 2**"+c3+"-2"+"="+c4  +"<br>"
    console.log("Identificatorul de REŢEA (în format zecimal cu punct): "+a5);
    show.innerHTML += "Identificatorul de REŢEA (în format zecimal cu punct): "+a5  +"<br>"

    rsbin = parseInt(rsbin,2);
    if(l[1]<255){console.log("Identificatorul de SUBREŢEA "+b[0]+"."+rsbin+".0"+".0");
    show.innerHTML += "Identificatorul de SUBREŢEA "+b[0]+"."+rsbin+".0"+".0" +"<br>"}
        else if(l[2]<255){console.log("Identificatorul de SUBREŢEA "+b[0]+"."+b[1]+"."+rsbin+".0");
        show.innerHTML += "Identificatorul de SUBREŢEA "+b[0]+"."+b[1]+"."+rsbin+".0" +"<br>"}
          else {console.log("Identificatorul de SUBREŢEA "+b[0]+"."+b[1]+"."+b[2]+"."+rsbin);
          show.innerHTML += "Identificatorul de SUBREŢEA "+b[0]+"."+b[1]+"."+b[2]+"."+rsbin +"<br>"}  
    
    let pas;
    if (l[3]!='0') {
        pas=256-l[3];
        console.log("Pasul subreţelei: 256-"+l[3]+"="+pas); 
          show.innerHTML += "Pasul subreţelei: 256-"+l[3]+"="+pas +"<br>" 
    }else if(l[2]!='0') {
        pas=256-l[2];
        console.log("Pasul subreţelei: 256-"+l[2]+"="+pas);
        show.innerHTML += "Pasul subreţelei: 256-"+l[2]+"="+pas +"<br>" 
    }
    else {
        pas=256-l[1];
        console.log("Pasul subreţelei: 256-"+l[1]+"="+pas);
        show.innerHTML += "Pasul subreţelei: 256-"+l[1]+"="+pas +"<br>" 
    }

    console.log("Numărul subreţelei ί, unde ί este numărul de biţi rezervaţi pentru subreţea: "+c1+"*"+pas+"="+ c1*pas);
    show.innerHTML += "Numărul subreţelei ί, unde ί este numărul de biţi rezervaţi pentru subreţea: "+c1+"*"+pas+"="+ c1*pas +"<br>" 

    
if(a[2]=='0'){console.log("Identificatorul SUBREŢELEI i (în format zecimal cu punct): "+b[0]+'.'+b[1]+'.'+c1*pas+'.0');
show.innerHTML += "Identificatorul SUBREŢELEI i (în format zecimal cu punct): "+b[0]+'.'+b[1]+'.'+c1*pas+'.0' +"<br>" 
}
    else if(a[3]='0'){console.log("Identificatorul SUBREŢELEI i (în format zecimal cu punct): "+b[0]+'.'+b[1]+'.'+b[2]+'.'+c1*pas);
    show.innerHTML += "Identificatorul SUBREŢELEI i (în format zecimal cu punct): "+b[0]+'.'+b[1]+'.'+b[2]+'.'+c1*pas +"<br>" 
}

if(l[1]<255){
    console.log("Valoarea binară şi zecimală a măştii în octetul ce conţine nr. de subreţea şi o parte de nod: "+ binary+"."+l[1]);
    show.innerHTML += "Valoarea binară şi zecimală a măştii în octetul ce conţine nr. de subreţea şi o parte de nod: "+ binary+"."+l[1] +"<br>" 

    }else if(l[2]<255){console.log("Valoarea binară şi zecimală a măştii în octetul ce conţine nr. de subreţea şi o parte de nod: "+ binary+"."+l[2]);
    show.innerHTML += "Valoarea binară şi zecimală a măştii în octetul ce conţine nr. de subreţea şi o parte de nod: "+ binary+"."+l[2] +"<br>" 
}
    else{console.log("Valoarea binară şi zecimală a măştii în octetul ce conţine nr. de subreţea şi o parte de nod: "+ binary+"."+l[3]);
    show.innerHTML += "Valoarea binară şi zecimală a măştii în octetul ce conţine nr. de subreţea şi o parte de nod: "+ binary+"."+l[3] +"<br>" 
}
    
    console.log("Valoarea binară a octetului ce conţine nr. de subreţea şi o parte de nod: "+ binary1);
    show.innerHTML += "Valoarea binară a octetului ce conţine nr. de subreţea şi o parte de nod: "+ binary1 +"<br>" 
    

    if(l[1]<255){console.log("Identificatorul de NOD a IP adresei iniţiale: 0."+ (b[3]-rsbin)+'.'+b[2]+'.'+b[3]);
    show.innerHTML += "Identificatorul de NOD a IP adresei iniţiale: 0."+ (b[3]-rsbin)+'.'+b[2]+'.'+b[3] +"<br>" 
}
        else if(l[2]<255){console.log("Identificatorul de NOD a IP adresei iniţiale: 0.0."+ (b[2]-rsbin)+'.'+b[3]);
        show.innerHTML += "Identificatorul de NOD a IP adresei iniţiale: 0.0."+ (b[2]-rsbin)+'.'+b[3] +"<br>" 
    }
          else { console.log("Identificatorul de NOD a IP adresei iniţiale: 0.0.0."+ (b[3]-rsbin));
           show.innerHTML += "Identificatorul de NOD a IP adresei iniţiale: 0.0.0."+ (b[3]-rsbin) +"<br>" }
          
    
           

    switch (ip) {
        case '188.47.53.95':    console.log("IP adresa iniţială poate fi atribuită unui nod?: NU");
            show.innerHTML += "IP adresa iniţială poate fi atribuită unui nod?: NU"+"<br>";
            break;
        case '198.47.53.95':    console.log("IP adresa iniţială poate fi atribuită unui nod?: NU");
            show.innerHTML += "IP adresa iniţială poate fi atribuită unui nod?: NU"+"<br>";
            break;
        case '88.47.53.95':    console.log("IP adresa iniţială poate fi atribuită unui nod?: NU");
            show.innerHTML += "IP adresa iniţială poate fi atribuită unui nod?: NU"+"<br>";
            break;
        default:    console.log("IP adresa iniţială poate fi atribuită unui nod?: DA");
            show.innerHTML += "IP adresa iniţială poate fi atribuită unui nod?: DA"+"<br>";
            break;
    }



    // Ultimile 4 puncte
        //masca implicita = 0
        let t="";
        let e1="";
        let e2="";
        let e3="";
        let e4="";
        let Decimal01 = l[2];
        let Decimal02 = l[3];
        let Binary01= "";
        let Binary02= "";
        let DecimalSpec = 128;
        if(a[2]=='0'){DecimalSpec = 128}
            else if(a[3]=='0'){DecimalSpec = 192}
            
        let BinarySpec= "";

        while (DecimalSpec > 0) {
            if (DecimalSpec & 1) {
                BinarySpec = "1" + BinarySpec;
            } else {
                BinarySpec = "0" + BinarySpec;
            }
            DecimalSpec = DecimalSpec >> 1;
         }; 
    
         while (BinarySpec.length < 8) {
            BinarySpec='0'+BinarySpec;
            }
//-------------------------------------------conditia ultimile 2 zero--------------------------------

//clasa A -------------------------------------------------------------------
if(a[1]=='0'){



    for (let i = 0; i < binary.length; i++) {
        if (binary[i]==BinarySpec[i]) {
            e1+=binary[i];
        }else e1+="0";
    }




 //analogic true
 //0000.0000


while (Decimal01 > 0) {
if (Decimal01 & 1) {
    Binary01 = "1" + Binary01;
} else {
    Binary01 = "0" + Binary01;
}
Decimal01 = Decimal01 >> 1;
}; 

while (Binary01.length < 8) {
    Binary01='0'+Binary01;
}

//inlocuiesc 1-0;
for (let i = 0; i < Binary01.length; i++) {
    if (Binary01[i]=='1') {
        e2 += '0';
   } else e2 += '1'; 
}

//xxxx.0000
while (Decimal02 > 0) {
if (Decimal02 & 1) {
    Binary02 = "1" + Binary02;
} else {
    Binary02 = "0" + Binary02;
}
Decimal02 = Decimal02 >> 1;
}; 

while (Binary02.length < 8) {
    Binary02='0'+Binary02;
}
//inlocuiesc 1-0;
for (let i = 0; i < Binary02.length; i++) {
    if (Binary02[i]=='0') {
        e3 += '1';
    } else e3 += '1'; 
}

for (let i = 0; i < Binary02.length; i++) {
    if (Binary02[i]=='0') {
        e4 += '1';
   } else e4 += '0'; 
}
//atribuiere 1 la inceput dupa conditie
e2=e2.slice(1)+'1';
e3=e4.slice(1,7)+'0';
e4=e4.slice(1,7)+'1';

e1=parseInt(e1,2);
e2=parseInt(e2,2);
e3=parseInt(e3,2);
e4=parseInt(e4,2);


if(l[2]<255){
    e3 = 255;
    e2 = 255-l[2];
    
    console.log("Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+e1+'.'+'0'+'.'+'1');
    show.innerHTML += "Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+e1+'.'+'0'+'.'+'1' +"<br>" 

    console.log("Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+e1+'.'+e2+'.'+(e3-1));
    show.innerHTML += "Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+e1+'.'+e2+'.'+(e3-1) +"<br>"
    
    console.log("Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+e1+'.'+e2+'.'+e3);
    show.innerHTML += "Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+e1+'.'+e2+'.'+e3 +"<br>" 

}else if(l[3]<=255){
    e3 = 255-l[3];
    e2 = 255-l[2];
    
    console.log("Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+e1+'.'+e2+'.'+'1');
    show.innerHTML += "Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+e1+'.'+e2+'.'+'1' +"<br>" 

    console.log("Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+e1+'.'+e2+'.'+(e3-1));
    show.innerHTML += "Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+e1+'.'+e2+'.'+(e3-1) +"<br>"
    
    console.log("Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+e1+'.'+e2+'.'+e3);
    show.innerHTML += "Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+e1+'.'+e2+'.'+e3 +"<br>" 
}



e1='';
e2='';
e3='';
e4='';
//

for (let i = 0; i < binary.length; i++) {
    if (binary[i]==BinarySpec[i]) {
        e1+=binary[i];
    }else e1+="0";
}



for (let i = 0; i < Binary02.length; i++) {
    if (Binary02[i]=='1') {
        e2 += '1';
   } else e2 += '0'; 
}

// e1 = e1.slice(0,5)+'111';
e2 = e2.slice(0,7)+'1';
e1=parseInt(e1,2);
e2=parseInt(e2,2);
e1--;
console.log("Identificatorul ultimei subreţele atribuite cu primul nod: "+b[0]+'.'+e1+'.'+(255-(255-l[2]))+'.'+e2);
show.innerHTML += "Identificatorul ultimei subreţele atribuite cu primul nod: "+b[0]+'.'+e1+'.'+(255-(255-l[2]))+'.'+e2 +"<br>" 

for (let i = 0; i < Binary02.length; i++) {
    if (Binary02[i]=='1') {
        e3 += '1';
        e4 += '1';
   } else {e3 += '1'; e4 += '1'}; 
}
e3 = e3.slice(0,7)+'0';
e3 = parseInt(e3,2);
console.log("Identificatorul ultimei subreţele atribuite cu ultimul nod: "+b[0]+'.'+e1+'.255'+'.'+e3);
show.innerHTML += "Identificatorul ultimei subreţele atribuite cu ultimul nod: "+b[0]+'.'+e1+'.255'+'.'+e3 +"<br>" 

e4 = e4.slice(0,7)+'1';
e4 = parseInt(e4,2);
console.log("Adresa de difuzare pentru ultima subreţea atribuită: "+b[0]+'.'+e1+'.255'+'.'+e4);
show.innerHTML += "Adresa de difuzare pentru ultima subreţea atribuită: "+b[0]+'.'+e1+'.255'+'.'+e4 +"<br>" 


    
    }
    //
        //clasa B -------------------------------------------------------------------
            //primele 3
       else if(a[2]=='0'){
                for (let i = 0; i < binary.length; i++) {
                    if (binary[i]==BinarySpec[i]) {
                        e1+=binary[i];
                    }else e1+="0";
                }

        //analogic true
        //0000.0000
   

        while (Decimal01 > 0) {
            if (Decimal01 & 1) {
                Binary01 = "1" + Binary01;
            } else {
                Binary01 = "0" + Binary01;
            }
            Decimal01 = Decimal01 >> 1;
         }; 
    
            while (Binary01.length < 8) {
                Binary01='0'+Binary01;
            }
            
            //inlocuiesc 1-0;
            for (let i = 0; i < Binary01.length; i++) {
                if (Binary01[i]=='1') {
                    e2 += '0';
               } else e2 += '1'; 
            }

        //xxxx.0000
        while (Decimal02 > 0) {
            if (Decimal02 & 1) {
                Binary02 = "1" + Binary02;
            } else {
                Binary02 = "0" + Binary02;
            }
            Decimal02 = Decimal02 >> 1;
         }; 
    
            while (Binary02.length < 8) {
                Binary02='0'+Binary02;
            }
            //inlocuiesc 1-0;
            for (let i = 0; i < Binary02.length; i++) {
                if (Binary02[i]=='0') {
                    e3 += '1';
                } else e3 += '1'; 
            }

            for (let i = 0; i < Binary02.length; i++) {
                if (Binary02[i]=='0') {
                    e4 += '1';
               } else e4 += '0'; 
            }

            //atribuiere 1 la inceput dupa conditie
            e2=e2.slice(1)+'1';
            e3=e4.slice(1,7)+'0';
            e4=e4.slice(1,7)+'1';

            e1=parseInt(e1,2);
            e2=parseInt(e2,2);
            e3=parseInt(e3,2);
            e4=parseInt(e4,2);
            console.log("Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+e1+'.'+e2);
show.innerHTML += "Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+e1+'.'+e2 +"<br>" 

            console.log("Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+e1+'.'+e3);
show.innerHTML += "Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+e1+'.'+e3 +"<br>" 

            console.log("Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+b[1]+'.'+e1+'.'+e4);
show.innerHTML += "Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+b[1]+'.'+e1+'.'+e4 +"<br>" 

            
            e2='';
            e3='';
            e4='';
            //
            for (let i = 0; i < Binary02.length; i++) {
                if (Binary02[i]=='1') {
                    e2 += '1';
               } else e2 += '0'; 
            }

            e1 = Binary01;
            e1 = '0'+e1.slice(1);
            e2 = e2.slice(0,7)+'1';
            e1=parseInt(e1,2);
            e2=parseInt(e2,2);

            console.log("Identificatorul ultimei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+e1+'.'+e2);
show.innerHTML += "Identificatorul ultimei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+e1+'.'+e2 +"<br>" 

            
            for (let i = 0; i < Binary02.length; i++) {
                if (Binary02[i]=='1') {
                    e3 += '1';
                    e4 += '1';
               } else {e3 += '1'; e4 += '1'}; 
            }
            e3 = e3.slice(0,7)+'0';
            e3 = parseInt(e3,2);
            console.log("Identificatorul ultimei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+e1+'.'+e3);
show.innerHTML += "Identificatorul ultimei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+e1+'.'+e3 +"<br>" 

            e4 = e4.slice(0,7)+'1';
            e4 = parseInt(e4,2);
            console.log("Adresa de difuzare pentru ultima subreţea atribuită: "+b[0]+'.'+b[1]+'.'+e1+'.'+e4);
show.innerHTML += "Adresa de difuzare pentru ultima subreţea atribuită: "+b[0]+'.'+b[1]+'.'+e1+'.'+e4 +"<br>" 


        }//Daca e doar la ultimul rezo
    //-------------------------------------------clasa C--------------------------------
            //
    /*       else if(a[3]=='0'){
            
                for (let i = 0; i < binary.length; i++) {
                    if (binary[i]==BinarySpec[i]) {
                        e1+=binary[i];
                    }else e1+="0";
                }
                
                e1=parseInt(e1,2);
                console.log("Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+e1);
                
                t1 = "10"+binary1.charAt(2)+binary1.charAt(3)+binary1.charAt(4)+binary1.charAt(5)+"10";
                t1=parseInt(t1,2);
                console.log("Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+t1);
                
                t2 = "10"+binary1.charAt(2)+binary1.charAt(3)+binary1.charAt(4)+binary1.charAt(5)+binary1.charAt(6)+binary1.charAt(7);
                t2=parseInt(t2,2);
                console.log("Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+t2);

                t3 = "01"+binary1.charAt(2)+binary1.charAt(3)+binary1.charAt(4)+binary1.charAt(5)+"01";
                t3=parseInt(t3,2);
                console.log("Identificatorul ultimei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+t3);
                
                t4 = "01"+binary1.charAt(2)+binary1.charAt(3)+binary1.charAt(4)+binary1.charAt(5)+"10";
                t4=parseInt(t4,2);
                console.log("Identificatorul ultimei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+t4);
                
                t5 = "01"+binary1.charAt(2)+binary1.charAt(3)+binary1.charAt(4)+binary1.charAt(5)+binary1.charAt(6)+binary1.charAt(7);
                t5=parseInt(t5,2);
                console.log("Adresa de difuzare pentru ultima subreţea atribuită: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+t5);
                 
            }*/
            

    else if(a[3]=='0'){

    while (Decimal01 > 0) {
        if (Decimal01 & 1) {
            Binary01 = "1" + Binary01;
        } else {
            Binary01 = "0" + Binary01;
        }
        Decimal01 = Decimal01 >> 1;
    }; 

        while (Binary01.length < 8) {
            Binary01='0'+Binary01;
        }
        
        // inlocuiesc 1-0;
        for (let i = 0; i < Binary01.length; i++) {
            if (Binary01[i]=='1') {
                e2 += '0';
        } else e2 += '1'; 
        }
        
Decimal02 = l[3];
    //xxxx.0000
    while (Decimal02 > 0) {
        if (Decimal02 & 1) {
            Binary02 = "1" + Binary02;
        } else {
            Binary02 = "0" + Binary02;
        }
        Decimal02 = Decimal02 >> 1;
    }; 

        while (Binary02.length < 8) {
            Binary02='0'+Binary02;
        }
        //inlocuiesc 1-0;
        
        for (let i = 0; i < Binary02.length; i++) {
            if (Binary02[i]=='1') {
                e3 += '0';
            } else e3 += '1'; 
        }

        for (let i = 0; i < Binary02.length; i++) {
            if (Binary02[i]=='0') {
                e4 += '1';
        } else e4 += '0'; 
        }


        //atribuiere 1 la inceput dupa conditie
        e2='1'+e2.slice(2)+'1';
        e3='10'+e3.slice(2,6)+'10';
        e4=e3;
        e2=parseInt(e2,2);
        e3=parseInt(e3,2);
        e4=parseInt(e4,2);
        console.log("Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+e2);
show.innerHTML += "Identificatorul primei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+e2 +"<br>" 

        console.log("Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+(e3));
show.innerHTML += "Identificatorul primei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+(e3) +"<br>" 

        console.log("Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+(e3+1));
show.innerHTML += "Adresa de difuzare pentru prima subreţea atribuită: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+(e3+1) +"<br>" 

        e2=Binary02;
        e3='';
        e4='';
        //

    

        e2 = '01'+e2.slice(2,6)+'01';
        e2=parseInt(e2,2);
        
        console.log("Identificatorul ultimei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+e2);
show.innerHTML += "Identificatorul ultimei subreţele atribuite cu primul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+e2 +"<br>" 

        
        e3 = Binary01;
        e3 = '01'+e3.slice(2,6)+'10';
        e3 = parseInt(e3,2);
        console.log("Identificatorul ultimei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+(e3));
show.innerHTML += "Identificatorul ultimei subreţele atribuite cu ultimul nod: "+b[0]+'.'+b[1]+'.'+b[2]+'.'+(e3) +"<br>" 

        e4 = e3;
        console.log("Adresa de difuzare pentru ultima subreţea atribuită : "+b[0]+'.'+b[1]+'.'+b[2]+'.'+(e4+1));
show.innerHTML += "Adresa de difuzare pentru ultima subreţea atribuită : "+b[0]+'.'+b[1]+'.'+b[2]+'.'+(e4+1) +"<br>" 


    }//Daca e doar la ultimul rezo

}
}
