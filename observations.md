
# Observation et appréciation de l'activité d'initiation

1. le premier point a été compris mais tu n'as pas pris le soin de déplacer la barre de recherche raison pour laquelle tu n'as pas eu le résultat escompté. 

    **Appréciation** : <strong style="color: green">Assez bien</strong>

2. L'attente ici était d'avoir un composant qui prenait la liste et le tableau mais bon il y a vraiment un problème de formulation, j'avoue.

    **Appréciatiion** : <strong style="color: green">Assez bien</strong>

3. Le composant `user-list-card` devait être créé dans le composant `user-list` ce qui n'a pas été le cas. De plus ce composant contient les boutons d'affichage qui devait rester dans le composant `user`. De plus, l'import du composant `user-list-card` n'a pas été fait dans le composant `user-list`.

    **Appréciation** : <strong style="color: red">Hors sujet</strong>

4. L'interface `User` a belle et bien été créé, mais le candidat pouvait mieux faire. role par exemple pour n'avoir que des rôles précis il pouvait juste définir les valeurs que le role pouvait prendre. Le candidat a défini les attributs comme étant optionnel même l'id, ce qui n'a pas été recommandé dans l'exercice, le candidat n'a pas fait preuve d'indentation ce qui ne facilite pas la lecture. Le candidat a utilisé les accents ce qui n'est pas recommandé. Le candidat a bien compris les types qu'il fallait utiliser

    **Appréciation** : <strong style="color: green">Bien</strong>

5. Les données fictives ont belles et bien été créées, elles ont été propagées dans le composant `user-list-card` (mais pas correctement à cause de l'utilisation de **ngFor) et non dans le contexte du composant `user-list` (on ne comprend pas pourquoi), la donnée arrive bien dans le composant `user-list-card` mais n'est pas du tout affiché parce qu'on a pas distribué ces informations dans le template html grace à l'interpolation. Le modèle `user` a été exploité à moitié mais néanmoins le candidat a quand même un peu compris ce qu'il y avait lieu de faire.

    **Appréciation** : <strong style="color: red">Insatisfaisant</strong>

6. Le candidat n'a vraiment pas compris ce qu'il fallait faire.

    **Appréciation** : <strong style="color: red">Pas compris</strong>
