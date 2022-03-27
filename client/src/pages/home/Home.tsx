import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  TextareaAutosize,
  TextField,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { FC } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SideMenu from "../../components/sideMenu/SideMenu";
import Tweet from "../../components/tweet/Tweet";
import classNames from "classnames";
import { EmojiEmotions, ImageOutlined, PersonAdd } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { grey } from "@material-ui/core/colors";
import Sticky from "react-stickynode";
import AddTweetForm from "../../components/addTweetForm/AddTweetForm";
const useStyles = makeStyles((theme: Theme) => ({
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
  addFormBottomLine: {
    height: 12,
    backgroundColor: "#E6ECF0",
  },
}));

const SearchTextField = withStyles((theme: Theme) => ({
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

const Home: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={"lg"}>
      <Grid container className={classes.wrapper} spacing={3}>
        <Grid sm={1} item md={3}>
          <div className={classes.leftSlide}>
            <TwitterIcon className={classes.mainIcon} color={"primary"} />
            <SideMenu />
          </div>
        </Grid>
        <Grid sm={8} item md={6}>
          <Paper className={classes.tweetsWrapper} variant={"outlined"}>
            <Paper className={classes.tweetsHeader} variant={"outlined"}>
              <Typography variant={"h6"}>Главная</Typography>
            </Paper>
            <Paper>
              <AddTweetForm />
              <div className={classes.addFormBottomLine} />
            </Paper>
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />{" "}
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />{" "}
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
            <Tweet
              text={"test"}
              user={{ fillName: "Констанитов", userName: "Костя", avatarUrl: "asd" }}
            />
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <Sticky enabled={true} top={20}>
            <SearchTextField
              variant={"outlined"}
              placeholder={"Поиск по Твиттеру"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={"start"}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant={"outlined"}>
                <b>Актуальная тема</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary={"Санкт Петербург"}
                    secondary={
                      <Typography component={"span"} variant={"body2"}>
                        Твитов 3 123
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component={"li"} />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant={"outlined"}>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar alt={"Rem sharp"} src={"asd"} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Dock of Shame"}
                    secondary={
                      <Typography component={"span"} variant={"body2"}>
                        @adsasdasd
                      </Typography>
                    }
                  />
                  <Button color={"primary"}>
                    <PersonAdd />
                  </Button>
                </ListItem>
                <Divider component={"li"} />
              </List>
            </Paper>
          </Sticky>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
