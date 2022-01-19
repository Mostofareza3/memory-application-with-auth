import React from 'react';
import Post from './Post/Post';
import useStyle from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import Post2 from './Post/Post2';
import Zoom from 'react-reveal/Zoom';


const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyle();

    // console.log(posts)
    return (


        !posts.length ? <CircularProgress /> : (
            <Zoom>


                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        posts.map((post) => (

                            <Grid item key={post._id} xs={12} sm={6}>
                                <Zoom>

                                    <Post2 post={post} setCurrentId={setCurrentId} />
                                </Zoom>
                            </Grid>
                        ))
                    }

                </Grid>
            </Zoom>

        )


    );
};

export default Posts;