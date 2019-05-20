/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];
let link = "";
let linkName = "";
let name = "";

let divForm = document.createElement("div");
divForm.id= "divForm";
document.getElementById("contenu").insertAdjacentElement("beforebegin" ,divForm);

showLink();

function addForm() {
    divForm.innerHTML = "<form id='form'> <p> <input type='text' id='name' placeholder='Entrez votre nom' size='30' required>" 
                    + "<input type='text' id='linkName' placeholder='Entrez le titre du lien' size='50' required>"
                    + "<input type='text' id='link' placeholder='Entrez URL du lien' size='50' required>"
                    + "<input type='submit' id='submit' value='Ajouter'> </p> </form>";

    link = document.getElementById("link");
    linkName = document.getElementById("name");
    name = document.getElementById("linkName");
    linkName.style.marginRight= "25px";
    name.style.marginRight= "25px";
    link.style.marginRight= "25px";

    link.addEventListener("blur", function(e) {
        let regexUrl = /http.*\:\/\/.+/
        if (!regexUrl.test(e.target.value) && link.value != "") {
            link.value = "http://" + link.value;
        }
    })
    document.getElementById("form").addEventListener("submit", function(e) {
        e.preventDefault();
        addLink();
        document.getElementById("form").innerHTML="";
        
        let messageValue = "Le lien " + linkName.value + " a bien été ajouté!"
        let timeMessage = document.createElement("p");
        timeMessage.id = "timeMessage";
        timeMessage.textContent= messageValue;
        document.getElementById("form").appendChild(timeMessage);
        let message = document.getElementById("timeMessage");
        message.style.fontSize = "30px";
        message.style.color = "#428bca";

        setTimeout(function() {
        document.getElementById("form").innerHTML=""}, 2000);
    });
}

function addLink() {
    let newLink =  {
                        titre: linkName.value,
                        url: link.value,
                        auteur: name.value
                    }
    listeLiens.unshift(newLink);
    document.getElementById("contenu").innerHTML="";
    showLink();

}

function showLink() {
    addButton();
    for (let i=0; i<listeLiens.length;i++) {
    //create element
    let div = document.createElement("div");
    let para = document.createElement("p");
    let title1 = document.createElement("a");
    let autor = document.createElement("p");

    //assign  id and content
    title1.href = listeLiens[i].url;
    title1.textContent = listeLiens[i].titre;
    title1.id = "title"+ i;
    div.id = "div"+i;
    para.appendChild(title1);
    para.appendChild(document.createTextNode(" " +listeLiens[i].url));
    autor.appendChild(document.createTextNode("Ajouté par "+ listeLiens[i].auteur));

    //add element
    document.getElementById("contenu").appendChild(div);
    document.getElementById("div"+i).appendChild(para);
    document.getElementById("div"+i).appendChild(autor);
    document.getElementById("div"+i).insertAdjacentHTML("afterend", '<br/>');

    //modify style element 
    let pELt = document.getElementById("div"+i);
    pELt.style.padding = "15px";
    pELt.style.background = "white";
    let tElt = document.getElementById("title"+i);
    tElt.style.color = "#428bca";
    tElt.style.fontSize = "25px";
    tElt.style.textDecoration = "none";
    }    

    function addButton() {
        let divButton = document.createElement("div");
        let button = document.createElement("button");
        divButton.id = "div";
        button.id= "button";
        button.textContent = "Ajouter un lien";
        document.getElementById("contenu").appendChild(divButton);
        divButton.appendChild(button);
        divButton.insertAdjacentHTML("afterend", '<br/>');

        button.addEventListener("click", function(e)  {
            addForm();
            divButton.innerHTML= "";
        })
    }
}


  


