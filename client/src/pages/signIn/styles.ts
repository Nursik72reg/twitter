import { makeStyles } from "@material-ui/core";

export const signInStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    height: "calc(100vh - 84px)",
  },
  blueSide: {
    position: "relative",
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71C9F8",
    width: 380,
    overflow: "hidden",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "50%",
    top: "53%",
    transform: "translate(-50%, -50%)",
    width: "350%",
    height: "350%",
  },
  blueSideListInfo: {
    position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& li": {
      marginBottom: 20,
      "&:last-child": {
        marginBottom: 0,
      },
      "& h6": {
        display: "flex",
        alignItems: "center",
        color: "white",
        fontWeight: 700,
        fontSize: 20,
        "& svg": {
          fontSize: 32,
          marginRight: 15,
        },
      },
    },
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTwitterIcon: {
    fontSize: 45,
    marginBottom: 20,
  },
  loginSideTitle: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 45,
  },
  loginSideDescription: {
    fontWeight: 600,
    marginBottom: 20,
  },
  loginSideBtn: {
    marginBottom: 10,
    "&:last-child": {
      marginBottom: 0,
    },
  },
  loginSideField: {
    width: 400,
  },
}));
