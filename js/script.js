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
  
    document.getElementById("ongletsDetail").classList.remove("d-none");
    document.getElementById("ongletsDetail").classList.add("d-block");
    razBtn();
    document.getElementById(btnConcours).innerHTML = "- d'Info";

    if (screen.width <= 767) {
     
      document.getElementById("concours" + tx).classList.add("d-none");
      document.getElementById("concours" + ty).classList.add("d-none");
    }
  } else {
    closeDetail();
  }
  
}

// RAZ Affichage initial
function closeDetail() { 
  document.getElementById("ongletsDetail").classList.remove("d-block");
  document.getElementById("ongletsDetail").classList.add("d-none");
  document.getElementById("concours2").classList.remove("d-none");
  document.getElementById("concours3").classList.remove("d-none");
  razBtn()
}
function razBtn() {
  document.getElementById("btnConcours1").innerHTML = "+ d'Info »";
  document.getElementById("btnConcours2").innerHTML = "+ d'Info »";
}

// Remplissage des zones de l'écran
function remplir_zone(monFic) {
  fetch(monFic).then(function (response) {
    response.json().then(function (data) {
     
      document.getElementById("ongletsDetailH2").innerHTML =
         data.ongletsDetailH2;
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
    document.getElementById("tableDet").classList.remove("d-none");
    document.getElementById("tableDet").classList.add("d-block");
    document.getElementById("imgDet").classList.remove("d-block");
    document.getElementById("imgDet").classList.add("d-none");
  } else {
    
    document.getElementById("tableDet").classList.remove("d-block");
    document.getElementById("tableDet").classList.add("d-none");
  
    document.getElementById("imgDet").classList.remove("d-none");
    document.getElementById("imgDet").classList.add("d-block");
  }
}

