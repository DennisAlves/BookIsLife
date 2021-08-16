import axios from 'axios'
import {push} from "connected-react-router";
import {routes} from "../router/index";


export const setCliente = (clientes) => ({
    type: 'CLIENTE_UPDATE_VALUE',
    payload: {
        clientes
    }
})
export const setEstoque = (estoque) =>({
    type: 'ESTOQUE_UPDATE_VALUE',
    payload: {
        estoque
    }
})
export const setCarrinho = (carrinho) =>({
    type: 'CARRINHO_UPDATE_VALUE',
    payload: {
        carrinho
    }
})
export const setCarrinhoVenda = (carrinhoVenda) =>({
    type: 'CARRINHO_VENDA_UPDATE_VALUE',
    payload: {
        carrinhoVenda
    }
})
export const setProductId = (productId) => ({
    type: 'PRODUCT_ID_UPDATE_VALUE',
    payload: {
        productId
    }
})
export const setVendaId = (vendaId) => ({
    type: 'VENDA_ID_UPDATE_VALUE',
    payload: {
        vendaId
    }
})
export const setVendas = (vendas) => ({
    type: 'VENDAS_UPDATE_VALUE',
    payload: {
        vendas
    }
})
export const setCupons = (cupons) => ({
    type: 'CUPONS_UPDATE_VALUE',
    payload: {
        cupons
    }
})
export const setPedidosDeTroca = (pedidosDeTroca) => ({
    type: 'PEDIDOS_DE_TROCA_UPDATE_VALUE',
    payload: {
        pedidosDeTroca
    }
})
export const setClienteDetails = (clienteDetails) => ({
    type: 'CLIENTE_DETAILS_UPDATE_VALUE',
    payload: {
        clienteDetails
    }
})
export const setClienteId = (clienteId) => ({
    type: 'CLIENTE_ID_UPDATE_VALUE',
    payload: {
        clienteId
    }
})
export const setTipoDocumento = (tipoDocumento) => ({
    type: 'TIPO_DOCUMENTO_UPDATE_VALUE',
    payload: {
        tipoDocumento
    }
})
export const setTipoLogradouro = (tipoLogradouro) => ({
    type: 'TIPO_LOGRADOURO_UPDATE_VALUE',
    payload: {
        tipoLogradouro
    }
})
export const setEndereco = (enderecos) => ({
    type: 'ENDERECO_UPDATE_VALUE',
    payload: {
        enderecos
    }
})


export const saveCarrinho = (item) => async () => {
    try {
        await axios.post(`http://localhost:3001/carrinho/add-carrinho`, item)
    } catch (error) {

        alert('Erro ao tentar cria carrinho')
    }
}

export const updateCarrinho = (item) => async () => {
    try {
        await axios.post(`http://localhost:3001/carrinho/update-carrinho`, item)

    } catch (error) {
        console.log(error)
        alert('Erro ao tentar atualizar carrinho')
    }
}

export const salvarVenda = (venda) => async () => {
    try {
        await axios.post(`http://localhost:3001/venda/add-venda`, venda)

    } catch (error) {
        console.log(error)
        alert('Erro ao tentar criar venda')
    }
}

export const consultarCarrinho = (cliente_id) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:3001/carrinho/consultar-carrinho`, cliente_id)

        let formatedData = []

        for(let i=0; i < response.data.consulta.length; i++) {
            let item ={
                id_item: response.data.consulta[i][0].id_item,
                data_criacao: response.data.consulta[i][0].data_criacao,
                id_livro: response.data.consulta[i][0].id_livro,
                titulo: response.data.consulta[i][0].titulo,
                qtde: response.data.consulta[i][0].qtde,
                preco: response.data.consulta[i][0].preco,
                ativo: response.data.consulta[i][0].data_criacao
            }
            formatedData.push(item)
        }
        dispatch(setCarrinho(formatedData))
    } catch (error) {
        console.log(error)
        alert('Erro ao tentar consultar carrinho')
    }

}

export const consultarCupons = () =>async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/cupom/consultar-cupom`)

    let formatedData = []

    for(let i=0; i < response.data.consulta.length; i++) {
        let item ={
            id_cupom: response.data.consulta[i].id_cupom,
            data_criacao: response.data.consulta[i].data_criacao,
            nome: response.data.consulta[i].nome,
            valor: response.data.consulta[i].valor,
            qtde: response.data.consulta[i].qtde,
            validade: response.data.consulta[i].validade,
            tipo: response.data.consulta[i].tipo

        }
        formatedData.push(item)
    }
    dispatch(setCupons(formatedData))
}


export const getCliente = () => async (dispatch) => {

    try {
        const response = await axios.post(`http://localhost:3001/cliente/consultar-cliente`)
        dispatch(setCliente(response.data.consulta))
    } catch (error) {
        console.log(error)
        alert('Erro ao tentar adquirir lista de cllientes')
    }
}

export const getClienteDetails = (clienteId) => async (dispatch) => {

    try {
        const response = await axios.post(`http://localhost:3001/cliente/consultar-cliente`, clienteId)
        dispatch(setClienteDetails(response.data.consulta[0]))
    } catch (error) {
        console.log(error)
        alert('Erro ao tentar adquirir cliente')

    }
}


export const setSelectedClienteIDAndPush = (clienteID) => async (dispatch) => {
    dispatch(setClienteId(clienteID))
    dispatch(push(routes.UserPage))
}
export const setSelectedProductIDAndPush = (productID) => async (dispatch) => {
    dispatch(setProductId(productID))
    dispatch(push(routes.ProductPage))
}
export const setSelectedVendaIDAndPush = (vendaId) => async (dispatch) => {
    dispatch(setVendaId(vendaId))
    dispatch(push(routes.DetalheVendaPage))
}

export const getTipoDocumento = () => async (dispatch) => {

    try {
        const response = await axios.get(`http://localhost:3001/tipo-documento/consultar-tipo-documento`)
        dispatch(setTipoDocumento(response.data.consulta))

    } catch (error) {
        console.log(error)
        alert('Erro ao tentar adquirir lista de tipo de documentos')

    }
}

export const getTipoLogradouro = () => async (dispatch) => {

    try {
        const response = await axios.get(`http://localhost:3001/tipo-logradouro/consultar-tipo-logradouro`)
        dispatch(setTipoLogradouro(response.data.consulta))
    } catch (error) {
        console.log(error)
        alert('Erro ao tentar adquirir lista de tipo de logradouro')

    }
}

export const createCliente = (clienteData) => async (dispatch) => {

    try{
        await axios.post(`http://localhost:3001/cliente/add-cliente`, clienteData)

        alert('Cliente criado com sucesso!')
        dispatch(push(routes.HomePage))
    }catch (e) {
        console.log(e)
        alert('Erro ao tentar criar cliente')
    }
}

export const getEstoque = () => async (dispatch) => {

    try {
        const response = await axios.post(`http://localhost:3001/livro/consultar-livro`)
        dispatch(setEstoque(response.data.consulta))
    } catch (error) {
        console.log(error)
        alert('Erro ao tentar adquirir estoque')
    }
}

