const TM = require("../templatemanager");
const vscode = require("vscode");
const fs = require("fs");
const editTemplate = require("./edittemplate");
const newTemplate = require("./newtemplate");
const path = require("path");

const DATE_TOKEN = /\$\{DATE\}/g;
const AUTHOR_TOKEN = /\$\{AUTHOR\}/g;
const FILE_TOKEN = /\$\{FILE\}/g;
const NEW_FILE = "Files: New File";
const CREATE_TEMPLATE = "Files: New File Template";
const EDIT_TEMPLATE = "Files: Edit File Template";
const TEMPLATES_PREFIX = "Template: ";

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};

function createFile(filepath, data = "", extension = "") {
  let input = vscode.window.showInputBox({
    prompt: "Enter new fileName"
  });
  input.then(filename => {
    if (!filename) {
      vscode.window.showErrorMessage("Please retry with a valid filename");
      return;
    }

    let filenameWithExt = filename + extension;
    fs.stat(filepath, (err, stats) => {
      let curDir = filepath;
      if (!stats.isDirectory()) curDir = path.dirname(filepath);

      let newFilePath = path.join(curDir, filenameWithExt);
      let config = vscode.workspace.getConfiguration("templates");
      data = data.replace(AUTHOR_TOKEN, config.Author);
      data = data.replace(DATE_TOKEN, new Date().toDateString());
      data = data.replace(FILE_TOKEN, filenameWithExt);

      fs.stat(newFilePath, (err, stats) => {
        if (stats && stats.isFile()) {
          vscode.window.showErrorMessage(
            "File already exists with the same name. Please retry with another name"
          );
          return;
        }

        fs.writeFile(newFilePath, data, err => {
          if (err) {
            vscode.window.showErrorMessage("Cannot create new file");
            return;
          }

          vscode.commands
            .executeCommand(
              "vscode.open",
              vscode.Uri.parse("file:///" + newFilePath)
            )
            .then(() => {
              console.log("Document opened");
            });
        });
      });
    });
  });
}

function constructTemplatesOptions(templatesInfo) {
  let templateMenuOptions = [{ label: NEW_FILE }];
  Object.keys(templatesInfo).forEach(template => {
    let templateName = path.basename(templatesInfo[template]);
    let extStart = templateName.lastIndexOf(".");
    templateMenuOptions.push({
      label: template.charAt(0).toUpperCase() + template.slice(1),
      extension: templateName.substring(extStart)
    });
  });

  // templateMenuOptions = templateMenuOptions.concat([{label:CREATE_TEMPLATE} ,{label:EDIT_TEMPLATE}]);

  return templateMenuOptions;
}

function createNewFile(info) {
  let currentPath = info ? info._fsPath : undefined;
  if (!currentPath) {
    let editor = vscode.window.activeTextEditor;
    if (editor) currentPath = editor.document.fileName;

    if (!currentPath) currentPath = vscode.workspace.rootPath;

    // TODO : create untitled file from template
    if (!currentPath) return;
  }

  TM.getTemplates().then(templatesInfo => {
    let templateMenuOptions = constructTemplatesOptions(templatesInfo);
    let select = vscode.window.showQuickPick(templateMenuOptions, {
      placeHolder: "Select a template to create from"
    });

    select.then(option => {
      if (!option) return;

      if (!option.extension) {
        // if(option.label === CREATE_TEMPLATE)
        //     newTemplate.newTemplate('');
        // else if(option.label === EDIT_TEMPLATE){
        //     editTemplate();
        // }
        if (option.label === NEW_FILE) createFile(currentPath);

        return;
      }

      fs.readFile(templatesInfo[option.label], "utf8", (err, data) => {
        if (err) {
          vscode.window.showErrorMessage("Cannot find the template");
          return;
        }

        createFile(currentPath, data, option.extension);
      });
    });
  });
}

module.exports = createNewFile;
