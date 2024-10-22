import React, { createContext, useContext, useState } from 'react';

// Create Auth Context
export const AuthContext = createContext();

// Auth Provider component
function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Export AuthProvider
export default AuthProvider;
