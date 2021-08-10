const vscode = require('vscode');
const cp = require('child_process');

exports.activate = function(context) {
    let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        console.log(`in repro1`);
        const child = cp.spawn(`/node1`);
        child.stdin.write('hi standard in!');
    });
    context.subscriptions.push(disposable);
}