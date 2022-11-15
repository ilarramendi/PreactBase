import imagemin from 'imagemin';
import webp from 'imagemin-webp';
import chalk from 'chalk';

imagemin( ['./assets/images/*.jpg'], {
	destination: 'public/images',
	plugins: [
		webp({
			quality: 80,
			method: 6
		})
	]
} ).then(r => {
		r.forEach(image => console.log(
			chalk.green('Successfully converted image:'),
			image.sourcePath.split(/[\/\\]/).pop(),
			chalk.green('to WEBP.')
		))
})
