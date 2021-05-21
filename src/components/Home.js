import React , {useState  } from "react";
import EditableElement from "../Edit.js/EditableElement";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Picker from 'emoji-picker-react';
import classes from './Classes'
const Home = () =>{
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };    

        return(
            <div>
                <div className="App">
                <div>
                <EditableElement>
                <h1>
                        {chosenEmoji ? (
                            <span>  {chosenEmoji.emoji}</span>
                        ) : (
                            <span>✋ Untitled</span>
                        )}
                        <Picker onEmojiClick={onEmojiClick} shouldCloseOnOverlayClick={true} />
                        </h1>     
                </EditableElement>
                </div>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <div>

                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>Doing</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>Done</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>No Status</Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
        )       
}
export default Home;