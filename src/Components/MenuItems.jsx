import "./MenuItems.scss";
import boxes from "../assets/layout-grid.png";
import persons from "../assets/users.png";
import star from "../assets/star.png";
import playbtn from "../assets/Vector.png";
import gallary from "../assets/photo.png";
import toolbox from "../assets/Group.png";

const MenuItems = () => {
  const menuitems = [
    { icon: boxes, title: "Timeline" },
    { icon: persons, title: "Friends" },
    { icon: star, title: "Groups" },
    { icon: playbtn, title: "Videos" },
    { icon: gallary, title: "Photos" },
    { icon: toolbox, title: "Events", value: 10 },
  ];

  return (
    <div className="menuitems2">
      {menuitems &&
        menuitems.map((item, index) => {
          return (
            <div className="MENuitem" key={index}>
              <div className="menuIcons">
                <img src={item.icon} alt={item.title} />
                {item.title}
              </div>

              <div className="valueofMenu">
                {item.value ? (
                  <>
                    {item.value && (
                      <span
                        style={{
                          color: "#f8f8f8",
                          backgroundColor: "#ED4F9D",
                          borderRadius: "15px",
                          padding: "3px 5px",
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {item.value && <span className="value">{item.value}</span>}
                  </>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuItems;
