import React, { FC, useState } from "react";
import {
  Button,
  DialogActions,
  FormControl,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Modal from "../../components/modal/Modal";

const useStyles = makeStyles((theme) => ({
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

const SignIn: FC = () => {
  const classes = useStyles();

  const [visibleModal, setVisibleModal] = useState<"signIn" | "signUp">();
  const handleClickOpenSignInModal = () => {
    setVisibleModal("signIn");
  };
  const handleClickCloseSignInModal = () => {
    setVisibleModal(undefined);
  };

  const handleClickOpenSignUpModal = () => {
    setVisibleModal("signUp");
  };
  const handleClickCloseSignUpModal = () => {
    setVisibleModal(undefined);
  };

  const test = ["1", 2, 3, 4];

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li>
            <Typography variant="h6">
              <SearchIcon />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleOutlineIcon /> Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography className={classes.loginSideTitle} variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography className={classes.loginSideDescription}>
            Присоединяйтесь к Твиттеру прямо сейчас
          </Typography>
          <Button
            onClick={handleClickOpenSignUpModal}
            className={classes.loginSideBtn}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickOpenSignInModal}
            className={classes.loginSideBtn}
            variant="outlined"
            fullWidth
          >
            Войти
          </Button>
        </div>
      </section>
      <Modal
        visible={visibleModal === "signIn"}
        title="Войти в twitter"
        onClose={handleClickCloseSignInModal}
      >
        <FormControl>
          <TextField
            className={classes.loginSideField}
            autoFocus
            type="email"
            id="email"
            label="E-Mail"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            className={classes.loginSideField}
            autoFocus
            type="password"
            id="password"
            label="Пароль"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </FormControl>
        <DialogActions>
          <Button onClick={handleClickCloseSignInModal} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClickCloseSignInModal} color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Modal>

      <Modal
        visible={visibleModal === "signUp"}
        title="Создайте учетную запись"
        onClose={handleClickCloseSignInModal}
      >
        <FormControl>
          <TextField
            className={classes.loginSideField}
            autoFocus
            id="name"
            label="Имя"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            className={classes.loginSideField}
            autoFocus
            type="email"
            id="email"
            label="E-Mail"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            className={classes.loginSideField}
            autoFocus
            type="password"
            id="password"
            label="Пароль"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <DialogActions>
          <Button onClick={handleClickCloseSignInModal} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClickCloseSignInModal} color="primary">
            Далее
          </Button>
        </DialogActions>
      </Modal>
    </div>
  );
};

export default SignIn;
