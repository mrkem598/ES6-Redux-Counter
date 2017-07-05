// Include Server Dependencies
var express = require('express');
var path = require('path');

// Create Instance of Express which is express app ddeclaration
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener
// Middleware
app.use(express.static(path.join(_dirname, 'public')));
// Routes
app.get('*', functionreq, res) {
   res.sendFile('public/index.html', { root: _dirname });
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: ${PORT}`);
});
