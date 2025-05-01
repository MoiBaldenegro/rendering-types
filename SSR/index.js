const express = require('express');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title   >SSR Example</title>
    </head>
    <body>
        <h1>Server-Side Rendering Example</h1>
    </body>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
        }
        p {
            font-size: 18px;
        }
    </html>
`;
  res.send(html);  
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



