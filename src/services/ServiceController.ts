import {authHeader} from "../services/auth-header";

export async function FetchGet(uRL: any) {
    let token = authHeader();

    const configInitGet : RequestInit = {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    }
    const response = await fetch(uRL, configInitGet);
    return await response.json();
}

export async function FetchPost(uRL: any, datatab: any) {        
    const configInitPost : RequestInit = {
        method: 'POST',
        body: JSON.stringify(datatab),
        headers: {
            'Content-Type': 'application/json',
          }
    };

    const response = await fetch(uRL, configInitPost);
        
    return response;
}

export async function FetchPut(uRL: any, datatab: any) {        
    const configInitPut : RequestInit = {
        method: 'PUT',
        body: JSON.stringify(datatab),
        headers: {
            'Content-Type': 'application/json',
          }
    };

    const response = await fetch(uRL, configInitPut);
        
    return response;
}

export async function FetchDelete(uRL: any) {        
    let token = authHeader();

    const configInitDelete : RequestInit = {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        }
    }
    const response = await fetch(uRL, configInitDelete);
        
    return await response;
}
