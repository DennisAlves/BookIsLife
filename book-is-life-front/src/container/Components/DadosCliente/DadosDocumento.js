import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {useSelector} from "react-redux";
import Swal from "sweetalert2";
import FadeIn from "react-fade-in";
import styled from "styled-components";
import {TextField} from "@material-ui/core";
import moment from "moment";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputMask from "react-input-mask";


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

export default function DadosDocumento(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        id: props.id,
        codigo: "",
        tipoDocumento: "",
        validade: "",
        disabled: true,
        newDocumentoDisable: true,
    })
    const [stateDocumentos, setStateDocumentos] = React.useState([])
    let copyClientes = useSelector(state => state.cliente.clientes)

    if (stateDocumentos.length === 0) {
        copyClientes.forEach(cliente => {
            if (cliente.id === state.id) {
                cliente.documentos.forEach(documento => {
                    setStateDocumentos(documentos => [...documentos,
                        {
                            codigo: documento.codigo,
                            validade: documento.validade,
                            tipoDocumento: documento.tipoDocumento.nome,
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
        let newArr = [...stateDocumentos]
        newArr[index].codigo = state.codigo
        newArr[index].validade = state.validade
        newArr[index].tipoDocumento = state.tipoDocumento
        newArr[index].disabled = true
        setStateDocumentos(newArr)
    }

    const validateDocumento = () => {
        if (state.codigo === "" ||
            state.validade === "" ||
            state.tipoDocumento === "") {
            return true
        } else {
            return false
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

    function handleSaveDoc() {
        let newArr = [...stateDocumentos];

        newArr.push({
            codigo: state.codigo,
            validade: state.validade,
            tipoTelefone: state.tipoTelefone,
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

    return (
        <FadeIn>
            <Wrapper>
                <WrapperCards>
                    {!state.newDocumentoDisable ?
                        <Card className={classes.root} style={{margin: 4}}>
                            <CardContent>
                                <EditFieldsWrapper>
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
                                        <EditFieldsWrapper>
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
                                        </EditFieldsWrapper>
                                        :
                                        <EditFieldsWrapper>
                                            {state.tipoDocumento === "" ?
                                                <></>
                                                :
                                                <Wrapper>
                                                    {state.tipoDocumento === "CPF" ?
                                                        <EditFieldsWrapper>
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
                                                        </EditFieldsWrapper>
                                                        :
                                                        <EditFieldsWrapper>
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
                                                        </EditFieldsWrapper>
                                                    }
                                                </Wrapper>
                                            }
                                        </EditFieldsWrapper>
                                    }
                                </EditFieldsWrapper>
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
                        <WrapperCards>
                            {stateDocumentos.map((doc, index) => {

                                return (
                                    <Wrapper>
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
                                                <EditFieldsWrapper>
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
                                                        <EditFieldsWrapper>
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
                                                        </EditFieldsWrapper>
                                                        :
                                                        <EditFieldsWrapper>
                                                            {state.tipoDocumento === "" ?
                                                                <></>
                                                                :
                                                                <EditFieldsWrapper>
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
                                                                </EditFieldsWrapper>
                                                            }
                                                        </EditFieldsWrapper>
                                                    }
                                                </EditFieldsWrapper>
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
                                    </Wrapper>
                                )
                            })}
                            <Button
                                onClick={() => showNewDocumento()}
                                size="small" variant="outlined" color="primary"
                                style={{marginTop: 25,marginLeft: 25, height: 40}}
                            >Novo Documento</Button>
                        </WrapperCards>
                    }

                </WrapperCards>
            </Wrapper>

        </FadeIn>
    );
}
