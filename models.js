/**
 * Model : 데이터베이스 테이블을 ORM으로 추상화한 것
 */

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './db.sqlite'
});

// User 모델 정의
const User = sequelize.define('User', {
	name: Sequelize.STRING
});

module.exports = { Sequelize, sequelize, User };
