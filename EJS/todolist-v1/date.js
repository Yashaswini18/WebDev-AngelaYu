//module.exports = "hello";
module.exports.getDate = function (){
    
    let today = new Date();
    //var day = "";
    let options = {
        weekday: 'long',
        day: 'numeric',
        month:'long'
    }

    return today.toLocaleString("en-US", options);
}

module.exports.getDay = function (){
    
    let today = new Date();
    //var day = "";
    let options = {
        weekday: 'long'
    }

    return today.toLocaleString("en-US", options);
}