import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ImageIcon from "@material-ui/icons/Image";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import CommentIcon from "@material-ui/icons/Comment";
import EventIcon from "@material-ui/icons/Event";
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  card: {
    boxShadow: '0 0.2rem 0.4rem 0 rgba(0,0,0,0.18)',
    marginBottom:  '2rem',
    float: 'left',
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title="Tell me what you are doing today.."
        />
        <Divider inset />
        <CardContent>
        <IconButton aria-label="Share an image">
            <ImageIcon />
          </IconButton>

          <IconButton aria-label="Share an event">
            <EventIcon />
          </IconButton>

          <IconButton aria-label="Ask a question">
            <ContactSupportIcon />
        </IconButton>
        </CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
