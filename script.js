let tabArticle = [

    { id: 1, libbelle: "Iphone 11 PRO", chemin: "image/iphone-11-pro-2019-frandroid.png", prix: 750000, quantite: 10, nbr: 0 },
    { id: 2, libbelle: "Huawei p20", chemin: "image/huawei-p20-pro.png", prix: 50000, quantite: 18,  nbr: 0 },
    { id: 3, libbelle: "Samsung Galaxy S5", chemin: "image/samsung-galaxy-s5-neo.png", prix: 75000, quantite: 5,  nbr: 0 },
    { id: 4, libbelle: "Iphone 11", chemin: "image/apple-iphone-11-frandroid-2019.png", prix: 200000, quantite: 6,  nbr: 0 },
    { id: 5, libbelle: "Iphone 8 plus", chemin: "image/iphone-8-plus-1.png", prix: 190000, quantite: 2, nbr: 0 },
    { id: 6, libbelle: "Itel P33", chemin: "image/Itel-P33-PLUS.jpg", prix: 45000, quantite: 7, nbr: 0 },
    { id: 7, libbelle: "Samsung Galaxy A12 ", chemin: "image/galaxy-a12.jpg", prix: 90000, quantite: 10, nbr: 0 },
    { id: 8, libbelle: "Asus zenfone 5", chemin: "image/asus.png", prix: 75000, quantite: 7, nbr: 0 },
    { id: 9, libbelle: "Xiaomi Redmi Note 8 ", chemin: "image/Xiaomi-Redmi-Note-8.jpg", prix: 100000, quantite: 10,  nbr: 0 },
    { id: 10, libbelle: "LG g7 ", chemin: "image/51siCaInGRL._AC_SL1123_.jpg", prix: 60000, quantite: 15,  nbr: 0 },

]

var d=new Date();
console.log(d)
jj=d.getUTCDate();
hh=d.getUTCHours();
mn=d.getUTCMinutes();



mm=d.getUTCMonth()+1;
aa= d.getFullYear()






const contenu = document.getElementById("contenu");
const client = document.getElementById("client")
const choix = document.getElementById("choix")
const tabAffiche = document.getElementById("tableau")
const panier = document.getElementById("panier")
const article = document.getElementById("article")
const erreur = document.getElementById("erreur")
const buttonAjouter=document.querySelector("button")



function displayTab(whereToDisplayTab, tab) {
    tab.forEach(telephone => {
    var montant=telephone.prix*telephone.nbr;

        whereToDisplayTab.innerHTML += ` 
    <tr>
      <td>${telephone.libbelle}</td>
      <td>${telephone.prix} FCFA</td>
      <td>${telephone.nbr}</td>
      <td>${montant} FCFA</td>
      

    </tr>

    
    
 `
    });
   
}



const nomClient = (localStorage.nomComplet);
const adresseClient = (localStorage.adresse);
const telClient = (localStorage.tel)
client.innerText = "Bienvenue " + nomClient;

var checkOnclickPanier=0
panier.onclick = function () { checkOnclickPanier=1;
    article.innerHTML = ""
    article.innerHTML += `<th>Designation</th>
    <th>Prix</th>
    <th>Quantité</th>
    <th>Montant</th>
    `



    if (tabChoixClient.length != 0) {
        tabAffiche.removeAttribute("hidden");
        erreur.setAttribute("hidden", "hidden")


        displayTab(article, tabChoixClient);

    } else {
        erreur.removeAttribute("hidden")

    }
    total=0;
    tabChoixClient.forEach(totalMontant => {
        var montant=totalMontant.prix*totalMontant.nbr;
        total+=montant;

        
    });

    article.innerHTML += `<tr>
     
    <th colspan="3">Total</th>
    
    <td>${total} FCFA</td>
    

  </tr>`
}







