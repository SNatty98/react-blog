import "./sidebar.css";
import flowers from "./flowerGirl.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCat();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="laptopImg" src={flowers} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          veritatis, modi nihil ipsa et sunt eos magni culpa vitae repellat ea.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((item) => (
            <a className="link" href={`/?cat=${item.name}`}>
              <li className="sideBarListItem">{item.name}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
