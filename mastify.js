let maskify = (cc) => {
    return ("################################"+cc.slice(-4)).slice(-cc.length);
 }
 
 console.log(maskify('45sdfgjh3456786'));
 console.log(maskify('1sdfgazsxdcv'));
 console.log(maskify('11111'));