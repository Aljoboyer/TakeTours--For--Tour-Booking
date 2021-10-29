import React, { createContext } from 'react';
import useFirebase from '../Firebaseauth/Usefirebase';

export const Appcontext = createContext();

const Authcontext = ({children}) => {
    const Allcontext = useFirebase();
    return (
        <Appcontext.Provider value={Allcontext}>
            {children}
        </Appcontext.Provider>
            
    );
};

export default Authcontext;