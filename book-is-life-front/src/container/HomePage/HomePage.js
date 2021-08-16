import React, {Component} from "react";
import * as HPS from "./HomePageStyles";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from '../../router/index';
import Paper from '@material-ui/core/Paper';
import BookSimple from "../Components/Book Simple/BookSimple";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    consultarCarrinho,
    getEstoque,
    saveCarrinho,
    setCarrinho,
    setCliente,
    setEstoque,
    setSelectedProductIDAndPush,
    updateCarrinho
} from "../../Actions/index"
import Badge from '@material-ui/core/Badge';
import Pagination from '@material-ui/lab/Pagination';
import FadeIn from 'react-fade-in';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estoqueData: "",
            carrinhoData: "",
            carrinhoQtde: "",
            noOfPages: 0,
            page: 1,
            itemsPerPage: 10,
        };
    }

    async componentDidMount() {
        //await this.props.getEstoque()
        // await this.props.consultarCarrinho("00d6c7e9-515e-4913-8dc7-ffdd26e4446c")
        const {estoque, carrinho} = this.props
        let copyEstoque = estoque
        let Qtde = 0
        carrinho.forEach((item) => {
            Qtde = Qtde + item.qtde
        })

        this.setState({noOfPages: Math.ceil(copyEstoque.length / this.state.itemsPerPage)})
        this.setState({estoqueData: copyEstoque, carrinhoData: carrinho, carrinhoQtde: Qtde})
    }

    addToCart = async (id) => {

        if (this.props.carrinho.length === 0) {
            let newItem
            for (let i = 0; i < this.props.estoque.length; i++) {
                if (this.props.estoque[i].id_livro === id) {
                    newItem = {
                        cliente_id: "00d6c7e9-515e-4913-8dc7-ffdd26e4446c",
                        id_livro: this.props.estoque[i].id_livro,
                        titulo: this.props.estoque[i].titulo,
                        qtde: 1,
                        preco: this.props.estoque[i].custo + (this.props.estoque[i].custo * this.props.estoque[i].precificacao),
                        ativo: this.props.estoque[i].ativo
                    }
                    await this.props.saveCarrinho(newItem)
                }
            }
        }
        else{
            let newItem, qtde = 1
            this.props.carrinho.forEach(item => {
                if(id === item.id_livro){
                    qtde = item.qtde
                    qtde ++
                }
            })

            for (let i = 0; i < this.props.estoque.length; i++) {
                if (this.props.estoque[i].id_livro === id) {
                    newItem = {
                        cliente_id: "00d6c7e9-515e-4913-8dc7-ffdd26e4446c",
                        id_livro: this.props.estoque[i].id_livro,
                        titulo: this.props.estoque[i].titulo,
                        qtde: qtde,
                        preco: this.props.estoque[i].custo + (this.props.estoque[i].custo * this.props.estoque[i].precificacao),
                        ativo: this.props.estoque[i].ativo
                    }
                    await this.props.updateCarrinho(newItem)
                }
            }
        }
        await this.props.getEstoque()
        await this.props.consultarCarrinho("00d6c7e9-515e-4913-8dc7-ffdd26e4446c")
        const {estoque, carrinho} = this.props
        let copyEstoque = estoque
        let Qtde = 0
        carrinho.forEach((item) => {
            Qtde = Qtde + item.qtde
        })

        this.setState({estoqueData: copyEstoque, carrinhoData: carrinho, carrinhoQtde: Qtde})
    }
    updateCarrinho = async (id, qtde) => {
        const copyCarrinho = this.props.carrinho
        const copyEstoque = this.props.estoque
        if (copyCarrinho.length === 0) {
            copyEstoque.forEach(item => {
                if (copyCarrinho[0].id === item.id_livro) {
                    let itemAdd = {
                        cliente_id: "00d6c7e9-515e-4913-8dc7-ffdd26e4446c",
                        id_livro: item.id_livro,
                        titulo: item.titulo,
                        qtde: qtde,
                        preco: item.custo + (item.custo * item.precificacao)
                    }
                    this.props.saveCarrinho(itemAdd)
                }
            })
        } else {
            copyEstoque.forEach(item => {
                if (id === item.id_livro) {
                    let itemUpdate = {
                        cliente_id: "00d6c7e9-515e-4913-8dc7-ffdd26e4446c",
                        id_livro: item.id_livro,
                        titulo: item.titulo,
                        qtde: qtde,
                        preco: item.custo + (item.custo * item.precificacao)
                    }
                    this.props.updateCarrinho(itemUpdate)
                }
            })
        }
        await this.props.getEstoque()
        await this.props.consultarCarrinho("00d6c7e9-515e-4913-8dc7-ffdd26e4446c")
    }
    validarAtivo = (index) => {
        if (this.props.estoque[index].qtde === 0) {
            return false
        } else {
            return this.props.estoque[index].ativo
        }
    }
    handlePageChange = (event, val) => {
        this.setState({page: val});
    };

    render() {
        const {estoqueData, page, itemsPerPage, noOfPages} = this.state
        window.scrollTo(0, 0);
        return (
            <>
                <FadeIn>
                    <HPS.MainDiv>
                        <Paper elevation={3}>
                            <HPS.CustomHeader>
                                <HPS.HomeLogoWraper>
                                    <HPS.HomeLogo onClick={this.props.goToHomePage}><h3>aqui vai ficar o header</h3>
                                    </HPS.HomeLogo>
                                </HPS.HomeLogoWraper>
                                <HPS.HeaderLinks>
                                    <HPS.HeaderLink onClick={this.props.goToLoginPage}> Entrar </HPS.HeaderLink>
                                    <HPS.HeaderLink> Devoluções e Pedidos </HPS.HeaderLink>
                                    <HPS.HeaderLink> <Badge badgeContent={this.state.carrinhoQtde}
                                                            onClick={this.props.goToCartPage} color="secondary">
                                        <ShoppingCartIcon/>
                                    </Badge></HPS.HeaderLink>
                                </HPS.HeaderLinks>
                            </HPS.CustomHeader>
                        </Paper>

                        <HPS.BodyTitle>
                            aqui alguma coisa como titulo
                        </HPS.BodyTitle>
                        <HPS.Mid>

                            <HPS.HomePageProductWrapper>
                                {estoqueData && estoqueData.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => {

                                    return (
                                        <BookSimple key={index}
                                                    image={item.imagem}
                                                    title={item.titulo}
                                                    alt={item.titulo}
                                                    bookTitle={item.titulo}
                                                    author={item.autor}
                                                    ativo={this.validarAtivo(index)}
                                                    value={(item.custo + (item.custo * item.precificacao)).toFixed(2)}
                                                    onClickProduct={() => {
                                                        this.props.goToProductPage({productId: item.id_livro})
                                                    }}
                                                    onClickButtom={() => this.addToCart(item.id_livro)}
                                        />
                                    )
                                })}
                            </HPS.HomePageProductWrapper>

                            <Pagination
                                shape="rounded"
                                count={noOfPages}
                                page={page}
                                name="page"
                                onChange={this.handlePageChange}
                                defaultPage={1}
                                color="primary"
                                size="large"
                                showFirstButton
                                showLastButton
                            />
                        </HPS.Mid>


                        <Paper elevation={3}>
                            <HPS.Footer>
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
                            </HPS.Footer>
                        </Paper>
                    </HPS.MainDiv>
                </FadeIn>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    estoque: state.estoque.estoque,
    carrinho: state.vendas.carrinho,
    clientes: state.cliente.clientes,
})

function mapDispatchToProps(dispatch) {
    return {
        goToHomePage: () => dispatch(push(routes.HomePage)),
        goToLoginPage: () => dispatch(push(routes.LoginPage)),
        goToCartPage: () => dispatch(push(routes.CartPage)),
       //goToProductPage: (productId) => dispatch(setSelectedProductIDAndPush(productId)),
        setCarrinho: (carrinho) => dispatch(setCarrinho(carrinho)),
        setEstoque: (estoque) => dispatch(setEstoque(estoque)),
        setCliente: () => dispatch(setCliente()),
        getEstoque: () => dispatch(getEstoque()),
       // consultarCarrinho: (cliente_id) => dispatch(consultarCarrinho(cliente_id)),
        saveCarrinho: (item) => dispatch(saveCarrinho(item)),
        updateCarrinho: (item) => dispatch(updateCarrinho(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)