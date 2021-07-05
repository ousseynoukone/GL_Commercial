



checkDec=function(val)
{
    for(i=0;i<val.length;i++)
    {
        if(!(val[i]>=0 && val[i]<=9))
        {   

            return false;
        } 
        
        
        


    }return true;
}

check=function(val)
{
    for(i=0;i<val.length;i++)
    {
        if(!(val[i]>='A' && val[i]<='Z')){

        {if(!(val[i]>='a' && val[i]<='z'))
        if(!(val[i]==' ')){
            {return false;}
        }


        }
    }
       


    }return true;
}
var nomComplet;
var tel
var  adresse;
const inputAdresse=document.getElementById("inputAdresse");
const inputNomComplet=document.getElementById("inputNomComplet");
const bouton=document.getElementById("bouton");
var client=document.getElementById("client");

const inputTelephone=document.getElementById("inputTelephone");
 const erreur=document.getElementById("erreur");
 const erreur1=document.getElementById("erreur1");

const contenu = document.getElementById("contenu");





inputNomComplet.onkeyup=function(){   
    if(check(inputNomComplet.value.trim())==true )
    {
        erreur.setAttribute("hidden",""); 

    } else {
        erreur.removeAttribute("hidden");
    }
}

inputTelephone.onkeyup=function(){
       
    if(checkDec(inputTelephone.value.trim())==true  )
    {   
        erreur1.setAttribute("hidden",""); 

    } else {
        erreur1.removeAttribute("hidden");
    }

   

    
}






bouton.onclick=function(){ 
    var tailleNumTel=inputTelephone.value.trim().length;
    console.log(tailleNumTel)
var tmp=inputTelephone.value.trim().substr(0,2);
    if(check(inputNomComplet.value.trim())==true && inputAdresse.value!="" && inputNomComplet.value.trim()!="")
    {  
        if(checkDec(inputTelephone.value.trim())==true && tailleNumTel==9 && ( tmp=="77" || tmp=="75" || tmp=="76" || tmp=="78" || tmp=="70" || tmp=="33" ) ){
            

                    window.location.href="Commerce.html" 
                     nomComplet=inputNomComplet.value.trim();
                     tel=inputTelephone.value.trim();
                     adresse=inputAdresse.value.trim();
                     localStorage.nomComplet=nomComplet;
                     localStorage.adresse=adresse;
                     localStorage.tel="+221"+tel;



        }else alert("Veillez remplir tout les champs correctement !")


     
    }else alert("Veillez remplir tout les champs correctement !")
}






