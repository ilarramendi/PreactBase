import path from 'node:path';

function hash(string) {
	let hash = 0;

	for (let x = 0; x < string.length; x++) {
		const ch = string.codePointAt(x);
		hash = (hash << 5) - hash + ch;
		hash &= hash;
	}

	return Math.abs(hash).toString();
}

export default function (name, filename, css) {
	return `MT_${path.basename(filename, '.scss')}_${name}_${hash(css)}`;
}
