const fs = require("fs")

fs.writeFileSync("code_generinator_v2.0.py", `
with open('HelloWorld.dpr', 'w') as file:
  file.write(\`\`\`
    program HelloWorld;

    {$APPTYPE CONSOLE}
  
    begin
      WriteLn('Hello World');
    end.
  \`\`\`)
`)