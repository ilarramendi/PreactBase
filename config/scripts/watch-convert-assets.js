import imagemin from 'imagemin';
import webp from 'imagemin-webp';
import {watch} from 'chokidar';
import chalk from 'chalk';

// Watch for changes in image files and generate webp
watch(
	'./assets/images/*.jpg',
	{
		ignoreInitial: false
	}
).on('all', function(evt, name) {
		imagemin( [name], {
			destination: 'public/images',
			plugins: [
				webp({
					quality: 60
				})
			]
		} ).then(r => console.log(
			chalk.green('Successfully converted image:'),
			r[0].sourcePath.split(/[\/\\]/).pop(),
			chalk.green('to WEBP.'))
		)
});
