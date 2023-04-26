## Instructions

__NB :__ Le but de cet exercice est de mesurer les capacités du candidat par rapport à la compréhension du projet et des notions de base d'angular. 

L'importance de certaines notions lui seront apprises à la fin de cette activité. 

Le candidat doit suivre autant que possible les recommandations de cette activité et répondre aux différentes questions au fur et en mesure de son évolution dans un fichier docx fait de préférence avec google doc. 

Il devra suivre la structure des composants à la lettre pour rejoindre le résultat escompté. 

Des précisions lui ont été ramenées sur le résultat attendu en terme de ui.

S'il a un problème d'incompréhension, il pourra chercher à contacter le plus rapidement la personne agréée. 

* créer un composant user grâce à angular cli dans un répertoire `components/` dans ce composant la structure sera constitué d'une barre de recherche avec 2 ordres de disposition un pour les listes et un autre en carte avec un bouton de création d'utilisateur, un filtre par les roles et de tout l'affichage de l'utilisateur (en liste ou carte), ce composant contiendra d'autres composants qu'il créera et importera au fur et en mesure de l'évolution de cet activité. N'oubliez pas de l'importer dans `app.component.html` pour avoir le résultat escompté.

    1. Quelle est la commande cli utilisée ?
    * __réponse 1__ : ng g c components/user

    __Résultat attendu:__ même interface qu'au départ

    Faire un commit avec pour message `composant user créé`

* Dans le composant `user`, créer un composant `user-list` grâce à angular cli dans ce composant la structure sera d'afficher la liste d'utilisateurs en liste/tableau  et importer `user-list` dans `user` selon les recommandations.
    
    2. Quelle est la commande cli utilisée ?
    * __réponse 2__ : ng g c components/user/user-list

    __Résultat attendu:__ même interface qu'au départ

    Faire un commit avec pour message `composant user-list créé`

* Dans le composant `user-list`, créer un composant `user-list-card` grâce à angular cli dans ce composant la structure sera d'afficher la  une carte d'utilisateur  et importer `user-list-card` dans `user-list` selon les recommandations. 

    3. a. Quelle est la commande cli utilisée ?
    * __réponse 3__ : ng g c components/user/user-list/user-list-card
    
    __Résultat attendu:__ même interface qu'au départ

    Faire un commit avec pour message `composant user-list-card créé`

* créer un modèle `user.models.ts` comme étant une interface suivant les recommandations utilisateurs  et faire un commit avec pour message `modèle user créé`

    4. A quoi sert de créer un modèle ?
    * __réponse 4__ : la création de modèles dans Angular permet d'améliorer la qualité, la cohérence et la réutilisabilité du code, ainsi que de faciliter la maintenance et le développement collaboratif.

* créer des données fictives pour la liste des utilisateurs (avec au moins 5 utilisateurs) dans le composant `user` et propager ses données à travers tous les composants, en utilisant :

    * l'interface créé dans `user.models.ts`
    * les directives structurelles appropriés
    * le property binding
    * l'interpolation

    
    __Résultat attendu:__ même interface qu'au départ avec des lignes ajoutés dans le tableau et plusieurs cartes qui s'affichent pour les différents utilisateurs

    5. Quelles sont les directives structurelles que vous avez utilisé ?
    __Réponse 5__ : la directive ngFor et ngIf


    6. C'est quoi le property binding ?
    __Réponse 6__ : Le property binding en Angular est une technique qui permet de lier dynamiquement des propriétés HTML aux propriétés d'un composant ou d'une expression JavaScript. Cette liaison dynamique permet de mettre à jour automatiquement les propriétés HTML en fonction des changements de propriétés du composant ou des expressions JavaScript.

    Le property binding est généralement utilisé pour lier des propriétés HTML telles que le contenu d'un élément, la valeur d'un champ de saisie, l'attribut d'un élément, etc. aux propriétés d'un composant Angular ou à une expression JavaScript.

    Faire un commit avec pour message `affichage de la liste des utilisateurs en carte et en liste sans condition préalable`

* Permettre l'affichage conditionnée des différents dipositions (en carte ou liste), en utilisant :

    * la directive structurelle approprié
    * property binding

    
    __Résultat attendu:__ le tableau d'utilisateur qui s'affiche lorsqu'on clique sur le bouton qui permet l'affichage en liste (par défaut c'est ce tableau qui s'affiche en premier même quand on n'a pas encore effectué de clic), faire de même pour la disposition en carte.

    7. Quelle est la directive structurelle utilisée ?

    Faire un commit avec pour message `affichage conditionnée en liste ou en carte`
