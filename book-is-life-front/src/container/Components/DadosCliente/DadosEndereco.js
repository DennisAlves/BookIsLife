import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import styled from "styled-components";
import {TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputMask from "react-input-mask";
import {push} from "connected-react-router";
import {routes} from "../../../router";
import axios from "axios";
import Swal from 'sweetalert2'
import {getTipoLogradouro} from "../../../Actions";

const Wrapper = styled.div`
  display: flex;
`
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: max-content;
`
const EditFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const AdressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`
const AdressButtonWrapper = styled.div`

`

function Styles() {
    return makeStyles({
        root: {
            minWidth: 275,
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    })
}

class DadosEndereco extends Component {

    tipoResidenciaList = ["Casa", "Apartamento", "Residencial"];
    tipoEnderecoList = ["cobrança", "entrega"]
    ufList = [
        {uf: "AC", nome: "Acre"},
        {uf: "AL", nome: "Alagoas"},
        {uf: "AP", nome: "Amapá"},
        {uf: "AM", nome: "Amazonas"},
        {uf: "BA", nome: "Bahia"},
        {uf: "CE", nome: "Ceará"},
        {uf: "DF", nome: "Distrito Federal"},
        {uf: "ES", nome: "Espírito Santo"},
        {uf: "GO", nome: "Goiás"},
        {uf: "MA", nome: "Maranhão"},
        {uf: "MT", nome: "Mato Grosso"},
        {uf: "MS", nome: "Mato Grosso do Sul"},
        {uf: "MG", nome: "Minas Gerais"},
        {uf: "PA", nome: "Pará"},
        {uf: "PB", nome: "Paraíba"},
        {uf: "PR", nome: "Paraná"},
        {uf: "PE", nome: "Pernambuco"},
        {uf: "PI", nome: "Piauí"},
        {uf: "RJ", nome: "Rio de Janeiro"},
        {uf: "RN", nome: "Rio Grande do Norte"},
        {uf: "RS", nome: "Rio Grande do Sul"},
        {uf: "RO", nome: "Rondônia"},
        {uf: "RR", nome: "Roraima"},
        {uf: "SC", nome: "Santa Catarina"},
        {uf: "SP", nome: "São Paulo"},
        {uf: "SE", nome: "Sergipe"},
        {uf: "TO", nome: "Tocantins"}
    ];
    logradouroList = [
        "Alameda",
        "Área",
        "Avenida",
        "Campo",
        "Chácara",
        "Colônia",
        "Condomínio",
        "Conjunto",
        "Distrito",
        "Esplanada",
        "Estação",
        "Estrada",
        "Favela",
        "Feira",
        "Jardim",
        "Ladeira",
        "Lago",
        "Lagoa",
        "Largo",
        "Loteamento",
        "Morro",
        "Núcleo",
        "Parque",
        "Passarela",
        "Pátio",
        "Praça",
        "Quadra",
        "Recanto",
        "Residencial",
        "Rodovia",
        "Rua",
        "Setor",
        "Sítio",
        "Travessa",
        "Trecho",
        "Trevo",
        "Vale",
        "Vereda",
        "Via",
        "Viaduto",
        "Viela",
        "Vila"
    ]
    classes = Styles();

    constructor(props) {
        super(props);
        this.state = {
            logradouroList: [],
            dataArr: [],
            adressDisable: true,
            descricao: "",
            tipoEndereco: "",
            tipoResidencia: "",
            cep: "",
            logradouro: "",
            endereco: "",
            numero: "",
            bairro: "",
            cidade: "",
            complemento: "",
            uf: "",
            buttonDisabled: true,
        };
    }

    componentDidMount() {
        let copyClientes = this.props.clientes
        let dataArr = []
        if (copyClientes) {
            copyClientes.forEach(cliente => {
                if (cliente.id === this.props.id) {
                    cliente.enderecos.forEach(endereco => {
                        dataArr.push(
                            {
                                descricao: endereco.descricao,
                                tipoEndereco: endereco.tipoEndereco.nomeTipo,
                                tipoResidencia: endereco.tipoResidencia.nomeTipo,
                                cep: endereco.cep,
                                logradouro: endereco.tipoLogradouro.nomeTipo,
                                endereco: endereco.endereco,
                                numero: endereco.numero.toString(),
                                bairro: endereco.bairro,
                                cidade: endereco.cidade.nome,
                                complemento: endereco.complemento,
                                uf: endereco.cidade.estado.uf,
                                disabled: true,
                                buttonDisabled: false,
                            }
                        )
                    })
                }
            })
        }
        this.setState({dataArr: dataArr})
    }

    handleChange(event, index) {

        const value = event.target.value;
        const name = event.target.name;

        let copyArray = this.state.dataArr
        copyArray[index][name] = value

        if (name === "cep") {
            this.handleCepFillUp(value, index)
        }
        this.setState({dataArr: copyArray})
        this.validateEdit(index)

    }

    handleChangeFields = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        if (name === "cep") {
            this.handleCepFillUp(value, undefined)
        }
        this.setState({[name]: value})
    }

    handleCepFillUp = (cepUnformated, index) => {
        const cep = cepUnformated.replace(/[-_]/g, "")

        if (cep.length === 8) {
            const request = axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
                headers: {
                    "Content-Type": "application/json",
                }

            })

            request.then((response) => {
                if (response.data.erro) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cep invalido!',
                    })
                    let copyArray = this.state.dataArr

                    copyArray[index].logradouro = ""
                    copyArray[index].endereco = ""
                    copyArray[index].bairro = ""
                    copyArray[index].cidade = ""
                    copyArray[index].uf = ""

                    this.setState({dataArr: copyArray})
                } else {
                    if (index) {
                        let copyArray = this.state.dataArr

                        copyArray[index].logradouro = response.data.logradouro.substr(0, response.data.logradouro.indexOf(" "))
                        copyArray[index].endereco = response.data.logradouro.substr(response.data.logradouro.indexOf(" ") + 1)
                        copyArray[index].bairro = response.data.bairro
                        copyArray[index].cidade = response.data.localidade
                        copyArray[index].uf = response.data.uf

                        this.setState({dataArr: copyArray})
                    } else {
                        this.setState({logradouro: response.data.logradouro.substr(0, response.data.logradouro.indexOf(" "))})
                        this.setState({endereco: response.data.logradouro.substr(response.data.logradouro.indexOf(" ") + 1)})
                        this.setState({bairro: response.data.bairro})
                        this.setState({cidade: response.data.localidade})
                        this.setState({uf: response.data.uf})
                    }
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    validateEdit(index) {
        const copyArray = this.state.dataArr
        if (
            copyArray[index].descricao === "" ||
            copyArray[index].tipoEndereco === "" ||
            copyArray[index].tipoResidencia === "" ||
            copyArray[index].cep === "" ||
            copyArray[index].logradouro === "" ||
            copyArray[index].endereco === "" ||
            copyArray[index].numero === "" ||
            copyArray[index].bairro === "" ||
            copyArray[index].cidade === "" ||
            copyArray[index].uf === "") {
            copyArray[index].buttonDisabled = true

            this.setState({dataArr: copyArray})
        } else {
            copyArray[index].buttonDisabled = false
            this.setState({dataArr: copyArray})
        }

    }

    handleEdit(index) {
        let copyArray = this.state.dataArr
        if (copyArray[index].disabled) {
            copyArray[index].disabled = false
        } else {
            copyArray[index].disabled = true
        }
        copyArray.forEach(endereco => {
            if (endereco.disabled === false) {
                endereco.disabled = true
            }
        })

        copyArray[index].disabled = false

        this.setState({dataArr: copyArray})
    }

    handleNewAdress = () => {
        this.setState({adressDisable: false})
    }

    handleNewAdressCancel = () => {
        this.setState({adressDisable: true})
    }

    validateAdress = () => {
        const {
            descricao,
            tipoEndereco,
            tipoResidencia,
            cep,
            logradouro,
            endereco,
            numero,
            bairro,
            cidade,
            uf,
        } = this.state
        if (
            descricao === "" ||
            tipoEndereco === "" ||
            tipoResidencia === "" ||
            cep === "" ||
            logradouro === "" ||
            endereco === "" ||
            numero === "" ||
            bairro === "" ||
            cidade === "" ||
            uf === "") {
            return true
        } else {
            return false
        }
    }

    handleExcluir(index) {
        let copyArray = this.state.dataArr

        Swal.fire({
            title: 'Deseja deletar esse endereço?',
            showDenyButton: true,
            confirmButtonText: `Sim`,
            denyButtonText: `Não`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let newArray = []
                for (let i = 0; i < copyArray.length; i++) {
                    if (i !== index) {
                        newArray.push(copyArray[i])
                    }
                }
                this.setState({dataArr: newArray})
                Swal.fire('Deletado!', '', 'success')
            }
        })

    }

    handleSaveNewAdress = () => {
        const {
            descricao,
            tipoEndereco,
            tipoResidencia,
            cep,
            logradouro,
            endereco,
            numero,
            bairro,
            cidade,
            complemento,
            uf,
        } = this.state
        const newEndereco = {
            descricao: descricao,
            tipoEndereco: tipoEndereco,
            tipoResidencia: tipoResidencia,
            cep: cep,
            logradouro: logradouro,
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            complemento: complemento,
            uf: uf,
            disabled: true,
            buttonDisabled: false,
        }
        let copyArry = this.state.dataArr
        copyArry.push(newEndereco)
        this.setState({dataArr: copyArry})
        this.setState({adressDisable: true})
        this.setState({
            descricao: "",
            tipoEndereco: "",
            tipoResidencia: "",
            cep: "",
            logradouro: "",
            endereco: "",
            numero: "",
            bairro: "",
            cidade: "",
            complemento: "",
            uf: "",
        })
        this.validateAdress()
    }

    render() {
        const {
            descricao,
            tipoEndereco,
            tipoResidencia,
            cep,
            logradouro,
            endereco,
            numero,
            bairro,
            cidade,
            complemento,
            uf,
        } = this.state

        return (
                <Wrapper>
                    <CardsWrapper>
                        {this.state.dataArr && this.state.dataArr.map((endereco, index) =>
                                <CardsWrapper>
                                    <Card hidden={!endereco.disabled} key={index} className={this.classes.root}
                                          style={{margin: 4}}>
                                        <AdressWrapper>
                                            <CardContent>
                                                <Typography className={this.classes.title} color="textPrimary"
                                                            gutterBottom>
                                                    Endereco
                                                </Typography>
                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Descrição:
                                                    </Typography>
                                                    <Typography variant="body2" color="inherit" component="div"
                                                                align="left">
                                                        {endereco.descricao}
                                                    </Typography>
                                                </Breadcrumbs>

                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Tipo De Endereço:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                align="left">
                                                        {endereco.tipoEndereco}
                                                    </Typography>
                                                </Breadcrumbs>

                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Tipo De Residencia:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                align="left">
                                                        {endereco.tipoResidencia}
                                                    </Typography>
                                                </Breadcrumbs>

                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Cep:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                align="left">
                                                        {endereco.cep}
                                                    </Typography>
                                                </Breadcrumbs>

                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Logradouro:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                align="left">
                                                        {endereco.logradouro}
                                                    </Typography>
                                                </Breadcrumbs>

                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Endereço:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div">
                                                        {endereco.endereco}
                                                    </Typography>

                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Numero:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                align="left">
                                                        {endereco.numero}
                                                    </Typography>
                                                </Breadcrumbs>

                                                {endereco.complemento ?
                                                    <Breadcrumbs separator={""}>
                                                        <Typography variant="body2" color="textPrimary" component="div"
                                                                    align="left">
                                                            Complemento:
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary"
                                                                    component="div"
                                                                    align="left">
                                                            {endereco.complemento}
                                                        </Typography>
                                                    </Breadcrumbs>
                                                    :
                                                    <></>
                                                }

                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Bairro:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                align="left">
                                                        {endereco.bairro}
                                                    </Typography>
                                                </Breadcrumbs>

                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Cidade:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                align="left">
                                                        {endereco.cidade}
                                                    </Typography>
                                                </Breadcrumbs>

                                                <Breadcrumbs separator={""}>
                                                    <Typography variant="body2" color="textPrimary" component="div"
                                                                align="left">
                                                        Uf:
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="div"
                                                                align="left">
                                                        {endereco.uf}
                                                    </Typography>
                                                </Breadcrumbs>
                                            </CardContent>
                                            <AdressButtonWrapper>
                                                {this.props.botaoEnviar
                                                    ?
                                                    <CardActions style={{justifyContent: 'center', paddingBottom: 0}}>
                                                        <Button variant="outlined" color="primary" size="small"
                                                                fullWidth={true}>Envie
                                                            para esse
                                                            endereço</Button>
                                                    </CardActions>
                                                    :
                                                    <></>
                                                }
                                                <CardActions style={{justifyContent: 'center'}}>
                                                    <Button onClick={() => this.handleEdit(index)}
                                                            size="small" variant="outlined" color="secondary"
                                                            fullWidth={true}>Editar</Button>
                                                    <Button onClick={() => this.handleExcluir(index)}
                                                            size="small" variant="outlined" color="secondary"
                                                            fullWidth={true}>Excluir</Button>
                                                </CardActions>
                                            </AdressButtonWrapper>
                                        </AdressWrapper>
                                    </Card>
                                    <Card hidden={endereco.disabled} key={index + 1} className={this.classes.root}
                                          style={{margin: 4, padding: 4}}>
                                        <EditFieldsWrapper>
                                            <TextField
                                                style={{minWidth: 270}}
                                                onChange={event => this.handleChange(event, index)}
                                                name="descricao"
                                                type="text"
                                                label="Descriçâo do Endereco"
                                                required
                                                value={endereco.descricao}
                                                error={endereco.descricao.length < 4 && endereco.descricaoo !== ""}
                                                helperText={endereco.descricao.length < 4 && endereco.descricao !== "" ? "a descrição deve ter pelo menos 4 letras." : ""}
                                            />

                                            <FormControl style={{minWidth: 270}}>
                                                <InputLabel>Tipo de Endereço</InputLabel>
                                                <Select
                                                    name="tipoEndereco"
                                                    value={endereco.tipoEndereco}
                                                    onChange={event => this.handleChange(event, index)}
                                                    required
                                                    error={!endereco.tipoEndereco && endereco.tipoEndereco !== ""}
                                                >
                                                    {this.tipoEnderecoList.map((item, index) => {
                                                        return (
                                                            <MenuItem key={index} value={item}>
                                                                <div key={index}>{item}</div>
                                                            </MenuItem>
                                                        );
                                                    })}

                                                </Select>
                                            </FormControl>

                                            <InputMask
                                                mask="99999-999"
                                                value={endereco.cep}
                                                onChange={event => this.handleChange(event, index)}
                                            >
                                                <TextField
                                                    style={{minWidth: 270}}
                                                    name="cep"
                                                    type="text"
                                                    label="Cep"
                                                    required
                                                    error={endereco.cep.replace(/[-_()]/g, "").length < 8 && endereco.cep !== ""}
                                                    helperText={endereco.cep.replace(/[-_()]/g, "").length < 8 && endereco.cep !== "" ? "o numero digitado não está correto" : ""}
                                                />
                                            </InputMask>

                                            <FormControl style={{minWidth: 270}}>
                                                <InputLabel>Tipo de Residencia *</InputLabel>
                                                <Select
                                                    name="tipoResidencia"
                                                    value={endereco.tipoResidencia}
                                                    onChange={event => this.handleChange(event, index)}
                                                    required
                                                    error={!endereco.tipoResidencia && endereco.tipoResidencia !== ""}
                                                >
                                                    {this.tipoResidenciaList.map((item, index) => {
                                                        return (
                                                            <MenuItem key={index} value={item}>
                                                                <div key={index}>{item}</div>
                                                            </MenuItem>
                                                        );
                                                    })}

                                                </Select>
                                            </FormControl>

                                            <FormControl style={{minWidth: 270}}
                                                         error={!endereco.logradouro && endereco.logradouro !== ""}>
                                                <InputLabel>Logradouro</InputLabel>
                                                <Select
                                                    name="logradouro"
                                                    value={endereco.logradouro}
                                                    onChange={event => this.handleChange(event, index)}
                                                    required
                                                >
                                                    {this.logradouroList && this.logradouroList.map((item, index) => {
                                                        return (
                                                            <MenuItem key={index} value={item}>
                                                                <div key={index}>{item}</div>
                                                            </MenuItem>
                                                        );
                                                    })}

                                                </Select>
                                            </FormControl>


                                            <TextField
                                                style={{minWidth: 270}}
                                                onChange={event => this.handleChange(event, index)}
                                                name="endereco"
                                                type="text"
                                                label="Endereço"
                                                required
                                                value={endereco.endereco}
                                                error={endereco.endereco.length < 2 && endereco.endereco !== ""}
                                                helperText={endereco.endereco.length < 2 && endereco.endereco !== "" ? "o logradouro deve ter pelo menos 2 letras." : ""}
                                            />

                                            <TextField style={{minWidth: 270}}
                                                       onChange={event => this.handleChange(event, index)}
                                                       name="numero"
                                                       type="text"
                                                       label="Numero"
                                                       required
                                                       value={endereco.numero.replace(/\D/g, "")}
                                                       error={!/^([0-9]{1,})$/.test(endereco.numero) && endereco.numero !== ""}
                                                       helperText={!/^([0-9]{1,})$/.test(endereco.numero) && endereco.numero !== "" ? "digite um numero." : ""}
                                            />

                                            <TextField style={{minWidth: 270}}
                                                       onChange={event => this.handleChange(event, index)}
                                                       name="complemento"
                                                       type="text"
                                                       label="Complemento"
                                                       value={endereco.complemento}
                                            />

                                            <TextField style={{minWidth: 270}}
                                                       onChange={event => this.handleChange(event, index)}
                                                       name="bairro"
                                                       type="text"
                                                       label="Bairro"
                                                       required
                                                       value={endereco.bairro}
                                                       error={endereco.bairro < 2 && endereco.bairro !== ""}
                                                       helperText={endereco.bairro < 2 && endereco.bairro !== "" ? "o nome do bairro deve ter pelo menos 2 letras." : ""}

                                            />

                                            <TextField style={{minWidth: 270}}
                                                       onChange={event => this.handleChange(event, index)}
                                                       name="cidade"
                                                       type="text"
                                                       label="Cidade"
                                                       required
                                                       value={endereco.cidade}
                                                       error={endereco.cidade < 2 && endereco.cidade !== ""}
                                                       helperText={endereco.cidade < 2 && endereco.cidade !== "" ? "o nome da cidade deve ter pelo menos 2 letras." : ""}

                                            />
                                            <FormControl style={{minWidth: 270}}
                                                         error={!endereco.uf && endereco.uf !== ""}>
                                                <InputLabel>Estado *</InputLabel>
                                                <Select
                                                    name="uf"
                                                    value={endereco.uf}
                                                    onChange={event => this.handleChange(event, index)}
                                                    required
                                                >
                                                    {this.ufList.map((item, index) => {
                                                        return (
                                                            <MenuItem key={index} value={item.uf}>
                                                                <div key={index}>{item.nome}</div>
                                                            </MenuItem>
                                                        );
                                                    })}

                                                </Select>
                                            </FormControl>
                                        </EditFieldsWrapper>
                                        <CardActions style={{justifyContent: 'center'}}>
                                            <Button disabled={endereco.buttonDisabled}
                                                    onClick={() => this.handleEdit(index)}
                                                    size="small" variant="outlined" color="secondary"
                                                    fullWidth={true}>Salvar</Button>
                                        </CardActions>
                                    </Card>
                                </CardsWrapper>

                        )}
                    </CardsWrapper>
                    <Wrapper>
                        {!this.state.adressDisable ?
                            <Card className={this.classes.root}
                                  style={{margin: 4, padding: 4}}>
                                <EditFieldsWrapper>
                                    <TextField
                                        style={{minWidth: 270}}
                                        onChange={this.handleChangeFields}
                                        name="descricao"
                                        type="text"
                                        label="Descriçâo do Endereco"
                                        required
                                        value={descricao}
                                        error={descricao.length < 4 && descricao !== ""}
                                        helperText={descricao.length < 4 && descricao !== "" ? "a descrição deve ter pelo menos 4 letras." : ""}
                                    />

                                    <FormControl style={{minWidth: 270}}>
                                        <InputLabel>Tipo de Endereço</InputLabel>
                                        <Select
                                            name="tipoEndereco"
                                            value={tipoEndereco}
                                            onChange={this.handleChangeFields}
                                            required
                                            error={!tipoEndereco && tipoEndereco !== ""}
                                        >
                                            {this.tipoEnderecoList.map((item, index) => {
                                                return (
                                                    <MenuItem key={index} value={item}>
                                                        <div key={index}>{item}</div>
                                                    </MenuItem>
                                                );
                                            })}

                                        </Select>
                                    </FormControl>

                                    <InputMask
                                        mask="99999-999"
                                        value={cep}
                                        onChange={this.handleChangeFields}
                                    >
                                        <TextField
                                            style={{minWidth: 270}}
                                            name="cep"
                                            type="text"
                                            label="Cep"
                                            required
                                            error={cep.replace(/[-_()]/g, "").length < 8 && cep !== ""}
                                            helperText={cep.replace(/[-_()]/g, "").length < 8 && cep !== "" ? "o numero digitado não está correto" : ""}
                                        />
                                    </InputMask>

                                    <FormControl style={{minWidth: 270}}>
                                        <InputLabel>Tipo de Residencia *</InputLabel>
                                        <Select
                                            name="tipoResidencia"
                                            value={tipoResidencia}
                                            onChange={this.handleChangeFields}
                                            required
                                            error={!tipoResidencia && tipoResidencia !== ""}
                                        >
                                            {this.tipoResidenciaList.map((item, index) => {
                                                return (
                                                    <MenuItem key={index} value={item}>
                                                        <div key={index}>{item}</div>
                                                    </MenuItem>
                                                );
                                            })}

                                        </Select>
                                    </FormControl>

                                    <FormControl style={{minWidth: 270}}
                                                 error={!logradouro && logradouro !== ""}>
                                        <InputLabel>Logradouro</InputLabel>
                                        <Select
                                            name="logradouro"
                                            value={logradouro}
                                            onChange={this.handleChangeFields}
                                            required
                                        >
                                            {this.logradouroList.map((item, index) => {
                                                return (
                                                    <MenuItem key={index} value={item}>
                                                        <div key={index}>{item}</div>
                                                    </MenuItem>
                                                );
                                            })}

                                        </Select>
                                    </FormControl>


                                    <TextField
                                        style={{minWidth: 270}}
                                        onChange={this.handleChangeFields}
                                        name="endereco"
                                        type="text"
                                        label="Endereço"
                                        required
                                        value={endereco}
                                        error={endereco.length < 2 && endereco !== ""}
                                        helperText={endereco.length < 2 && endereco !== "" ? "o logradouro deve ter pelo menos 2 letras." : ""}
                                    />

                                    <TextField style={{minWidth: 270}}
                                               onChange={this.handleChangeFields}
                                               name="numero"
                                               type="text"
                                               label="Numero"
                                               required
                                               value={numero.replace(/\D/g, "")}
                                               error={!/^([0-9]{1,})$/.test(numero) && numero !== ""}
                                               helperText={!/^([0-9]{1,})$/.test(numero) && numero !== "" ? "digite um numero." : ""}
                                    />

                                    <TextField style={{minWidth: 270}}
                                               onChange={this.handleChangeFields}
                                               name="complemento"
                                               type="text"
                                               label="Complemento"
                                               value={complemento}
                                    />

                                    <TextField style={{minWidth: 270}}
                                               onChange={this.handleChangeFields}
                                               name="bairro"
                                               type="text"
                                               label="Bairro"
                                               required
                                               value={bairro}
                                               error={bairro < 2 && bairro !== ""}
                                               helperText={bairro < 2 && bairro !== "" ? "o nome do bairro deve ter pelo menos 2 letras." : ""}

                                    />

                                    <TextField style={{minWidth: 270}}
                                               onChange={this.handleChangeFields}
                                               name="cidade"
                                               type="text"
                                               label="Cidade"
                                               required
                                               value={cidade}
                                               error={cidade < 2 && cidade !== ""}
                                               helperText={cidade < 2 && cidade !== "" ? "o nome da cidade deve ter pelo menos 2 letras." : ""}

                                    />
                                    <FormControl style={{minWidth: 270}} error={!uf && uf !== ""}>
                                        <InputLabel>Estado *</InputLabel>
                                        <Select
                                            name="uf"
                                            value={uf}
                                            onChange={this.handleChangeFields}
                                            required
                                        >
                                            {this.ufList.map((item, index) => {
                                                return (
                                                    <MenuItem key={index} value={item.uf}>
                                                        <div key={index}>{item.nome}</div>
                                                    </MenuItem>
                                                );
                                            })}

                                        </Select>
                                    </FormControl>
                                </EditFieldsWrapper>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button onClick={() => this.handleNewAdressCancel()}
                                            size="small" variant="outlined" color="secondary"
                                            fullWidth={true}>Cancelar</Button>
                                    <Button disabled={this.validateAdress()}
                                            onClick={() => this.handleSaveNewAdress()}
                                            size="small" variant="outlined" color="secondary"
                                            fullWidth={true}>Salvar</Button>
                                </CardActions>
                            </Card>
                            :
                            <Button
                                onClick={() => this.handleNewAdress()}
                                size="small" variant="outlined" color="primary"
                                style={{marginTop: 25, marginLeft: 25, height: 40}}
                            >Novo Endereço</Button>
                        }
                    </Wrapper>
                </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    clientes: state.cliente.clientes,
    tipoLogradouro: state.cliente.tipoLogradouro,
})

function mapDispatchToProps(dispatch) {
    return {
        goToHomePage: () => dispatch(push(routes.HomePage)),
        getTipoLogradouro: () => dispatch(getTipoLogradouro())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DadosEndereco)