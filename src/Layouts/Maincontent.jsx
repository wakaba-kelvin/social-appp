import "./Maincontent.scss";
import MainContentRight from "./MainContentRight";
import MainContentLeft from "./MainContentLeft";

const Maincontent = () => {
  return (
    <div className="maincontent">
      <MainContentLeft />
      <MainContentRight />
    </div>
  );
};

export default Maincontent;
