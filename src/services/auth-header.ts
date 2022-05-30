export function authHeader() {
    let storage = sessionStorage.getItem('user')

    let user = storage != null ? JSON.parse(storage) : null;

    if (user && user.token) {
        return `Bearer ${user.token}`;
    } else {
        return 'not authorized user';
    }
}