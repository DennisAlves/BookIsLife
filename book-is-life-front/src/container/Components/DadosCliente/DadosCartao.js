import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from "styled-components";
import Payment from "payment"
import {useSelector} from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
import MomentUtils from '@date-io/moment';
import {DatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import moment from "moment";
import "moment/locale/pt-br";
import Swal from "sweetalert2";
import FadeIn from "react-fade-in";

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
moment.locale('pt-br');

export default function DadosCartao(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        id: props.id,
        cvc: "",
        expiry: "",
        focused: "",
        name: "",
        number: "",
        disabled: true,
        newCreditCardDisable: true,
    })
    const [selectedDate, handleDateChange] = React.useState(null);
    const [stateCreditCards, setStateCreditCards] = React.useState([])
    let copyClientes = useSelector(state => state.cliente.clientes)

    if (stateCreditCards.length === 0) {
        copyClientes.forEach(cliente => {
            if (cliente.id === state.id) {
                cliente.cartoes.forEach(creditCard => {
                    if (creditCard.ativo) {
                        setStateCreditCards(creditCards => [...creditCards,
                            {
                                number: creditCard.numero,
                                name: creditCard.nome,
                                cvc: creditCard.cvv,
                                expiry: moment("01/" + creditCard.validade.month + "/" +
                                    creditCard.validade.year + "", "DD/MM/YY").format("DD/MM/YY"),
                                disabled: true,
                            }])
                    }
                })
            }
        })
    }
    const handleInputFocus = (e) => {
        const target = e.target;
        setState({
            ...state,
            focused: target.name,
        });
    };

    function handleChange(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });

        if (event.target.name === "name") {
            setState({
                ...state,
                name: value.replace(/[^a-zA-Z ]+/g, "").toUpperCase()
            });
        }
    }

    function validateCreditCard() {
        if (!Payment.fns.validateCardNumber(state.number.replace(/[_.]/g, "")) ||
            state.name.length < 5 || state.cvc.replace(/[_.]/g, "").length < 3 ||
            selectedDate === null || moment().isSameOrAfter(selectedDate)
        ) {
            return true
        } else {
            return false
        }
    }

    function handleEdit(index) {
        setState({
            ...state,
            number: stateCreditCards[index].number,
            name: stateCreditCards[index].name,
            cvc: stateCreditCards[index].cvc,
            expiry: stateCreditCards[index].expiry,
            disabled: true,
        });
        handleDateChange(moment(stateCreditCards[index].expiry,"DD/MM/YY"))

        let newArr = [...stateCreditCards];

        newArr.forEach(creditCard => {
            if (creditCard.disabled === false) {
                creditCard.disabled = true
            }
        })

        newArr[index].disabled = false

        setStateCreditCards(newArr)
    }

    function handleSave(index) {
        let newArr = [...stateCreditCards]
        newArr[index].number = state.number
        newArr[index].name = state.name
        newArr[index].cvc = state.cvc
        newArr[index].expiry = selectedDate.format('DD/MM/YY')
        newArr[index].disabled = true
        setStateCreditCards(newArr)
    }

    function handleExcluir(index) {
        let copyArr = [...stateCreditCards];

        Swal.fire({
            title: 'Deseja deletar esse Cartão?',
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
                setStateCreditCards(newArray)
                Swal.fire('Deletado!', '', 'success')
            }
        })

    }

    function handleSaveCreditiCard() {
        let newArr = [...stateCreditCards];
        newArr.push({
            number: state.number.replace(/[_.]/g, ""),
            name: state.name,
            cvc: state.cvc,
            expiry: selectedDate.format('DD/MM/YY'),
            disabled: true,
        })

        setStateCreditCards(newArr)

        setState({
            ...state,
            newCreditCardDisable: true
        })
    }

    const handleNewCreditCardCancel = () => {
        setState({
            ...state,
            newCreditCardDisable: true
        })
    }

    function showNewCreditCard() {
        setState({
            ...state,
            cvc: "",
            expiry: "",
            focused: "",
            name: "",
            number: "",
            newCreditCardDisable: false,
        })
        handleDateChange(null)
    }

    return (
        <FadeIn>
            {!state.newCreditCardDisable ?
                <Wrapper>
                    <Card className={classes.root}
                          style={{margin: 4}}>
                        <CardContent>
                            <Cards
                                locale={{valid: "Valido até"}}
                                placeholders={{name: "Nome"}}
                                cvc={state.cvc}
                                expiry={selectedDate ?
                                    selectedDate.format("DD/MM/YY").substring(3)
                                    :
                                    ""
                                }
                                focused={state.focused}
                                name={state.name}
                                number={state.number.replace(/[-_.]/g, "")}
                            />
                            <EditFieldsWrapper>
                                <InputMask
                                    mask={"9999.9999.9999.9999"}
                                    onKeyUp={handleChange}
                                    onFocus={handleInputFocus}
                                    style={{margin: 5}}
                                >
                                    <TextField
                                        type="tel"
                                        name="number"
                                        placeholder="Numero do Cartão *"
                                        required
                                        error={!Payment.fns.validateCardNumber(state.number.replace(/[-_.]/g, "")) &&
                                        state.number !== ""}
                                        helperText={!Payment.fns.validateCardNumber(state.number.replace(/[-_.]/g, "")) &&
                                        state.number !== "" ? "o numero digitado é invalido" : ""}
                                    />
                                </InputMask>

                                <TextField
                                    style={{margin: 5}}
                                    type="text"
                                    name="name"
                                    placeholder="Nome *"
                                    onKeyUp={handleChange}
                                    onFocus={handleInputFocus}
                                    required
                                    error={state.name.length < 5 && state.name !== ""}
                                    helperText={state.name.length < 5 && state.name !== "" ? "o nome digitado é invalido" : ""}
                                />

                                <MuiPickersUtilsProvider
                                    libInstance={moment}
                                    utils={MomentUtils}
                                    locale={'pt-br'}>
                                    <DatePicker
                                        style={{margin: 5}}
                                        name="expiry"
                                        value={selectedDate}
                                        onFocus={handleInputFocus}
                                        onChange={date => handleDateChange(date)}
                                        placeholder="Validade"
                                        variant="dialog"
                                        format="MM/YY"
                                        views={["year", "month"]}
                                        disablePast={true}
                                        minDateMessage={"Data de vencimento inferior a data atual"}
                                        required
                                    />
                                </MuiPickersUtilsProvider>

                                <InputMask
                                    mask={"999"}
                                    onKeyUp={handleChange}
                                    onFocus={handleInputFocus}
                                    style={{margin: 5}}
                                >
                                    <TextField
                                        type="tel"
                                        name="cvc"
                                        placeholder="CVC *"
                                        required
                                    />
                                </InputMask>
                            </EditFieldsWrapper>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button
                                onClick={() => handleNewCreditCardCancel()}
                                size="small"
                                variant="outlined"
                                color="secondary"
                                fullWidth={true}>Cancelar</Button>
                            <Button
                                disabled={validateCreditCard()}
                                onClick={() => handleSaveCreditiCard()}
                                size="small"
                                variant="outlined"
                                color="secondary"
                                fullWidth={true}>Salvar</Button>
                        </CardActions>
                    </Card>
                </Wrapper>
                :
                <WrapperCards>
                    {stateCreditCards.map((creditCard, index) => {
                        return (
                            <Wrapper>
                                <Card key={index} hidden={!creditCard.disabled} className={classes.root}
                                      style={{margin: 4}}>
                                    <CardContent>
                                        <Cards
                                            locale={{valid: "Valido até"}}
                                            placeholders={{name: "Nome"}}
                                            cvc={creditCard.cvc}
                                            expiry={creditCard.expiry.substring(3)}
                                            name={creditCard.name}
                                            number={creditCard.number}
                                        />
                                    </CardContent>
                                    <CardActions style={{justifyContent: 'center'}}>
                                        <Button
                                            onClick={() => handleEdit(index)}
                                            size="small"
                                            variant="outlined"
                                            color="secondary"
                                            fullWidth={true}>Editar</Button>
                                        <Button
                                            onClick={() => handleExcluir(index)}
                                            size="small"
                                            variant="outlined"
                                            color="secondary"
                                            fullWidth={true}>Excluir</Button>
                                    </CardActions>
                                </Card>
                                <Card key={index + 1} hidden={creditCard.disabled} className={classes.root}
                                      style={{margin: 4}}>
                                    <CardContent>
                                        <EditFieldsWrapper>
                                            <InputMask
                                                mask={"9999.9999.9999.9999"}
                                                value={state.number}
                                                onChange={handleChange}
                                                style={{margin: 5}}
                                            >
                                                <TextField
                                                    type="tel"
                                                    name="number"
                                                    label="Numero do Cartão"
                                                    placeholder="Numero do Cartão"
                                                    required
                                                    error={!Payment.fns.validateCardNumber(state.number.replace(/[-_.]/g, "")) &&
                                                    state.number !== ""}
                                                    helperText={!Payment.fns.validateCardNumber(state.number.replace(/[-_.]/g, "")) &&
                                                    state.number !== "" ? "o numero digitado é invalido" : ""}
                                                />
                                            </InputMask>

                                            <TextField
                                                style={{margin: 5}}
                                                type="text"
                                                name="name"
                                                label="Nome"
                                                placeholder="Nome"
                                                value={state.name}
                                                onChange={handleChange}
                                                required
                                                error={state.name.length < 5 && state.name !== ""}
                                                helperText={state.name.length < 5 && state.name !== "" ? "o nome digitado é invalido" : ""}
                                            />
                                            <MuiPickersUtilsProvider
                                                libInstance={moment}
                                                utils={MomentUtils}
                                                locale={'pt-br'}>
                                                <DatePicker
                                                    style={{margin: 5}}
                                                    name="expiry"
                                                    value={selectedDate ?
                                                        selectedDate
                                                            :
                                                            ""
                                                    }
                                                    onChange={date => handleDateChange(date)}
                                                    label="Validade"
                                                    placeholder="Validade"
                                                    variant="dialog"
                                                    format="MM/YY"
                                                    views={["year", "month"]}
                                                    disablePast={true}
                                                    minDateMessage={"Data de vencimento inferior a data atual"}
                                                    required
                                                />
                                            </MuiPickersUtilsProvider>

                                            <InputMask
                                                mask={"999"}
                                                value={state.cvc}
                                                onChange={handleChange}
                                                style={{margin: 5}}
                                            >
                                                <TextField
                                                    type="tel"
                                                    name="cvc"
                                                    label="CVC"
                                                    placeholder="CVC"
                                                    required
                                                />
                                            </InputMask>
                                        </EditFieldsWrapper>
                                    </CardContent>
                                    <CardActions style={{justifyContent: 'center'}}>
                                        <Button
                                            disabled={validateCreditCard()}
                                            onClick={() => handleSave(index)}
                                            size="small"
                                            variant="outlined"
                                            color="secondary"
                                            fullWidth={true}>Salvar</Button>
                                    </CardActions>
                                </Card>

                            </Wrapper>
                        )
                    })}
                    <Button
                        onClick={() => showNewCreditCard()}
                        size="small" variant="outlined" color="primary"
                        style={{marginTop: 25, marginLeft: 25, height: 40}}
                    >Novo Cartão</Button>
                </WrapperCards>
            }
        </FadeIn>
    );
}
