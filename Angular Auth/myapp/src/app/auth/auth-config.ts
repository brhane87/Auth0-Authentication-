export interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}
export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'iHEbUE0uzLyEVf0ua23Cu56E3qfwLo4r',
    CLIENT_DOMAIN: 'brhane.auth0.com', 
    AUDIENCE: 'http://localhost:3001',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: 'openid profile email'
  };
