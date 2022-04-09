import { makeStyles } from "@material-ui/core";

export const addTweetStyleForm = makeStyles((theme) => ({
  addFormBody: {
    display: "flex",
    width: "100%",
  },
  addFormBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextArea: {
    width: "100%",
    border: 0,
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
  },
  tweetAvatar: {
    marginRight: "15px",
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
  },
  tweetFooter: {
    display: "flex",
    position: "relative",
    left: "-13px",
    justifyContent: "space-between",
    maxWidth: "450px",
  },

  addFormCircleProgress: {
    position: "relative",
    width: 20,
    height: 20,
    margin: "0px 10px",
    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
  addFormBottomRight: {
    display: "flex",
    alignItems: "center",
  },
}));
