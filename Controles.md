# Copie du modele sur un projet vide ou existant

# front

```sh
cd mon-projet-vide
cp -n '/home/william/Documents/models'/{.*,*} .
cp -rn '/home/william/Documents/models'/{src,public} .
```

# Back

```sh
cp -n '/home/william/Documents/models/app'/{.*,*} .
cp -rn '/home/william/Documents/models/app'/{controllers,data,database,middlewares,models} .
```