function loadContenu() {

    var html = `<div class="row"> <div class="col-md-12">  <div class="row">`;
    tabArticle.forEach(smartphone => {
       
        html += `  <div class="col-md-3  mt-5 ml-5">

        <div class="card">
            <img src="${smartphone.chemin}" height="200px" width="200px"  alt="Erreur connection">
            <div class="card-footer " style="color:white ; background-color:rgb(61, 13, 148);">


                <h5 class="text-center ">${smartphone.libbelle}</h5>
                <h6 class="text-center ">${smartphone.prix} Francs Cfa</h6>
                <h6 class="text-center " >En Stock : ${smartphone.quantite}</h6>
                                <h6 class="text-center" id="${smartphone.libbelle}"style="color:red" >  </h6>


                <button type="button"  id="${smartphone.id}" onclick="recup(${smartphone.id})" class="btn btn-primary">Ajouter   </button>

            </div>
        </div>
    </div>`;

    });

    html += "</div></div> </div> ";
    contenu.innerHTML = html;
}

let tabChoixClient = []

cpt = 0;







test=0;


function recup(id) {





    tabArticle.forEach(telephone => {
    document.getElementById("erreur").innerText=""


        if (telephone.id == id) {
        



            telephone.quantite-=1;
            console.log(telephone)
            loadContenu();

          

            






            if (tabChoixClient.includes(telephone) == false) {
                tabChoixClient.push(telephone);
                cpt++;
                choix.innerText = cpt;
            }

        }


    });






    tabChoixClient.forEach(mobile => {


        if (mobile.id == id) {

            Number(mobile.nbr += 1)
        }
    });
    tabArticle.forEach(element => {
        if(element.quantite<=0){
            document.getElementById(element.id).setAttribute("hidden","")
                   document.getElementById(element.libbelle).innerText="Article rupture de Stock"
        }
        
    });
    if(checkOnclickPanier!=0){

        article.innerHTML = ""
        article.innerHTML += `<th>Designation</th>
        <th>Prix</th>
        <th>Quantité</th>
        <th>Montant</th>
        `
    
    
    
        if (tabChoixClient.length != 0) {
            tabAffiche.removeAttribute("hidden");
            erreur.setAttribute("hidden", "hidden")
    
    
            displayTab(article, tabChoixClient);
    
        } else {
            erreur.removeAttribute("hidden")
    
        }
        total=0;
        tabChoixClient.forEach(totalMontant => {
            var montant=totalMontant.prix*totalMontant.nbr;
            total+=montant;
    
            
        });
    
        article.innerHTML += `<tr>
         
        <th colspan="3">Total</th>
        
        <td>${total} FCFA</td>
        
    
      </tr>`
    }
    
    
    



}



function valider(){
    
    document.getElementById("Bon").removeAttribute("hidden")
    document.getElementById("clientName").innerText="Nom Compet : "+nomClient;
    document.getElementById("clientAdresse").innerText="Adresse : " +adresseClient;
    document.getElementById("clientNumero").innerText="Numero : "+telClient;
    document.getElementById("commnds").innerHTML = ""
    document.getElementById("commnds").innerHTML += `<th>Designation</th>
    <th>Prix</th>
    <th>Quantité</th>
    <th>Montant</th>
    `

    
    displayTab(document.getElementById("commnds"), tabChoixClient);

   total=0;
    tabChoixClient.forEach(totalMontant => {
        var montant=totalMontant.prix*totalMontant.nbr;
        total+=montant;

        
    });

    document.getElementById("commnds").innerHTML += `<tr>
     
    <th>Total</th>
    <td></td>
    <td></
    td>
    <td>${total} FCFA</td>
    

  </tr>` 

  document.getElementById("hiddenBtn").removeAttribute("hidden") 

  document.getElementById("date").innerText="Date: "+ jj+"/"+mm+"/"+aa+" a "+hh+"h : "+mn+" mn "; 

  
}


function download(){
    const Bon = this.document.getElementById("Bon");
    console.log(Bon);
    console.log(window);
    var opt = {
        margin: 1,
        filename:"Facture /"+jj+"/"+mm+"/"+aa+".pdf",
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait'  }
    };
    html2pdf().from(Bon).set(opt).save();
} 

