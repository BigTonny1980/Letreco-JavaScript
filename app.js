let palavraDoDia = "carro";

function letreco1() {

   let valor1 = document.getElementById("valorA").value;
   let valor2 = document.getElementById("valorB").value;
   let valor3 = document.getElementById("valorC").value;
   let valor4 = document.getElementById("valorD").value;
   let valor5 = document.getElementById("valorE").value;

   if (document.getElementById("valorA").style.backgroundColor !== "#FFFF00" && document.getElementById("valorA").style.backgroundColor !== "00FF00") {
      document.getElementById("valorA").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorB").style.backgroundColor !== "#FFFF00" && document.getElementById("valorB").style.backgroundColor !== "00FF00") {
      document.getElementById("valorB").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorC").style.backgroundColor !== "#FFFF00" && document.getElementById("valorC").style.backgroundColor !== "00FF00") {
      document.getElementById("valorC").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorD").style.backgroundColor !== "#FFFF00" && document.getElementById("valorD").style.backgroundColor !== "00FF00") {
      document.getElementById("valorD").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorE").style.backgroundColor !== "#FFFF00" && document.getElementById("valorE").style.backgroundColor !== "00FF00") {
      document.getElementById("valorE").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor1 === palavraDoDia[i]) {
         if (i !== 0) {
            document.getElementById("valorA").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor2 === palavraDoDia[i]) {
         if (i !== 1) {
            document.getElementById("valorB").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor3 === palavraDoDia[i]) {
         if (i !== 2) {
            document.getElementById("valorC").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor4 === palavraDoDia[i]) {
         if (i !== 3) {
            document.getElementById("valorD").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor5 === palavraDoDia[i]) {
         if (i !== 4) {
            document.getElementById("valorE").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   if (valor1 === palavraDoDia[0]) {
      document.getElementById("valorA").style.backgroundColor = "#00FF00"; // inputs na cor verde 
   }
   if (valor2 === palavraDoDia[1]) {
      document.getElementById("valorB").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor3 === palavraDoDia[2]) {
      document.getElementById("valorC").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor4 === palavraDoDia[3]) {
      document.getElementById("valorD").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor5 === palavraDoDia[4]) {
      document.getElementById("valorE").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }

}

function letreco2() {

   let valor6 = document.getElementById("valorF").value;
   let valor7 = document.getElementById("valorG").value;
   let valor8 = document.getElementById("valorH").value;
   let valor9 = document.getElementById("valorI").value;
   let valor10 = document.getElementById("valorJ").value;

   if (document.getElementById("valorF").style.backgroundColor !== "#FFFF00" && document.getElementById("valorF").style.backgroundColor !== "00FF00") {
      document.getElementById("valorF").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorG").style.backgroundColor !== "#FFFF00" && document.getElementById("valorG").style.backgroundColor !== "00FF00") {
      document.getElementById("valorG").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorH").style.backgroundColor !== "#FFFF00" && document.getElementById("valorH").style.backgroundColor !== "00FF00") {
      document.getElementById("valorH").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorI").style.backgroundColor !== "#FFFF00" && document.getElementById("valorI").style.backgroundColor !== "00FF00") {
      document.getElementById("valorI").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorJ").style.backgroundColor !== "#FFFF00" && document.getElementById("valorJ").style.backgroundColor !== "00FF00") {
      document.getElementById("valorJ").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor6 === palavraDoDia[i]) {
         if (i !== 5) {
            document.getElementById("valorF").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor7 === palavraDoDia[i]) {
         if (i !== 6) {
            document.getElementById("valorG").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor8 === palavraDoDia[i]) {
         if (i !== 7) {
            document.getElementById("valorH").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor9 === palavraDoDia[i]) {
         if (i !== 8) {
            document.getElementById("valorI").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor10 === palavraDoDia[i]) {
         if (i !== 9) {
            document.getElementById("valorJ").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   if (valor6 === palavraDoDia[0]) {
      document.getElementById("valorF").style.backgroundColor = "#00FF00"; // inputs na cor verde 
   }
   if (valor7 === palavraDoDia[1]) {
      document.getElementById("valorG").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor8 === palavraDoDia[2]) {
      document.getElementById("valorH").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor9 === palavraDoDia[3]) {
      document.getElementById("valorI").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor10 === palavraDoDia[4]) {
      document.getElementById("valorJ").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }

}

function letreco3() {

   let valor11 = document.getElementById("valorK").value;
   let valor12 = document.getElementById("valorL").value;
   let valor13 = document.getElementById("valorM").value;
   let valor14 = document.getElementById("valorN").value;
   let valor15 = document.getElementById("valorO").value;

   if (document.getElementById("valorK").style.backgroundColor !== "#FFFF00" && document.getElementById("valorK").style.backgroundColor !== "00FF00") {
      document.getElementById("valorK").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorL").style.backgroundColor !== "#FFFF00" && document.getElementById("valorL").style.backgroundColor !== "00FF00") {
      document.getElementById("valorL").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorM").style.backgroundColor !== "#FFFF00" && document.getElementById("valorM").style.backgroundColor !== "00FF00") {
      document.getElementById("valorM").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorN").style.backgroundColor !== "#FFFF00" && document.getElementById("valorN").style.backgroundColor !== "00FF00") {
      document.getElementById("valorN").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorO").style.backgroundColor !== "#FFFF00" && document.getElementById("valorO").style.backgroundColor !== "00FF00") {
      document.getElementById("valorO").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor11 === palavraDoDia[i]) {
         if (i !== 10) {
            document.getElementById("valorK").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor12 === palavraDoDia[i]) {
         if (i !== 11) {
            document.getElementById("valorL").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor13 === palavraDoDia[i]) {
         if (i !== 12) {
            document.getElementById("valorM").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor14 === palavraDoDia[i]) {
         if (i !== 13) {
            document.getElementById("valorN").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor15 === palavraDoDia[i]) {
         if (i !== 14) {
            document.getElementById("valorO").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   if (valor11 === palavraDoDia[0]) {
      document.getElementById("valorK").style.backgroundColor = "#00FF00"; // inputs na cor verde 
   }
   if (valor12 === palavraDoDia[1]) {
      document.getElementById("valorL").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor13 === palavraDoDia[2]) {
      document.getElementById("valorM").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor14 === palavraDoDia[3]) {
      document.getElementById("valorN").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor15 === palavraDoDia[4]) {
      document.getElementById("valorO").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }

}

function letreco4() {

   let valor16 = document.getElementById("valorP").value;
   let valor17 = document.getElementById("valorQ").value;
   let valor18 = document.getElementById("valorR").value;
   let valor19 = document.getElementById("valorS").value;
   let valor20 = document.getElementById("valorT").value;

   if (document.getElementById("valorP").style.backgroundColor !== "#FFFF00" && document.getElementById("valorP").style.backgroundColor !== "00FF00") {
      document.getElementById("valorP").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorQ").style.backgroundColor !== "#FFFF00" && document.getElementById("valorQ").style.backgroundColor !== "00FF00") {
      document.getElementById("valorQ").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorR").style.backgroundColor !== "#FFFF00" && document.getElementById("valorR").style.backgroundColor !== "00FF00") {
      document.getElementById("valorR").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorS").style.backgroundColor !== "#FFFF00" && document.getElementById("valorS").style.backgroundColor !== "00FF00") {
      document.getElementById("valorS").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorT").style.backgroundColor !== "#FFFF00" && document.getElementById("valorT").style.backgroundColor !== "00FF00") {
      document.getElementById("valorT").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor16 === palavraDoDia[i]) {
         if (i !== 15) {
            document.getElementById("valorP").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor17 === palavraDoDia[i]) {
         if (i !== 16) {
            document.getElementById("valorQ").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor18 === palavraDoDia[i]) {
         if (i !== 17) {
            document.getElementById("valorR").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor19 === palavraDoDia[i]) {
         if (i !== 18) {
            document.getElementById("valorS").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor20 === palavraDoDia[i]) {
         if (i !== 19) {
            document.getElementById("valorT").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   if (valor16 === palavraDoDia[0]) {
      document.getElementById("valorP").style.backgroundColor = "#00FF00"; // inputs na cor verde 
   }
   if (valor17 === palavraDoDia[1]) {
      document.getElementById("valorQ").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor18 === palavraDoDia[2]) {
      document.getElementById("valorR").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor19 === palavraDoDia[3]) {
      document.getElementById("valorS").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor20 === palavraDoDia[4]) {
      document.getElementById("valorT").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }

}

function letreco5() {

   let valor21 = document.getElementById("valorU").value;
   let valor22 = document.getElementById("valorV").value;
   let valor23 = document.getElementById("valorW").value;
   let valor24 = document.getElementById("valorX").value;
   let valor25 = document.getElementById("valorY").value;

   if (document.getElementById("valorU").style.backgroundColor !== "#FFFF00" && document.getElementById("valorU").style.backgroundColor !== "00FF00") {
      document.getElementById("valorU").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorV").style.backgroundColor !== "#FFFF00" && document.getElementById("valorV").style.backgroundColor !== "00FF00") {
      document.getElementById("valorV").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorW").style.backgroundColor !== "#FFFF00" && document.getElementById("valorW").style.backgroundColor !== "00FF00") {
      document.getElementById("valorW").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorX").style.backgroundColor !== "#FFFF00" && document.getElementById("valorX").style.backgroundColor !== "00FF00") {
      document.getElementById("valorX").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }
   if (document.getElementById("valorY").style.backgroundColor !== "#FFFF00" && document.getElementById("valorY").style.backgroundColor !== "00FF00") {
      document.getElementById("valorY").style.backgroundColor = "#FF0000"; // inputs na cor vermelha
   }

   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor21 === palavraDoDia[i]) {
         if (i !== 20) {
            document.getElementById("valorU").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor22 === palavraDoDia[i]) {
         if (i !== 21) {
            document.getElementById("valorV").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor23 === palavraDoDia[i]) {
         if (i !== 22) {
            document.getElementById("valorW").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor24 === palavraDoDia[i]) {
         if (i !== 23) {
            document.getElementById("valorX").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }
   for (let i = 0; i < palavraDoDia.length; i++) {
      if (valor25 === palavraDoDia[i]) {
         if (i !== 24) {
            document.getElementById("valorY").style.backgroundColor = "#FFFF00" // inputs na cor amarela
         }
      }
   }

   if (valor21 === palavraDoDia[0]) {
      document.getElementById("valorU").style.backgroundColor = "#00FF00"; // inputs na cor verde 
   }
   if (valor22 === palavraDoDia[1]) {
      document.getElementById("valorV").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor23 === palavraDoDia[2]) {
      document.getElementById("valorW").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor24 === palavraDoDia[3]) {
      document.getElementById("valorX").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }
   if (valor25 === palavraDoDia[4]) {
      document.getElementById("valorY").style.backgroundColor = "#00FF00"; // inputs na cor verde
   }

}