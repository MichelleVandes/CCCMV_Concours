let maclasse, monFic;
let btnConcours, btnConcoursX, btnConcoursY;

function affichDetail(typeConcours, tx, ty) {
  //typeConcours = detC1
  btnConcours = "btnConcours" + typeConcours[4];
  btnConcoursX = "btnConcours" + tx;
  btnConcoursY = "btnConcours" + ty;

  monFic = "./json/" + typeConcours.slice(3) + ".json";
  remplir_zone(monFic);

  if (document.getElementById(btnConcours).innerHTML == "+ d'Info »") {
    maclasse = document.getElementById(typeConcours);
    maclasse.classList.remove("d-none");
    maclasse.classList.add("d-block");
    document.getElementById(btnConcours).innerHTML = "- d'Info";

    if (screen.width <= 767) {
      maclasse = document.getElementById("concours2");
      maclasse.classList.add("d-none");
      maclasse = document.getElementById("concours3");
      maclasse.classList.add("d-none");
    }
  } else {
    closeDetail(typeConcours);
  }
}

function closeDetail(typeConcours) {
  maclasse = document.getElementById(typeConcours);
  maclasse.classList.remove("d-block");
  maclasse.classList.add("d-none");

  maclasse = document.getElementById("concours2");
  maclasse.classList.remove("d-none");

  maclasse = document.getElementById("concours3");
  maclasse.classList.remove("d-none");

  document.getElementById("btnConcours1").innerHTML = "+ d'Info »";
}

// Remplissage des zones de l'écran
function remplir_zone(monFic) {
  fetch(monFic).then(function (response) {
    response.json().then(function (data) {
      //alert("top")
      document.getElementById("onglet1").innerHTML = data.onglet1;
      document.getElementById("onglet2").innerHTML = data.onglet2;
      document.getElementById("onglet3").innerHTML = data.onglet3;
      document.getElementById("onglet4").innerHTML = data.onglet4;
      document.getElementById("o1").innerHTML = data.o1;
      document.getElementById("o2").innerHTML = data.o2;
      document.getElementById("o3").innerHTML = data.o3;
      document.getElementById("o4").innerHTML = data.o4;
    });
  });
}

// Affichage tarif au lieu de photo
function ifTable(IdOnglet) {
  if (document.getElementById(IdOnglet).textContent == "Buvette") {
    maclasse = document.getElementById("tableDet");
    maclasse.classList.remove("d-none");
    maclasse.classList.add("d-block");
    maclasse = document.getElementById("imgDet");
    maclasse.classList.remove("d-block");
    maclasse.classList.add("d-none");
  } else {
    
    maclasse = document.getElementById("tableDet");
    maclasse.classList.remove("d-block");
    maclasse.classList.add("d-none");
    maclasse = document.getElementById("imgDet");
    maclasse.classList.remove("d-none");
    maclasse.classList.add("d-block");
  }
}

