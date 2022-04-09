import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { FC, useEffect } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SideMenu from "../../components/sideMenu/SideMenu";
import Tweet from "../../components/tweet/Tweet";
import { PersonAdd } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import Sticky from "react-stickynode";
import AddTweetForm from "../../components/addTweetForm/AddTweetForm";
import { homePageStyles } from "./styles";
import { SearchTextField } from "../../components/searchTextField/SearchTextField";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../lib/store/tweets/actions";
import { selectIsTweetsLoading, selectTweetsItems } from "../../lib/store/tweets/selectors";
import { CircularProgress } from "@material-ui/core";

const Home: FC = () => {
  const classes = homePageStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

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
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <div className={classes.addForm}>
                <AddTweetForm />
              </div>
              <div className={classes.addFormBottomLine} />
            </Paper>
            {isLoading ? (
              <CircularProgress />
            ) : (
              tweets.map((tweet) => <Tweet key={tweet._id} text={tweet.text} user={tweet.user} />)
            )}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <Sticky enabled={true} top={20}>
            <SearchTextField
              variant="outlined"
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
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальная тема</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary={"Санкт Петербург"}
                    secondary={
                      <Typography component={"span"} variant="body2">
                        Твитов 3 123
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component={"li"} />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
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
                      <Typography component={"span"} variant="body2">
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
