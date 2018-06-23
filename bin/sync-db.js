/**
 * sync : 데이터베이스 연동
 */

const models = require('../models');

module.exports = () => {
	// force: 기존 DB를 날리고 새로 만든다.
	// sync 함수는 promise 객체를 리턴
	const options = {
		force: process.env.NODE_ENV === 'test' ? true : false
	};
	return models.sequelize.sync(options);
};
