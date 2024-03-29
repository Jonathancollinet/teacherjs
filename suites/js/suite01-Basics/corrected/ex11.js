/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau:

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
    ]

    et nous attendons comme résultat un objet contenant:
        Le nom du fruit en clef;
        Le nombre de fois qu'il à été rencontré dans l'ensemble des paniers en valeur;

    Important -> l'ordre n'a aucune importance

*/

// shoppingList([
//     ["orange", "orange", "kiwi", "ananas"],
//     ["kiwi", "ananas", "banane", "prune"],
//     ["orange", "orange", "orange", "orange"],
//     ["orange", "orange", "kiwi", "kiwi"],
//     ["prune", "banane", "pamplemousse", "ananas"]
// ]);

//  écrire votre code sous ce commentaire

function shoppingList(arr) {
    let obj = {};

    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = 0, len2 = arr[i].length; j < len2; j++) {
            let fruit = arr[i][j];
            obj[fruit] = obj[fruit] ? obj[fruit] + 1 : 1;
        } 
    }

    return obj;
}