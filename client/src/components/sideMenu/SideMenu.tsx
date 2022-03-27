import React, { FC } from "react";
import { Button, Hidden, IconButton, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CreateIcon from "@material-ui/icons/Create";
import { sideMenuStyles } from "./styles";

const SideMenu: FC = () => {
  const classes = sideMenuStyles();

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton>
            <HomeIcon />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Главная</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Поиск</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}> Уведомления</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Сообщения</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Закладки</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton>
            <ListAltIcon />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Список</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}>Профиль</Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button fullWidth color={"primary"} variant={"contained"}>
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
      </li>
    </ul>
  );
};

export default SideMenu;
