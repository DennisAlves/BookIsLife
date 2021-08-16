import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import styled from "styled-components";
import {TextField} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import moment from "moment";
import {setCliente} from "../../../Actions/index"
import FadeIn from "react-fade-in";


const Wrapper = styled.div`

`
const EditFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

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

export default function DadosCliente(props) {
    moment.locale('pt-br');
    const classes = useStyles();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        id: props.id,
        nome: "",
        email: "",
        dtNascimento: "",
        genero: "",
        disabled: true
    })
    let copyClientes = useSelector(state => state.cliente.clientes)

    if (!state.nome) {
        copyClientes.forEach(cliente => {
            if (cliente.id === state.id) {
                setState({
                    ...state,
                    nome: cliente.nome,
                    email: cliente.email,
                    dtNascimento: cliente.dtNascimento,
                    genero: cliente.genero.name,
                });
            }
        })
    }


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

    function handleEdit() {
        setState({
            ...state,
            id: props.id,
            nome: props.nome,
            email: props.email,
            dtNascimento: props.dtNascimento,
            genero: props.genero,
            disabled: false
        });
    }

    function saveUpdate() {
        console.log(state.id)
        copyClientes.forEach(cliente => {
            if (cliente.id === state.id) {
                cliente.nome = state.nome
                cliente.email = state.email
                cliente.dtNascimento = state.dtNascimento
                cliente.genero.name = state.genero
            }
        })
        dispatch(setCliente(copyClientes))
        setState({
            ...state,
            disabled: true
        })
    }

    const tipoGeneroList = ["Masculino", "Feminino", "Não declarado"]

    return (
        <FadeIn>
            <Wrapper>
                <Card hidden={!state.disabled} className={classes.root} style={{margin: 4}}>
                    <CardContent>
                        <Typography className={classes.title} color="textPrimary" gutterBottom>
                            Dados Do Cliente
                        </Typography>
                        <Breadcrumbs separator={""}>
                            <Typography variant="body2" color="textPrimary" component="div" align="left">
                                Nome:
                            </Typography>
                            <Typography variant="body2" color="inherit" component="div" align="left">
                                {state.nome}
                            </Typography>
                        </Breadcrumbs>

                        <Breadcrumbs separator={""}>
                            <Typography variant="body2" color="textPrimary" component="div" align="left">
                                Email:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div" align="left">
                                {state.email}
                            </Typography>
                        </Breadcrumbs>

                        <Breadcrumbs separator={""}>
                            <Typography variant="body2" color="textPrimary" component="div" align="left">
                                Data De Nascimento:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div" align="left">
                                {state.dtNascimento}
                            </Typography>
                        </Breadcrumbs>

                        <Breadcrumbs separator={""}>
                            <Typography variant="body2" color="textPrimary" component="div" align="left">
                                Genero:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div" align="left">
                                {state.genero}
                            </Typography>
                        </Breadcrumbs>

                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button onClick={handleEdit} size="small" variant="outlined" color="secondary"
                                fullWidth={true}>Editar</Button>
                    </CardActions>
                </Card>
                <Card hidden={state.disabled} className={classes.root} style={{margin: 4}}>
                    <CardContent>
                        <EditFieldsWrapper>
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
                        </EditFieldsWrapper>
                        <CardActions style={{justifyContent: 'center', marginTop: 20}}>
                            <Button onClick={saveUpdate} size="small" variant="outlined" color="secondary"
                                    fullWidth={true}>Editar</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Wrapper>
        </FadeIn>
    );
}
