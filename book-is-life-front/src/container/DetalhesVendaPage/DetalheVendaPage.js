import React, {Component} from "react";
import * as DVS from "./DetalhesVendaPageStyles";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from '../../router';
import Typography from "@material-ui/core/Typography";
import {setCarrinho, setEstoque, setVendas} from "../../Actions";
import {withStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import {FormHelperText} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import FadeIn from 'react-fade-in';

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

class DetalhesVendaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venda: "",
            endereco: "",
            vendas: "",
            pagamentos: "",
            itensTroca: "",
            valueSelect: "",
            totalVenda: "",
            totalTroca: "",
        };
    }

    async componentDidMount() {
        this.handleChangeState()
    };

    handleChangeState = () => {
        let vendaData = ""
        this.props.vendas.forEach(item => {
            if (item.id === this.props.vendaId) {
                vendaData = item
            }
        })
        console.log(this.props.vendaId)
        let endereco = {}
        let vendas = []
        let itensTroca = []
        let pagamentos = []
        let totalVenda = 0
        let totalTroca = 0
        endereco.descricao = vendaData.enderecoDeEntrega.descricao
        endereco.logradouro = vendaData.enderecoDeEntrega.tipoLogradouro.nomeTipo
        endereco.tipoResidencia = vendaData.enderecoDeEntrega.tipoResidencia.nomeTipo
        endereco.endereco = vendaData.enderecoDeEntrega.endereco
        endereco.numero = vendaData.enderecoDeEntrega.numero
        endereco.bairro = vendaData.enderecoDeEntrega.bairro
        endereco.cep = vendaData.enderecoDeEntrega.cep
        endereco.cidade = vendaData.enderecoDeEntrega.cidade.nome
        endereco.uf = vendaData.enderecoDeEntrega.cidade.estado.uf
        endereco.complemento = vendaData.enderecoDeEntrega.complemento

        vendaData.itens.forEach(item => {
            let venda = {}
            venda.id = item.id
            venda.titulo = item.titulo
            venda.qtde = item.qtde
            venda.preco = new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(item.preco)
            vendas.push(venda)
        })

        vendaData.itens.forEach(item => {
            totalVenda += item.preco * item.qtde
        })
        console.log(vendaData.itens)
        totalVenda = new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(totalVenda)

        if (vendaData.itensTroca) {
            vendaData.itensTroca.forEach(item => {
                let venda = {}
                venda.id = item.id
                venda.titulo = item.titulo
                venda.qtde = item.qtde
                venda.preco = new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(item.preco)
                itensTroca.push(venda)
            })
            vendaData.itensTroca.forEach(item => {
                totalTroca += item.preco * item.qtde
            })
            totalTroca = new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(totalTroca)
        }


        vendaData.pagamento.forEach(item => {
            let pagamento = {}
            pagamento.numero = item.numero
            pagamento.valor = new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(item.valor)
            pagamentos.push(pagamento)
        })

        this.setState({
            venda: vendaData,
            endereco: endereco,
            vendas: vendas,
            pagamentos: pagamentos,
            itensTroca: itensTroca,
            totalVenda: totalVenda,
            totalTroca: totalTroca,
        })
    }
    handleChangeSelect = (event) => {
        this.setState({valueSelect: event.target.value})
    }
    menuItem = (menuItens) => {
        let arr = [];
        for (let i = 1; i < menuItens.length; i++) {
            arr.push(<MenuItem style={{fontSize: 15}} key={menuItens[i]}
                               value={menuItens[i]}> {menuItens[i].toLowerCase()} </MenuItem>)
        }
        return arr;
    }
    handleChangeStatus = () => {
        let copyVendas = this.props.vendas
        copyVendas.forEach(item => {
            if (item.id === this.props.vendaId) {
                item.status = this.state.valueSelect
            }
        })
        this.props.setVendas(copyVendas)
        this.setState({valueSelect: ""})
        this.handleChangeState()
        window.scrollTo(0, 0)
    }

    render() {
        const {venda, endereco, pagamentos, vendas, itensTroca, valueSelect, totalVenda, totalTroca} = this.state
        const menuItem = ["APROVADO", "TROCADO", "REPROVADA", "ENTREGUE", "EM TRANSPORTE", "EM TROCA"]
        return (
            <FadeIn>
                <DVS.MainDiv>
                    <Paper elevation={3}>
                        <DVS.CustomHeader>
                            <DVS.HomeLogoWraper>
                                <DVS.HomeLogo onClick={this.props.goToHomePage}><h3>aqui vai ficar o header</h3>
                                </DVS.HomeLogo>
                            </DVS.HomeLogoWraper>
                            <DVS.HeaderLinks>
                            </DVS.HeaderLinks>
                        </DVS.CustomHeader>
                    </Paper>
                    <DVS.Mid>
                        <DVS.StatusWrapper>
                            {
                                venda.status === "APROVADO" || venda.status === "TROCADO" || venda.status === "ENTREGUE" ?
                                    <DVS.StatusWrapper>
                                        <Typography variant="subtitle1" color="textPrimary" align="left" gutterBottom>
                                            status:
                                        </Typography>
                                        <GreenTextTypography variant="subtitle1"> {venda.status}</GreenTextTypography>
                                    </DVS.StatusWrapper>
                                    :
                                    <></>
                            }
                            {
                                venda.status === "REPROVADA" ?
                                    <DVS.StatusWrapper>
                                        <Typography variant="subtitle1" color="textPrimary" align="left" gutterBottom>
                                            status:
                                        </Typography>
                                        <RedTextTypography variant="subtitle1"> {venda.status}</RedTextTypography>
                                    </DVS.StatusWrapper>
                                    :
                                    <></>
                            }
                            {
                                venda.status === "EM TRANSPORTE" || venda.status === "EM TROCA" ?
                                    <DVS.StatusWrapper>
                                        <Typography variant="subtitle1" color="textPrimary" align="left" gutterBottom>
                                            status:
                                        </Typography>
                                        <YellowTextTypography variant="subtitle1"> {venda.status}</YellowTextTypography>
                                    </DVS.StatusWrapper>
                                    :
                                    <></>
                            }
                        </DVS.StatusWrapper>
                        <DVS.TitleWrapper>
                            <DVS.DataWrapper>
                                <Typography variant="subtitle1" color="textPrimary" align="left" gutterBottom>
                                    Data: {moment(venda.data, "MM-DD-YYYY, hh:mm:ss", true).format("DD/MM/YYYY hh:mm:ss")}
                                </Typography>
                            </DVS.DataWrapper>
                            <DVS.IdWrapper>
                                <Typography variant="subtitle1" color="textPrimary" align="left" gutterBottom>
                                    Id: {venda.id}
                                </Typography>
                                <Typography variant="subtitle1" color="textPrimary" align="left" gutterBottom>
                                    Id do Cliente: {venda.id}
                                </Typography>
                            </DVS.IdWrapper>
                        </DVS.TitleWrapper>
                        <DVS.AdressWrapper>
                            <Paper elevation={3}>
                                <Typography style={{marginLeft: 20}} variant="subtitle1" color="textPrimary"
                                            align="left" gutterBottom>
                                    Endereco de entrega
                                </Typography>
                                <Typography style={{marginLeft: 20}} variant="subtitle1" color="textPrimary"
                                            align="left" gutterBottom>
                                    {endereco.logradouro}: {endereco.endereco}, {endereco.numero}, {endereco.bairro}, {endereco.cidade} - {endereco.uf} cep: {endereco.cep}
                                </Typography>
                            </Paper>
                        </DVS.AdressWrapper>
                        <DVS.ItensWrapper>
                            <Paper elevation={3}>
                                <Typography style={{marginLeft: 20}} variant="subtitle1" color="textPrimary"
                                            align="left" gutterBottom>
                                    Livros Vendidos
                                </Typography>
                                <DVS.ItensListWrapper>
                                    {vendas && vendas.map((item, index) => {
                                        return (
                                            <DVS.BookWrapper key={Math.floor(Math.random() * (index + 1000))}>
                                                <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                            variant="subtitle1"
                                                            color="textPrimary" align="left" gutterBottom>
                                                    id: {item.id}
                                                </Typography>
                                                <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                            variant="subtitle1"
                                                            color="textPrimary" align="left" gutterBottom>
                                                    Titulo: {item.titulo}
                                                </Typography>
                                                <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                            variant="subtitle1"
                                                            color="textPrimary" align="left" gutterBottom>
                                                    Quantidade: {item.qtde}
                                                </Typography>
                                                <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                            variant="subtitle1"
                                                            color="textPrimary" align="left" gutterBottom>
                                                    preço: {item.preco}
                                                </Typography>
                                            </DVS.BookWrapper>
                                        )
                                    })}

                                </DVS.ItensListWrapper>
                                <Typography style={{marginLeft: 20}} variant="subtitle1" color="textPrimary"
                                            align="left" gutterBottom>
                                    Total: {totalVenda}
                                </Typography>
                            </Paper>
                        </DVS.ItensWrapper>


                        {itensTroca.length > 0 ?
                            <DVS.ItensWrapper>
                                <Paper elevation={3}>
                                    <Typography style={{marginLeft: 20}} variant="subtitle1" color="textPrimary"
                                                align="left" gutterBottom>
                                        Items para troca
                                    </Typography>
                                    <DVS.ItensListWrapper>
                                        {itensTroca && itensTroca.map((item, index) => {
                                            return (
                                                <DVS.BookWrapper key={Math.floor(Math.random() * (index + 1000))}>
                                                    <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                                variant="subtitle1"
                                                                color="textPrimary" align="left" gutterBottom>
                                                        id: {item.id}
                                                    </Typography>
                                                    <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                                variant="subtitle1"
                                                                color="textPrimary" align="left" gutterBottom>
                                                        Titulo: {item.titulo}
                                                    </Typography>
                                                    <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                                variant="subtitle1"
                                                                color="textPrimary" align="left" gutterBottom>
                                                        Quantidade: {item.qtde}
                                                    </Typography>
                                                    <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                                variant="subtitle1"
                                                                color="textPrimary" align="left" gutterBottom>
                                                        preço: {item.preco}
                                                    </Typography>
                                                </DVS.BookWrapper>
                                            )
                                        })}
                                    </DVS.ItensListWrapper>
                                    <Typography style={{marginLeft: 20}} variant="subtitle1" color="textPrimary"
                                                align="left" gutterBottom>
                                        Total Troca: {totalTroca}
                                    </Typography>
                                </Paper>
                            </DVS.ItensWrapper>

                            :
                            <></>
                        }
                        <DVS.PaymentsWrapper>
                            <Paper elevation={3}>
                                <Typography variant="subtitle1"
                                            style={{marginLeft: 20}}
                                            color="textPrimary" align="left" gutterBottom>
                                    Pagamento
                                </Typography>
                                <DVS.PaymentListWrapper>
                                    {pagamentos && pagamentos.map((item, index) => {
                                        return (
                                            <DVS.CardWrapper key={Math.floor(Math.random() * (index + 1000))}>
                                                <Typography key={Math.floor(Math.random() * (index + 1000))}
                                                            variant="subtitle1"
                                                            color="textPrimary" align="left" gutterBottom>
                                                    numero do cartão: {item.numero} valor: {item.valor}
                                                </Typography>
                                            </DVS.CardWrapper>
                                        )
                                    })}
                                </DVS.PaymentListWrapper>
                            </Paper>
                        </DVS.PaymentsWrapper>
                        <DVS.ChangeStatusWrapper>
                            <DVS.SelectWrapper>
                                <FormControl size="small">
                                    <InputLabel>Mudar Status</InputLabel>
                                    <Select
                                        value={valueSelect}
                                        onChange={(e) => {
                                            this.handleChangeSelect(e)
                                        }}
                                        autoWidth
                                    >
                                        {this.menuItem(menuItem)}
                                    </Select>
                                    <FormHelperText>Atualiza a situação da venda</FormHelperText>
                                </FormControl>
                            </DVS.SelectWrapper>

                            <DVS.ButtonWrapper>
                                {
                                    valueSelect ?
                                        <Button onClick={() => {
                                            this.handleChangeStatus()
                                        }} variant="contained" color="primary"> Atualizar </Button>
                                        :
                                        <></>
                                }
                            </DVS.ButtonWrapper>

                        </DVS.ChangeStatusWrapper>
                    </DVS.Mid>
                </DVS.MainDiv>
            </FadeIn>
        );
    }
}

const mapStateToProps = (state) => ({
    estoque: state.estoque.estoque,
    vendas: state.vendas.vendas,
    vendaId: state.vendas.vendaId,
})

function mapDispatchToProps(dispatch) {
    return {
        goToHomePage: () => dispatch(push(routes.HomePage)),
        setCarrinho: (carrinho) => dispatch(setCarrinho(carrinho)),
        setEstoque: (estoque) => dispatch(setEstoque(estoque)),
        setVendas: (vendas) => dispatch(setVendas(vendas)),
        goToCartPage: () => dispatch(push(routes.CartPage)),
        goToLoginPage: () => dispatch(push(routes.LoginPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalhesVendaPage)

