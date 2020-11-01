//@ts-nocheck
import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import Post from "./Post";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { IProfile } from "../../App";

interface IWidgets {
  onSubmit: any;
  profiles?: IProfile[];
}

const Widgets: React.FunctionComponent<IWidgets> = ({
  onSubmit,
  profiles = [],
}) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const onChange = (event: React.MouseEvent<HTMLElement>) => {
    setInputValue(event.target.value);
  };

  const post = (profiles) =>
    profiles.map(
      (
        {
          name,
          description,
          location,
          screen_name,
          profile_image_url,
          url,
          active,
          selectProfile,
          index,
        },
        i
      ) => {
        return (
          <Post
            name={name}
            description={description}
            location={location}
            profile_image_url={profile_image_url}
            screen_name={screen_name}
            url={url}
            active={active}
            selectProfile={selectProfile}
            index={index}
            key={i}
          />
        );
      }
    );

  return (
    <div className="widgets">
      <Paper
        component="form"
        className="widgets__input"
        onSubmit={(e) => onSubmit(e, inputValue)}
      >
        <IconButton
          type="submit"
          aria-label="search"
          className="widgets__searchIcon"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search Twitter"
          type="text"
          value={inputValue}
          onChange={onChange}
        />
      </Paper>
      {profiles.length > 0 && post(profiles)}
    </div>
  );
};

export default Widgets;
