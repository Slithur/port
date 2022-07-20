import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { textAlign } from '@mui/system';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1,];

const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                <Link color="inherit" href="https://i.imgur.com/Grfj4u8.png">
                Resume
            </Link>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 2,
                        pb: 1,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Mahamed Aden
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Software Engineer | Web Developer
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant=""><a href="https://github.com/Slithur" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." width={30} />
                            </a></Button>
                            <Button variant=""><a href="https://www.linkedin.com/in/mahamed-aden-bba919239/" target="_blank" rel="noopener noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" className="linked" alt="..." type="button" width={30} />
                            </a></Button>
                        </Stack>
                    </Container>
                </Box>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Projects
                </Typography>
                <Container >
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Card sx={{ width: '20%' }}>
                            <CardMedia
                                component="img"
                                image="https://i.imgur.com/C2IIzgh.jpg?1" />
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Animelist
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button size="small"><a href="https://github.com/Slithur/animelist" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." width={30} />
                                </a></Button>
                                <Button size="small"><a href="https://animelistss.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/heroku-3521485-2944929.png" className="git" alt="..." width={30} />
                                </a></Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ width: '20%' }}>
                            <CardMedia
                                component="img"
                                image="https://i.imgur.com/GsUYIlw.jpg" />
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    WatchList
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button size="small"><a href="https://github.com/Slithur/Watchlist" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." width={30} />
                                </a></Button>
                                <Button size="small"><a href="https://watchlizzzt.herokuapp.com/animes" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/heroku-3521485-2944929.png" className="git" alt="..." width={30} />
                                </a></Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ width: '20%' }}>
                            <CardMedia
                                component="img"
                                image="https://i.imgur.com/ccFR5A7.png" />
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center'}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                   Slirdle
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button size="small"><a href="https://github.com/Slithur/slidle" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." width={30} />
                                </a></Button>
                                <Button size="small"><a href="https://precious-treacle-2af94d.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" className="git" alt="..." width={30} />
                                </a></Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ width: '20%' }}>
                            <CardMedia
                                component="img"
                                image="https://i.imgur.com/B4iwLzg.png" />
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center'}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    BuckT
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button size="small"><a href="https://github.com/daydin14/buckT-frontend" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." width={30} />
                                </a></Button>
                                <Button size="small"><a href="https://buck-it.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" className="git" alt="..." width={30} />
                                </a></Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </Container>



                <Container>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Technologies
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="git" alt="..." width={40} />
                        </a></Button>
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" className="git" alt="..." width={60} />
                        </a></Button>
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png" className="git" alt="..." width={40} />
                        </a></Button>
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" className="git" alt="..." width={30} />
                        </a></Button>
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" className="git" alt="..." width={40} />
                        </a></Button>
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/django-2-282855.png" className="git" alt="..." width={50} />
                        </a></Button>
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://vladmrnv.gallerycdn.vsassets.io/extensions/vladmrnv/expresssnippet/0.2.4/1528939685286/Microsoft.VisualStudio.Services.Icons.Default" className="git" alt="..." width={50} />
                        </a></Button>
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" className="git" alt="..." width={50} />
                        </a></Button>
                        <Button variant=""><a target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" className="git" alt="..." width={60} />
                        </a></Button>
                    </Stack>
                </Container>

            </main>

        </ThemeProvider>
    );
}