import Cookies from 'js-cookie';

export const getDataFromCookie = (title:string) =>{
    return Cookies.get(title)
}

export const setDataToCookie = (title:string, data:string) =>{
    Cookies.set(title, data)
}

export const removeDataFromCookie = (title:string) =>{
    Cookies.remove(title)
}

export const removeMultipleCookie = (cookies: [string, string, string]) =>{
    Cookies.forEach(cookie => removeDataFromCookie(cookie))
}

export const isAuthenticated = (): boolean =>{
    return !!getDataFromCookie('access_token');
}