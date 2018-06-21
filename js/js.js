function person(prenom,nom,age,formation,permis,codepostal,adresse,ville,mail,alternance) {
	this.prenom = prenom;
	this.nom = nom;
	this.age = age;
	this.formation = formation;
	this.permis = permis;
	this.codepostal = codepostal;
	this.adresse = adresse;
	this.ville = ville;
	this.mail = mail;
	this.alternance = alternance;
}

var murat = new person("Murat", "MENDIL", 23, "Architecte Logiciel", "Permis B", 93110, "24 rue Henri Mondor", "ROSNY-SOUS-BOIS", "mendil.murat@yahoo.com", "Surfy");


/*
murat.autre = function() {
	return this.prenom;
};

document.getElementById("demo").innerHTML = murat.autre();
*/

//document.getElementById("footer").innerHTML = "Site crée par " + murat.prenom + " " + murat.nom + ", étudiant en master d'Architecte Logiciel et en alternance chez " + murat.alternance;

document.getElementById("demo") = "Murat";