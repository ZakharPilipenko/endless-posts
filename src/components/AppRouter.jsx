import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    return (
        
            isAuth 
            ?  <Routes>
                    {privateRoutes.map( route => 
                        <Route 
                            element={route.element} 
                            path={route.path} 
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                </Routes>

            :   <Routes>
                    {publicRoutes.map( route => 
                        <Route 
                            element={route.element} 
                            path={route.path} 
                            exact={route.exact}
                            key={route.path}       
                        />
                    )}
                    <Route path="/*" element={<Navigate to="/login" replace />} />
                </Routes>
    );
};

export default AppRouter;