import { makeStyles, Theme } from "@material-ui/core";

export const homePageStyles = makeStyles((theme: Theme) => ({
  leftSlide: {
    position: "sticky",
    top: "0px",
    paddingTop: "20px",
  },
  mainIcon: {
    width: "32px",
    height: "32px",
    marginLeft: "12px",
  },
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0px",
  },
  logoIcon: {
    fontSize: "36px",
  },
  sideMenuList: {
    position: "sticky",
    top: "0px",
    maxWidth: "230px",
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: "-5px",
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    margin: theme.spacing(2),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },

  rightSideBlock: {
    borderRadius: "15px",
    backgroundColor: "#F5F8FA",
    marginTop: 20,
    "& .MuiList-root": {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: "transparent",
    padding: "13px 18px",
    "& b": {
      fontWeight: 800,
      fontSize: 20,
    },
  },
  rightSideBlockItem: {
    cursor: "pointer",
    "& .MuiTypography-body1": {
      fontWeight: 700,
    },
    "& .MuiListItemAvatar-root": {
      minWidth: 50,
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
    "&:hover": {
      backgroundColor: "#edf3f6",
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: "#E6ECF0",
  },
}));
