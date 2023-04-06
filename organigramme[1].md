# Nom du projet: User App Management

### Description

Le but de ce projet est de développer une application de gestion d'utilisateurs basé sur les rôles. Dans cette branche introductive, nous allons exprimer le besoin métier et la façon dont les travaux seront livrés

#### Les travaux à réaliser

Ce repositoire contient plusieurs branches donc avant de débuter une tâche il faudra se déplacer dans une branche particulière qui sera indiqué verbalement. Le but de fonctionner en branche est d'avoir un produit un final. Dans chaque branche vous devrez toujours vous referrez au fichier readme.md où vous aurez un descriptif des différentes étapes à suivre pour arriver au bout de votre tâche principale.

#### Le besoin métier 

Le but de cette application est de fluidifier la gestion des utilisateurs. En effet étant donné un utilisateur, il peut avoir un role qui lui attribué et en fonction de ce role il pourra opérer différentes actions. Dans ce projet nous allons débuter avec 3 roles et le cas échéant nous allons les augmenter au fur et en mesure.

##### Les différents rôles

Comme rôle, nous aurons:
* l'administrateur qui pourra tout faire dans cette application
* le sécrétaire qui pourra uniquement modifier les différentes informations sur un utilisateur mais ne pourra modifier en aucun cas leur role ou leurs droits d'accès de même que les siens.
* le client qui ne pourra rien faire d'autres que de voir la liste des utilisateurs 

##### Les caractéristiques d'un utilisateur

Un utilisateur est constitué de :
* son id
* son nom
* son image
* son role (admin, sécrétaire, client) en readonly
* date de création 
* date de dernière mis à jour
* fortune
* ses privilèges:
    * lecture: booléen
    * modification: booléen
    * suppression: booléen
    * création: booléen

#### Instructions

##### Mise en place de votre environnement

* Vous allez commencer par vous munir d'une IDE (Jet brains ou Vs Code)

* installer git ou git desktop

* installer une extension/plugin prenant en charge angular pour faciliter votre développement

* installer globalement le cli angular grâce à la commande 
> npm install -g @angular/cli

* tester votre installation avec la commande
> ng --version

* Si la commande précédente ne fonctionne pas noter que vous allez précéder toutes vos commandes de avec **npx**
> npx ng --version

* Nous allons créer un projet user-management (en spécifiant de ne pas ajouter les fichiers de test de l'application et en précisant que les fichiers de style sont d'extension css) avec angular cli. 

* Vous pouvez vous aider en tapant la commande. Pour un exemple d'installation vous pourrez vous inspirez du [lien](https://angular.io/tutorial/tour-of-heroes/toh-pt0)
> ng new --help

