import { Box, Typography, makeStyles } from '@material-ui/core';
import img1 from '../Asset/image/about.jpg';
import img2 from '../Asset/image/event-custom.jpg';
const useStyles = makeStyles({
    component: {
        margin: 50,
       
    },
    image: {
        width: '50%',
        height: '50%'
    }
})
const Home=()=>{
    const classes = useStyles();
    return(
        <Box>
            <Typography variant="h3" style={{marginBottom:50}}> React Node Crud Home Page</Typography>
            <Box style={{display: 'flex'}}>
                <img src={img1} className={classes.image} />
                <img src={img2} className={classes.image} />
            </Box>
        </Box>
        
    )
}

export default Home