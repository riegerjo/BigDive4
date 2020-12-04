exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const output = event.records.map((record) => {
        // transform from base64 to utf8 string
        let entry = (new Buffer(record.data, 'base64')).toString('utf8');
        entry += "\n"
        // from utf8 string to base64
        const payload = (new Buffer(entry, 'utf8')).toString('base64');
        return {
            recordId: record.recordId,
            result: 'Ok',
            data: payload,
        };
    })
    return { records: output }
};