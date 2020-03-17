# Binary Coffee

## Write an Article

- Create new (Binary Coffee Article) from pre-defined templates.
- Create new Templates either from a file or a blank template.
- Edit Templates Articles.
- Add Author Name and Date of creation to the file.

## Usage

- Right-click on the VSCode Explorer where you want to create a new file, you will see an option 'Create New Article from template'.
  Selecting this option shows a menu with existing templates. Select the desired template and enter the new file name. New file will be created in the selected folder.

- You can also create a new Article from template by Right-click on the editor. On Right-click in the editor, you will all also see 'Create Template from articles' option. Select this option to create a new Template from the current active document.

- You can also do all these the other way by selecting the appropriate command from Command Palette. From Command Palette, select
  'Files: Create empty article' - to create a new empty article
  'Files: Create new Template for article' - to create a custom template for articles.
  'Files: New Template from file' - to create a new template from the current active file.
  'Files: Edit Article Template' - to edit any existing template.

- Add Author name and Date of creation to the file, by adding `${AUTHOR}` and `${DATE}` tokens to your template.

## VS Code Binary Coffee (bc) Snippets

---

[![Version](https://vsmarketplacebadge.apphb.com/version/stescobedo.binary-coffee-snippet.svg)](https://marketplace.visualstudio.com/items?itemName=stescobedo.binary-coffee-snippet)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/stescobedo.binary-coffee-snippet.svg)](https://marketplace.visualstudio.com/items?itemName=stescobedo.binary-coffee-snippet)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/stescobedo.binary-coffee-snippet.svg)](https://marketplace.visualstudio.com/items?itemName=stescobedo.binary-coffee-snippet)

This extension contains code snippets for Binary Coffee Articles, syntax for [Vs Code][code] editor (supports both Markdown).

## Supported languages (file extensions)

- Markdown (.md)
- JavaScript (.js)
- HTML (.html)

## Snippets

Below is a list of all available snippets and the triggers of each one. The **⇥** means the `TAB` key.

### Import and export

|          Trigger | Content                                                                                         |
| ---------------: | ----------------------------------------------------------------------------------------------- |
|     `bc-article` | Template for write an Article                                                                   |
|       `bc-title` | Article title                                                                                   |
|        `bc-link` | For any link ej: https://binary-coffee.dev                                                      |
|       `bc-image` | Load images                                                                                     |
|     `bc-section` | Create a new Section                                                                            |
|  `bc-subsection` | Create a new Sub-Section                                                                        |
|       `bc-table` | Create a new Table                                                                              |
|        `bc-abbr` | Is equivalent <p>Inline <abbr title=\"Hypertext Markup Language\">HTML</abbr> is supported.</p> |
|        `bc-bold` | Is equivalent <strong>bold</strong>                                                             |
|      `bc-italic` | is equivalent <p>Text attributes <em>italic</em>                                                |
| `bc-number-list` | Number List is equivalent <ol><li>Item1</li><ol>                                                |
|      `bc-bullet` | Bullet is equivalent <ul><li>Item1</li><ul>                                                     |
|          `bc-hr` | Is equivalent </hr>                                                                             |
| `bc-sub-heading` | SubHeading equivalent <h2>Sub-heading</h2>                                                      |
|     `bc-heading` | Heading is equivalent <h1>Heading</h1>                                                          |
|  `bc-link-video` | link to Video                                                                                   |
|          `bc-h1` | # H1                                                                                            |
|          `bc-h2` | ## H2                                                                                           |
|          `bc-h3` | ### H3                                                                                          |
|          `bc-h4` | #### H4                                                                                         |
|          `bc-h5` | ##### H5                                                                                        |
|          `bc-h6` | ###### H6                                                                                       |

[code]: https://binary-coffee.dev
