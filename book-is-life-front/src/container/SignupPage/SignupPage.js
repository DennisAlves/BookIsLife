import React from "react";
import * as SPS from "./SignupPageStyles";
import {Button, TextField} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import {push} from "connected-react-router";
import {routes} from '../../router/index';
import {connect} from "react-redux";
import {createCliente, getCliente, getTipoDocumento, getTipoLogradouro} from "../../Actions";
import * as HPS from "../HomePage/HomePageStyles";
import {useDispatch, useSelector} from "react-redux";
import DadosEndereco from "../Components/DadosCliente/DadosEndereco";
import DadosDocumento from "../Components/DadosCliente/DadosDocumento";
import DadosCartao from "../Components/DadosCliente/DadosCartao";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FadeIn from "react-fade-in";
import {makeStyles} from "@material-ui/core/styles";
import Swal from "sweetalert2";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import InputMask from "react-input-mask";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SignupPage (){
    moment.locale('pt-br');
    const classes = useStyles();
    const dispatch = useDispatch();
    const tipoGeneroList = ["Masculino", "Feminino", "Não declarado"]
    let currentStep = 1
    const [state, setState] = React.useState({
        nome: "",
        email: "",
        dtNascimento: "",
        genero: "",
        codigo: "",
        tipoDocumento: "",
        validade: "",
        disabled: false,
        newDocumentoDisable: true,
        dadosClienteShow: false,
        documentButton: true,
    })
    const [stateDocumentos, setStateDocumentos] = React.useState([])

    function handleChange(event) {
        const value = event.target.value;
        if (event.target.name === "nome") {
            setState({
                ...state,
                [event.target.name]: value.replace(/\d+/g, "")
            });
        } else {
            setState({
                ...state,
                [event.target.name]: value
            });
        }

    }
    function handleEdit(index) {

        setState({
            ...state,
            codigo: stateDocumentos[index].codigo,
            validade: stateDocumentos[index].validade,
            tipoDocumento: stateDocumentos[index].tipoDocumento,
        });
        let newArr = [...stateDocumentos];

        newArr.forEach(document => {
            if (document.disabled === false) {
                document.disabled = true
            }
        })

        newArr[index].disabled = false

        setStateDocumentos(newArr)
    }

    const validateDocumento = () => {
        return state.codigo === "" ||
            state.validade === "" ||
            state.tipoDocumento === "";
    }

    function handleExcluir(index) {
        let copyArr = [...stateDocumentos];

        Swal.fire({
            title: 'Deseja deletar esse Documento?',
            showDenyButton: true,
            confirmButtonText: `Sim`,
            denyButtonText: `Não`,
        }).then((result) => {
            if (result.isConfirmed) {
                let newArray = []
                for (let i = 0; i < copyArr.length; i++) {
                    if (i !== index) {
                        newArray.push(copyArr[i])
                    }
                }
                setStateDocumentos(newArray)
                Swal.fire('Deletado!', '', 'success')
            }
        })
    }

    function handleSave(index) {
        let newArr = [...stateDocumentos]
        newArr[index].codigo = state.codigo
        newArr[index].validade = state.validade
        newArr[index].tipoDocumento = state.tipoDocumento
        newArr[index].disabled = true
        setStateDocumentos(newArr)
    }

    function handleSaveDoc() {
        let newArr = [...stateDocumentos];

        newArr.push({
            codigo: state.codigo,
            validade: state.validade,
            tipoDocumento: state.tipoDocumento,
            disabled: true,
        })

        setStateDocumentos(newArr)

        setState({
            ...state,
            newDocumentoDisable: true
        })
    }

    const handleNewDocCancel = () => {
        setState({
            ...state,
            newDocumentoDisable: true
        })
    }

    function showNewDocumento() {
        setState({
            ...state,
            codigo: "",
            validade: "",
            tipoTelefone: "",
            newDocumentoDisable: false
        })
    }

    const CPF = require('cpf');
    const tipoDocumentoList = ["RG", "CNH", "CPF"]

    function _next () {
        if (currentStep >= 1 && currentStep < 5) {
            currentStep ++
            if(currentStep === 1) {
                setState({
                    ...state,
                    dadosClienteShow: false,
                    newDocumentoDisable: true,
                    documentButton:true,
                })
            }
            if(currentStep === 2) {
                setState({
                    ...state,
                    dadosClienteShow: true,
                    newDocumentoDisable: false,
                })
                if(stateDocumentos.length > 0){
                    setState({
                        ...state,
                        documentButton:false,
                    })
                }
                console.log(currentStep)
            }
        }
        window.scrollTo(0, 0)
    }

    function _prev() {
        console.log(currentStep)
        if(currentStep === 1) {

            setState({
                ...state,
                dadosClienteShow: false,
                newDocumentoDisable: true,
            })
        }
        if(currentStep === 2) {

            setState({
                ...state,
                dadosClienteShow: true,
                newDocumentoDisable: true,
            })
            // if(stateDocumentos.length <=1){
            //     setState({
            //         ...state,
            //         documentButton:false,
            //     })
            // }
        }
        window.scrollTo(0, 0)
    }


    function goToLogin() {
        alert("Dados Salvos!");
        this.props.goToLoginPage()
    }


        return (
            <div>
                <SPS.MainDiv>
                    <Paper elevation={3}>
                        <SPS.CustomHeader>
                            <SPS.HomeLogo><h3>aqui vai ficar o header</h3>
                            </SPS.HomeLogo>
                        </SPS.CustomHeader>
                    </Paper>

                    <SPS.SignupWrapper>
                        <h4>Dados para cadastro</h4>
                        <FadeIn>
                            <SPS.Wrapper>
                                <Card hidden={state.dadosClienteShow} className={classes.root} style={{margin: 4}}>
                                    <CardContent>
                                        <SPS.EditFieldsWrapper>
                                            <TextField style={{minWidth: 270}}
                                                       onChange={handleChange}
                                                       name="nome"
                                                       type="text"
                                                       label="Nome"
                                                       required
                                                       value={state.nome}
                                                       error={!/^([a-zA-Z][\w ]{3,})$/.test(state.nome) && state.nome !== ""}
                                                       helperText={!/^([a-zA-Z][\w ]{3,})$/.test(state.nome) && state.nome !== "" ? "o nome deve ter pelo menos 4 letras." : ""}
                                            />
                                            <TextField style={{minWidth: 270}}
                                                       onChange={handleChange}
                                                       name="email"
                                                       type="email"
                                                       label="Email"
                                                       required
                                                       value={state.email}
                                                // eslint-disable-next-line
                                                       error={!/^([\w-\.])+@([\w-]+\.)+[\w-]{3,4}$/g.test(state.email) && state.email !== ""}
                                                // eslint-disable-next-line
                                                       helperText={!/^([\w-\.])+@([\w-]+\.)+[\w-]{3,4}$/g.test(state.email) && state.email !== "" ? "o nome deve ter pelo menos 4 letras." : ""}
                                            />
                                            <TextField style={{minWidth: 270}}
                                                       onChange={handleChange}
                                                       name="dtNascimento"
                                                       type="date"
                                                       label="Data de Nascimento"
                                                       value={state.dtNascimento}
                                                       required
                                                       error={state.dtNascimento !== "" && !moment().isSameOrAfter(state.dtNascimento)}
                                                       helperText={state.dtNascimento !== "" && !moment().isSameOrAfter(state.dtNascimento) ? "É nescessario uma data de nascimento valida." : ""}
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }}
                                                       InputProps={{inputProps: {max: moment().format('YYYY-MM-DD')}}}
                                            />

                                            <FormControl style={{minWidth: 270}}>
                                                <InputLabel>Genero</InputLabel>
                                                <Select
                                                    name="genero"
                                                    label="Genero"
                                                    value={state.genero}
                                                    onChange={handleChange}
                                                >
                                                    {tipoGeneroList.map((item, index) => {
                                                        return (
                                                            <MenuItem key={index} value={item}>
                                                                <div key={index}>{item}</div>
                                                            </MenuItem>
                                                        );
                                                    })}

                                                </Select>
                                            </FormControl>
                                        </SPS.EditFieldsWrapper>
                                    </CardContent>
                                </Card>
                                <SPS.WrapperCards>
                                    {!state.newDocumentoDisable ?
                                        <Card className={classes.root} style={{margin: 4}}>
                                            <CardContent>
                                                <SPS.EditFieldsWrapper>
                                                    <FormControl>
                                                        <InputLabel>Documento</InputLabel>
                                                        <Select
                                                            name="tipoDocumento"
                                                            value={state.tipoDocumento}
                                                            onChange={handleChange}
                                                            error={!state.tipoDocumento && state.tipoDocumento !== ""}
                                                        >
                                                            {tipoDocumentoList && tipoDocumentoList.map((item, index) => {
                                                                return (
                                                                    <MenuItem key={index} value={item}>
                                                                        <div key={index}>{item}</div>
                                                                    </MenuItem>
                                                                );
                                                            })}

                                                        </Select>
                                                    </FormControl>
                                                    {state.tipoDocumento === "CNH" ?
                                                        <SPS.EditFieldsWrapper>
                                                            <TextField
                                                                onChange={handleChange}
                                                                name="codigo"
                                                                type="text"
                                                                label="Código"
                                                                required
                                                                value={state.codigo}
                                                            />
                                                            <TextField
                                                                onChange={handleChange}
                                                                name="validade"
                                                                type="date"
                                                                label="validade"
                                                                value={state.validade}
                                                                required
                                                                error={state.validade !== "" && !moment().isSameOrBefore(state.validade)}
                                                                helperText={state.validade !== "" && !moment().isSameOrBefore(state.validade) ? "É nescessario uma data de validade valida." : ""}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                InputProps={{inputProps: {min: moment().format('YYYY-MM-DD')}}}
                                                            />
                                                        </SPS.EditFieldsWrapper>
                                                        :
                                                        <SPS.EditFieldsWrapper>
                                                            {state.tipoDocumento === "" ?
                                                                <></>
                                                                :
                                                                <SPS.Wrapper>
                                                                    {state.tipoDocumento === "CPF" ?
                                                                        <SPS.EditFieldsWrapper>
                                                                            <InputMask
                                                                                mask={"999.999.999-99"}
                                                                                value={state.numero}
                                                                                onChange={handleChange}
                                                                            >
                                                                                <TextField
                                                                                    name="codigo"
                                                                                    type="text"
                                                                                    label="Código"
                                                                                    required
                                                                                    error={state.codigo.replace(/[-_()]/g, "") !== "" && !CPF.isValid(state.codigo.replace(/[-_()]/g, ""))}
                                                                                    helperText={state.codigo.replace(/[-_()]/g, "") !== "" && !CPF.isValid(state.codigo.replace(/[-_()]/g, "")) ? "É nescessario um CPF valido." : ""}
                                                                                />
                                                                            </InputMask>
                                                                            <TextField
                                                                                onChange={handleChange}
                                                                                name="validade"
                                                                                type="date"
                                                                                label="Data de Emissão"
                                                                                value={state.validade}
                                                                                required
                                                                                error={state.validade !== "" && !moment().isSameOrAfter(state.validade)}
                                                                                helperText={state.validade !== "" && !moment().isSameOrAfter(state.validade) ? "É nescessario uma data de validade valida." : ""}
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                InputProps={{inputProps: {max: moment().format('YYYY-MM-DD')}}}
                                                                            />
                                                                        </SPS.EditFieldsWrapper>
                                                                        :
                                                                        <SPS.EditFieldsWrapper>
                                                                            <TextField
                                                                                onChange={handleChange}
                                                                                name="codigo"
                                                                                type="text"
                                                                                label="Código"
                                                                                required
                                                                                value={state.codigo}
                                                                            />
                                                                            <TextField
                                                                                onChange={handleChange}
                                                                                name="validade"
                                                                                type="date"
                                                                                label="Data de Emissão"
                                                                                value={state.validade}
                                                                                required
                                                                                error={state.validade !== "" && !moment().isSameOrAfter(state.validade)}
                                                                                helperText={state.validade !== "" && !moment().isSameOrAfter(state.validade) ? "É nescessario uma data de validade valida." : ""}
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                InputProps={{inputProps: {max: moment().format('YYYY-MM-DD')}}}
                                                                            />
                                                                        </SPS.EditFieldsWrapper>
                                                                    }
                                                                </SPS.Wrapper>
                                                            }
                                                        </SPS.EditFieldsWrapper>
                                                    }
                                                </SPS.EditFieldsWrapper>
                                            </CardContent>
                                            <CardActions style={{justifyContent: 'center'}}>
                                                <Button
                                                    onClick={() => handleNewDocCancel()}
                                                    size="small"
                                                    variant="outlined"
                                                    color="secondary" fullWidth={true}>Cancelar</Button>
                                                <Button
                                                    disabled={validateDocumento()}
                                                    onClick={() => handleSaveDoc()}
                                                    size="small"
                                                    variant="outlined"
                                                    color="secondary" fullWidth={true}>Salvar</Button>
                                            </CardActions>
                                        </Card>
                                        :
                                        <SPS.WrapperCards hidden={state.newDocumentoDisable}>
                                            {stateDocumentos && stateDocumentos.map((doc, index) => {

                                                return (
                                                    <SPS.Wrapper>
                                                        <Card key={index} hidden={!doc.disabled} className={classes.root}
                                                              style={{margin: 4}}>
                                                            <CardContent>
                                                                <Typography className={classes.title} color="textPrimary" gutterBottom>
                                                                    Documento
                                                                </Typography>
                                                                <Breadcrumbs separator={""}>
                                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                                align="left">
                                                                        Tipo de Documento:
                                                                    </Typography>
                                                                    <Typography variant="body2" color="inherit" component="div"
                                                                                align="left">
                                                                        {doc.tipoDocumento}
                                                                    </Typography>
                                                                </Breadcrumbs>

                                                                <Breadcrumbs separator={""}>
                                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                                align="left">
                                                                        Código:
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                                align="left">
                                                                        {doc.codigo}
                                                                    </Typography>
                                                                </Breadcrumbs>

                                                                <Breadcrumbs separator={""}>
                                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                                align="left">
                                                                        Validade:
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                                align="left">
                                                                        {doc.validade}
                                                                    </Typography>
                                                                </Breadcrumbs>

                                                            </CardContent>
                                                            <CardActions style={{justifyContent: 'center'}}>
                                                                <Button
                                                                    onClick={() => handleEdit(index)}
                                                                    size="small"
                                                                    variant="outlined"
                                                                    color="secondary" fullWidth={true}>Editar</Button>
                                                                <Button
                                                                    onClick={() => handleExcluir(index)}
                                                                    size="small"
                                                                    variant="outlined"
                                                                    color="secondary" fullWidth={true}>Excluir</Button>
                                                            </CardActions>
                                                        </Card>
                                                        <Card key={index + 1} hidden={doc.disabled} className={classes.root}
                                                              style={{margin: 4}}>
                                                            <CardContent>
                                                                <SPS.EditFieldsWrapper>
                                                                    <FormControl>
                                                                        <InputLabel>Documento</InputLabel>
                                                                        <Select
                                                                            name="tipoDocumento"
                                                                            value={state.tipoDocumento}
                                                                            onChange={handleChange}
                                                                            error={!state.tipoDocumento && state.tipoDocumento !== ""}
                                                                        >
                                                                            {tipoDocumentoList && tipoDocumentoList.map((item, index) => {
                                                                                return (
                                                                                    <MenuItem key={index} value={item}>
                                                                                        <div key={index}>{item}</div>
                                                                                    </MenuItem>
                                                                                );
                                                                            })}

                                                                        </Select>
                                                                    </FormControl>
                                                                    {state.tipoDocumento === "CNH" ?
                                                                        <SPS.EditFieldsWrapper>
                                                                            <TextField
                                                                                onChange={handleChange}
                                                                                name="codigo"
                                                                                type="text"
                                                                                label="Código"
                                                                                required
                                                                                value={state.codigo}
                                                                            />
                                                                            <TextField
                                                                                onChange={handleChange}
                                                                                name="validade"
                                                                                type="date"
                                                                                label="validade"
                                                                                value={state.validade}
                                                                                required
                                                                                error={state.validade !== "" && !moment().isSameOrBefore(state.validade)}
                                                                                helperText={state.validade !== "" && !moment().isSameOrBefore(state.validade) ? "É nescessario uma data de validade valida." : ""}
                                                                                InputLabelProps={{
                                                                                    shrink: true,
                                                                                }}
                                                                                InputProps={{inputProps: {min: moment().format('YYYY-MM-DD')}}}
                                                                            />
                                                                        </SPS.EditFieldsWrapper>
                                                                        :
                                                                        <SPS.EditFieldsWrapper>
                                                                            {state.tipoDocumento === "" ?
                                                                                <></>
                                                                                :
                                                                                <SPS.EditFieldsWrapper>
                                                                                    <TextField
                                                                                        onChange={handleChange}
                                                                                        name="codigo"
                                                                                        type="text"
                                                                                        label="Código"
                                                                                        required
                                                                                        value={state.codigo}
                                                                                    />
                                                                                    <TextField
                                                                                        onChange={handleChange}
                                                                                        name="validade"
                                                                                        type="date"
                                                                                        label="Data de Emissão"
                                                                                        value={state.validade}
                                                                                        required
                                                                                        error={state.validade !== "" && !moment().isSameOrAfter(state.validade)}
                                                                                        helperText={state.validade !== "" && !moment().isSameOrAfter(state.validade) ? "É nescessario uma data de validade valida." : ""}
                                                                                        InputLabelProps={{
                                                                                            shrink: true,
                                                                                        }}
                                                                                        InputProps={{inputProps: {max: moment().format('YYYY-MM-DD')}}}
                                                                                    />
                                                                                </SPS.EditFieldsWrapper>
                                                                            }
                                                                        </SPS.EditFieldsWrapper>
                                                                    }
                                                                </SPS.EditFieldsWrapper>
                                                            </CardContent>
                                                            <CardActions style={{justifyContent: 'center'}}>
                                                                <Button
                                                                    onClick={() => handleNewDocCancel()}
                                                                    size="small"
                                                                    variant="outlined"
                                                                    color="secondary" fullWidth={true}>Cancelar</Button>
                                                                <Button
                                                                    disabled={validateDocumento()}
                                                                    onClick={() => handleSave(index)}
                                                                    size="small"
                                                                    variant="outlined"
                                                                    color="secondary" fullWidth={true}>Salvar</Button>
                                                            </CardActions>
                                                        </Card>
                                                    </SPS.Wrapper>
                                                )
                                            })}
                                            {state.documentButton ?
                                                <></>
                                                :
                                                <Button
                                                    onClick={() => showNewDocumento()}
                                                    size="small" variant="outlined" color="primary"
                                                    style={{marginTop: 25,marginLeft: 25, height: 40}}
                                                >Novo Documento</Button>
                                            }
                                        </SPS.WrapperCards>
                                    }

                                </SPS.WrapperCards>
                            </SPS.Wrapper>
                        </FadeIn>
                        <SPS.ButtonWrapper>
                            <Button
                                color="primary"
                                type="button" onClick={()=>{_prev()}}
                                //disabled={this.state.clientDateButtonDisable}
                            >
                                Voltar
                            </Button>
                            <Button
                                color="primary"
                                type="button" onClick={_next}
                                //disabled={this.state.clientDateButtonDisable}
                            >
                                Proximo
                            </Button>
                            <Button
                                color="primary"
                                type="button"
                                //disabled={this.state.clientDateButtonDisable}
                            >
                                Salvar
                            </Button>
                        </SPS.ButtonWrapper>
                    </SPS.SignupWrapper>


                </SPS.MainDiv>
                <Paper elevation={3}>
                    <SPS.Footer>
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
                    </SPS.Footer>
                </Paper>
            </div>
        )
}

const mapStateToProps = (state) => ({
    clientes: state.cliente.clientes,
    tipoDocumento: state.cliente.tipoDocumento,
    tipoLogradouro: state.cliente.tipoLogradouro,
})


function mapDispatchToProps(dispatch) {

    return {
        goToHomePage: () => dispatch(push(routes.HomePage)),
        goToSignupPage: () => dispatch(push(routes.SignupPage)),
        goToLoginPage: () => dispatch(push(routes.LoginPage)),
        getCliente: () => dispatch(getCliente()),
        getTipoDocumento: () => dispatch(getTipoDocumento()),
        getTipoLogradouro: () => dispatch(getTipoLogradouro()),
        createCliente: (clienteData) => dispatch(createCliente(clienteData)),
    }
}

connect(mapStateToProps, mapDispatchToProps)(SignupPage)