affiche();

function affiche(){
    
    let tab = ['test0','test1','test2','test3','test4','test5','test6','test7','test8'];
    
    tab.forEach(function(value, index)
    {
        load(value, index)
    });
}

/**
 * Charge les donnes du tableau
 * @param {string} value le text a afficher
 * @param {Number} number l'id du text
 */
function load(value, number){
    let tbody = document.getElementById('body-tab');
    let tr = document.createElement('tr');

    tr.id = 'block-' + number;

    let tdText = document.createElement('td');
    tdText.id = 'col-1-' + number;
    let tdEmpty = document.createElement('td');
    tdEmpty.id = 'col-2-' + number;
    let tdButton = document.createElement('td');
    let tdDeplace = document.createElement('td');
    let tdCheck = document.createElement('td');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'checkbox';
    checkBox.id = "check-" + number;
    tdCheck.appendChild(checkBox);

    let nb = document.createTextNode(value);

    tdText.appendChild(nb);

    let supprime = document.createElement('input');
    supprime.type = 'button'
    supprime.value = 'Supprimer'
    supprime.title = "supprimer";
    supprime.id = "delete-" + number;
    supprime.onclick = function MouseEvent(){
        remove(number);
    };

    let deplacer = document.createElement('input');
    deplacer.type = 'button'
    deplacer.value = 'Déplacer'
    deplacer.title = "deplace";
    deplacer.id = "deplace-" + number;
    deplacer.onclick = function MouseEvent(){
        deplace(number);
    };

    tdButton.appendChild(supprime);
    tdDeplace.appendChild(deplacer);

    tr.appendChild(tdText);
    tr.appendChild(tdEmpty);
    tr.appendChild(tdButton);
    tr.appendChild(tdDeplace);
    tr.appendChild(tdCheck);

    tbody.appendChild(tr);

}
/**
 * Ajout une nouvelle ligne au tableau
 */
function ajoute(){
    let text = document.getElementById('text-button');
    let tbody = document.getElementById('body-tab');

    let number;
    if(checkIdIsAlreadyExist(getIndex())){
        number = getIndex()+1;
        console.log("1")
    }else{
        number = getIndex();
        console.log("0")
    }
    

    let tr = document.createElement('tr');
    tr.id = 'block-' + number;

    let tdText = document.createElement('td');
    tdText.id = 'col-1-' + number;
    let tdEmpty = document.createElement('td');
    tdEmpty.id = 'col-2-' + number;
    let tdButton = document.createElement('td');
    let tdDeplace = document.createElement('td');
    let tdCheck = document.createElement('td');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'checkbox';
    checkBox.id = "check-" + number;
    tdCheck.appendChild(checkBox);

    let nb = document.createTextNode(text.value);

    tdText.appendChild(nb);

    let supprime = document.createElement('input');
    supprime.type = 'button'
    supprime.value = 'Supprimer'
    supprime.title = "supprimer";
    supprime.id = "delete-" + number;
    supprime.onclick = function MouseEvent(){
        remove(number);
    };

    let deplacer = document.createElement('input');
    deplacer.type = 'button'
    deplacer.value = 'Déplacer'
    deplacer.title = "deplace";
    deplacer.id = "deplace-" + number;
    deplacer.onclick = function MouseEvent(){
        deplace(number);
    };

    tdButton.appendChild(supprime);
    tdDeplace.appendChild(deplacer);

    tr.appendChild(tdText);
    tr.appendChild(tdEmpty);
    tr.appendChild(tdButton);
    tr.appendChild(tdDeplace);
    tr.appendChild(tdCheck);

    tbody.appendChild(tr);
}
/**
 * Supprime la ligne
 * @param {Number} id id du block
 */
function remove(id){
    let tr = document.getElementById('block-' + id);
    tr.remove();
}

/**
 * Permet de déplacer d'une cologne a une autres
 * @param {Number} number id du block qui contient les colognes
 */
function deplace(id){
    let col1 = document.getElementById('col-1-' + id);
    let col2 = document.getElementById('col-2-' + id);

    

    if(col1.innerText.length != 0){
        col2.innerText = col1.innerText;
        col1.innerText = "";
    }
    else {
        col1.innerText = col2.innerText;
        col2.innerText = "";
    }
}

function checkSupp(){
    let tab = [];
    let index = getIndex() != null ? getIndex() : document.getElementsByTagName('tr').length;
    let checkList = []
    //Récupere touts les id des checkbox est l'ajoute dans le tableau (checkList) 
    for(var i = 0; i <= index-1; i++){
        checkList.push(document.getElementsByName('checkbox')[i].id);
    }
    //Récupere la checkbox et vérifie si elle est sur true puis ajoute sont id (le chiffre uniquement (substring(6))) dans le tableau (tab)
    for(var y = 0; y < checkList.length; y++){

        let checkbox = document.getElementById(checkList[y]);
        if (checkbox.checked){
            tab.push(checkbox.id.substring(6));
        }
    }
    //Supprime le block (tr)
    for(var z = 0; z < tab.length; z++){
        let tr = document.getElementById('block-' + tab[z]);
        tr.remove();
    }
}

/**
 * 
 * @returns number le nombre de ligne (tr)
 */
function getIndex(){   
    return document.getElementsByTagName('tr').length-1
}

function checkIdIsAlreadyExist(id){
    let resultat;
    
    for(var i = 0; i <= getIndex(); i++){
        let element = document.getElementById("block-" + i);
        console.log(element)
        if(element != null){
           if(element.id.substring(6) == id){
                resultat = true;
            } 
        }
    }
    if(resultat == null){
        resultat = false;
    }
    
    return resultat;
    
}