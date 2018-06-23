const app = require('../index');
const syncDb = require('./sync-db');
const port = 3000;

/**
 * DB 연동 & 서버 켜기
 */
syncDb().then(() => {
	console.log('Sync Database!');
	app.listen(port, () => {
		console.log('Server is running - ' + port);
	});
});
