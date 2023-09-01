# AngularSeizeTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

# Structure folders and files

```
∇ app
    ∇ core
         ∇ guards
              auth.guard.ts
              module-import.guard.ts
              no-auth.guard.ts
         ∇ interceptor
              token.interceptor.ts
              error.interceptor.ts
         ∇ services
              service-a.service.ts
              service-b.service.ts
         ∇ components
              ∇ navbar
                    navbar.component.html|scss|ts
              ∇ page-not-found
                    page-not-found.component.html|scss|ts
         ∇ constants
              constant-a.ts
              constant-b.ts
         ∇ enums
              enum-a.ts
              enum-b.ts
         ∇ models
              model-a.ts
              model-b.ts
         ∇ utils
              common-functions.ts
    ∇ features
         ∇ feature-a
              ∇ components
                    ∇ scoped-shared-component-a
                            scoped-shared-component-a.component.html|scss|ts
                    ∇ scope-shared-component-b
                            scoped-shared-component-b.component.html|scss|ts
              ∇ pages
                   ∇ page-a
                        page-a.component.html|scss|ts
                   ∇ page-b
                        page-b.component.html|scss|ts
              ∇ models
                    scoped-model-a.model.ts
                    scoped-model-b.model.ts
              ∇ services
                    scoped-service-a.service.ts
                    scoped-service-b.service.ts
              feature-a-routing.module.ts
              feature-a.module.ts
              feature-a.component.html|scss|ts
    ∇ shared
         ∇ components
              ∇ shared-button
                   shared-button.component.html|scss|ts
         ∇ directives
              shared-directive.ts
         ∇ pipes
              shared-pipe.ts
         shared.module.ts
    styles.scss
    ▽ styles
        -> go To src/style/README.md
    ▽ assets
        ▽ i18n
            lang-a.json
            lang-b.json
        ▽ images
            image-a.svg
            image-b.svg
        ▽ static
            structure-a.json
            structure-b.json
        ▽ icons
            custom-icon-a.svg
            custom-icon-b.svg
```

## core

Contient des services, des gardes, des intercepteurs et d'autres éléments qui sont utilisés
à travers toute l'application et qui sont instanciés une seule fois (singleton). Ces éléments
ne doivent être importés que dans le AppModule.

## features

Chaque fonctionnalité ou domaine de l'application a son propre module. Ces modules peuvent être
chargés de manière paresseuse (lazy loading) grâce au routage. Chaque module de fonctionnalité
peut avoir ses propres composants, services, etc.

## shared

Contient des composants, des directives, des pipes et des modèles qui sont réutilisés à plusieurs
endroits dans l'application. Ils n'ont pas de dépendances directes sur le reste de l'application
et peuvent être importés dans n'importe quel module de fonctionnalité.

Cette structure assure que l'application reste maintenable, modulaire et organisée, même lorsqu'elle
grandit en taille et en complexité. Elle respecte le principe de responsabilité unique et facilite
la réutilisation du code.

# Convention commits

Voici comment faire les commits.

## Commit Message Header

```
<type>(<scope>): <n° Azure> - <short summary>
  │       │          │         │
  │       │          │         └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │          │
  │       │          └─⫸ Azure Number (exemple 2344)
  │       │
  │       └─⫸ Commit Scope: employee|user|admin|etc..
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

## Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **style**: changes to the code that do not affect the meaning
- **perf**: changes to the code to improve the performance
- **docs**: Documentation only changes
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **chore**: changes for housekeeping (avoiding this will force more meaningful message)

## Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

- `employee`
- `user`
- `admin`
- `etc..`

Projets :

- `projet1`
- `projet2`

## Example de changlog

Comment générer le changlog :
https://medium.com/jobtome-engineering/how-to-generate-changelog-using-conventional-commits-10be40f5826c
