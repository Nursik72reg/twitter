import React, { useState } from "react";
import classNames from "classnames";
import { EmojiEmotions, ImageOutlined } from "@material-ui/icons";
import { Avatar, Button, CircularProgress, IconButton, TextareaAutosize } from "@material-ui/core";

import { addTweetStyleForm } from "./styles";

const MAX_LENGTH = 280;
const AddTweetForm = ({ maxRows = 15 }: { maxRows?: number }) => {
  const classes = addTweetStyleForm();
  const [textArea, setTextArea] = useState<string>("");
  const textLimitPercent = Math.round((textArea.length / 280) * 100);
  const textCount = MAX_LENGTH - textArea.length;

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setTextArea(e.currentTarget.value);
    }
  };

  const handleClickAddTweeter = (): void => {
    setTextArea("");
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar alt={"Аватарка пользователя"} src={"asdads"} className={classes.tweetAvatar} />
        <TextareaAutosize
          value={textArea}
          onChange={handleChangeTextArea}
          className={classes.addFormTextArea}
          placeholder="Что происходит"
          maxRows={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color={"primary"}>
            <ImageOutlined style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color={"primary"}>
            <EmojiEmotions style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {textArea && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={textArea.length > MAX_LENGTH ? 100 : textLimitPercent}
                  style={textArea.length > MAX_LENGTH ? { color: "red" } : undefined}
                />
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                  style={{ color: "rgba(0,0,0,0.1)" }}
                />
              </div>
            </>
          )}

          <Button
            onClick={handleClickAddTweeter}
            disabled={textArea.length > MAX_LENGTH}
            color="primary"
            variant="outlined"
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
