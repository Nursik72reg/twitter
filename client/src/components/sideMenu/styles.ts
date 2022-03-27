import { makeStyles } from "@material-ui/core";

export const sideMenuStyles = makeStyles((theme) => ({
  sideMenuList: {},
  sideMenuListItem: {
    cursor: "pointer",
    "& div": {
      display: "flex",
      alignItems: "center",
    },
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29,161,242,0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: "20px",
    marginLeft: "15px",
  },
}));
