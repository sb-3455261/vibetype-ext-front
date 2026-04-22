import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("vibetype.helloWorld", () => {
    vscode.window.showInformationMessage("Hello from Vibetype!")
  })
  context.subscriptions.push(disposable)
}

export function deactivate() {}
