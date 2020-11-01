import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import { IProfile } from "../../App";

const Post: React.FunctionComponent<IProfile> = (profile) => {
  const {
    name,
    screen_name,
    location,
    description,
    profile_image_url,
    selectProfile = () => {},
  } = profile;

  return (
    <div className="post" onClick={() => selectProfile(profile)}>
      <div className="post__avatar">
        <Avatar src={profile_image_url} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {name}
              <span className="post__headerSpecial"> @{screen_name}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{description}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
