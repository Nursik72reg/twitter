import React, { FC, useState } from "react";
import { Button, DialogActions, FormControl, TextField, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Modal from "../../components/modal/Modal";
import { signInStyles } from "./styles";

const SignIn: FC = () => {
  const classes = signInStyles();

  const [visibleModal, setVisibleModal] = useState<"signIn" | "signUp">();
  const handleClickOpenSignInModal = () => {
    setVisibleModal("signIn");
  };
  const handleClickCloseInModal = () => {
    setVisibleModal(undefined);
  };

  const handleClickOpenSignUpModal = () => {
    setVisibleModal("signUp");
  };

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
        onClose={handleClickCloseInModal}
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
          <Button onClick={handleClickCloseInModal} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClickCloseInModal} color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Modal>

      <Modal
        visible={visibleModal === "signUp"}
        title="Создайте учетную запись"
        onClose={handleClickCloseInModal}
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
          <Button onClick={handleClickCloseInModal} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClickCloseInModal} color="primary">
            Далее
          </Button>
        </DialogActions>
      </Modal>
    </div>
  );
};

export default SignIn;
