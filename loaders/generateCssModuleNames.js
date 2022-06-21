const path = require('path');

function hash(string) {
	let hash = 0;

	for (let x = 0; x < string.length; x++) {
		const ch = string.charCodeAt(x);
		hash = ((hash << 5) - hash) + ch;
		hash &= hash;
	}

	return Math.abs(hash).toString();
}

module.exports = function (name, filename, css) {
	return `RB_${path.basename(filename, '.scss')}_${name}_${hash(css)}`;
};
