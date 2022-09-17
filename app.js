const fs = require('fs');
const ytdl = require('ytdl-core');

const urls = require('./urls-list');

const downloadMp3 = (url, i) => {
	if (ytdl.validateURL(url)) {
		ytdl(url, { filter: 'audioonly', quality: 'highestaudio' })
			.pipe(fs.createWriteStream(i + '.mp3'))
	} else {
		throw new Error(url + ' is not a valid youtube url.');
	}
}

urls.urls.forEach((url, i) => downloadMp3(url, i));