export const API_Key ='AIzaSyDo9fso4XK2Z2gGCY5hltiW1nQDKeeQt_M';

export const valur_converter =(value)=>{
    if (value>1000000){
        return Math.floor(value/1000000)+" M"
    }
    else if(value>1000){
        return Math.floor(value/1000)+" K"
    }
    else {
        return value
    }
}