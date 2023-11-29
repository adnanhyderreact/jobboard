export function logIn(data){
    const serializedObject = JSON.stringify(data);
    localStorage.setItem('loggedInInfo', serializedObject);
    return true;
}

export function getLogIn(){
    const serializedObject = localStorage.getItem('loggedInInfo');
    return JSON.parse(serializedObject);
}