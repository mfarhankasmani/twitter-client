import React from "react";
import "./Sidebar.css";
import {
  Twitter,
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import SidebarOption from "./SidebarOption";

const Sidebar: React.FunctionComponent = () => {
  const [activeSection, setActiveSection] = React.useState("Home");

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    const sectionId = (e.target as any).id;
    setActiveSection(sectionId);
  };

  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitterIcon" />
      <SidebarOption
        text="Home"
        Icon={Home}
        active={activeSection === "Home"}
        onClick={handleOnClick}
      />
      <SidebarOption
        text="Explore"
        Icon={Search}
        active={activeSection === "Explore"}
        onClick={handleOnClick}
      />
      <SidebarOption
        text="Notifications"
        Icon={NotificationsNone}
        active={activeSection === "Notifications"}
        onClick={handleOnClick}
      />
      <SidebarOption
        text="Messages"
        Icon={MailOutline}
        active={activeSection === "Messages"}
        onClick={handleOnClick}
      />
      <SidebarOption
        text="Bookmarks"
        Icon={BookmarkBorder}
        active={activeSection === "Bookmarks"}
        onClick={handleOnClick}
      />
      <SidebarOption
        text="Lists"
        Icon={ListAlt}
        active={activeSection === "Lists"}
        onClick={handleOnClick}
      />
      <SidebarOption
        text="Profile"
        Icon={PermIdentity}
        active={activeSection === "Profile"}
        onClick={handleOnClick}
      />
      <SidebarOption
        text="More"
        Icon={MoreHoriz}
        active={activeSection === "More"}
        onClick={handleOnClick}
      />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        tweet
      </Button>
    </div>
  );
};

export default Sidebar;
