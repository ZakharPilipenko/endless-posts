import React, { useEffect, useMemo, useRef, useState } from 'react'; 
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';
import { BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);


  useEffect( () => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>.
    </AuthContext.Provider>
  )
}

export default App;
