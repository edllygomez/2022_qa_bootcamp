function maskData(info) {
    let data = '';
    if (typeof info == 'number') {
        console.log('Provided data is a number');
        data = info.toString();
        data = data.replace(/\d(?=\d{4})/g, "#");
        return data;
    } else {
        if (typeof info == 'string') {
            console.log('Provided data is a string');
            data = info.replace(/\w(?=\w{4})/g, "#");
            return data;
        }//if
    }//else1
}//maskData
console.log(maskData('MyNameIsYeimy'));
console.log(maskData(1234567890));