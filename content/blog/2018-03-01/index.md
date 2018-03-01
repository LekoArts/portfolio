---
title: "React Code Styling mit ESLint und Prettier"
cover: "./eslint_airbnb_vscode_prettier.jpg"
date: "2018-03-01"
category: "Tutorial"
tags:
    - Gatsby
    - React
    - ESLint
---

Nachdem wir im [ersten Teil](/blog/ultra-schnellen-blog-mit-react-und-gatsby-erstellen) unseren Gatsby Blog erstellt und veröffentlicht haben, wird es in den folgenden Teilen darum gehen diesen mit Funktionen zu erweitern und zu verbessern. Dabei wirst du einiges an React Code schreiben müssen - und dabei schleichen sich immer wieder gerne Flüchtigkeitsfehler oder schlechte Angewohnheiten in den Code ein. Schlaue Entwickler haben sich für dieses Problem sog. _Linter_ ausgedacht, die deinen Code auf Fehler oder falsche Formatierung prüfen. Vor allem bei Teamarbeiten kann so ein konsistenter Stil eingehalten werden.

In diesem kurzem Blog-Eintrag soll es nun also um [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) + [Visual Studio Code](https://code.visualstudio.com/) gehen. Mein persönliches Setup ist natürlich nicht Gatsby-spezifisch, passt aber gut in die Tutorial-Reihe hinein.

## Kurzinfo zu ESLint und Prettier

ESLint ist ein _Linter_ und prüft vorrangig deinen Code auf Bugs und die Anwedung von bestimmten ECMAScript Mustern, sodass dein Code konsistenter ist.
Prettier ist ein _Code Formatter_ und passt den Code deinem Styling Geschmack an. Du möchtest keine `;` hinter den Zeilen oder möchtest `'` statt `"` nutzen? Kein Problem. Prettier achtet darauf, dass diese Sachen überall eingehalten werden. Prettier kann auch CSS, SCSS formatieren!

Ich möchte hier keines der beiden Tools vollständig erklären. Wenn du also mehr machen willst als dem Tutorial "stumpf" zu folgen, empfehle ich dir die Websiten zu besuchen!

## Visual Studio Code

Da [Visual Studio Code](https://code.visualstudio.com/) der Editor meiner Wahl ist, soll es nun darum gehen welche Plugins ich dafür nutze und welche Einstellungen ich vorgenommen habe.

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier - Code formatter](https://prettier.io/)

Die Plugins erklären jeweils wie diese zu nutzen sind, ich persönlich sehe aber von einer globalen Installation der npm Packages ab, d.h. wie du später sehen wirst füge ich die Pakete jeweils zum Projekt hinzu.
Außerdem sind ein paar Anpassungen von VSCode nötig, die du hier durchführen kannst: `Datei -> Einstellungen -> Einstellungen`.

```JS
{
  // Editor
  "editor.formatOnSave": true,
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[markdown]": {
    "editor.formatOnSave": false
  },
  // Eslint
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.format.enable": false,
  // Sonstiges
  "problems.decorations.enabled": true,
}
```

VS Code erklärt jeweils, was die Einstellungen bewirken, aber dennoch eine kurze Erklärung:
Mit der installierten Prettier Extension nimmt VSCode nun automatisch diese, um Code zu verbessern. Da wir aber für React bzw. JS bereits ESLint haben, deaktivieren wir das `formatOnSave` dort jeweils. So styled z.B. Prettier weiterhin noch unsere CSS oder HTML Dateien.

## Installation im Projekt

Um die Erweiterungen und somit ESLint und Prettier in unserem Projekt nutzen zu können, musst du erst einmal ein paar npm Pakete installieren:

```bash
npm install prettier-eslint babel-eslint eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react --save-dev
```

**Kurzfassung:** Wir wollen ESLint und Prettier zusammen nutzen, allerdings möchten wir die Regeln kombinieren - und nicht ein ständiges Hin&Her zwischen den beiden Stilen beobachten. Auch soll bspw. die Code-Qualitätsregeln von AirBnB übernommen werden, aber nicht deren Formatierungsoptionen (da wir dafür ja Prettier nutzen wollen).

Bevor es aber losgehen kann, musst du noch die Konfigurationsdatei `.eslintrc` im Hauptverzeichnis des Projekts erstellen.

```JS
{
  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true
  },
  "rules": {
    "no-unused-vars": [
      1,
      {
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "linebreak-style": 0,
    "no-use-before-define": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react/prop-types": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/display-name": 1,
    "react/react-in-jsx-scope": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": ["invalidHref"]
      }
    ]
  },
  "plugins": ["prettier"]
}
```

_Dies sind meine persönlichen Präferenzen. Ändere sie gerne nach deinen Wünschen ab!_

Die Reihenfolge bei `[extends]` ist wichtig! Wir wollen wie gesagt erst die AirBnB Konfiguration und diese dann teilweise mit Prettier überschreiben.

## Action!

Öffne nun mal `src/templates/post.js` und schau dir die Fehler an:

![](./post_eslint_fehler.jpg)

1) VSCode zeigt uns an, dass 9 Änderungen nötig sind
2) Wir haben `"` statt `'`. Und das soll geändert werden

Drücke jetzt mal _Strg+S_ ...

![](./post_eslint_korrigiert.jpg)

Et voilà

1) Uns wird nur noch eine Warnung, kein Fehler angezeigt
2) Wir haben unsere richtigen Anführungszeichen

----------

Falls du den Code noch einmal im Detail ansehen willst, kannst du den Branch `tutorial-part-two` des [GitHub Repository](https://github.com/LeKoArts/gatsby-starter-minimal-blog/tree/tutorial-part-two) aufrufen.