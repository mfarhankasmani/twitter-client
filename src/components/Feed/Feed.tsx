//@ts-nocheck
import React from "react";
import "./Feed.css";
//@ts-ignore
import { TwitterTimelineEmbed } from "react-twitter-embed";

import TweetBox from "./TweetBox";
import { IProfile } from "../../App";

interface IFeed {
  profile?: IProfile;
}
const Feed: React.FunctionComponent<IFeed> = ({ profile }) => {
  return (
    <div className="feed" key={profile ? profile.name : ""}>
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {profile && (
        <>
          <TweetBox imageUrl={profile.profile_image_url} />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={profile.screen_name}
            options={{ height: 1000 }}
            noScrollbar
          />
        </>
      )}
    </div>
  );
};

export default Feed;
