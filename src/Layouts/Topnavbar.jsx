import "./Topnavbar.scss";
import Navicon from "../Components/Navicon";
import Messages from "../assets/message-circle.png";
import Bell from "../assets/notification.png";
import Avatar from "../assets/Avatar.png";
import Dropdown from "../assets/chevron-down.png";
import Searcher from "../assets/search.png";

const Topnavbar = () => {
  return (
    <div className="top-nav">
      <div className="search-bar">
        <Navicon url={Searcher} />
        <input className="input" type="text" placeholder="search" />
      </div>
      <div className="icons-content">
        <Navicon url={Messages} />
        <Navicon url={Bell} />
        <Navicon url={Avatar} />
        <Navicon url={Dropdown} />
      </div>
    </div>
  );
};

export default Topnavbar;
