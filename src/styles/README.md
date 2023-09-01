# SCSS structure file

La structure des fichiers est la suivante :

```
src/styles/
|
|– base/
|   |– _reset.scss       # Reset/normalize (normally done by the imported bootstrap style sheet)
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/          # Project-specific styling of small units that are not covered by any particular angular component
|   |– _button.scss     # Button
|   |– _link.scss       # Link
|   |– _collapse.scss   # Collapse panel
|   |– _dropdown.scss    # Dropdown
|   |– _navigation.scss  # Navigation
|   ...                  # Etc…
|
|– helpers/
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|   ...                  # Etc…
|
|– layout/               # Any layout related styles that are not covered by individual angular components
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– themes/               # Generally applicable for very large projects
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
|– vendors/              # Corrections of third-party style sheets
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– styles.scss             # primary Sass file
`- style-variables.scss    # all reusable variables, ex. colors, style snippets
```

## Naming conventions

### Component

To avoid any ambiguity, classes declared at component level should be named in three parts

- The project prefix
- The component name
- The class name

Example de nom: rbl-entrance-even, rbl-entrance-odd

### Exemple component

Voici un exemple pour un composant imaginaire dans application emp-angular, ce component s'appelle emp-guignard :

```
$emp-guignard-radius: 20px;

.emp-guignard-content{
  .emp-guignard-card {
      padding: 1em;
      radius: $is-guignard-radius
   }

  .emp-guignard-item {
    margin: 10px 15px;
    radius: $is-guignard-radius;
  }
}
```

Lors d'utilisation de variables globales, il faut importer les variables du fichier styles-variables.scss :

```
@import 'styles-variables';
```

Il faut au maximum utiliser ces variables afin de ne pas les dupliquer.

### Exemple de surcharge hiérarchique

In some situations one may prefer to not declare a new class, but rather to override a third-party class for a given component. This can be done
by declaring the html element hierarchy where the override should apply.

Example:

```
emp-guignard-list emp-table .table-striped tr {
  &:nth-of-type(odd){
    background-color: $app-guignard-odd;
  }
  &:nth-of-type(even){
    background-color: $app.guignard-even;
  }
}
```

This method should be applied with caution. A hierarchy of more than 4 levels is penalizing for the performance. It's also constraining in terms of
layout.

Global
Classes declared at global level, should contain the project prefix, to distinguish them from overridden third-party classes.
