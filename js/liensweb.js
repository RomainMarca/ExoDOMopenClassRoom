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
  

