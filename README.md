# If you are a Sorcerer

Mipeul's (Mouvement Independant Pour l'Exploration de l'Univers Ludique) public web site.

This is powered with Jekyll.

To run locally, [install Jekyll](https://jekyllrb.com/docs/installation/) and (from root folder) : 
```
bundle exec jekyll serve
```

Local site will be available on http://127.0.0.1:4000/.

# If you are a Muggler

Please do not touch anything but [index.md](index.md?plain=1) file.

You may edit the file online
![](https://docs.github.com/assets/cb-47677/mw-1440/images/help/repository/edit-file-edit-button.webp)


But only the part on the **right** side of each line....

Exemple : 
```
accueil-large: Bienvenue au Mipeul
```

Editing `accueil-large` => bad !

Editing `Bienvenue au Mipeul` => good !

**Please do not touch**
```
layout: default
```

You may use markdown syntax, for example :

* \*\*bold\*\* => **bold**
* _\_italic\__ => _italic_
* \[link\]\(mipeul.github.io\) => [link](mipeul.github.io)

Find more [here](https://www.markdownguide.org/basic-syntax/).

## Banner
If we want to make the banner appear on the website for urgent announces, just fill the fields `banner-title` and `banner-content` with the content you want in the banner. Remove the content to make it disappear.

```
banner-title:
banner-content:
```

```diff
- Anyway, you cannot break permanently anything, so keep cool :)
```

