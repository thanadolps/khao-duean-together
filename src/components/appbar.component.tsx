import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { DARK_PURPLE, EMBER, PURPLE, YELLOW } from "../constant/color.constant";
import { signIn, useAuth } from "./service/firebase.service";
import { MenuButtonComponent } from "./ui/menu-button.component";

export interface AppbarProps {
  onMenuClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onTitleClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  inverseColor?: boolean;
}

const useStyle = makeStyles<Theme, AppbarProps>((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
    alignItems: "center",
    padding: theme.spacing(0, 1, 0, 0),
  },
  appBar: {
    backgroundColor: (props) => (props.inverseColor ? EMBER : DARK_PURPLE),
  },
  title: {
    color: (props) =>
      props.inverseColor ? PURPLE : theme.palette.primary.contrastText,
  },
}));

export const AppbarComponent: React.FC<AppbarProps> = (props) => {
  const classes = useStyle(props);

  const { onMenuClick, onTitleClick, inverseColor } = props;

  const [user, loading] = useAuth();

  return (
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.container}>
        <MenuButtonComponent
          onClick={onMenuClick}
          inverseColor={inverseColor}
        />

        <Typography align="center">
          <Link to="/" onClick={onTitleClick} className={classes.title}>
            เข้าเดือน Together{" "}
          </Link>
        </Typography>

        {!user && !loading ? (
          <Button onClick={signIn}>Sign In</Button>
        ) : (
          <Avatar src={user?.photoURL} />
        )}
      </div>
    </AppBar>
  );
};
