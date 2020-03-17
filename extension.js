let vscode = require("vscode");
const editTemplate = require("./commands/edittemplate");
const newTemplate = require("./commands/newtemplate");
const newFileFromTemplate = require("./commands/newfilefromtemplate");

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  /**
   * Create a new Template from file
   */
  let disposable = vscode.commands.registerCommand(
    "extension.newTemplateFromFile",
    newTemplate.newTemplateFromFile
  );
  context.subscriptions.push(disposable);

  /**
   * Create a new Template
   */
  disposable = vscode.commands.registerCommand(
    "extension.newTemplate",
    newTemplate.newTemplate
  );

  /**
   * Edit a template
   */
  disposable = vscode.commands.registerCommand(
    "extension.editTemplate",
    editTemplate
  );
  context.subscriptions.push(disposable);

  /**
   * Create a new file from template
   */
  disposable = vscode.commands.registerCommand(
    "extension.newFileFromTemplate",
    newFileFromTemplate
  );
  context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivated() {}

module.exports = {
  activate,
  deactivated
};
