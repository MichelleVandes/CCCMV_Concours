let maclasse;;

function affichDetail(typeConcours) {

  if (document.getElementById("btnConcours1").innerHTML == "+ d'Info »") {
    maclasse = document.getElementById(typeConcours);
    maclasse.classList.remove("d-none");
    maclasse.classList.add("d-block");
    document.getElementById("btnConcours1").innerHTML = "- d'Info";

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
