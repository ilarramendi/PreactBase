import fs from 'node:fs';
import chalk from 'chalk';

export default (cssFileName, json) => {
	if (json) {
		let content = 'export const styles: {';
		for (const c of Object.keys(json)) content += `\n\t${c}: string`;
		content += '\n}';

		console.log(chalk.green('Successfuly generated types for:', cssFileName));
		fs.writeFileSync(cssFileName + '.d.ts', content);
	} else console.log(chalk.red('Error generating types for:', cssFileName));
};
