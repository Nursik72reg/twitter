import React, { FC } from "react";
import { Avatar, IconButton, Paper, Typography } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import RepeatIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import { tweetStyles } from "./styles";

interface TweetProps {
  text: string;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}

const Tweet: FC<TweetProps> = ({ text, user }: TweetProps) => {
  const classes = tweetStyles();
  return (
    <Paper className={classes.tweet} variant="outlined">
      <Avatar
        className={classes.tweetAvatar}
        alt={`Аватарка пользователя ${user.fullName}`}
        src={user.avatarUrl}
      />
      <div className={classes.tweetInformation}>
        <Typography>
          <b>{user.fullName}</b>
          <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
          <span className={classes.tweetUserName}>.</span>&nbsp;
          <span className={classes.tweetUserName}>3 ч</span>
        </Typography>
        <Typography variant={"body1"} gutterBottom>
          {text}
        </Typography>
        <div className={classes.tweetFooter}>
          <div>
            <IconButton>
              <CommentIcon style={{ fontSize: "20px" }} />
              <span style={{ fontSize: "14px", paddingLeft: "8px" }}>1</span>
            </IconButton>
          </div>
          <div>
            <IconButton>
              <RepeatIcon style={{ fontSize: "20px" }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <LikeIcon style={{ fontSize: "20px" }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ShareIcon style={{ fontSize: "20px" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Tweet;
