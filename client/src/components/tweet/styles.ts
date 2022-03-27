import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const tweetStyles = makeStyles((theme) => ({
  tweetUserName: {
    color: grey[500],
  },
  tweetAvatar: {
    border: "none",
    marginRight: "15px",
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
  },
  tweetFooter: {
    display: "flex",
    left: "-13px",
    justifyContent: "space-between",
    maxWidth: "450px",
  },
  tweet: {
    display: "flex",
    cursor: "pointer",
    borderTop: "none",
    wordBreak: "break-word",
    padding: 10,
    "&:hover": {
      backgroundColor: "rgba(245, 248,250)",
    },
  },
  tweetInformation: {
    width: "100%",
  },
}));
