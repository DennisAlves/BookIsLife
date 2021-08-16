import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import FadeIn from "react-fade-in";
import {useSelector} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {TextField} from "@material-ui/core";
import styled from "styled-components";
import InputMask from "react-input-mask";
import Swal from "sweetalert2";

const Wrapper = styled.div`

`
const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export default function DadosTelefone(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        id: props.id,
        ddd: "",
        numero: "",
        tipoTelefone: "",
        disabled: true,
        newTelefoneDisable: true,
    })
    const [stateTelefones, setStateTelefones] = React.useState([])
    let copyClientes = useSelector(state => state.cliente.clientes)

    if (stateTelefones.length === 0) {
        copyClientes.forEach(cliente => {
            if (cliente.id === state.id) {
                cliente.telefones.forEach(telefone => {
                    setStateTelefones(telefones => [...telefones,
                        {
                            ddd: telefone.ddd,
                            numero: telefone.numero,
                            tipoTelefone: telefone.tipoTelefone.nomeTipo,
                            disabled: true,
                        }])
                })
            }
        })
    }

    function handleChange(event) {
        const value = event.target.value;

        setState({
                ...state,
                [event.target.name]: value
        });

    }

    function handleSave(index) {
        let newArr = [...stateTelefones]
        newArr[index].ddd = state.numero.replace(/[^0-9.]/g, '').replace(/[-_()]/g, "").substring(0, 2)
        newArr[index].numero = state.numero.replace(/[^0-9.]/g, '').replace(/[-_()]/g, "").substring(2)
        newArr[index].tipoTelefone = state.tipoTelefone
        newArr[index].disabled = true
        setStateTelefones(newArr)
    }
    const validateTelefone =()=>{
        return state.numero.replace(/[-_()]/g, "").length !== typeTel ||
            state.numero === ""
            || state.tipoTelefone === "";
    }

    function handleEdit(index) {

        setState({
            ...state,
            numero: stateTelefones[index].ddd + stateTelefones[index].numero,
            tipoTelefone: stateTelefones[index].tipoTelefone,
        });
        let newArr = [...stateTelefones];

        newArr.forEach(telefone=>{
            if( telefone.disabled === false){
                telefone.disabled = true
            }
        })

        newArr[index].disabled = false

        setStateTelefones(newArr)
    }

    function handleExcluir(index) {
        let copyArr = [...stateTelefones];

        Swal.fire({
            title: 'Deseja deletar esse Telefone?',
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
                setStateTelefones(newArray)
                Swal.fire('Deletado!', '', 'success')
            }
        })

    }

    function handleSaveTel() {
        let newArr = [...stateTelefones];

        newArr.push({
            ddd: state.numero.replace(/[^0-9.]/g, '').replace(/[-_()]/g, "").substring(0, 2),
            numero: state.numero.replace(/[^0-9.]/g, '').replace(/[-_()]/g, "").substring(2),
            tipoTelefone: state.tipoTelefone,
            disabled: true,
        })

        setStateTelefones(newArr)

        setState({
            ...state,
            newTelefoneDisable: true
        })
    }

    const handleNewTelCancel = () => {
        setState({
            ...state,
            newTelefoneDisable: true
        })
    }

    function showNewTelefone() {
        setState({
            ...state,
            ddd: "",
            numero: "",
            tipoTelefone: "",
            newTelefoneDisable: false
        })
    }

    let typeTel, maskFormat

    if (state.tipoTelefone === "" || state.tipoTelefone !== "Celular") {
        typeTel = 10
        maskFormat = "(99)9999-9999"
    } else {
        typeTel = 11
        maskFormat = "(99)99999-9999"
    }

    const tipoDeTelefoneList = ["Residencial", "Celular", "Comercial", "Recado"]

    return (
        <FadeIn>
            <Wrapper>
                {!state.newTelefoneDisable ?
                    <Card className={classes.root}
                          style={{margin: 4, padding: 4}}>
                        <CardContent>
                            <EditFieldsWrapper>
                                <FormControl style={{minWidth: 270}}>
                                    <InputLabel>Tipo de telefone</InputLabel>
                                    <Select
                                        name="tipoTelefone"
                                        value={state.tipoTelefone}
                                        onChange={handleChange}
                                        required
                                        error={!state.tipoTelefone && state.tipoTelefone !== ""}
                                    >
                                        {tipoDeTelefoneList.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item}>
                                                    <div key={index}>{item}</div>
                                                </MenuItem>
                                            );
                                        })}

                                    </Select>
                                </FormControl>
                                <InputMask
                                    mask={maskFormat}
                                    value={state.numero}
                                    onChange={handleChange}
                                >
                                    <TextField
                                        style={{minWidth: 270}}
                                        name="numero"
                                        label="Telefone"
                                        type="tel"
                                        required
                                        error={state.numero.replace(/[-_()]/g, "").length !== typeTel && state.numero !== ""}
                                        helperText={state.numero.replace(/[-_()]/g, "").length !== typeTel && state.numero !== "" ? "o numero digitado não está correto" : ""}
                                    />
                                </InputMask>
                            </EditFieldsWrapper>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button onClick={() => handleNewTelCancel()}
                                    size="small" variant="outlined" color="secondary"
                                    fullWidth={true}>Cancelar</Button>
                            <Button
                                disabled={validateTelefone()}
                                onClick={() => handleSaveTel()}
                                size="small" variant="outlined" color="secondary"
                                fullWidth={true}>Salvar</Button>
                        </CardActions>
                    </Card>
                    :

                    <WrapperCards>
                        {stateTelefones.map((telefone, index) => {
                            return (
                                <Wrapper>
                                    <Card key={index} hidden={!telefone.disabled} className={classes.root}
                                          style={{margin: 4}}>
                                        <CardContent>
                                            <Typography className={classes.title} color="textPrimary"
                                                        gutterBottom>
                                                Telefone
                                            </Typography>
                                            <Breadcrumbs separator={""}>
                                                <Typography variant="body2" color="textPrimary" component="div"
                                                            align="left">
                                                    Tipo de Telefone:
                                                </Typography>
                                                <Typography variant="body2" color="inherit" component="div"
                                                            align="left">
                                                    {telefone.tipoTelefone}
                                                </Typography>
                                            </Breadcrumbs>

                                            <Breadcrumbs separator={""}>
                                                <Typography variant="body2" color="textPrimary" component="div"
                                                            align="left">
                                                    numero:
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary"
                                                            component="div"
                                                            align="left">
                                                    {"(" + telefone.ddd + ")" + telefone.numero}
                                                </Typography>
                                            </Breadcrumbs>
                                        </CardContent>
                                        <CardActions style={{justifyContent: 'center'}}>
                                            <Button size="small" onClick={() => handleEdit(index)}
                                                    variant="outlined"
                                                    color="secondary"
                                                    fullWidth={true}>Editar</Button>
                                            <Button size="small" onClick={() => handleExcluir(index)} variant="outlined" color="secondary"
                                                    fullWidth={true}>Excluir</Button>
                                        </CardActions>
                                    </Card>
                                    <Card key={index + 1} hidden={telefone.disabled} className={classes.root}
                                          style={{margin: 4}}>
                                        <CardContent>
                                            <EditFieldsWrapper>
                                                <FormControl style={{minWidth: 270}}>
                                                    <InputLabel>Tipo de telefone</InputLabel>
                                                    <Select
                                                        name="tipoTelefone"
                                                        value={state.tipoTelefone}
                                                        onChange={handleChange}
                                                        required
                                                        error={!state.tipoTelefone && state.tipoTelefone !== ""}
                                                    >
                                                        {tipoDeTelefoneList.map((item, index) => {
                                                            return (
                                                                <MenuItem key={index} value={item}>
                                                                    <div key={index}>{item}</div>
                                                                </MenuItem>
                                                            );
                                                        })}

                                                    </Select>
                                                </FormControl>
                                                <InputMask
                                                    mask={maskFormat}
                                                    value={state.numero}
                                                    onChange={handleChange}
                                                >
                                                    <TextField
                                                        style={{minWidth: 270}}
                                                        name="numero"
                                                        label="Telefone"
                                                        type="tel"
                                                        required
                                                        error={state.numero.replace(/[-_()]/g, "").length !== typeTel && state.numero !== ""}
                                                        helperText={state.numero.replace(/[-_()]/g, "").length !== typeTel && state.numero !== "" ? "o numero digitado não está correto" : ""}
                                                    />
                                                </InputMask>
                                            </EditFieldsWrapper>
                                        </CardContent>
                                        <CardActions style={{justifyContent: 'center'}}>
                                            <Button size="small"
                                                    disabled={validateTelefone()}
                                                    onClick={() => handleSave(index)}
                                                    variant="outlined"
                                                    color="secondary"
                                                    fullWidth={true}>Salvar</Button>
                                        </CardActions>
                                    </Card>
                                </Wrapper>
                            )
                        })}
                        <Button
                            onClick={() => showNewTelefone()}
                            size="small" variant="outlined" color="primary"
                            style={{marginTop: 25,marginLeft: 25, height: 40}}
                        >Novo Telefone</Button>
                    </WrapperCards>
                }
            </Wrapper>
        </FadeIn>
    );
}
