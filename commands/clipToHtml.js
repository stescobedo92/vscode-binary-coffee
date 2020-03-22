const vscode = require("vscode");

function messages() {
  vscode.window.showInformationMessage("Listado de Casos");
}

function openTerminal() {
  // Display a message box to the user
  /*let terminal =
    vscode.window.terminals.length != 0
      ? vscode.window.activeTerminal
      : vscode.window.createTerminal("terminal");
  terminal.show(true);
  terminal.sendText(vscode.window.activeTextEditor.document.getText());*/
  //vscode.window.showInformationMessage(
  //vscode.window.activeTextEditor.document.getText()
  //);
}

class SendMessage {
  getMessages() {
    messages();
  }

  getConsole() {
    openTerminal();
  }
}

module.exports = new SendMessage();
