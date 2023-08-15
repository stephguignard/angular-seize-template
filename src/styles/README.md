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
