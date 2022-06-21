const fs = require('fs')

module.exports = (cssFileName, json) => {
	if (json) {
		var content = 'export const styles: {'
		for (const c of Object.keys(json)) content += `\n\t${c}: string`
		content += '\n}'
		
		console.log('\033[1;32mSuccessfuly generated types for: ' + cssFileName + '\033[0m')
		fs.writeFileSync(cssFileName + '.d.ts', content)
	} else {
		nsole.log('\033[1;31mError generating types for: ' + cssFileName+ '\033[0m')
	}
}
