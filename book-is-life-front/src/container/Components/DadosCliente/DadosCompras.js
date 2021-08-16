import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import * as DVS from "../../DetalhesVendaPage/DetalhesVendaPageStyles";
import Tooltip from '@material-ui/core/Tooltip';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {TextField} from "@material-ui/core";
import {setPedidosDeTroca} from "../../../Actions/index"

const RedTextTypography = withStyles({
    root: {
        color: "#ac1111",
        marginLeft: 5,
    }
})(Typography);
const GreenTextTypography = withStyles({
    root: {
        color: "#018c45",
        marginLeft: 5,
    }
})(Typography);
const YellowTextTypography = withStyles({
    root: {
        color: "#beb527",
        marginLeft: 5,
    }
})(Typography);

const NoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85vw;
`
const IconWrapper = styled.div`

`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const WrapperCards = styled.div`
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
const ItemListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ItensTrocaWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`
const ItensFieldsPrecoQtdeWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 225px;
`
const ItensWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const ItensFieldsWrapper = styled.div`
  display: flex;
`

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: "max-content",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function DadosCompras(props) {
    const classes = useStyles();
    const dispatch = useDispatch();


    const [state] = React.useState({
        id: props.id,
        showDevolucao: false,
    })
    const [stateTroca, setStateTroca] = React.useState([])
    const [stateTrocaAnalise, setStateTrocaAnalise] = React.useState([])
    const [stateMotivoTroca, setStateMotivoTroca] = React.useState({
        idCompra: "",
        motivoTroca: "",
        descricaoTroca: "",
    })
    const [stateCompras, setStateCompras] = React.useState([])
    let copyCompras = useSelector(state => state.vendas.vendas)
    let copyPedidosDeTroca = useSelector(state => state.vendas.pedidosDeTroca)


    if (stateCompras.length === 0) {
        copyCompras.forEach(compra => {
            if (compra.cliente === state.id) {
                setStateCompras(compras => [...compras,
                    {
                        id: compra.id,
                        data: compra.data,
                        cliente: compra.cliente,
                        enderecoDeEntrega: {
                            descricao: compra.enderecoDeEntrega.descricao,
                            tipoLogradouro: compra.enderecoDeEntrega.tipoLogradouro.nomeTipo,
                            endereco: compra.enderecoDeEntrega.endereco,
                            numero: compra.enderecoDeEntrega.numero.toString(),
                            bairro: compra.enderecoDeEntrega.bairro,
                            cep: compra.enderecoDeEntrega.cep,
                            cidade: compra.enderecoDeEntrega.cidade.nome,
                            uf: compra.enderecoDeEntrega.cidade.estado.uf,
                            complemento: compra.enderecoDeEntrega.complemento,

                        },
                        itens: compra.itens,
                        itensTroca: compra.itensTroca,
                        pagamento: compra.pagamento,
                        total: compra.total,
                        status: compra.status,
                        disabled: true,
                    }])
            }
        })
    }

    if (stateTrocaAnalise.length === 0) {
        copyPedidosDeTroca.forEach(troca => {
            stateCompras.forEach(compra => {
                if (compra.id === troca.stateMotivoTroca.idCompra) {
                    setStateTrocaAnalise(trocas => [...trocas,
                        troca])
                }
            })
        })
    }

    function handleItensTroca(index) {
        if (index !== null) {
            stateCompras[index].itens.forEach(item => {
                setStateTroca(itens => [...itens,
                    {
                        id: item.id,
                        titulo: item.titulo,
                        qtde: item.qtde,
                        preco: item.preco,
                        qtdeTroca: 0,
                    }])
            })
            setStateMotivoTroca({
                ...stateMotivoTroca,
                idCompra: stateCompras[index].id,
                motivoTroca: "",
                descricaoTroca: "",
            })
            let newArr = [...stateCompras]
            newArr.forEach(compra => {
                if (compra.disabled === false) {
                    compra.disabled = true
                }
            })
            newArr[index].disabled = false
            setStateCompras(newArr)
        } else {
            let newArr = [...stateCompras]
            setStateCompras(newArr)
        }
    }

    function handleCancel(id) {
        let newArr = [...stateCompras]
        newArr.forEach(compra => {
            if (compra.disabled === false) {
                compra.disabled = true
            }
        })
        setStateCompras(newArr)
        let emptyArr = []
        newArr.forEach(compra => {
            if (compra.id === id) {
                if (compra.status !== "EM ANALISE DE TROCA") {
                    setStateTroca(emptyArr)
                    setStateMotivoTroca({
                        ...stateMotivoTroca,
                        idCompra: "",
                        motivoTroca: "",
                        descricaoTroca: "",
                    })
                }
            }

        })

    }

    function handleSaveTroca(id) {
        let newArray = stateCompras
        newArray.forEach(compra => {
            if (compra.id === id) {
                compra.status = "EM ANALISE DE TROCA"
            }

        })
        setStateCompras(newArray)
        let newCopyPedidosDeTroca = copyPedidosDeTroca
        let copyStateTroca = []

        stateTroca.forEach(item => {
            if (item.qtdeTroca > 0) {
                copyStateTroca.push(item)
            }
        })

        newCopyPedidosDeTroca.push({copyStateTroca, stateMotivoTroca})
        dispatch(setPedidosDeTroca(newCopyPedidosDeTroca))
        handleCancel(id)
    }

    function handleValorTroca() {
        let total = 0
        stateTroca.forEach(troca => {
            total += troca.preco * troca.qtdeTroca
        })
        return total
    }

    function handleChangeFieldsTroca(event, index) {
        let newArr = stateTroca
        newArr[index][event.target.name] = event.target.value
        setStateTroca(newArr)
        if (event.target.name === 'motivoTroca') {
            setStateMotivoTroca({
                ...stateMotivoTroca,
                motivoTroca: event.target.value,
            })
        } else if (event.target.name === "descricaoTroca") {
            setStateMotivoTroca({
                ...stateMotivoTroca,
                descricaoTroca: event.target.value,
            })
        }
        handleItensTroca(null)
    }

    function validateTroca() {
        return stateMotivoTroca.motivoTroca === "" ||
            handleValorTroca() === 0 ||
            (stateMotivoTroca.motivoTroca === "outros" && stateMotivoTroca.descricaoTroca === "");
    }

    function menuItens(qtde) {
        let element = []
        for (let i = 0; i <= qtde; i++) {
            element.push(
                <MenuItem key={i} value={i}>
                    <div key={i}>{i}</div>
                </MenuItem>
            );
        }
        return element
    }

    const motivosTrocaList = ["Produto Danificado", "Me arrependi da compra", "outros"]

    return (
        <Wrapper>
            {stateCompras.length !== 0 ?
                <Wrapper>
                    {stateCompras.map((compra, index) => {
                        let disabledTroca = true
                        if (compra.status === "ENTREGUE") {
                            disabledTroca = false
                        }
                        return (
                            <WrapperCards>
                                <Wrapper>
                                    <Card key={index} hidden={!compra.disabled} className={classes.root}
                                          style={{margin: 4, width: 450}}>
                                        <AdressWrapper>
                                            <CardContent>
                                                <Typography className={classes.title} color="textPrimary" gutterBottom>
                                                    Compra: {compra.data}
                                                </Typography>
                                                <Typography variant="body2" color="textPrimary" component="div"
                                                            align="left">
                                                    Entrega:
                                                </Typography>
                                                <Typography variant="body2" color="inherit" component="div"
                                                            align="left">
                                                    {compra.enderecoDeEntrega.descricao}
                                                </Typography>
                                                <Typography variant="body2" color="textPrimary" component="div"
                                                            align="center">
                                                    Itens
                                                </Typography>
                                                <ItemListWrapper>
                                                    {compra.itens && compra.itens.map((item) => {
                                                        return (
                                                            <ItensWrapper>
                                                                <ItensFieldsWrapper>
                                                                    <Typography
                                                                        variant="body2"
                                                                        color="textPrimary" component="div"
                                                                        align="left">
                                                                        Titulo:
                                                                    </Typography>
                                                                    {item.titulo.length > 15 ?
                                                                        <Tooltip
                                                                            title={item.titulo}>
                                                                            <Typography
                                                                                variant="body2"
                                                                                style={{
                                                                                    marginRight: 10,
                                                                                    marginLeft: 10
                                                                                }}
                                                                                color="textSecondary" component="div">
                                                                                {item.titulo.substring(0, 15)}...
                                                                            </Typography>
                                                                        </Tooltip>
                                                                        :
                                                                        <Typography
                                                                            variant="body2"
                                                                            style={{marginRight: 10, marginLeft: 10}}
                                                                            color="textSecondary" component="div">
                                                                            {item.titulo}
                                                                        </Typography>
                                                                    }
                                                                </ItensFieldsWrapper>
                                                                <ItensFieldsWrapper>
                                                                    <Typography
                                                                        variant="body2"
                                                                        color="textPrimary" component="div"
                                                                        align="left">
                                                                        Quantidade:
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        style={{marginRight: 10, marginLeft: 10}}
                                                                        color="textSecondary"
                                                                        component="div" align="left">
                                                                        {item.qtde}
                                                                    </Typography>
                                                                </ItensFieldsWrapper>
                                                                <ItensFieldsWrapper>
                                                                    <Typography
                                                                        variant="body2"
                                                                        style={{marginRight: 10, marginLeft: 10}}
                                                                        color="textPrimary"
                                                                        component="div" align="left">
                                                                        Preço:
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        color="textSecondary" component="div"
                                                                        align="left">
                                                                        {new Intl.NumberFormat("pt-BR", {
                                                                            style: 'currency',
                                                                            currency: 'BRL'
                                                                        }).format(item.preco)}
                                                                    </Typography>
                                                                </ItensFieldsWrapper>
                                                            </ItensWrapper>
                                                        )
                                                    })}
                                                </ItemListWrapper>
                                                {
                                                    compra.itensTroca ?
                                                        <div>
                                                            <Typography variant="body2" color="textPrimary"
                                                                        component="div"
                                                                        align="center">
                                                                Itens Trocados
                                                            </Typography>
                                                            <ItemListWrapper>
                                                                {compra.itensTroca && compra.itensTroca.map((item) => {
                                                                    return (
                                                                        <ItensWrapper>
                                                                            <ItensFieldsWrapper>
                                                                                <Typography

                                                                                    variant="body2"
                                                                                    color="textPrimary" component="div"
                                                                                    align="left">
                                                                                    Titulo:
                                                                                </Typography>
                                                                                {item.titulo.length > 15 ?
                                                                                    <Tooltip

                                                                                        title={item.titulo}>
                                                                                        <Typography

                                                                                            variant="body2"
                                                                                            style={{
                                                                                                marginRight: 10,
                                                                                                marginLeft: 10
                                                                                            }}
                                                                                            color="textSecondary"
                                                                                            component="div">
                                                                                            {item.titulo.substring(0, 15)}...
                                                                                        </Typography>
                                                                                    </Tooltip>
                                                                                    :
                                                                                    <Typography

                                                                                        variant="body2"
                                                                                        style={{
                                                                                            marginRight: 10,
                                                                                            marginLeft: 10
                                                                                        }}
                                                                                        color="textSecondary"
                                                                                        component="div">
                                                                                        {item.titulo}
                                                                                    </Typography>
                                                                                }
                                                                            </ItensFieldsWrapper>
                                                                            <ItensFieldsWrapper>
                                                                                <Typography

                                                                                    variant="body2"
                                                                                    color="textPrimary" component="div"
                                                                                    align="left">
                                                                                    Quantidade:
                                                                                </Typography>
                                                                                <Typography

                                                                                    variant="body2"
                                                                                    style={{
                                                                                        marginRight: 10,
                                                                                        marginLeft: 10
                                                                                    }}
                                                                                    color="textSecondary"
                                                                                    component="div"
                                                                                    align="left">
                                                                                    {item.qtde}
                                                                                </Typography>
                                                                            </ItensFieldsWrapper>
                                                                            <ItensFieldsWrapper>
                                                                                <Typography

                                                                                    variant="body2"
                                                                                    color="textPrimary" component="div"
                                                                                    align="left">
                                                                                    Preço:
                                                                                </Typography>
                                                                                <Typography

                                                                                    variant="body2"
                                                                                    style={{
                                                                                        marginRight: 10,
                                                                                        marginLeft: 10
                                                                                    }}
                                                                                    color="textSecondary"
                                                                                    component="div"
                                                                                    align="left">
                                                                                    {new Intl.NumberFormat("pt-BR", {
                                                                                        style: 'currency',
                                                                                        currency: 'BRL'
                                                                                    }).format(item.preco)}
                                                                                </Typography>
                                                                            </ItensFieldsWrapper>
                                                                        </ItensWrapper>
                                                                    )
                                                                })}
                                                            </ItemListWrapper>
                                                        </div>
                                                        :
                                                        <></>
                                                }

                                                {compra.pagamento && compra.pagamento.map((item) => {
                                                    return (
                                                        <ItensWrapper>
                                                            <Typography variant="body2" color="textPrimary"
                                                                        component="div"
                                                                        align="left">
                                                                numero do cartão:
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary"
                                                                        component="div">
                                                                {item.numero}
                                                            </Typography>
                                                            <Typography variant="body2" color="textPrimary"
                                                                        component="div"
                                                                        align="left">
                                                                valor:
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary"
                                                                        component="div"
                                                                        align="left">
                                                                {new Intl.NumberFormat("pt-BR", {
                                                                    style: 'currency',
                                                                    currency: 'BRL'
                                                                }).format(item.valor)}
                                                            </Typography>
                                                        </ItensWrapper>
                                                    )
                                                })}

                                                <Typography variant="body2" color="textPrimary" component="div"
                                                            align="left">
                                                    Total:
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="div"
                                                            align="left">
                                                    {new Intl.NumberFormat("pt-BR", {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    }).format(compra.total)}
                                                </Typography>

                                                {
                                                    compra.status === "APROVADO" || compra.status === "TROCADO" || compra.status === "ENTREGUE" ?
                                                        <DVS.StatusWrapper>
                                                            <Typography variant="subtitle1" color="textPrimary"
                                                                        align="left"
                                                                        gutterBottom>
                                                                status:
                                                            </Typography>
                                                            <GreenTextTypography
                                                                variant="subtitle1"> {compra.status}</GreenTextTypography>
                                                        </DVS.StatusWrapper>
                                                        :
                                                        <></>
                                                }
                                                {
                                                    compra.status === "REPROVADA" ?
                                                        <DVS.StatusWrapper>
                                                            <Typography variant="subtitle1" color="textPrimary"
                                                                        align="left"
                                                                        gutterBottom>
                                                                status:
                                                            </Typography>
                                                            <RedTextTypography
                                                                variant="subtitle1"> {compra.status}</RedTextTypography>
                                                        </DVS.StatusWrapper>
                                                        :
                                                        <></>
                                                }
                                                {
                                                    compra.status === "EM TRANSPORTE" || compra.status === "EM TROCA" || compra.status === "EM ANALISE DE TROCA" ?
                                                        <DVS.StatusWrapper>
                                                            <Typography variant="subtitle1" color="textPrimary"
                                                                        align="left"
                                                                        gutterBottom>
                                                                status:
                                                            </Typography>
                                                            <YellowTextTypography
                                                                variant="subtitle1"> {compra.status}</YellowTextTypography>
                                                        </DVS.StatusWrapper>
                                                        :
                                                        <></>
                                                }
                                            </CardContent>
                                            <AdressButtonWrapper>
                                                <CardActions style={{justifyContent: 'center'}}>
                                                    <Button
                                                        disabled={disabledTroca}
                                                        onClick={() => handleItensTroca(index)}
                                                        size="small"
                                                        variant="outlined"
                                                        color="secondary" fullWidth={true}>Devolver Livro</Button>
                                                </CardActions>
                                            </AdressButtonWrapper>
                                        </AdressWrapper>
                                    </Card>
                                </Wrapper>
                                {stateTrocaAnalise.length > 0 ?
                                    <Wrapper>
                                        {stateTrocaAnalise.map(trocaAnalise => {
                                            let valorTotal = 0
                                            if (compra.id === trocaAnalise.stateMotivoTroca.idCompra) {
                                                return (
                                                    <Card style={{margin: 4, width: 450}} variant="outlined">
                                                        <CardContent>
                                                            <Typography color="error" gutterBottom>
                                                                Em analise de troca
                                                            </Typography>
                                                            {trocaAnalise.copyStateTroca.map(item => {
                                                                valorTotal += item.preco * item.qtdeTroca
                                                                return (
                                                                    <ItensWrapper>
                                                                        <ItensFieldsWrapper>
                                                                            <Typography
                                                                                variant="body2"
                                                                                color="textPrimary"
                                                                                component="div"
                                                                                align="left">
                                                                                Titulo:
                                                                            </Typography>
                                                                            {item.titulo.length > 15 ?
                                                                                <Tooltip
                                                                                    title={item.titulo}>
                                                                                    <Typography
                                                                                        variant="body2"
                                                                                        style={{
                                                                                            marginRight: 10,
                                                                                            marginLeft: 10
                                                                                        }}
                                                                                        color="textSecondary"
                                                                                        component="div">
                                                                                        {item.titulo.substring(0, 15)}...
                                                                                    </Typography>
                                                                                </Tooltip>
                                                                                :
                                                                                <Typography
                                                                                    variant="body2"
                                                                                    style={{
                                                                                        marginRight: 10,
                                                                                        marginLeft: 10
                                                                                    }}
                                                                                    color="textSecondary"
                                                                                    component="div">
                                                                                    {item.titulo}
                                                                                </Typography>
                                                                            }
                                                                        </ItensFieldsWrapper>
                                                                        <ItensFieldsWrapper>
                                                                            <Typography
                                                                                variant="body2"
                                                                                color="textPrimary"
                                                                                component="div"
                                                                                align="left">
                                                                                Quantidade:
                                                                            </Typography>
                                                                            <Typography
                                                                                variant="body2"
                                                                                style={{
                                                                                    marginRight: 10,
                                                                                    marginLeft: 10
                                                                                }}
                                                                                color="textSecondary"
                                                                                component="div"
                                                                                align="left">
                                                                                {item.qtdeTroca}
                                                                            </Typography>
                                                                        </ItensFieldsWrapper>
                                                                        <ItensFieldsWrapper>
                                                                            <Typography
                                                                                variant="body2"
                                                                                style={{
                                                                                    marginRight: 10,
                                                                                    marginLeft: 10
                                                                                }}
                                                                                color="textPrimary"
                                                                                component="div"
                                                                                align="left">
                                                                                Preço:
                                                                            </Typography>
                                                                            <Typography
                                                                                variant="body2"
                                                                                color="textSecondary"
                                                                                component="div"
                                                                                align="left">
                                                                                {new Intl.NumberFormat("pt-BR", {
                                                                                    style: 'currency',
                                                                                    currency: 'BRL'
                                                                                }).format(item.preco)}
                                                                            </Typography>
                                                                        </ItensFieldsWrapper>
                                                                    </ItensWrapper>
                                                                )
                                                            })}
                                                            <ItensFieldsWrapper>
                                                            <Typography
                                                                variant="h6"
                                                                style={{marginRight: 10, marginLeft: 10}}
                                                                color="textSecondary"
                                                                align={"center"}
                                                                component="div">
                                                                Valor total:
                                                            </Typography>
                                                            <Typography
                                                                variant="h6"
                                                                style={{marginRight: 10, marginLeft: 10}}
                                                                color="textSecondary"
                                                                align={"center"}
                                                                component="div">
                                                                {new Intl.NumberFormat("pt-BR", {
                                                                    style: 'currency',
                                                                    currency: 'BRL'
                                                                }).format(valorTotal)}
                                                            </Typography>
                                                                </ItensFieldsWrapper>
                                                        </CardContent>
                                                    </Card>
                                                )
                                            } else {
                                                return (<></>)
                                            }
                                        })}
                                    </Wrapper>
                                    :
                                    <></>
                                }
                                <Card key={index + 1} hidden={compra.disabled} className={classes.root}
                                      style={{margin: 4, width: 450}}>
                                    <AdressWrapper>
                                        <CardContent>
                                            <ItemListWrapper>
                                                {stateTroca.map((item, index) => {
                                                    return (
                                                        <ItensTrocaWrapper>
                                                            <ItensFieldsWrapper>
                                                                <Typography variant="body2"
                                                                            color="textPrimary" component="div">
                                                                    Titulo:
                                                                </Typography>
                                                                {item.titulo.length > 15 ?
                                                                    <Tooltip
                                                                        title={item.titulo}>
                                                                        <Typography
                                                                            variant="body2"
                                                                            style={{marginRight: 10, marginLeft: 10}}
                                                                            color="textSecondary" component="div">
                                                                            {item.titulo.substring(0, 15)}...
                                                                        </Typography>
                                                                    </Tooltip>
                                                                    :
                                                                    <Typography
                                                                        variant="body2"
                                                                        style={{marginRight: 10, marginLeft: 10}}
                                                                        color="textSecondary" component="div">
                                                                        {item.titulo}
                                                                    </Typography>
                                                                }
                                                            </ItensFieldsWrapper>
                                                            <ItensFieldsPrecoQtdeWrapper>
                                                                <Typography
                                                                    variant="body2"
                                                                    style={{marginRight: 10, marginLeft: 10}}
                                                                    color="textPrimary"
                                                                    align={"left"}
                                                                    component="div">
                                                                    Preço:
                                                                </Typography>
                                                                <Typography
                                                                    variant="body2"
                                                                    style={{minWidth: 66}}
                                                                    align={"left"}
                                                                    color="textSecondary" component="div"
                                                                >
                                                                    {new Intl.NumberFormat("pt-BR", {
                                                                        style: 'currency',
                                                                        currency: 'BRL'
                                                                    }).format(item.preco)}
                                                                </Typography>
                                                                <FormControl style={{width: 80, marginLeft: 25}}>
                                                                    <InputLabel>Quantidade</InputLabel>
                                                                    <Select
                                                                        name="qtdeTroca"
                                                                        value={item.qtdeTroca}
                                                                        onChange={(event) => handleChangeFieldsTroca(event, index)}
                                                                        required
                                                                    >
                                                                        {menuItens(item.qtde).map((item) => {
                                                                            return (
                                                                                item
                                                                            )
                                                                        })}
                                                                    </Select>
                                                                </FormControl>
                                                            </ItensFieldsPrecoQtdeWrapper>
                                                        </ItensTrocaWrapper>
                                                    )
                                                })}
                                            </ItemListWrapper>
                                            <ItensFieldsWrapper style={{marginTop: 20}}>
                                                <Typography variant="h6"
                                                            color="textPrimary"
                                                            align={"center"}
                                                            component="div">
                                                    Valor total de devolução:
                                                </Typography>
                                                <Typography
                                                    variant="h6"
                                                    style={{marginRight: 10, marginLeft: 10}}
                                                    color="textSecondary"
                                                    align={"center"}
                                                    component="div">
                                                    {new Intl.NumberFormat("pt-BR", {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    }).format(handleValorTroca())}
                                                </Typography>
                                            </ItensFieldsWrapper>
                                            <FormControl style={{width: 220, marginTop: 25}} required>
                                                <InputLabel>Motivo da troca</InputLabel>
                                                <Select
                                                    name="motivoTroca"
                                                    value={stateMotivoTroca.motivoTroca}
                                                    onChange={(event) => handleChangeFieldsTroca(event, index)}
                                                >
                                                    {motivosTrocaList.map((item, index) => {
                                                        return (
                                                            <MenuItem key={index} value={item}>
                                                                <div key={item}>{item}</div>
                                                            </MenuItem>
                                                        )
                                                    })}
                                                </Select>
                                            </FormControl>
                                            {stateMotivoTroca.motivoTroca === "outros" ?
                                                <TextField
                                                    style={{minWidth: 418}}
                                                    name="descricaoTroca"
                                                    label="Descreva o motivo da troca"
                                                    type="text"
                                                    value={stateMotivoTroca.descricaoTroca}
                                                    onChange={(event) => handleChangeFieldsTroca(event, index)}
                                                    required
                                                    error={stateMotivoTroca.descricaoTroca === "" || stateMotivoTroca.descricaoTroca.length < 5}
                                                    helperText={stateMotivoTroca.descricaoTroca === "" || stateMotivoTroca.descricaoTroca.length < 5 ? "Descreva o motivo da sua requisição de devolução com pelo menos 5 letras." : ""}
                                                />
                                                :
                                                <></>
                                            }
                                        </CardContent>
                                        <CardActions style={{justifyContent: 'center'}}>
                                            <Button
                                                onClick={() => handleCancel(stateMotivoTroca.idCompra)}
                                                size="small"
                                                variant="outlined"
                                                color="secondary" fullWidth={true}>Cancelar</Button>
                                            <Button
                                                disabled={validateTroca()}
                                                onClick={() => handleSaveTroca(stateMotivoTroca.idCompra)}
                                                size="small"
                                                variant="outlined"
                                                color="secondary" fullWidth={true}>Devolver Livro(s)</Button>
                                        </CardActions>
                                    </AdressWrapper>
                                </Card>
                            </WrapperCards>
                        )
                    })}
                </Wrapper>
                :
                <NoDataWrapper>
                    <IconWrapper>
                        <ErrorOutlineIcon style={{fontSize: 100}} color="primary"/>
                    </IconWrapper>
                    <Typography variant="h3" color="textSecondary" gutterBottom>
                        Sem compras :(
                    </Typography>
                </NoDataWrapper>
            }
        </Wrapper>
    )
}
