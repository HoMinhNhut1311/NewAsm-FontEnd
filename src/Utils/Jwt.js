export function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
export function decodeFromBase64(base64) {
    try {
        return window.atob(base64);
    } catch (e) {
        console.error('Error decoding Base64:', e);
        return null;
    }
}
export function encodeToBase64(input) {
    return window.btoa(input);
}