**NB :** Pour avoir les explications de la structure et arborescence du projet vous pouver consulter le lien [suivant](https://angular.io/guide/file-structure)

* Remplacer la favicon.ico

* Importer bootstrap et font-awesome

**Bootstrap** est le framework css le plus utilisé actuellement le dans ce projet ne sera pas de l'utiliser de fond en comble mais de le découvrir et savoir lire sa documentation. De temps à autre des liens seront fournies pour que puissez rapidement ajouter des classes en suivant tout simplement [la documentation](https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a). Bien se rassurer d'ajouter la version 5 de Bootstrap tout en modifiant le fichier **angular.json**.

**Les icones Font Awesome** seront utilisés pour embelir notre ui d'icônes vous pourriez suivre le guide d'utilisation [suivant](https://stackoverflow.com/questions/38796541/how-to-add-font-awesome-to-angular-2-cli-project)

* Tester vos imports précédents en utilisant chacun des éléments installés précédemment, référez vous au [lien suivant](https://getbootstrap.com/docs/5.0/components/buttons/) pour ajouter une classe bootstrap à un bouton et [celui-ci](https://fontawesome.com/search?q=users&o=r) pour ajouter une icône à ce même bouton en vidant le componant **app.component.html** et en le remplaçant par :
> `<button type="button" class="btn btn-primary"> <i class="fa fa-users mx-2"> Users</i></button>`

##### Introduction à Git

* **expliquer les quelques notions de git avec une petite activité**
    Cet exercice devrait vous aider à vous familiariser avec les commandes Git de base ainsi que les fonctionnalités de GitHub telles que la création de branches, les pull requests et les revues de code, ainsi que les concepts de stash, checkout -b et switch.

    1. Créer un nouveau repository sur GitHub
    Question : Comment créer un nouveau repository sur GitHub ?

    2. Cloner le repository sur votre ordinateur
    Question : Comment cloner le repository sur votre ordinateur en utilisant la commande Git ?

    3. Créer une nouvelle branche en utilisant la commande "checkout -b" et effectuer des modifications
    Question : Comment créer une nouvelle branche en utilisant la commande "checkout -b" en Git ? Comment effectuer des modifications dans cette nouvelle branche ?

    4. Stasher les modifications dans une pile (stash) et passer à une autre branche
    Question : Comment stasher les modifications dans une pile (stash) en utilisant la commande Git ? Comment passer à une autre branche en utilisant la commande Git ?

    5. Effectuer un commit des modifications sur la branche actuelle
    Question : Comment effectuer un commit des modifications sur la branche actuelle en utilisant la commande Git ?

    6. Revenir à la branche précédente et appliquer les modifications stashées
    Question : Comment revenir à la branche précédente en utilisant la commande Git ? Comment appliquer les modifications stashées à la branche précédente ?

    7. Effectuer un merge de la nouvelle branche dans la branche principale
    Question : Comment effectuer un merge de la nouvelle branche dans la branche principale en utilisant la commande Git ?

    8. Résoudre les conflits de merge
    Question : Comment résoudre les conflits de merge en modifiant manuellement les fichiers en conflit ?

    9. Effectuer un push des modifications vers le repository sur GitHub
    Question : Comment effectuer un push des modifications vers le repository sur GitHub en utilisant la commande Git ?

    10. Ouvrir une pull request et demander une revue de code
    Question : Comment ouvrir une pull request sur GitHub et demander une revue de code ?

    11. Approuver et fusionner la pull request
    Question : Comment approuver et fusionner une pull request sur GitHub ?

    12. Récupérer les modifications sur votre ordinateur en utilisant la commande Git
    Question : Comment récupérer les modifications apportées à la branche principale sur votre ordinateur en utilisant la commande Git ?

##### Concept théorique d'Angular

* expliquer la notion de composant

* expliquer la structure de l'app module

* Notion de réutilisabilité et de sharedModule

créer un composant user grâce à angular cli
dans ce composant la structure sera constitué d'une barre de recherche avec 2 ordres de disposition un pour les listes et un autre en carte avec un bouton de création d'utilisateur un filtre par les roles

Dans le composant user, créer un composant user-list grâce à angular cli
dans ce composant la structure sera d'afficher la liste d'utilisateurs en liste/tableau
avec au moins une ligne

Dans le composant user, créer un composant user-list-card grâce à angular cli
dans ce composant la structure sera d'afficher la liste d'utilisateurs en carte
avec au moins une carte

créer un modèle user.models.ts comme étant une interface suivant les recommandations utilisateurs

créer des données fictives pour la liste des utilisateurs

faire de l'interpolation

utiliser ngStyle

utiliser ngClass

créer des directives structurelles et d'attributs

utiliser un pipe (chiffres, nombre, date) et créer un pipe (date il y a qlq jour, mois ou année)

passer les informations entre parent et enfant grace au property binding

créer un formulaire d'ajout de nouvel utilisateur grace à un modal
mettre à jour la liste des utilisateurs lorsqu'on ajoute un utilisateur

supprimer un utilisateur grace à l'event binding
mettre à jour les informations d'un utilisateur grace à l'event binding

implémenter la fonction de recherche d'un utilisateur par son nom grâce aux services

filtrer l'utilisateur par son role

ajouter la navigation pour mieux voir les détails d'un utilisateurs

Explication des observables

créer un formulaire réactif de création de compte utilisateur avec les observables

valider ce formulaire

communiquez avec un serveur via des requêtes simples ou composés

pagination

socket et chat

créer le formulaire de login et un intercepteur de requête pour ajouter le token d'authentification

comprendre le lazy-loading

organisation en module landing-page, auth, user-management

implémentez un guard d'authentification

implémenter un resolver pour la page de détails utilisateur

installez et importez la librairie ngx-toaster

gestion des états avec ngrx


