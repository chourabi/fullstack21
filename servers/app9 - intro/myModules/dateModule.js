
exports.getDateFromOption = function(option){
    const today = new Date();
    switch (option) {
        case 'y':
            

            return today.getFullYear();
            break;
        case 'm':

            return today.getMonth()+1;
            break;    
    
        default:

            return today.getDate();
            break;
    }
}

