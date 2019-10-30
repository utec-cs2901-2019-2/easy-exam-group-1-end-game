import { authService } from './AuthService';

export function authHeader() {
    const user = authService.currentUserValue;
    if(user && user.token) {
        return { Authorization : `Bearer ${user.token}` };
    } else {
        return {};
    }
}