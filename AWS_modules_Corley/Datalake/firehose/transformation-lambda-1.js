exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const output = event.records.map((record) => {
        return {
            recordId: record.recordId,
            result: 'Ok',
            data: record.data,
        };
    })
    return { records: output }
};