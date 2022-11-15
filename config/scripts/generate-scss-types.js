import {watch} from 'chokidar';
import {readFileSync, writeFileSync} from 'fs'
import chalk from 'chalk';

// Watch for changes in scss files and generate types
watch(
	'./src/**/*.scss',
	{
		ignoreInitial: false
	}
).on('all', function(evt, name) {
	let content = 'export default class styles {\n\tstatic [key: string]: string;\n'
	content += Array.from(readFileSync(name).toString().matchAll(/\.(\w+)/g)).reduce((prev, match) => prev + '\tstatic ' + match[1] + ': string;\n', '')
	content += '}\n'
	writeFileSync(name + '.d.ts', content)
	console.log(chalk.green('Successfully generated types for:'), name.split(/[\/\\]/).pop());
});
