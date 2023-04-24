import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Outlet, 
  useRoutes,
  useNavigate
} from "react-router-dom";
import { 
  ApplyButton,
  H1, RandDiv, ScrollToTopButton
} from './HomeStyles';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>sdsdsdsds</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ScrollToTopButton isVisible={isVisible} onClick={handleScrollToTopClick}>
        Scroll to Top
      </ScrollToTopButton>
      <ApplyButton>
        Apply
      </ApplyButton>
    </div>
  )
}

export default Home;
