var Sftp = require('./lib/sftp');

function upload(opts) {
    var opts = opts || {};
    var options = {
            host: opts.host,
            username: opts.username,
            path: opts.path,
            remoteDir: opts.remoteDir,
            password: opts.password
        },
        sftp = new Sftp(options);
    console.log(`本地目录:${options.path}`);
    console.log(`上传到远程目录:${options.remoteDir}`);
    var startTime = null, endTime = null, usedTime = null;
    sftp.on('error', function(err) {
        throw err;
    }).on('connect', function() {
        startTime = new Date();
    }).on('uploading', function(pgs) {
        console.log('Uploading', pgs.file);
        console.log(`第${pgs.index}个，共${pgs.total}个文件,${pgs.percent}% completed`);
    }).on('completed', function() {
        endTime = new Date();
        usedTime = endTime - startTime;
        console.log(`Upload Completed, ${usedTime / 1000}m used.`);
    }).upload();
}

module.exports = {
    upload: upload
};
