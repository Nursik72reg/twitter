import { TextField, Theme, withStyles } from "@material-ui/core";

export const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      backgroundColor: "#E6ECF0",
      paddingLeft: "15px",

      "& .Mui-focused": {
        backgroundColor: "#FFFF",
        "& fieldset": {
          borderWidth: "1px",
          borderColor: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },

      "&:hover": {
        "& fieldset": {
          borderColor: "transparent",
        },
      },

      "& fieldset": {
        borderColor: "transparent",
        borderWidth: 1,
      },

      "& .MuiOutlinedInput-input": {
        padding: "12px 14px 14px 5px",
      },
    },
  },
}))(TextField);
