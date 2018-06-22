/**
 * api 로직
 */
var users = [
	{ id: 1, name: 'Ronaldo' },
	{ id: 2, name: 'Messi' },
	{ id: 3, name: 'Neymar' }
];

const index = (req, res) => {
	req.query.limit = req.query.limit || 10;
	const limit = parseInt(req.query.limit, 10);
	if (Number.isNaN(limit)) {
		return res.status(400).end();
	}
	res.json(users.slice(0, limit));
};

const show = (req, res) => {
	const id = parseInt(req.params.id, 10);
	if (Number.isNaN(id)) return res.status(400).end();
	const data = users.filter(user => user.id === id)[0];
	if (!data) return res.status(404).end();
	res.json(data);
};

const destroy = (req, res) => {
	const id = parseInt(req.params.id, 10);
	if (Number.isNaN(id)) return res.status(400).end();
	users = users.filter(user => user.id !== id);
	res.status(204).end();
};

const create = (req, res) => {
	const name = req.body.name;

	if (!name) return res.status(400).end();

	const isConfilct = users.filter(user => user.name === name).length;
	if (isConfilct) return res.status(409).end();

	const id = Date.now();
	const user = { id, name };
	users.push(user);
	res.status(201).json(user);
};

const update = (req, res) => {
	const id = parseInt(req.params.id, 10);
	if (Number.isNaN(id)) return res.status(400).end();

	const name = req.body.name;
	if (!name) return res.status(400).end();

	// 이름 중복 체크
	const isConflict = users.filter(user => user.name === name).length;
	if (isConflict) return res.status(409).end();

	// 기존 유저가 존재하는지 체크
	const user = users.filter(user => user.id === id)[0];
	if (!user) return res.status(404).end();

	user.name = name;

	res.json(user);
};

module.exports = {
	index,
	show,
	destroy,
	create,
	update
};
