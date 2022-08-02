import "./settings.css";
import rocks from "./rocksAndThat.jpg"
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={rocks} alt="" />
            <label htmlFor="fileInput">
            <i class="settingsPPIcon fa-regular fa-pen-to-square"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label >Username</label>
          <input type="text" placeholder="Sean"/>
          <label >Email</label>
          <input type="email" placeholder="Sean@gmail.com"/>
          <label >Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
