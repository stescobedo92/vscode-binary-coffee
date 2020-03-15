# Binary Coffee

## VS Code Binary Coffee (bncf) snippets

---

[![Version](https://vsmarketplacebadge.apphb.com/version/xabikos.JavaScriptSnippets.svg)](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/xabikos.JavaScriptSnippets.svg)](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/xabikos.JavaScriptSnippets.svg)](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

This extension contains code snippets for Binary Coffee Articles, syntax for [Vs Code][code] editor (supports both Markdown).

## Supported languages (file extensions)

- Markdown (.md)

## Snippets

Below is a list of all available snippets and the triggers of each one. The **⇥** means the `TAB` key.

### Import and export

|           Trigger | Content                                                                                     |
| ----------------: | ------------------------------------------------------------------------------------------- |
|      `bncf-title` | imports entire module `import fs from 'fs';`                                                |
|       `bncf-link` | imports entire module without module name `import 'animate.css'`                            |
|      `bncf-image` | imports only a portion of the module using destructing `import {rename} from 'fs';`         |
|    `bncf-section` | imports everything as alias from the module `import * as localAlias from 'fs';`             |
| `bncf-subsection` | imports only a portion of the module as alias `import { rename as localRename } from 'fs';` |

[code]: https://code.visualstudio.com


