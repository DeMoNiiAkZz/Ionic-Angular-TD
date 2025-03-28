# Evaluation Ionic - Enzo Cailac

Dans cette application, on retrouvera comme page

- Accueil (tab)
- Produits (tab)
- Profil (tab)
- Panier
- Connexion
- Inscription
- Déconnexion

## Accueil
Dans cette page, nous avons une image qui fait office de Hero puis 3 produits récupérés via le service "Produits"

## Produits
La liste des produits est affiché, on peut ajouter des produits au panier et également accéder au panier

## Profil
Lorsque l'utilisateur n'est pas connecté on le redirige vers la page de connexion, si il est connecté on affiche ses informations et un message qui précise qu'il est bien connecté en tant que "Admin" ou "Client" (on peut changer le rôle via la ligne 33 de la page connexion.page.ts et ensuite se reconnecter)
*Page interdite pour les utilisateurs non connecté*

## Panier
Dans le panier on voit la liste des produits ajouté qu'on peut également supprimé
*Page interdite pour les utilisateurs non connecté*

## Connexion
La page vérifie si le champs email est bien un email et le mot de passe doit contenir minimum 8 caractères pour se connecter, l'email et le rôle sera stocké en session une fois l'utilisateur connecté
*Page interdite pour les utilisateurs déjà connecté*

## Inscription 
Rien de spécial, l'utilisateur sera automatiquement authentifié lorsqu'il s'inscrira en reprenant la fonction de la page de connexion qui permet de traiter et de mettre en session l'utilisateur
*Page interdite pour les utilisateurs déjà connecté*

## Déconnexion
Elle permet de nous déconnecter et détruire la session en cours


Ce qu'il manque dans l'application : 

 - Afficher les détails des produits, pour ce faire il suffit d'utiliser la commande `ionic g page produit-details` et dans le code on récupère l'id du produit passé en paramètre dans l'url, on appelle le service qui get le produit by son id puis on affiche ceci dans le html en vérifiant qu'on a bien récupéré le produit


