import React, {Component} from "react";
import * as LPS from "./LoginPageStyles";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from '../../router';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import {Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import * as HPS from "../HomePage/HomePageStyles";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }


    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        const {email, password} = this.state;

        return (
            <>
                <LPS.MainDiv>
                    <Paper elevation={3}>
                        <LPS.CustomHeader>
                            <LPS.HomeLogo onClick={this.props.goToHomePage}><h3>aqui vai ficar o header</h3>
                            </LPS.HomeLogo>
                        </LPS.CustomHeader>
                    </Paper>

                    <LPS.LoginWrapper onSubmit={()=>{console.log(this.state.email,
                        this.state.password)}}>
                        <h4>Já criou uma conta? Entre aqui!</h4>

                        <TextField
                            onChange={this.handleFieldChange}
                            name="email"
                            type="email"
                            label="E-mail"
                            required
                            value={email}
                        />

                        <TextField
                            onChange={this.handleFieldChange}
                            name="password"
                            type="password"
                            label="Password"
                            required
                            value={password}
                        />

                        <Button variant="contained" type="submit">Login</Button>

                        <LPS.SignupWrapper>
                            <Typography>
                                Não tem uma conta? Entre
                            </Typography>
                            <Typography style={{marginLeft:4}}>
                                <Link onClick={this.props.goToSignupPage}>
                                    Aqui
                                </Link>
                            </Typography>
                        </LPS.SignupWrapper>

                    </LPS.LoginWrapper>

                </LPS.MainDiv>
                <Paper elevation={3}>
                    <LPS.Footer>
                        <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes
                            sociais:</h3>
                        <HPS.FooterLink href="https://www.facebook.com/" target="_blank"> <HPS.FooterLogo
                            src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1"/></HPS.FooterLink>
                        <HPS.FooterLink href="https://www.twitter.com/" target="_blank"> <HPS.FooterLogo
                            src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"/>
                        </HPS.FooterLink>
                        <HPS.FooterLink href="https://www.instagram.com/" target="_blank"> <HPS.FooterLogo
                            src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"/>
                        </HPS.FooterLink>
                        <HPS.FooterLink href="https://www.discord.com/" target="_blank"> <HPS.FooterLogo
                            src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png"/>
                        </HPS.FooterLink>
                        <HPS.FooterLink href="https://www.linkedin.com/" target="_blank"> <HPS.FooterLogo
                            src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png"/>
                        </HPS.FooterLink>
                    </LPS.Footer>
                </Paper>
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToHomePage: () => dispatch(push(routes.HomePage)),
        goToSignupPage: () => dispatch(push(routes.SignupPage)),
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)
