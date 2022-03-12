const getNumber = (text:string,number:string)=>{
    switch(text){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(number === '0'){
                return text
            }else{
                return number+text
            }
            break
        case '.':

            if(number.indexOf('.')>=1){
                return number
            }else{

                return  number+'.'
            }
            break
        case '删除':
            if(number.length ===1){
                return '0'
            }else{
                return number.slice(0,-1)||'0'
            }
            break
        case '清空':
            return '0'
            break
        default:
            return ' '
    }
}
export {getNumber}