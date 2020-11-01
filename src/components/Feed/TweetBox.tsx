import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

interface ITweetBox {
  imageUrl: string;
}
const TweetBox: React.FunctionComponent<ITweetBox> = ({ imageUrl }) => {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src={imageUrl} />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
