module.exports = function (source) {
	const styles = {};
	for (const i of source.matchAll(/\.(MT_[^_]+_([^_]+)_\d+)/g))
		styles[i[2]] = i[1];

	return `${source}\nexport const styles = ${JSON.stringify(styles)}`;
};
