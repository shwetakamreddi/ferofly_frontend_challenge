import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Parallax } from "react-parallax"
import './About.css'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    adult: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 100,
    }
}));

const image2 = "https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

export default function About() {
    const classes = useStyles();
    return (
        <div className="about" id="about">
            <div className="about-container">
                {/* <Parallax bgImage={image2} strength={500}> */}
                    <div className="all">
                        <div className="bg">
                            <div className="form" style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="Check In"
                                        type="date"
                                        defaultValue="DD-MM-YY"
                                        className={classes.textField}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="Check Out"
                                        type="date"
                                        defaultValue='DD-MM-YY'
                                        className={classes.textField}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="Adults"
                                        type="number"
                                        defaultValue='1'
                                        className={classes.adult}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="Kids"
                                        type="number"
                                        defaultValue=''
                                        className={classes.adult}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <button class="about-btn">Search</button>
                            </div>
                            <div className="about-info">
                                <h1>ABOUT</h1>
                                <div className="about-subinfo">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Parallax> */}
            </div>
        </div>
    )

}