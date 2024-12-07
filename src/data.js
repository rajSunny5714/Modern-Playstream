export const API_KEY = 'AIzaSyB_q5IOc7UCn6fhSXbQyyp2v1nOe4tn21Q'

export const value_converter = (value) => {
    if(value>=1000000) {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}