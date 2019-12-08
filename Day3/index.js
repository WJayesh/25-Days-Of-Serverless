module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body && req.body.commits && req.body.commits.length > 0) {
        var commits = req.body.commits;
        commits.forEach(commit => {
            var commitId = commit.id;
            if (commit.added && commit.added.length > 0) {
                var fileNames = commit.added;
                processChanges(fileNames, 'add', context, commitId);
            }

            if (commit.modified && commit.modified.length > 0) {
                var fileNames = commit.modified;
                processChanges(fileNames, 'mod', context, commitId);
            }
        });
        context.log('pngs included: ' + context.bindings.outputBlob.length);
    }

    context.res = {
        body: "Processed"
    };

};

function processChanges(fileNames, commitType, context, commitId) {

    var inc = 0;
    fileNames.forEach(fileName => {
        if (fileName.endsWith('.png')) {
            context.bindings.outputBlob = fileName;
        }

    });
}