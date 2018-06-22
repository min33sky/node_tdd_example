const utils = require('./utils');
const should = require('should');

/**
 * 테스트 수트 : 테스트 환경 - 모카에서는 describe()로 구현
 * 테스트 케이스 : 실제 테스트 - 모카에서는 it()으로 구현
 */

describe('utils.js모듈의 capitalize() 함수는 ', () => {
	const result = utils.capitalize('hello');
	it('문자열의 첫번째 문자를 대문자로 변환한다.', () => {
		result.should.be.equal('Hello');
	});
});
