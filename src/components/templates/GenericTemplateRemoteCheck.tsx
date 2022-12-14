import React from "react";
import clsx from "clsx";
import { createMuiTheme } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import HomeWork from "@material-ui/icons/HomeWork";
import Search from "@material-ui/icons/Search";
import SpeakerNotesOutlined from "@material-ui/icons/SpeakerNotesOutlined";
import TransferWithinAStation from "@material-ui/icons/TransferWithinAStation";
import Description from "@material-ui/icons/Description";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CameraFront from '@material-ui/icons/CameraFront';


const drawerWidth = 240;

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Noto Sans JP",
      "Lato",
      "游ゴシック Medium",
      "游ゴシック体",
      "Yu Gothic Medium",
      "YuGothic",
      "ヒラギノ角ゴ ProN",
      "Hiragino Kaku Gothic ProN",
      "メイリオ",
      "Meiryo",
      "ＭＳ Ｐゴシック",
      "MS PGothic",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: { main: colors.blue[800] }, // テーマの色
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24,
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 4,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
    pageTitle: {
      marginBottom: theme.spacing(1),
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
  })
);

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        NEC
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export interface GenericTemplateProps {
  children: React.ReactNode;
  title: string;
}

const GenericTemplate: React.FC<GenericTemplateProps> = ({
  children,
  title,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Smart Construction Services Portal
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/test1" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="現場一覧" />
              </ListItem>
            </Link>
            <Link to="/constInfo" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeWork />
                </ListItemIcon>
                <ListItemText primary="現場情報" />
              </ListItem>
            </Link>
            <Link to="/RemoteCheckInsert" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Search />
                </ListItemIcon>
                <ListItemText primary="巡視登録" />
              </ListItem>
            </Link>
            <Link to="/RemoteCheckStart" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <CameraFront />
                </ListItemIcon>
                <ListItemText primary="遠隔巡視開始" />
              </ListItem>
            </Link>
            <Link to="/infoDeliver" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <SpeakerNotesOutlined />
                </ListItemIcon>
                <ListItemText primary="伝達登録" />
              </ListItem>
            </Link>
            <Link to="/entStaff" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <TransferWithinAStation />
                </ListItemIcon>
                <ListItemText primary="入場者一覧" />
              </ListItem>
            </Link>
            <Link to="/startReport" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Description />
                </ListItemIcon>
                <ListItemText primary="作業開始報告" />
              </ListItem>
            </Link>
            <Link to="/exitStaff" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <TransferWithinAStation />
                </ListItemIcon>
                <ListItemText primary="退場者一覧" />
              </ListItem>
            </Link>
            <Link to="/endReport" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Description />
                </ListItemIcon>
                <ListItemText primary="作業終了報告" />
              </ListItem>
            </Link>
            <Link to="/test1" className={classes.link}>
              <ListItem button>
                <ListItemText primary="" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              noWrap
              className={classes.pageTitle}
            >
              {title}
            </Typography>
            {children}
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default GenericTemplate;