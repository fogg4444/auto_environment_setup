// Each of these commands will run in a new tab!
var commandsList = [];

commandsList[0] = 'mongod';
commandsList[1] = 'nodemon server/server.js';
commandsList[2] = 'chrome https://github.com http://localhost:3000; subl .';


var exec = require('child_process').exec;
var dir = __dirname;

for ( var i = 0; i < commandsList.length; i++ ) {

  var thisCommand = commandsList[i];
  
  (function (thisCommand) {
    setTimeout(function() {
      // console.log(thisCommand);
      exec('runInTab ' + thisCommand);
    }, i * 1000);
  })(thisCommand);
}

// Save below script to     /usr/local/bin as "runInTab"
// ensure this is executeable
// might require a little "chmod +x" can't quite remember how I did it... :)
// add commands to list below and run 'node sessionSetup.js'
// Hope this works...!
//////////////////////////////////////////////////////////////////////////

// #!/usr/bin/env osascript

// on run argv
//     set AppleScript's text item delimiters to {" "}
//     tell application "iTerm"
//         make new terminal
//         tell the current terminal
//             activate current session
//             launch session "Default Session"
//             tell the last session
//                 write text argv as string
//             end tell
//         end tell
//     end tell
// end run

////////////////////////////////////////////////////////////////////////////


