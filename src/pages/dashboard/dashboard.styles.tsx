import { makeStyles } from '@material-ui/core/styles';

const dashboardStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}));

export default dashboardStyles;
