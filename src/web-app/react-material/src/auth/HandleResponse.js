import { authService } from './AuthService'

export function handleResponse(response) {
    return response.text().then( text => {
        const data = text && JSON.parse(text);
        if(!response.ok) {
            if([401,403].indexOf(response.status) != -1) {
                authService.logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        return data;
    });
}