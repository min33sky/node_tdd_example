const express = require('express');
const app = express();
const syncDb = require('./sync-db');
const port = 3000;

syncDb().then(() => {
	console.log('Sync Database!');
	app.listen(port, () => {
		console.log('Server is running - ' + port);
	});
});
