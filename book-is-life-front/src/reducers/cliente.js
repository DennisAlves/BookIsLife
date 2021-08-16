const initialState = {
    clienteId: "",
    clientes: [
        {
            "id": "00d6c7e9-515e-4913-8dc7-ffdd26e4446c",
            "dtCadastro": "2021-03-02 08:28:35",
            "nome": "Dennis Francisco Alves",
            "dtNascimento": "1983-09-20",
            "documentos": [
                {
                    "id": "",
                    "dtCadastro": "",
                    "codigo": "32132165465464",
                    "validade": "2025-05-06",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "asdqweQ1!",
            "email": "dennis.alves@outlook.com",
            "enderecos": [
                {
                    "id": "",
                    "dtCadastro": "",
                    "descricao": "huedereço",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Francisco Rodrigues Filho",
                    "numero": "354",
                    "bairro": "Vila Mogilar",
                    "cep": "08773-380",
                    "cidade": {
                        "nome": "Mogi das Cruzes",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "apto 58 - bloco azaleia",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "id": "",
                    "dtCadastro": "",
                    "numero": "4040250009162202",
                    "nome": "Dennis Francisco Alves",
                    "validade": "15/25",
                    "cvv": "321",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "id": "",
                    "dtCadastro": "",
                    "ddd": "11",
                    "numero": "995327822",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    },
                    "ativo": 1
                }
            ],
            "tipoCliente": "teste",
            "ativo": 1
        },
        {
            "id": "53c1e909-2742-42e5-81fa-99bc5e23ff29",
            "dtCadastro": "01-19-2021, 08:36:24",
            "nome": "Bossk",
            "dtNascimento": "2021-03-22",
            "documentos": [
                {
                    "codigo": "612.144.125-99",
                    "validade": "2021-03-02",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "362121762",
                    "validade": "2021-03-07",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "26141121163",
                    "validade": "2021-02-04",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "2imGy2u3",
            "email": "Bossk@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "",
                    "numero": 772,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Vitória",
                    "numero": 924,
                    "bairro": "Chácara Brasil",
                    "cep": "65066883",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Manoel Pereira da Silva",
                    "numero": 16,
                    "bairro": "Parque das Nascentes",
                    "cep": "83327020",
                    "cidade": {
                        "nome": "Pinhais",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 138,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5276714258997388",
                    "nome": "Padmé Amidala",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "038",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5558204435176584",
                    "nome": "Dud Bolt",
                    "validade": {
                        "month": "08",
                        "year": "26"
                    },
                    "cvv": "360",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4792877029955239",
                    "nome": "Jocasta Nu",
                    "validade": {
                        "month": "09",
                        "year": "23"
                    },
                    "cvv": "546",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "94",
                    "numero": "78082578",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "7c9444e5-d7f1-4eab-b497-30678c9fe809",
            "dtCadastro": "01-22-2021, 05:25:27",
            "nome": "Dooku",
            "dtNascimento": "2020-12-08",
            "documentos": [
                {
                    "codigo": "550.513.747-43",
                    "validade": "2021-01-03",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "504161240",
                    "validade": "2020-12-01",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "96164268057",
                    "validade": "2021-02-19",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "5Gtz1pZu",
            "email": "Dooku@outlook.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 879,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Grêmio",
                    "numero": 590,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 978,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 210,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4573299185749725",
                    "nome": "Beru Whitesun lars",
                    "validade": {
                        "month": 12,
                        "year": "25"
                    },
                    "cvv": "700",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4978835432554433",
                    "nome": "Darth Maul",
                    "validade": {
                        "month": 10,
                        "year": "24"
                    },
                    "cvv": "645",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "51",
                    "numero": "42805526",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "52",
                    "numero": "68253585",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "23",
                    "numero": "980540906",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "efd055b3-b353-4416-a17b-ba423ced68e4",
            "dtCadastro": "01-10-2021, 09:21:48",
            "nome": "Nien Nunb",
            "dtNascimento": "2020-12-01",
            "documentos": [
                {
                    "codigo": "711.333.882-80",
                    "validade": "2021-02-05",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "522153047",
                    "validade": "2021-03-05",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "11254848774",
                    "validade": "2021-03-18",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "wRyyj3B6",
            "email": "Nien.Nunb@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Paris",
                    "numero": 270,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "19-G",
                    "numero": 891,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5104393572952763",
                    "nome": "Taun We",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "291",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4797265125419166",
                    "nome": "Anakin Skywalker",
                    "validade": {
                        "month": "07",
                        "year": "25"
                    },
                    "cvv": "273",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5248162228087879",
                    "nome": "Darth Vader",
                    "validade": {
                        "month": "02",
                        "year": "23"
                    },
                    "cvv": "976",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "56",
                    "numero": "955307885",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "62",
                    "numero": "40610724",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "45",
                    "numero": "65576207",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "8b048886-f7db-4c71-b9b4-6632fdffe75c",
            "dtCadastro": "01-04-2021, 09:04:22",
            "nome": "Obi-Wan Kenobi",
            "dtNascimento": "2021-01-01",
            "documentos": [
                {
                    "codigo": "543.754.430-81",
                    "validade": "2020-12-23",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "670147434",
                    "validade": "2021-02-04",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "48762832022",
                    "validade": "2021-01-31",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "52HmgOEi",
            "email": "Obi-Wan.Kenobi@gmail.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 969,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Manoel Pereira da Silva",
                    "numero": 454,
                    "bairro": "Parque das Nascentes",
                    "cep": "83327020",
                    "cidade": {
                        "nome": "Pinhais",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Grêmio",
                    "numero": 871,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4245154188416731",
                    "nome": "IG-88",
                    "validade": {
                        "month": "03",
                        "year": "23"
                    },
                    "cvv": "499",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4502342814449329",
                    "nome": "Plo Koon",
                    "validade": {
                        "month": 12,
                        "year": "26"
                    },
                    "cvv": "152",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4504614662590281",
                    "nome": "Gregar Typho",
                    "validade": {
                        "month": "05",
                        "year": "25"
                    },
                    "cvv": "056",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "80",
                    "numero": "57616571",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "24",
                    "numero": "971388734",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "494e59be-af34-4f00-a7d8-aab563023c15",
            "dtCadastro": "01-01-2021, 11:05:37",
            "nome": "Barriss Offee",
            "dtNascimento": "2020-12-30",
            "documentos": [
                {
                    "codigo": "224.588.551-13",
                    "validade": "2021-03-18",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "349524389",
                    "validade": "2021-03-18",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "85463578018",
                    "validade": "2021-02-24",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "M68m7oQy",
            "email": "Barriss.Offee@gmail.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "115",
                    "numero": 450,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Eugenio Garcia",
                    "numero": 994,
                    "bairro": "Vila Sarney",
                    "cep": "65090707",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "São Vicente",
                    "numero": 746,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5378813783332900",
                    "nome": "Roos Tarpals",
                    "validade": {
                        "month": "03",
                        "year": "24"
                    },
                    "cvv": "725",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5358211062299706",
                    "nome": "Wedge Antilles",
                    "validade": {
                        "month": "02",
                        "year": "26"
                    },
                    "cvv": "154",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4936744000264907",
                    "nome": "Obi-Wan Kenobi",
                    "validade": {
                        "month": "01",
                        "year": "23"
                    },
                    "cvv": "528",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "43",
                    "numero": "935301275",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "29",
                    "numero": "16177336",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "116dc8ce-9958-4cd0-9d48-04b4660b409f",
            "dtCadastro": "12-24-2020, 08:40:12",
            "nome": "Yarael Poof",
            "dtNascimento": "2020-12-03",
            "documentos": [
                {
                    "codigo": "907.942.462-57",
                    "validade": "2021-02-23",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "832238752",
                    "validade": "2020-12-29",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "53646360849",
                    "validade": "2020-12-14",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "d5VQeTjm",
            "email": "Yarael.Poof@bol.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "19-G",
                    "numero": 161,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Grêmio",
                    "numero": 527,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Conceição",
                    "numero": 818,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5323676155428077",
                    "nome": "Lama Su",
                    "validade": {
                        "month": 10,
                        "year": "23"
                    },
                    "cvv": "295",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5214794987389235",
                    "nome": "Jabba Desilijic Tiure",
                    "validade": {
                        "month": 12,
                        "year": "25"
                    },
                    "cvv": "665",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4712483995688354",
                    "nome": "Cliegg Lars",
                    "validade": {
                        "month": "09",
                        "year": "24"
                    },
                    "cvv": "543",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "24",
                    "numero": "84443532",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "ec883109-c5a6-4449-a9a8-7d26ac5a7bab",
            "dtCadastro": "03-20-2021, 09:31:38",
            "nome": "Barriss Offee",
            "dtNascimento": "2020-11-28",
            "documentos": [
                {
                    "codigo": "303.019.665-83",
                    "validade": "2021-02-10",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "606546506",
                    "validade": "2021-02-24",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "62679076146",
                    "validade": "2021-03-16",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "sQidvsWe",
            "email": "Barriss.Offee@bol.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 420,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Um",
                    "numero": 32,
                    "bairro": "Jardim Maracanã (Nova Veneza)",
                    "cep": "13181000",
                    "cidade": {
                        "nome": "Sumaré",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "São Vicente",
                    "numero": 367,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5214206921601906",
                    "nome": "Dooku",
                    "validade": {
                        "month": "09",
                        "year": "24"
                    },
                    "cvv": "979",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4464098167420046",
                    "nome": "Lando Calrissian",
                    "validade": {
                        "month": 10,
                        "year": "25"
                    },
                    "cvv": "395",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "78",
                    "numero": "944416767",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "d2110644-9260-4362-a015-9c524939dc98",
            "dtCadastro": "12-27-2020, 04:13:12",
            "nome": "Eeth Koth",
            "dtNascimento": "2021-03-05",
            "documentos": [
                {
                    "codigo": "864.826.835-41",
                    "validade": "2020-12-04",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "184593668",
                    "validade": "2021-01-19",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "42876718163",
                    "validade": "2021-03-06",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "2G4bHnTy",
            "email": "Eeth.Koth@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Grêmio",
                    "numero": 714,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "19-G",
                    "numero": 942,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4972993175871583",
                    "nome": "Finis Valorum",
                    "validade": {
                        "month": "03",
                        "year": "25"
                    },
                    "cvv": "528",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "21",
                    "numero": "04621085",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "9454357f-ac5a-473e-aee5-689da2aeb2df",
            "dtCadastro": "01-07-2021, 05:07:39",
            "nome": "Dud Bolt",
            "dtNascimento": "2021-02-21",
            "documentos": [
                {
                    "codigo": "558.751.813-20",
                    "validade": "2020-12-11",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "642426445",
                    "validade": "2021-03-19",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "72122410447",
                    "validade": "2021-02-11",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "VAxh0clB",
            "email": "Dud.Bolt@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "300 Conjunto 21",
                    "numero": 811,
                    "bairro": "Recanto das Emas",
                    "cep": "72620122",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Paris",
                    "numero": 811,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "19-G",
                    "numero": 285,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4063122743811075",
                    "nome": "Dexter Jettster",
                    "validade": {
                        "month": "08",
                        "year": "23"
                    },
                    "cvv": "407",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4186620339548029",
                    "nome": "Saesee Tiin",
                    "validade": {
                        "month": "05",
                        "year": "24"
                    },
                    "cvv": "470",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "84",
                    "numero": "972255375",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "afd63546-c717-4959-8d6a-74abfd70ba0b",
            "dtCadastro": "12-06-2020, 09:36:39",
            "nome": "Palpatine",
            "dtNascimento": "2021-03-12",
            "documentos": [
                {
                    "codigo": "469.958.864-61",
                    "validade": "2021-02-07",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "507026688",
                    "validade": "2021-01-01",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "89366735610",
                    "validade": "2021-01-22",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "vpMuZwKC",
            "email": "Palpatine@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "São Vicente",
                    "numero": 303,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Caridade",
                    "numero": 911,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 162,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5500586406952657",
                    "nome": "Nute Gunray",
                    "validade": {
                        "month": "05",
                        "year": "23"
                    },
                    "cvv": "238",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5535609558496080",
                    "nome": "Sebulba",
                    "validade": {
                        "month": 10,
                        "year": "25"
                    },
                    "cvv": "236",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4684746259386566",
                    "nome": "Biggs Darklighter",
                    "validade": {
                        "month": "03",
                        "year": "25"
                    },
                    "cvv": "154",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "53",
                    "numero": "93647387",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "26",
                    "numero": "74011791",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "83",
                    "numero": "74425749",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "b1374694-3bf7-4373-a3c5-ce97d654b92f",
            "dtCadastro": "01-17-2021, 01:01:40",
            "nome": "Plo Koon",
            "dtNascimento": "2021-01-06",
            "documentos": [
                {
                    "codigo": "317.041.141-10",
                    "validade": "2021-01-01",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "841413387",
                    "validade": "2020-12-25",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "22831912359",
                    "validade": "2020-12-20",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "pn0W5AqW",
            "email": "Plo.Koon@gmail.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Paris",
                    "numero": 573,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SHCGN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "715 Bloco D",
                    "numero": 324,
                    "bairro": "Asa Norte",
                    "cep": "70770704",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4641178360556139",
                    "nome": "Tarfful",
                    "validade": {
                        "month": 11,
                        "year": "24"
                    },
                    "cvv": "927",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4703033634223708",
                    "nome": "Taun We",
                    "validade": {
                        "month": "09",
                        "year": "26"
                    },
                    "cvv": "156",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "80",
                    "numero": "05366050",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "31",
                    "numero": "70567362",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "45",
                    "numero": "42711131",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "3e97d7ea-3421-4c15-b6f1-599dc4bac3d4",
            "dtCadastro": "02-05-2021, 09:15:14",
            "nome": "Sly Moore",
            "dtNascimento": "2021-01-02",
            "documentos": [
                {
                    "codigo": "384.020.348-10",
                    "validade": "2020-12-08",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "688612761",
                    "validade": "2021-02-07",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "73759764654",
                    "validade": "2021-02-27",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "gdfuUzMM",
            "email": "Sly.Moore@outlook.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 881,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "João Amâncio",
                    "numero": 914,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5429154627280115",
                    "nome": "Anakin Skywalker",
                    "validade": {
                        "month": "05",
                        "year": "25"
                    },
                    "cvv": "888",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4036512619241585",
                    "nome": "Luke Skywalker",
                    "validade": {
                        "month": "05",
                        "year": "23"
                    },
                    "cvv": "206",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "16",
                    "numero": "979929146",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "99",
                    "numero": "941894827",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "e283d9d7-7ba2-4fc6-94c3-26b02de7e261",
            "dtCadastro": "02-06-2021, 09:51:54",
            "nome": "Tion Medon",
            "dtNascimento": "2021-03-10",
            "documentos": [
                {
                    "codigo": "161.708.096-98",
                    "validade": "2021-01-11",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "542862852",
                    "validade": "2021-03-07",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "26359334685",
                    "validade": "2021-01-04",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "oCAsXXzn",
            "email": "Tion.Medon@outlook.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Odete",
                    "numero": 0,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Araiporanga",
                    "numero": 98,
                    "bairro": "Vila Formosa",
                    "cep": "03360040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 285,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4548247120074339",
                    "nome": "Eeth Koth",
                    "validade": {
                        "month": 10,
                        "year": "24"
                    },
                    "cvv": "641",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5419974090277708",
                    "nome": "Ben Quadinaros",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "647",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "23",
                    "numero": "952115098",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "27",
                    "numero": "61913305",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "64",
                    "numero": "91530256",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "ed2502c1-d10d-464e-afab-6b5fed8ee40d",
            "dtCadastro": "02-19-2021, 11:01:52",
            "nome": "Beru Whitesun lars",
            "dtNascimento": "2020-12-21",
            "documentos": [
                {
                    "codigo": "032.847.793-10",
                    "validade": "2021-03-15",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "116919641",
                    "validade": "2021-02-26",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "73189687306",
                    "validade": "2020-12-24",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "9HnrAfKu",
            "email": "Beru.Whitesun lars@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "",
                    "numero": 754,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Araiporanga",
                    "numero": 234,
                    "bairro": "Vila Formosa",
                    "cep": "03360040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5553065506145807",
                    "nome": "Zam Wesell",
                    "validade": {
                        "month": "01",
                        "year": "24"
                    },
                    "cvv": "645",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4624448725674732",
                    "nome": "Luminara Unduli",
                    "validade": {
                        "month": "06",
                        "year": "24"
                    },
                    "cvv": "079",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "23",
                    "numero": "92623442",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "58",
                    "numero": "61366531",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "f89fa3be-b2bc-408c-b738-e82cfe81888a",
            "dtCadastro": "02-03-2021, 12:38:21",
            "nome": "Darth Vader",
            "dtNascimento": "2021-03-18",
            "documentos": [
                {
                    "codigo": "842.500.014-90",
                    "validade": "2021-03-16",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "273289831",
                    "validade": "2021-01-01",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "44457967433",
                    "validade": "2021-02-17",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "Ffmwddvg",
            "email": "Darth.Vader@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "João Amâncio",
                    "numero": 475,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Paraná",
                    "numero": 977,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Eugenio Garcia",
                    "numero": 100,
                    "bairro": "Vila Sarney",
                    "cep": "65090707",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Grêmio",
                    "numero": 897,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5518695492187324",
                    "nome": "Cordé",
                    "validade": {
                        "month": "09",
                        "year": "26"
                    },
                    "cvv": "592",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5361118380541765",
                    "nome": "Poggle the Lesser",
                    "validade": {
                        "month": "09",
                        "year": "26"
                    },
                    "cvv": "978",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "25",
                    "numero": "39785884",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "a668d27a-0218-4674-851c-af2941629fe6",
            "dtCadastro": "12-21-2020, 12:32:41",
            "nome": "Nien Nunb",
            "dtNascimento": "2021-01-13",
            "documentos": [
                {
                    "codigo": "520.885.620-44",
                    "validade": "2021-01-25",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "241743426",
                    "validade": "2020-12-29",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "53667748524",
                    "validade": "2020-12-14",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "W1CKgfw8",
            "email": "Nien.Nunb@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Um",
                    "numero": 269,
                    "bairro": "Jardim Maracanã (Nova Veneza)",
                    "cep": "13181000",
                    "cidade": {
                        "nome": "Sumaré",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Araiporanga",
                    "numero": 936,
                    "bairro": "Vila Formosa",
                    "cep": "03360040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Odete",
                    "numero": 768,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 207,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4600497657462002",
                    "nome": "Anakin Skywalker",
                    "validade": {
                        "month": "04",
                        "year": "26"
                    },
                    "cvv": "797",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4289399038920872",
                    "nome": "Adi Gallia",
                    "validade": {
                        "month": 10,
                        "year": "24"
                    },
                    "cvv": "383",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5362483407090991",
                    "nome": "Arvel Crynyd",
                    "validade": {
                        "month": 12,
                        "year": "24"
                    },
                    "cvv": "245",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "35",
                    "numero": "76091216",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "27",
                    "numero": "953433116",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "25770f99-bd5f-448e-9c3c-4b5c442b8b7a",
            "dtCadastro": "12-19-2020, 07:43:46",
            "nome": "R5-D4",
            "dtNascimento": "2020-11-29",
            "documentos": [
                {
                    "codigo": "632.269.283-68",
                    "validade": "2021-02-26",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "320739123",
                    "validade": "2021-03-23",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "60464868684",
                    "validade": "2021-02-16",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "S71tjYt5",
            "email": "R5-D4@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Osvaldo Correia",
                    "numero": 460,
                    "bairro": "Rocha",
                    "cep": "24420400",
                    "cidade": {
                        "nome": "São Gonçalo",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Vitória",
                    "numero": 151,
                    "bairro": "Chácara Brasil",
                    "cep": "65066883",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4230561472972749",
                    "nome": "Shaak Ti",
                    "validade": {
                        "month": 11,
                        "year": "26"
                    },
                    "cvv": "876",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4805638542110305",
                    "nome": "Rugor Nass",
                    "validade": {
                        "month": "08",
                        "year": "24"
                    },
                    "cvv": "286",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "44",
                    "numero": "42763887",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "ee1c1764-1685-43e3-a2ba-c2a6b11e39bb",
            "dtCadastro": "02-16-2021, 03:28:43",
            "nome": "Eeth Koth",
            "dtNascimento": "2021-03-20",
            "documentos": [
                {
                    "codigo": "777.315.466-08",
                    "validade": "2021-03-17",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "408868084",
                    "validade": "2021-01-25",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "03602300017",
                    "validade": "2020-12-31",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "pSNLSqpP",
            "email": "Eeth.Koth@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "19-G",
                    "numero": 202,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 357,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 137,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Rubim",
                    "numero": 597,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4866751092387938",
                    "nome": "Palpatine",
                    "validade": {
                        "month": "09",
                        "year": "23"
                    },
                    "cvv": "057",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "03",
                    "numero": "28771255",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "99",
                    "numero": "952365896",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "00",
                    "numero": "945483311",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "8f825ce1-1b17-420c-aab6-8baa14025198",
            "dtCadastro": "02-07-2021, 08:10:09",
            "nome": "Kit Fisto",
            "dtNascimento": "2021-03-18",
            "documentos": [
                {
                    "codigo": "369.282.178-63",
                    "validade": "2020-12-03",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "455079564",
                    "validade": "2020-12-18",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "71377164460",
                    "validade": "2021-01-17",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "2xHeiVtt",
            "email": "Kit.Fisto@outlook.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Vitória",
                    "numero": 145,
                    "bairro": "Chácara Brasil",
                    "cep": "65066883",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Paraná",
                    "numero": 293,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Grêmio",
                    "numero": 322,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4336452573898616",
                    "nome": "Raymus Antilles",
                    "validade": {
                        "month": "06",
                        "year": "26"
                    },
                    "cvv": "891",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "84",
                    "numero": "962351669",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "03",
                    "numero": "11467071",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "11",
                    "numero": "26691512",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "a3fbf316-6067-4c2b-aa48-cddf9ba4bc52",
            "dtCadastro": "02-13-2021, 01:43:27",
            "nome": "Dormé",
            "dtNascimento": "2021-01-01",
            "documentos": [
                {
                    "codigo": "324.830.625-47",
                    "validade": "2021-01-28",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "444226195",
                    "validade": "2021-03-14",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "86001812488",
                    "validade": "2021-01-30",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "WDvCpy0V",
            "email": "Dormé@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Caridade",
                    "numero": 980,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Vitória",
                    "numero": 594,
                    "bairro": "Chácara Brasil",
                    "cep": "65066883",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Um",
                    "numero": 925,
                    "bairro": "Jardim Maracanã (Nova Veneza)",
                    "cep": "13181000",
                    "cidade": {
                        "nome": "Sumaré",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4230325786101266",
                    "nome": "Tarfful",
                    "validade": {
                        "month": 11,
                        "year": "24"
                    },
                    "cvv": "878",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4466068109533063",
                    "nome": "Ackbar",
                    "validade": {
                        "month": "04",
                        "year": "26"
                    },
                    "cvv": "883",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "11",
                    "numero": "34148525",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "10",
                    "numero": "52786071",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "06",
                    "numero": "11222203",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "89a80285-a4c5-4966-90f5-2611dbe65104",
            "dtCadastro": "02-02-2021, 07:42:13",
            "nome": "Finis Valorum",
            "dtNascimento": "2021-02-08",
            "documentos": [
                {
                    "codigo": "235.364.638-78",
                    "validade": "2020-12-22",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "927239394",
                    "validade": "2021-01-17",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "85356334864",
                    "validade": "2021-01-02",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "zQXssTAa",
            "email": "Finis.Valorum@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 666,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Odete",
                    "numero": 446,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5149964781546229",
                    "nome": "Rugor Nass",
                    "validade": {
                        "month": "01",
                        "year": "24"
                    },
                    "cvv": "285",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "63",
                    "numero": "23747712",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "81",
                    "numero": "46150162",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "717c75cd-bc1e-4ac6-a728-105af2a93a00",
            "dtCadastro": "01-30-2021, 11:53:43",
            "nome": "Sebulba",
            "dtNascimento": "2020-12-13",
            "documentos": [
                {
                    "codigo": "437.469.854-04",
                    "validade": "2021-02-07",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "503652642",
                    "validade": "2021-01-07",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "40138412175",
                    "validade": "2020-12-25",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "qUr2cRLw",
            "email": "Sebulba@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 799,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Paraná",
                    "numero": 120,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 729,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5266401271937698",
                    "nome": "Ackbar",
                    "validade": {
                        "month": "05",
                        "year": "25"
                    },
                    "cvv": "634",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4487372782391657",
                    "nome": "Mon Mothma",
                    "validade": {
                        "month": "01",
                        "year": "26"
                    },
                    "cvv": "399",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5409936513947334",
                    "nome": "Bossk",
                    "validade": {
                        "month": "07",
                        "year": "25"
                    },
                    "cvv": "589",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "64",
                    "numero": "45296176",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "11",
                    "numero": "57555722",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "838c95ab-fca4-4ef7-aeae-6782aeefc9cb",
            "dtCadastro": "01-03-2021, 02:40:08",
            "nome": "Wilhuff Tarkin",
            "dtNascimento": "2021-01-26",
            "documentos": [
                {
                    "codigo": "059.277.122-90",
                    "validade": "2021-01-26",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "114874133",
                    "validade": "2021-02-20",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "97457144274",
                    "validade": "2021-01-17",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "leVfMsaP",
            "email": "Wilhuff.Tarkin@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "da Caridade",
                    "numero": 854,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "19-G",
                    "numero": 557,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "115",
                    "numero": 377,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4830204722140783",
                    "nome": "Ben Quadinaros",
                    "validade": {
                        "month": "03",
                        "year": "25"
                    },
                    "cvv": "694",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5206369293331245",
                    "nome": "Sebulba",
                    "validade": {
                        "month": "07",
                        "year": "23"
                    },
                    "cvv": "959",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5482613857180950",
                    "nome": "Palpatine",
                    "validade": {
                        "month": 11,
                        "year": "26"
                    },
                    "cvv": "220",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "42",
                    "numero": "909838071",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "dfbd579b-cde4-4633-8138-a3c4a4f59f62",
            "dtCadastro": "02-24-2021, 10:41:50",
            "nome": "Lama Su",
            "dtNascimento": "2021-01-28",
            "documentos": [
                {
                    "codigo": "560.958.947-94",
                    "validade": "2020-12-08",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "950511916",
                    "validade": "2021-02-13",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "19779374427",
                    "validade": "2021-02-27",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "EbLlHTgo",
            "email": "Lama.Su@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "115",
                    "numero": 209,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Manoel Pereira da Silva",
                    "numero": 484,
                    "bairro": "Parque das Nascentes",
                    "cep": "83327020",
                    "cidade": {
                        "nome": "Pinhais",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "João Amâncio",
                    "numero": 94,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Manoel Pereira da Silva",
                    "numero": 415,
                    "bairro": "Parque das Nascentes",
                    "cep": "83327020",
                    "cidade": {
                        "nome": "Pinhais",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5317064287601937",
                    "nome": "Finis Valorum",
                    "validade": {
                        "month": "05",
                        "year": "23"
                    },
                    "cvv": "036",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4799152784569796",
                    "nome": "Jango Fett",
                    "validade": {
                        "month": "05",
                        "year": "25"
                    },
                    "cvv": "452",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "84",
                    "numero": "37403160",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "c2a8a32b-c5b2-4217-ae64-b6d4f40c69ed",
            "dtCadastro": "01-30-2021, 01:40:48",
            "nome": "Owen Lars",
            "dtNascimento": "2021-01-07",
            "documentos": [
                {
                    "codigo": "894.044.714-02",
                    "validade": "2020-11-29",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "115648031",
                    "validade": "2021-01-18",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "32822241052",
                    "validade": "2020-12-17",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "kKwbDH1r",
            "email": "Owen.Lars@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 280,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Ribeirão Vermelho",
                    "numero": 532,
                    "bairro": "Jardim Alto da Boa Vista",
                    "cep": "86600248",
                    "cidade": {
                        "nome": "Rolândia",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 502,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5281449278572340",
                    "nome": "Tarfful",
                    "validade": {
                        "month": "01",
                        "year": "23"
                    },
                    "cvv": "856",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "39",
                    "numero": "927433237",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "7b3728f3-2f0d-40c2-87f8-772ace2e1453",
            "dtCadastro": "11-28-2020, 12:15:32",
            "nome": "Beru Whitesun lars",
            "dtNascimento": "2021-01-21",
            "documentos": [
                {
                    "codigo": "332.488.968-50",
                    "validade": "2021-02-26",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "868846466",
                    "validade": "2021-01-24",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "69789946644",
                    "validade": "2021-01-27",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "qGgKdgpM",
            "email": "Beru.Whitesun lars@outlook.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Escadaria"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Sebastiana Almeida de Araújo",
                    "numero": 165,
                    "bairro": "Coramara",
                    "cep": "29313327",
                    "cidade": {
                        "nome": "Cachoeiro de Itapemirim",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Odete",
                    "numero": 884,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Delmar Pismel",
                    "numero": 916,
                    "bairro": "Conjunto Guiomard Santos",
                    "cep": "69901411",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "19-G",
                    "numero": 90,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4244861347253562",
                    "nome": "Padmé Amidala",
                    "validade": {
                        "month": "06",
                        "year": "23"
                    },
                    "cvv": "807",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "41",
                    "numero": "78156249",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "56",
                    "numero": "33142572",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "24",
                    "numero": "82402711",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "02cd2f11-dde4-4fbb-8122-b44e03169263",
            "dtCadastro": "02-07-2021, 12:32:38",
            "nome": "Wedge Antilles",
            "dtNascimento": "2021-02-17",
            "documentos": [
                {
                    "codigo": "984.156.034-87",
                    "validade": "2021-03-20",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "178880785",
                    "validade": "2021-01-25",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "25146299674",
                    "validade": "2021-02-13",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "CsB2Q95u",
            "email": "Wedge.Antilles@gmail.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "",
                    "numero": 279,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 477,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5390221726364507",
                    "nome": "R2-D2",
                    "validade": {
                        "month": "07",
                        "year": "25"
                    },
                    "cvv": "083",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4420037884797552",
                    "nome": "Ric Olié",
                    "validade": {
                        "month": "05",
                        "year": "24"
                    },
                    "cvv": "455",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5345895139466896",
                    "nome": "Cliegg Lars",
                    "validade": {
                        "month": 10,
                        "year": "25"
                    },
                    "cvv": "533",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "68",
                    "numero": "36225245",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "16",
                    "numero": "50088626",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "53",
                    "numero": "937910768",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "c2cacad1-8d20-4a57-a277-57c1c87cd03d",
            "dtCadastro": "12-26-2020, 04:35:08",
            "nome": "Ackbar",
            "dtNascimento": "2021-03-04",
            "documentos": [
                {
                    "codigo": "235.061.609-66",
                    "validade": "2021-01-19",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "368127596",
                    "validade": "2021-02-25",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "04213225847",
                    "validade": "2020-11-30",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "qR6hisov",
            "email": "Ackbar@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 667,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Vitória",
                    "numero": 419,
                    "bairro": "Chácara Brasil",
                    "cep": "65066883",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5183914024124604",
                    "nome": "Greedo",
                    "validade": {
                        "month": 12,
                        "year": "23"
                    },
                    "cvv": "528",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "06",
                    "numero": "11433176",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "a584c93e-6504-4746-80b2-b3e5398f07a7",
            "dtCadastro": "02-28-2021, 12:20:17",
            "nome": "Chewbacca",
            "dtNascimento": "2021-02-14",
            "documentos": [
                {
                    "codigo": "307.687.607-47",
                    "validade": "2021-02-09",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "465417219",
                    "validade": "2021-01-23",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "88665982528",
                    "validade": "2021-01-30",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "6LkEEdp1",
            "email": "Chewbacca@outlook.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 286,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Eugenio Garcia",
                    "numero": 619,
                    "bairro": "Vila Sarney",
                    "cep": "65090707",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SHCGN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "715 Bloco D",
                    "numero": 893,
                    "bairro": "Asa Norte",
                    "cep": "70770704",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4087447625003265",
                    "nome": "Tarfful",
                    "validade": {
                        "month": "08",
                        "year": "24"
                    },
                    "cvv": "109",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5240923302916145",
                    "nome": "Rugor Nass",
                    "validade": {
                        "month": "03",
                        "year": "26"
                    },
                    "cvv": "923",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4836601800520568",
                    "nome": "Owen Lars",
                    "validade": {
                        "month": "08",
                        "year": "25"
                    },
                    "cvv": "056",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "27",
                    "numero": "48256141",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "0245503f-eb21-4d93-a9b3-356a3dcc9984",
            "dtCadastro": "03-12-2021, 03:41:04",
            "nome": "Mon Mothma",
            "dtNascimento": "2021-01-03",
            "documentos": [
                {
                    "codigo": "615.236.665-87",
                    "validade": "2021-03-04",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "716671228",
                    "validade": "2020-12-27",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "66596313722",
                    "validade": "2021-03-02",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "YzR6jodn",
            "email": "Mon.Mothma@gmail.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "",
                    "numero": 434,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "João Amâncio",
                    "numero": 133,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5579916185369482",
                    "nome": "Anakin Skywalker",
                    "validade": {
                        "month": "03",
                        "year": "23"
                    },
                    "cvv": "956",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "66",
                    "numero": "942630729",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "41",
                    "numero": "983695733",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "cbdee5de-5632-42fc-9bb7-164a454ea851",
            "dtCadastro": "12-24-2020, 04:56:46",
            "nome": "Lama Su",
            "dtNascimento": "2021-01-10",
            "documentos": [
                {
                    "codigo": "513.189.372-05",
                    "validade": "2021-02-21",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "634793527",
                    "validade": "2020-11-29",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "35622419045",
                    "validade": "2020-12-06",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "jHf25lfe",
            "email": "Lama.Su@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "",
                    "numero": 454,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "João Amâncio",
                    "numero": 752,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Um",
                    "numero": 995,
                    "bairro": "Jardim Maracanã (Nova Veneza)",
                    "cep": "13181000",
                    "cidade": {
                        "nome": "Sumaré",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4453744606514104",
                    "nome": "Arvel Crynyd",
                    "validade": {
                        "month": 11,
                        "year": "24"
                    },
                    "cvv": "800",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "64",
                    "numero": "29707485",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "acb76658-77e3-4dfe-982f-17fb7011d596",
            "dtCadastro": "02-25-2021, 05:59:20",
            "nome": "Darth Maul",
            "dtNascimento": "2021-01-18",
            "documentos": [
                {
                    "codigo": "226.110.654-89",
                    "validade": "2021-01-27",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "206137231",
                    "validade": "2020-12-04",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "24565191702",
                    "validade": "2020-12-31",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "k6E3wuOC",
            "email": "Darth.Maul@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 441,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Vitória",
                    "numero": 233,
                    "bairro": "Chácara Brasil",
                    "cep": "65066883",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4271500779147886",
                    "nome": "Beru Whitesun lars",
                    "validade": {
                        "month": 11,
                        "year": "26"
                    },
                    "cvv": "244",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5163807870892841",
                    "nome": "Ben Quadinaros",
                    "validade": {
                        "month": "02",
                        "year": "26"
                    },
                    "cvv": "408",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "88",
                    "numero": "28387793",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "07",
                    "numero": "917326687",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "43",
                    "numero": "28042836",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "540e9003-61f5-46ee-9ff9-84bdaee99915",
            "dtCadastro": "12-04-2020, 07:24:23",
            "nome": "Cordé",
            "dtNascimento": "2021-03-01",
            "documentos": [
                {
                    "codigo": "140.783.866-01",
                    "validade": "2021-01-11",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "639541779",
                    "validade": "2021-01-01",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "77998900571",
                    "validade": "2020-12-03",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "AXE9FjID",
            "email": "Cordé@outlook.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Paris",
                    "numero": 850,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Delmar Pismel",
                    "numero": 187,
                    "bairro": "Conjunto Guiomard Santos",
                    "cep": "69901411",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Paris",
                    "numero": 505,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4402809327260618",
                    "nome": "Lobot",
                    "validade": {
                        "month": "04",
                        "year": "25"
                    },
                    "cvv": "786",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4126060551765709",
                    "nome": "Dexter Jettster",
                    "validade": {
                        "month": "06",
                        "year": "23"
                    },
                    "cvv": "304",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "51",
                    "numero": "42386544",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "70",
                    "numero": "942347565",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "7cb57e08-9b11-4479-b2d6-ca9dd50b2989",
            "dtCadastro": "12-20-2020, 06:36:37",
            "nome": "Jek Tono Porkins",
            "dtNascimento": "2021-02-08",
            "documentos": [
                {
                    "codigo": "763.649.502-30",
                    "validade": "2021-02-16",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "627773743",
                    "validade": "2021-02-03",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "36252277435",
                    "validade": "2021-01-22",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "eUM1rtux",
            "email": "Jek.Tono Porkins@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SHCGN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "715 Bloco D",
                    "numero": 758,
                    "bairro": "Asa Norte",
                    "cep": "70770704",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Caridade",
                    "numero": 487,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Odete",
                    "numero": 86,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 22,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5567618418168756",
                    "nome": "Poggle the Lesser",
                    "validade": {
                        "month": "06",
                        "year": "23"
                    },
                    "cvv": "963",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5354226585932165",
                    "nome": "Adi Gallia",
                    "validade": {
                        "month": "04",
                        "year": "25"
                    },
                    "cvv": "287",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "23",
                    "numero": "947502664",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "58",
                    "numero": "961374780",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "bf8ddcd3-837d-4515-8d5c-2724d0a02f6e",
            "dtCadastro": "02-08-2021, 02:45:01",
            "nome": "C-3PO",
            "dtNascimento": "2021-03-09",
            "documentos": [
                {
                    "codigo": "902.789.604-64",
                    "validade": "2020-12-08",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "646167222",
                    "validade": "2021-03-10",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "43483386575",
                    "validade": "2021-03-20",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "zMGzegzj",
            "email": "C-3PO@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 362,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Caridade",
                    "numero": 672,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Rubim",
                    "numero": 81,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Escadaria"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Sebastiana Almeida de Araújo",
                    "numero": 769,
                    "bairro": "Coramara",
                    "cep": "29313327",
                    "cidade": {
                        "nome": "Cachoeiro de Itapemirim",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4150928466702273",
                    "nome": "Finis Valorum",
                    "validade": {
                        "month": "08",
                        "year": "25"
                    },
                    "cvv": "287",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5581534110894437",
                    "nome": "Ackbar",
                    "validade": {
                        "month": "03",
                        "year": "25"
                    },
                    "cvv": "483",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "24",
                    "numero": "955809783",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "3d7e69bb-1fb4-4fe2-9ed5-129fc6017ada",
            "dtCadastro": "03-19-2021, 06:28:59",
            "nome": "R5-D4",
            "dtNascimento": "2021-03-14",
            "documentos": [
                {
                    "codigo": "839.738.364-69",
                    "validade": "2020-12-06",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "191856512",
                    "validade": "2020-12-06",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "26138758724",
                    "validade": "2021-03-02",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "24Qfr1le",
            "email": "R5-D4@outlook.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "115",
                    "numero": 12,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Grêmio",
                    "numero": 415,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5267267312434246",
                    "nome": "Greedo",
                    "validade": {
                        "month": "09",
                        "year": "23"
                    },
                    "cvv": "526",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "25",
                    "numero": "976694536",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "56",
                    "numero": "917678245",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "3d451c94-68ba-4516-beee-0ab8535d4745",
            "dtCadastro": "01-30-2021, 07:58:47",
            "nome": "Sly Moore",
            "dtNascimento": "2020-12-22",
            "documentos": [
                {
                    "codigo": "562.212.374-75",
                    "validade": "2021-03-07",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "065172321",
                    "validade": "2020-12-06",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "93748412123",
                    "validade": "2020-12-06",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "8O32u2qA",
            "email": "Sly.Moore@bol.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Ribeirão Vermelho",
                    "numero": 177,
                    "bairro": "Jardim Alto da Boa Vista",
                    "cep": "86600248",
                    "cidade": {
                        "nome": "Rolândia",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Acre",
                    "numero": 915,
                    "bairro": "Parque Eldorado",
                    "cep": "25240430",
                    "cidade": {
                        "nome": "Duque de Caxias",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "",
                    "numero": 619,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Grêmio",
                    "numero": 837,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5309568958385711",
                    "nome": "R5-D4",
                    "validade": {
                        "month": "01",
                        "year": "24"
                    },
                    "cvv": "822",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "59",
                    "numero": "998608425",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "06",
                    "numero": "938706372",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "54040f8d-73b6-4d31-8602-cb441c563025",
            "dtCadastro": "12-28-2020, 06:00:48",
            "nome": "Lama Su",
            "dtNascimento": "2020-11-30",
            "documentos": [
                {
                    "codigo": "182.897.354-80",
                    "validade": "2020-12-16",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "505800863",
                    "validade": "2020-12-07",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "53776562460",
                    "validade": "2021-03-01",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "A1C93FF3",
            "email": "Lama.Su@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "115",
                    "numero": 873,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 679,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "",
                    "numero": 765,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Paraná",
                    "numero": 299,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5332290913718313",
                    "nome": "C-3PO",
                    "validade": {
                        "month": 12,
                        "year": "24"
                    },
                    "cvv": "945",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "34",
                    "numero": "50682081",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "042df3c7-eae4-48f2-8f38-2581294bcf9c",
            "dtCadastro": "01-10-2021, 11:27:23",
            "nome": "Nien Nunb",
            "dtNascimento": "2021-03-23",
            "documentos": [
                {
                    "codigo": "324.622.357-28",
                    "validade": "2021-01-22",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "113619417",
                    "validade": "2021-03-14",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "78847944471",
                    "validade": "2020-12-14",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "IpKH8RQs",
            "email": "Nien.Nunb@outlook.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Odete",
                    "numero": 155,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "da Caridade",
                    "numero": 971,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Caridade",
                    "numero": 101,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4271794001165796",
                    "nome": "Wedge Antilles",
                    "validade": {
                        "month": 10,
                        "year": "25"
                    },
                    "cvv": "205",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4167238678591931",
                    "nome": "Luminara Unduli",
                    "validade": {
                        "month": "01",
                        "year": "25"
                    },
                    "cvv": "087",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4982804589685469",
                    "nome": "Finis Valorum",
                    "validade": {
                        "month": 12,
                        "year": "24"
                    },
                    "cvv": "857",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "56",
                    "numero": "983311811",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "abf05e8b-7ae4-4222-9df3-042140d7a810",
            "dtCadastro": "03-15-2021, 03:46:55",
            "nome": "Kit Fisto",
            "dtNascimento": "2020-12-08",
            "documentos": [
                {
                    "codigo": "217.478.228-68",
                    "validade": "2021-02-06",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "822819143",
                    "validade": "2021-02-23",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "84470256391",
                    "validade": "2021-03-22",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "IT4sgKxG",
            "email": "Kit.Fisto@bol.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Paraná",
                    "numero": 733,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Osvaldo Correia",
                    "numero": 632,
                    "bairro": "Rocha",
                    "cep": "24420400",
                    "cidade": {
                        "nome": "São Gonçalo",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Delmar Pismel",
                    "numero": 439,
                    "bairro": "Conjunto Guiomard Santos",
                    "cep": "69901411",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "da Conceição",
                    "numero": 436,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5217600724768929",
                    "nome": "Adi Gallia",
                    "validade": {
                        "month": 11,
                        "year": "24"
                    },
                    "cvv": "730",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4545714434077764",
                    "nome": "Jar Jar Binks",
                    "validade": {
                        "month": "07",
                        "year": "25"
                    },
                    "cvv": "989",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "45",
                    "numero": "16090476",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "75",
                    "numero": "15018556",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "36",
                    "numero": "36274134",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "07b4c3a2-2e5a-44e2-b6eb-86e1b1617c3e",
            "dtCadastro": "02-10-2021, 04:27:54",
            "nome": "Wilhuff Tarkin",
            "dtNascimento": "2021-02-26",
            "documentos": [
                {
                    "codigo": "457.771.937-14",
                    "validade": "2021-01-11",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "347742846",
                    "validade": "2021-02-27",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "56844842711",
                    "validade": "2021-01-16",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "wTtWv3Es",
            "email": "Wilhuff.Tarkin@gmail.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Conceição",
                    "numero": 731,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "João Amâncio",
                    "numero": 692,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Paris",
                    "numero": 237,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5522172670270490",
                    "nome": "Sebulba",
                    "validade": {
                        "month": "04",
                        "year": "23"
                    },
                    "cvv": "392",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4541683259244953",
                    "nome": "Gregar Typho",
                    "validade": {
                        "month": "03",
                        "year": "25"
                    },
                    "cvv": "543",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "65",
                    "numero": "84839859",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "72",
                    "numero": "942672563",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "36",
                    "numero": "04228453",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "8677eb28-d632-46d0-8172-fbbcff9b78dd",
            "dtCadastro": "12-28-2020, 11:39:17",
            "nome": "Luminara Unduli",
            "dtNascimento": "2020-12-02",
            "documentos": [
                {
                    "codigo": "365.884.835-97",
                    "validade": "2021-01-07",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "451115705",
                    "validade": "2021-03-17",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "25885561143",
                    "validade": "2020-12-03",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "9BNc4jSX",
            "email": "Luminara.Unduli@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "João Amâncio",
                    "numero": 941,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Acre",
                    "numero": 69,
                    "bairro": "Parque Eldorado",
                    "cep": "25240430",
                    "cidade": {
                        "nome": "Duque de Caxias",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Rubim",
                    "numero": 694,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4476102666500013",
                    "nome": "Mon Mothma",
                    "validade": {
                        "month": "07",
                        "year": "26"
                    },
                    "cvv": "056",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4867233401736286",
                    "nome": "Rugor Nass",
                    "validade": {
                        "month": "03",
                        "year": "25"
                    },
                    "cvv": "171",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4095391224217795",
                    "nome": "Gasgano",
                    "validade": {
                        "month": 11,
                        "year": "26"
                    },
                    "cvv": "971",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "41",
                    "numero": "953425735",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "ae80b73f-73d9-41fe-95d7-71ca0ccd0e0d",
            "dtCadastro": "03-12-2021, 09:18:45",
            "nome": "Obi-Wan Kenobi",
            "dtNascimento": "2020-12-13",
            "documentos": [
                {
                    "codigo": "788.049.665-30",
                    "validade": "2020-11-28",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "945305837",
                    "validade": "2021-03-09",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "42136449068",
                    "validade": "2021-02-22",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "RB01Xhi2",
            "email": "Obi-Wan.Kenobi@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Paris",
                    "numero": 722,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Conceição",
                    "numero": 182,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Um",
                    "numero": 880,
                    "bairro": "Jardim Maracanã (Nova Veneza)",
                    "cep": "13181000",
                    "cidade": {
                        "nome": "Sumaré",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5475335019167225",
                    "nome": "Nien Nunb",
                    "validade": {
                        "month": 12,
                        "year": "24"
                    },
                    "cvv": "972",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5482480964413637",
                    "nome": "Yoda",
                    "validade": {
                        "month": "02",
                        "year": "25"
                    },
                    "cvv": "525",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "64",
                    "numero": "22577865",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "e6b95762-ece9-480e-9ebf-b89e7f850a7b",
            "dtCadastro": "03-11-2021, 07:37:38",
            "nome": "Luke Skywalker",
            "dtNascimento": "2021-03-11",
            "documentos": [
                {
                    "codigo": "202.177.278-08",
                    "validade": "2020-12-11",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "822139365",
                    "validade": "2020-12-16",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "73314323671",
                    "validade": "2021-01-08",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "lGT63Mlc",
            "email": "Luke.Skywalker@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "São Vicente",
                    "numero": 494,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 236,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4521722937850494",
                    "nome": "Padmé Amidala",
                    "validade": {
                        "month": "04",
                        "year": "25"
                    },
                    "cvv": "999",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "33",
                    "numero": "952314698",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "81",
                    "numero": "904369342",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "3944aedf-e835-43b2-a4c8-19ce74c9c852",
            "dtCadastro": "01-19-2021, 03:31:28",
            "nome": "Greedo",
            "dtNascimento": "2021-03-12",
            "documentos": [
                {
                    "codigo": "053.573.264-36",
                    "validade": "2021-03-07",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "653776323",
                    "validade": "2021-03-02",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "48233052132",
                    "validade": "2021-01-02",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "mMjfiqgi",
            "email": "Greedo@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "300 Conjunto 21",
                    "numero": 29,
                    "bairro": "Recanto das Emas",
                    "cep": "72620122",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Caridade",
                    "numero": 963,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Escadaria"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Sebastiana Almeida de Araújo",
                    "numero": 571,
                    "bairro": "Coramara",
                    "cep": "29313327",
                    "cidade": {
                        "nome": "Cachoeiro de Itapemirim",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5532256858163482",
                    "nome": "R5-D4",
                    "validade": {
                        "month": "03",
                        "year": "24"
                    },
                    "cvv": "045",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4603823383754551",
                    "nome": "R2-D2",
                    "validade": {
                        "month": "08",
                        "year": "25"
                    },
                    "cvv": "726",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "36",
                    "numero": "46785132",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "34",
                    "numero": "79247074",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "93",
                    "numero": "17645298",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "4243ccb9-e079-4f95-a3b9-7acfeac4e295",
            "dtCadastro": "02-05-2021, 07:37:08",
            "nome": "Cliegg Lars",
            "dtNascimento": "2020-12-23",
            "documentos": [
                {
                    "codigo": "270.767.774-44",
                    "validade": "2021-01-22",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "234233350",
                    "validade": "2021-03-04",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "01582728743",
                    "validade": "2020-12-26",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "jSJWfmnw",
            "email": "Cliegg.Lars@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Odete",
                    "numero": 457,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "São Vicente",
                    "numero": 149,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4851223213513328",
                    "nome": "Greedo",
                    "validade": {
                        "month": "07",
                        "year": "23"
                    },
                    "cvv": "784",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4882482688507412",
                    "nome": "Biggs Darklighter",
                    "validade": {
                        "month": "02",
                        "year": "23"
                    },
                    "cvv": "359",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5423756442347279",
                    "nome": "Roos Tarpals",
                    "validade": {
                        "month": "09",
                        "year": "23"
                    },
                    "cvv": "656",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "42",
                    "numero": "971128514",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "2f9a60a8-0d02-4e61-bde4-6a45415ccdd7",
            "dtCadastro": "02-13-2021, 08:55:17",
            "nome": "Tarfful",
            "dtNascimento": "2020-12-20",
            "documentos": [
                {
                    "codigo": "861.070.537-43",
                    "validade": "2021-02-28",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "287726212",
                    "validade": "2020-12-31",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "51954690444",
                    "validade": "2021-01-21",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "JpB74YV1",
            "email": "Tarfful@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Odete",
                    "numero": 96,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Ribeirão Vermelho",
                    "numero": 108,
                    "bairro": "Jardim Alto da Boa Vista",
                    "cep": "86600248",
                    "cidade": {
                        "nome": "Rolândia",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 482,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4589126749023564",
                    "nome": "Leia Organa",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "521",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5156888245964779",
                    "nome": "Yarael Poof",
                    "validade": {
                        "month": "02",
                        "year": "26"
                    },
                    "cvv": "708",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "40",
                    "numero": "910426744",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "25",
                    "numero": "58041713",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "3d23d8fe-9c8e-4d1d-819e-c5ac19b9f0ee",
            "dtCadastro": "03-11-2021, 10:56:16",
            "nome": "Sebulba",
            "dtNascimento": "2021-03-17",
            "documentos": [
                {
                    "codigo": "349.491.658-60",
                    "validade": "2021-03-23",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "455752878",
                    "validade": "2021-03-02",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "97766323475",
                    "validade": "2021-01-02",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "HHSglNXb",
            "email": "Sebulba@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Acre",
                    "numero": 461,
                    "bairro": "Parque Eldorado",
                    "cep": "25240430",
                    "cidade": {
                        "nome": "Duque de Caxias",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SHCGN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "715 Bloco D",
                    "numero": 585,
                    "bairro": "Asa Norte",
                    "cep": "70770704",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4186493258372049",
                    "nome": "IG-88",
                    "validade": {
                        "month": "05",
                        "year": "25"
                    },
                    "cvv": "709",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5137871451994460",
                    "nome": "Raymus Antilles",
                    "validade": {
                        "month": "08",
                        "year": "26"
                    },
                    "cvv": "533",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5103590691571785",
                    "nome": "Jar Jar Binks",
                    "validade": {
                        "month": "07",
                        "year": "23"
                    },
                    "cvv": "007",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "44",
                    "numero": "74758566",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "24",
                    "numero": "986327726",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "74",
                    "numero": "979387885",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "6ccdcf4c-ed6a-40f2-bbf6-408c0361452d",
            "dtCadastro": "01-08-2021, 06:42:01",
            "nome": "Qui-Gon Jinn",
            "dtNascimento": "2020-12-24",
            "documentos": [
                {
                    "codigo": "687.078.833-23",
                    "validade": "2021-01-17",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "657838275",
                    "validade": "2020-12-03",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "63391068267",
                    "validade": "2021-02-26",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "wdpTM3uI",
            "email": "Qui-Gon.Jinn@gmail.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Osvaldo Correia",
                    "numero": 417,
                    "bairro": "Rocha",
                    "cep": "24420400",
                    "cidade": {
                        "nome": "São Gonçalo",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Grêmio",
                    "numero": 497,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Conceição",
                    "numero": 91,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 130,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4718307759516382",
                    "nome": "Boba Fett",
                    "validade": {
                        "month": "08",
                        "year": "25"
                    },
                    "cvv": "442",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "77",
                    "numero": "942610394",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "72",
                    "numero": "920442953",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "43",
                    "numero": "15184428",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "8abc4e63-634c-4cdc-8162-9b1185147e7f",
            "dtCadastro": "11-28-2020, 01:37:14",
            "nome": "Saesee Tiin",
            "dtNascimento": "2020-12-27",
            "documentos": [
                {
                    "codigo": "464.743.101-03",
                    "validade": "2020-12-13",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "175921859",
                    "validade": "2021-03-16",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "74811102753",
                    "validade": "2020-12-27",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "TSDQHOrV",
            "email": "Saesee.Tiin@gmail.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Paraná",
                    "numero": 404,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 845,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5248863892834781",
                    "nome": "Leia Organa",
                    "validade": {
                        "month": "03",
                        "year": "25"
                    },
                    "cvv": "544",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5459626799010662",
                    "nome": "Eeth Koth",
                    "validade": {
                        "month": "04",
                        "year": "26"
                    },
                    "cvv": "404",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "31",
                    "numero": "966247788",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "92",
                    "numero": "911343685",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "42",
                    "numero": "944063777",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "905473e9-e73f-43ab-b741-1be149002433",
            "dtCadastro": "12-22-2020, 12:06:42",
            "nome": "Jar Jar Binks",
            "dtNascimento": "2021-02-09",
            "documentos": [
                {
                    "codigo": "933.824.413-06",
                    "validade": "2021-03-03",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "542664642",
                    "validade": "2021-02-14",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "82683395576",
                    "validade": "2021-03-10",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "Q7KUYfiZ",
            "email": "Jar.Jar Binks@outlook.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "115",
                    "numero": 287,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "São Vicente",
                    "numero": 143,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "19-G",
                    "numero": 853,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5376358509664873",
                    "nome": "Palpatine",
                    "validade": {
                        "month": "01",
                        "year": "23"
                    },
                    "cvv": "885",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5231067292612008",
                    "nome": "Yoda",
                    "validade": {
                        "month": "02",
                        "year": "23"
                    },
                    "cvv": "537",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "58",
                    "numero": "77952055",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "84",
                    "numero": "70253465",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "82",
                    "numero": "48198381",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "a3398ef3-4851-4d0f-b935-ce16760bd3cb",
            "dtCadastro": "01-10-2021, 09:36:25",
            "nome": "Beru Whitesun lars",
            "dtNascimento": "2021-02-01",
            "documentos": [
                {
                    "codigo": "237.971.559-99",
                    "validade": "2021-03-10",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "862157278",
                    "validade": "2021-03-18",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "58151831569",
                    "validade": "2021-01-17",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "koj5SlPc",
            "email": "Beru.Whitesun lars@gmail.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Paris",
                    "numero": 813,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "19-G",
                    "numero": 104,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4391184925490030",
                    "nome": "Dormé",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "249",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5207108136730281",
                    "nome": "Kit Fisto",
                    "validade": {
                        "month": "03",
                        "year": "26"
                    },
                    "cvv": "139",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4292402630179775",
                    "nome": "C-3PO",
                    "validade": {
                        "month": "04",
                        "year": "26"
                    },
                    "cvv": "392",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "11",
                    "numero": "946287810",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "54b5dd97-1bf9-4bec-8987-caf0fc54df01",
            "dtCadastro": "12-26-2020, 08:44:36",
            "nome": "Grievous",
            "dtNascimento": "2020-12-12",
            "documentos": [
                {
                    "codigo": "560.222.102-67",
                    "validade": "2021-02-28",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "667263027",
                    "validade": "2020-12-17",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "98999268987",
                    "validade": "2020-12-15",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "Yxr0cb2P",
            "email": "Grievous@outlook.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Escadaria"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Sebastiana Almeida de Araújo",
                    "numero": 126,
                    "bairro": "Coramara",
                    "cep": "29313327",
                    "cidade": {
                        "nome": "Cachoeiro de Itapemirim",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Ribeirão Vermelho",
                    "numero": 442,
                    "bairro": "Jardim Alto da Boa Vista",
                    "cep": "86600248",
                    "cidade": {
                        "nome": "Rolândia",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Escadaria"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Sebastiana Almeida de Araújo",
                    "numero": 442,
                    "bairro": "Coramara",
                    "cep": "29313327",
                    "cidade": {
                        "nome": "Cachoeiro de Itapemirim",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 863,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4664656725252140",
                    "nome": "Mon Mothma",
                    "validade": {
                        "month": "09",
                        "year": "23"
                    },
                    "cvv": "760",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5488415594780934",
                    "nome": "Adi Gallia",
                    "validade": {
                        "month": "01",
                        "year": "23"
                    },
                    "cvv": "156",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "21",
                    "numero": "14545775",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "68",
                    "numero": "962377384",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "19",
                    "numero": "20422736",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "c947c4a7-65e3-40e5-adcf-ed8e2d36693f",
            "dtCadastro": "12-20-2020, 02:10:25",
            "nome": "Dud Bolt",
            "dtNascimento": "2020-12-14",
            "documentos": [
                {
                    "codigo": "636.297.642-82",
                    "validade": "2020-11-28",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "171852156",
                    "validade": "2021-01-31",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "82084494834",
                    "validade": "2021-03-15",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "mVtWRhWP",
            "email": "Dud.Bolt@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Grêmio",
                    "numero": 946,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 845,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4182793709160693",
                    "nome": "Saesee Tiin",
                    "validade": {
                        "month": 12,
                        "year": "26"
                    },
                    "cvv": "494",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "65",
                    "numero": "19704283",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "01f21186-a6d6-421d-9fe0-c41a961be0d1",
            "dtCadastro": "12-26-2020, 03:42:15",
            "nome": "Eeth Koth",
            "dtNascimento": "2020-12-14",
            "documentos": [
                {
                    "codigo": "100.634.712-72",
                    "validade": "2021-03-19",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "086320747",
                    "validade": "2021-01-21",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "71336765686",
                    "validade": "2021-03-14",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "GZhRdEMx",
            "email": "Eeth.Koth@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Acre",
                    "numero": 422,
                    "bairro": "Parque Eldorado",
                    "cep": "25240430",
                    "cidade": {
                        "nome": "Duque de Caxias",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "300 Conjunto 21",
                    "numero": 765,
                    "bairro": "Recanto das Emas",
                    "cep": "72620122",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "João Amâncio",
                    "numero": 36,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "São Vicente",
                    "numero": 799,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5510134506437762",
                    "nome": "Raymus Antilles",
                    "validade": {
                        "month": 12,
                        "year": "26"
                    },
                    "cvv": "557",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5395292214745965",
                    "nome": "Boba Fett",
                    "validade": {
                        "month": 10,
                        "year": "23"
                    },
                    "cvv": "914",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4038099997106331",
                    "nome": "Gasgano",
                    "validade": {
                        "month": 12,
                        "year": "23"
                    },
                    "cvv": "975",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "52",
                    "numero": "967097227",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "38",
                    "numero": "16055638",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "32",
                    "numero": "30862276",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "bed26ee7-bbde-4655-a9d9-0012e91570dc",
            "dtCadastro": "12-18-2020, 03:24:11",
            "nome": "Plo Koon",
            "dtNascimento": "2021-03-12",
            "documentos": [
                {
                    "codigo": "126.383.724-71",
                    "validade": "2020-12-10",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "618240711",
                    "validade": "2021-01-27",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "48049799230",
                    "validade": "2021-03-20",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "FSbvNUiO",
            "email": "Plo.Koon@gmail.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Rubim",
                    "numero": 977,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "João Amâncio",
                    "numero": 953,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 12,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4980678369457253",
                    "nome": "Wicket Systri Warrick",
                    "validade": {
                        "month": "02",
                        "year": "24"
                    },
                    "cvv": "721",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5422232320409848",
                    "nome": "Dud Bolt",
                    "validade": {
                        "month": 10,
                        "year": "24"
                    },
                    "cvv": "502",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4150871189832177",
                    "nome": "Qui-Gon Jinn",
                    "validade": {
                        "month": 12,
                        "year": "23"
                    },
                    "cvv": "427",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "66",
                    "numero": "61310813",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "32",
                    "numero": "977775649",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "38e4db78-7fb4-4fd5-9eec-95a855de7327",
            "dtCadastro": "12-31-2020, 03:59:15",
            "nome": "Saesee Tiin",
            "dtNascimento": "2021-02-28",
            "documentos": [
                {
                    "codigo": "621.351.255-12",
                    "validade": "2020-12-10",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "966016162",
                    "validade": "2021-02-08",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "14417441712",
                    "validade": "2020-11-28",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "GLIQKtmH",
            "email": "Saesee.Tiin@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "115",
                    "numero": 201,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 111,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Conceição",
                    "numero": 28,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4142733813990626",
                    "nome": "Quarsh Panaka",
                    "validade": {
                        "month": "05",
                        "year": "25"
                    },
                    "cvv": "377",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "81",
                    "numero": "57521722",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "75",
                    "numero": "61288478",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "24",
                    "numero": "39196823",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "508a006b-38ed-440e-8913-1e232e78d793",
            "dtCadastro": "12-30-2020, 12:10:22",
            "nome": "R5-D4",
            "dtNascimento": "2021-03-13",
            "documentos": [
                {
                    "codigo": "767.875.827-81",
                    "validade": "2021-02-13",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "340695150",
                    "validade": "2021-01-15",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "32893356133",
                    "validade": "2020-12-22",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "ED7SRFnj",
            "email": "R5-D4@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 7,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 232,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4032063626597308",
                    "nome": "Mace Windu",
                    "validade": {
                        "month": "02",
                        "year": "25"
                    },
                    "cvv": "165",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4179399861464157",
                    "nome": "Plo Koon",
                    "validade": {
                        "month": "01",
                        "year": "25"
                    },
                    "cvv": "587",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5117254967624257",
                    "nome": "Dud Bolt",
                    "validade": {
                        "month": "06",
                        "year": "24"
                    },
                    "cvv": "578",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "26",
                    "numero": "23103891",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "28",
                    "numero": "54271855",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "59",
                    "numero": "86117629",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "103dc9c5-09bb-4521-b13f-fdbefd8e7d16",
            "dtCadastro": "03-19-2021, 10:49:10",
            "nome": "IG-88",
            "dtNascimento": "2021-01-24",
            "documentos": [
                {
                    "codigo": "122.941.365-00",
                    "validade": "2020-12-20",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "430822628",
                    "validade": "2021-02-14",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "53797775125",
                    "validade": "2021-01-28",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "0lSoKqbT",
            "email": "IG-88@gmail.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 774,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Escadaria"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Sebastiana Almeida de Araújo",
                    "numero": 107,
                    "bairro": "Coramara",
                    "cep": "29313327",
                    "cidade": {
                        "nome": "Cachoeiro de Itapemirim",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Escadaria"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Sebastiana Almeida de Araújo",
                    "numero": 347,
                    "bairro": "Coramara",
                    "cep": "29313327",
                    "cidade": {
                        "nome": "Cachoeiro de Itapemirim",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Conceição",
                    "numero": 847,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5550261872504403",
                    "nome": "R4-P17",
                    "validade": {
                        "month": "03",
                        "year": "26"
                    },
                    "cvv": "277",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "29",
                    "numero": "61548273",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "67",
                    "numero": "981495687",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "58",
                    "numero": "23676510",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "d90521a4-834a-4d03-8581-b7d2043f1c06",
            "dtCadastro": "02-17-2021, 06:21:47",
            "nome": "Grievous",
            "dtNascimento": "2021-02-11",
            "documentos": [
                {
                    "codigo": "561.812.117-48",
                    "validade": "2021-03-10",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "713869874",
                    "validade": "2021-01-18",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "53136162660",
                    "validade": "2021-03-04",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "sAqrrueP",
            "email": "Grievous@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Grêmio",
                    "numero": 532,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 802,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "19-G",
                    "numero": 589,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Caridade",
                    "numero": 618,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4957453534563339",
                    "nome": "Plo Koon",
                    "validade": {
                        "month": "08",
                        "year": "24"
                    },
                    "cvv": "280",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "21",
                    "numero": "948274665",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "25",
                    "numero": "951970244",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "c191cb93-9fd0-4a95-8e80-de20d89c240d",
            "dtCadastro": "12-14-2020, 01:39:08",
            "nome": "Luke Skywalker",
            "dtNascimento": "2020-12-28",
            "documentos": [
                {
                    "codigo": "243.314.579-15",
                    "validade": "2021-01-07",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "154595463",
                    "validade": "2020-12-15",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "32531082362",
                    "validade": "2021-01-20",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "deMIOJvO",
            "email": "Luke.Skywalker@bol.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Ribeirão Vermelho",
                    "numero": 465,
                    "bairro": "Jardim Alto da Boa Vista",
                    "cep": "86600248",
                    "cidade": {
                        "nome": "Rolândia",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 777,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 516,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Paraná",
                    "numero": 442,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5168915962029092",
                    "nome": "Tion Medon",
                    "validade": {
                        "month": "05",
                        "year": "23"
                    },
                    "cvv": "368",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "78",
                    "numero": "48831677",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "72",
                    "numero": "23649150",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "939536a6-e4b9-45da-9295-e4ffb2bbf04a",
            "dtCadastro": "02-19-2021, 07:21:48",
            "nome": "Gasgano",
            "dtNascimento": "2021-01-12",
            "documentos": [
                {
                    "codigo": "232.077.634-64",
                    "validade": "2021-01-17",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "168551315",
                    "validade": "2021-01-29",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "19987771375",
                    "validade": "2021-01-29",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "RC1M5896",
            "email": "Gasgano@gmail.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "da Caridade",
                    "numero": 249,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "19-G",
                    "numero": 440,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4313863348524708",
                    "nome": "Shmi Skywalker",
                    "validade": {
                        "month": "03",
                        "year": "23"
                    },
                    "cvv": "474",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5373401859941070",
                    "nome": "Adi Gallia",
                    "validade": {
                        "month": "07",
                        "year": "23"
                    },
                    "cvv": "923",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "14",
                    "numero": "32216701",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "a1646e6b-b611-43b3-add8-c2d99989be32",
            "dtCadastro": "02-23-2021, 12:19:42",
            "nome": "Lando Calrissian",
            "dtNascimento": "2021-03-10",
            "documentos": [
                {
                    "codigo": "291.336.639-20",
                    "validade": "2021-03-12",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "638914775",
                    "validade": "2020-12-20",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "73811275241",
                    "validade": "2021-01-17",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "OElyj5Hk",
            "email": "Lando.Calrissian@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 55,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Ribeirão Vermelho",
                    "numero": 300,
                    "bairro": "Jardim Alto da Boa Vista",
                    "cep": "86600248",
                    "cidade": {
                        "nome": "Rolândia",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4001589682918308",
                    "nome": "Padmé Amidala",
                    "validade": {
                        "month": "09",
                        "year": "24"
                    },
                    "cvv": "155",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "55",
                    "numero": "31682207",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "43",
                    "numero": "928446198",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "18",
                    "numero": "08092552",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "4e609290-eaa6-489f-b517-732ee6f02524",
            "dtCadastro": "12-31-2020, 04:10:13",
            "nome": "Qui-Gon Jinn",
            "dtNascimento": "2021-01-07",
            "documentos": [
                {
                    "codigo": "236.472.434-18",
                    "validade": "2021-03-22",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "137413757",
                    "validade": "2021-03-14",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "54143762194",
                    "validade": "2021-01-29",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "bnb7u5Hi",
            "email": "Qui-Gon.Jinn@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "São Vicente",
                    "numero": 944,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "da Conceição",
                    "numero": 904,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5370543004189809",
                    "nome": "Dud Bolt",
                    "validade": {
                        "month": 12,
                        "year": "26"
                    },
                    "cvv": "558",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5227628405638663",
                    "nome": "Lama Su",
                    "validade": {
                        "month": "02",
                        "year": "23"
                    },
                    "cvv": "842",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "62",
                    "numero": "928573977",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "26fc9eb8-10da-4ec4-8d4d-e67919fe1746",
            "dtCadastro": "12-24-2020, 12:24:23",
            "nome": "Tarfful",
            "dtNascimento": "2021-01-05",
            "documentos": [
                {
                    "codigo": "598.129.419-16",
                    "validade": "2021-01-19",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "410132297",
                    "validade": "2021-01-31",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "57863448116",
                    "validade": "2021-03-04",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "tMW2Vy05",
            "email": "Tarfful@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 983,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "João Amâncio",
                    "numero": 885,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Delmar Pismel",
                    "numero": 315,
                    "bairro": "Conjunto Guiomard Santos",
                    "cep": "69901411",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 86,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4936881113222537",
                    "nome": "R5-D4",
                    "validade": {
                        "month": "06",
                        "year": "26"
                    },
                    "cvv": "637",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "75",
                    "numero": "06370082",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "13",
                    "numero": "26574832",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "52",
                    "numero": "59240165",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "aa6bb5e1-0f55-41b6-9a38-aae8287d0a6a",
            "dtCadastro": "02-21-2021, 06:13:58",
            "nome": "Kit Fisto",
            "dtNascimento": "2020-12-30",
            "documentos": [
                {
                    "codigo": "551.661.296-95",
                    "validade": "2021-02-25",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "915152628",
                    "validade": "2021-03-06",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "52377921365",
                    "validade": "2021-02-20",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "8wqeWNA3",
            "email": "Kit.Fisto@bol.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "19-G",
                    "numero": 329,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 3,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "19-G",
                    "numero": 898,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 280,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5110467766397993",
                    "nome": "Padmé Amidala",
                    "validade": {
                        "month": 11,
                        "year": "23"
                    },
                    "cvv": "116",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5119377011097176",
                    "nome": "Bossk",
                    "validade": {
                        "month": 12,
                        "year": "23"
                    },
                    "cvv": "527",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5240985104360590",
                    "nome": "Wilhuff Tarkin",
                    "validade": {
                        "month": "07",
                        "year": "24"
                    },
                    "cvv": "985",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "72",
                    "numero": "85738744",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "0fe3933d-3f95-4567-9fc5-59f1f5fccf0a",
            "dtCadastro": "12-08-2020, 12:28:20",
            "nome": "Quarsh Panaka",
            "dtNascimento": "2021-02-17",
            "documentos": [
                {
                    "codigo": "872.363.652-11",
                    "validade": "2021-02-24",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "934120655",
                    "validade": "2021-03-16",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "22764084209",
                    "validade": "2021-01-26",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "n0qVAelT",
            "email": "Quarsh.Panaka@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Grêmio",
                    "numero": 927,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Paraná",
                    "numero": 326,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Paris",
                    "numero": 88,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5450678817968966",
                    "nome": "Gasgano",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "561",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4283269870142743",
                    "nome": "San Hill",
                    "validade": {
                        "month": 11,
                        "year": "24"
                    },
                    "cvv": "833",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5519614571570689",
                    "nome": "Greedo",
                    "validade": {
                        "month": "07",
                        "year": "25"
                    },
                    "cvv": "937",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "75",
                    "numero": "83028355",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "02",
                    "numero": "14160085",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "59",
                    "numero": "970743634",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "d06dc5b7-f627-46aa-9286-889134adbb76",
            "dtCadastro": "02-10-2021, 09:20:58",
            "nome": "Dexter Jettster",
            "dtNascimento": "2021-02-18",
            "documentos": [
                {
                    "codigo": "345.886.631-00",
                    "validade": "2021-03-03",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "467854446",
                    "validade": "2021-03-09",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "51038823378",
                    "validade": "2021-02-12",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "QDHYi8lh",
            "email": "Dexter.Jettster@bol.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Um",
                    "numero": 781,
                    "bairro": "Jardim Maracanã (Nova Veneza)",
                    "cep": "13181000",
                    "cidade": {
                        "nome": "Sumaré",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Osvaldo Correia",
                    "numero": 949,
                    "bairro": "Rocha",
                    "cep": "24420400",
                    "cidade": {
                        "nome": "São Gonçalo",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Manoel Pereira da Silva",
                    "numero": 596,
                    "bairro": "Parque das Nascentes",
                    "cep": "83327020",
                    "cidade": {
                        "nome": "Pinhais",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4336007435146628",
                    "nome": "Lama Su",
                    "validade": {
                        "month": "01",
                        "year": "25"
                    },
                    "cvv": "809",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "83",
                    "numero": "928841600",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "4b27813f-34a4-4d50-9a76-d00db15aa67a",
            "dtCadastro": "12-25-2020, 03:52:28",
            "nome": "Lando Calrissian",
            "dtNascimento": "2021-02-12",
            "documentos": [
                {
                    "codigo": "000.253.821-01",
                    "validade": "2021-03-10",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "468621863",
                    "validade": "2020-12-13",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "58236308373",
                    "validade": "2021-03-22",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "NJBdvvZR",
            "email": "Lando.Calrissian@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Grêmio",
                    "numero": 119,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "115",
                    "numero": 997,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5431860406900196",
                    "nome": "Tarfful",
                    "validade": {
                        "month": 12,
                        "year": "24"
                    },
                    "cvv": "057",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "67",
                    "numero": "67853413",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "77",
                    "numero": "917110955",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "e3231f48-a5d3-4e67-a42b-96bdd37b56dd",
            "dtCadastro": "12-17-2020, 06:36:35",
            "nome": "Taun We",
            "dtNascimento": "2021-03-23",
            "documentos": [
                {
                    "codigo": "637.138.608-58",
                    "validade": "2020-11-30",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "645420762",
                    "validade": "2021-03-06",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "41174422418",
                    "validade": "2021-02-19",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "KhBT09Vr",
            "email": "Taun.We@gmail.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "",
                    "numero": 278,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "115",
                    "numero": 233,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Um",
                    "numero": 313,
                    "bairro": "Jardim Maracanã (Nova Veneza)",
                    "cep": "13181000",
                    "cidade": {
                        "nome": "Sumaré",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4936664502214913",
                    "nome": "Finis Valorum",
                    "validade": {
                        "month": "01",
                        "year": "24"
                    },
                    "cvv": "625",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5300281502266150",
                    "nome": "Obi-Wan Kenobi",
                    "validade": {
                        "month": "01",
                        "year": "24"
                    },
                    "cvv": "436",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4997237871713090",
                    "nome": "Anakin Skywalker",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "107",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "54",
                    "numero": "47922164",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                },
                {
                    "ddd": "12",
                    "numero": "957258117",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "01",
                    "numero": "61509664",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "6f70a080-7412-46ec-bead-6483ee76cde2",
            "dtCadastro": "03-20-2021, 03:04:36",
            "nome": "Roos Tarpals",
            "dtNascimento": "2021-02-22",
            "documentos": [
                {
                    "codigo": "879.376.061-26",
                    "validade": "2021-02-26",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "580668032",
                    "validade": "2021-02-04",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "34178086583",
                    "validade": "2020-12-07",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "wK1yaWFr",
            "email": "Roos.Tarpals@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 18,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 110,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4513555908836070",
                    "nome": "Mas Amedda",
                    "validade": {
                        "month": "08",
                        "year": "26"
                    },
                    "cvv": "963",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5520188637818298",
                    "nome": "Zam Wesell",
                    "validade": {
                        "month": "03",
                        "year": "23"
                    },
                    "cvv": "185",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "51",
                    "numero": "44188262",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "54",
                    "numero": "65367656",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "14",
                    "numero": "71406741",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "2146168f-c67d-4673-af55-528fee67703d",
            "dtCadastro": "02-02-2021, 01:33:23",
            "nome": "Mon Mothma",
            "dtNascimento": "2021-03-07",
            "documentos": [
                {
                    "codigo": "241.667.498-62",
                    "validade": "2020-12-26",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "646468878",
                    "validade": "2021-01-13",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "26322197187",
                    "validade": "2021-03-03",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "hrrIuO9V",
            "email": "Mon.Mothma@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Rubim",
                    "numero": 121,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "",
                    "numero": 76,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4155264470917987",
                    "nome": "Rugor Nass",
                    "validade": {
                        "month": "02",
                        "year": "23"
                    },
                    "cvv": "148",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4401716910084324",
                    "nome": "Nien Nunb",
                    "validade": {
                        "month": "09",
                        "year": "25"
                    },
                    "cvv": "276",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "34",
                    "numero": "59073477",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "4b80e6a0-3602-4541-b7cf-87e31f4d3b55",
            "dtCadastro": "03-06-2021, 06:35:16",
            "nome": "Raymus Antilles",
            "dtNascimento": "2021-02-01",
            "documentos": [
                {
                    "codigo": "282.365.172-17",
                    "validade": "2021-03-19",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "313473423",
                    "validade": "2021-01-04",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "37804471331",
                    "validade": "2020-12-11",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "TyPuuli9",
            "email": "Raymus.Antilles@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SHCGN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "715 Bloco D",
                    "numero": 424,
                    "bairro": "Asa Norte",
                    "cep": "70770704",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "",
                    "numero": 536,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4313478435758430",
                    "nome": "Tion Medon",
                    "validade": {
                        "month": "08",
                        "year": "25"
                    },
                    "cvv": "758",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4548693359163733",
                    "nome": "Biggs Darklighter",
                    "validade": {
                        "month": "04",
                        "year": "25"
                    },
                    "cvv": "189",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "19",
                    "numero": "03955858",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "21",
                    "numero": "934882681",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "5bdea0fd-4214-48b5-8ea7-8937c6c767c9",
            "dtCadastro": "02-18-2021, 12:40:56",
            "nome": "Chewbacca",
            "dtNascimento": "2021-01-28",
            "documentos": [
                {
                    "codigo": "374.882.845-42",
                    "validade": "2021-03-20",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "756350448",
                    "validade": "2021-02-07",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "41225720651",
                    "validade": "2021-01-18",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "S8jNcmcj",
            "email": "Chewbacca@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Delmar Pismel",
                    "numero": 990,
                    "bairro": "Conjunto Guiomard Santos",
                    "cep": "69901411",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "115",
                    "numero": 585,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5391296152253837",
                    "nome": "Nute Gunray",
                    "validade": {
                        "month": "05",
                        "year": "25"
                    },
                    "cvv": "064",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5195439697951188",
                    "nome": "Chewbacca",
                    "validade": {
                        "month": "04",
                        "year": "26"
                    },
                    "cvv": "856",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5339774562617614",
                    "nome": "Padmé Amidala",
                    "validade": {
                        "month": 12,
                        "year": "25"
                    },
                    "cvv": "379",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "28",
                    "numero": "928333651",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "81",
                    "numero": "53997952",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "b2f67cea-3a00-45a2-a781-a8aa4cc54c4d",
            "dtCadastro": "02-15-2021, 02:59:41",
            "nome": "Wat Tambor",
            "dtNascimento": "2021-03-02",
            "documentos": [
                {
                    "codigo": "686.255.307-02",
                    "validade": "2020-12-29",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "648625879",
                    "validade": "2021-01-18",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "46806134948",
                    "validade": "2020-12-25",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "gWs5OL9C",
            "email": "Wat.Tambor@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Ribeirão Vermelho",
                    "numero": 2,
                    "bairro": "Jardim Alto da Boa Vista",
                    "cep": "86600248",
                    "cidade": {
                        "nome": "Rolândia",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "São Vicente",
                    "numero": 311,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4028724692173557",
                    "nome": "Wat Tambor",
                    "validade": {
                        "month": "06",
                        "year": "23"
                    },
                    "cvv": "544",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5373631617616305",
                    "nome": "Wicket Systri Warrick",
                    "validade": {
                        "month": "01",
                        "year": "26"
                    },
                    "cvv": "198",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "35",
                    "numero": "81584266",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "47",
                    "numero": "02312437",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "448b1e09-172f-4ee6-a369-36d36164b6e0",
            "dtCadastro": "02-20-2021, 08:53:40",
            "nome": "R5-D4",
            "dtNascimento": "2020-12-30",
            "documentos": [
                {
                    "codigo": "814.561.856-83",
                    "validade": "2021-01-01",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "862869621",
                    "validade": "2021-03-17",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "91285866779",
                    "validade": "2021-01-03",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "fCzQsiC1",
            "email": "R5-D4@bol.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SHCGN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "715 Bloco D",
                    "numero": 170,
                    "bairro": "Asa Norte",
                    "cep": "70770704",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 57,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 165,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4814607526225248",
                    "nome": "C-3PO",
                    "validade": {
                        "month": "08",
                        "year": "26"
                    },
                    "cvv": "520",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5547971369029443",
                    "nome": "Barriss Offee",
                    "validade": {
                        "month": "02",
                        "year": "24"
                    },
                    "cvv": "496",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5317720449610773",
                    "nome": "Poggle the Lesser",
                    "validade": {
                        "month": 11,
                        "year": "26"
                    },
                    "cvv": "248",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "31",
                    "numero": "20278815",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "1d7fb618-4f85-4dae-9935-2da4cafd689b",
            "dtCadastro": "02-18-2021, 11:06:51",
            "nome": "R4-P17",
            "dtNascimento": "2021-03-03",
            "documentos": [
                {
                    "codigo": "134.842.335-83",
                    "validade": "2021-02-13",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "883214652",
                    "validade": "2020-12-26",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "14323484125",
                    "validade": "2020-12-15",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "P3GUanh9",
            "email": "R4-P17@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 331,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Acre",
                    "numero": 882,
                    "bairro": "Parque Eldorado",
                    "cep": "25240430",
                    "cidade": {
                        "nome": "Duque de Caxias",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4962638266180038",
                    "nome": "Jek Tono Porkins",
                    "validade": {
                        "month": "04",
                        "year": "23"
                    },
                    "cvv": "046",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4618030541434281",
                    "nome": "Sebulba",
                    "validade": {
                        "month": "06",
                        "year": "26"
                    },
                    "cvv": "225",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "07",
                    "numero": "36468720",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "96252d8c-670c-4357-b2f2-25b83f4bf6f3",
            "dtCadastro": "01-31-2021, 08:57:47",
            "nome": "R2-D2",
            "dtNascimento": "2021-02-13",
            "documentos": [
                {
                    "codigo": "358.598.423-17",
                    "validade": "2021-03-16",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "682178865",
                    "validade": "2020-12-12",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "21589698716",
                    "validade": "2021-02-10",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "BYUBFMMO",
            "email": "R2-D2@gmail.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Conceição",
                    "numero": 510,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Odete",
                    "numero": 473,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Caridade",
                    "numero": 484,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4565783117448514",
                    "nome": "Lando Calrissian",
                    "validade": {
                        "month": "06",
                        "year": "26"
                    },
                    "cvv": "981",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "92",
                    "numero": "968494062",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "f491dae4-3442-4bc7-863a-48c32b2d83fe",
            "dtCadastro": "02-23-2021, 01:00:05",
            "nome": "Gasgano",
            "dtNascimento": "2021-01-07",
            "documentos": [
                {
                    "codigo": "359.053.833-32",
                    "validade": "2021-02-08",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "249218785",
                    "validade": "2021-01-05",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "20632875435",
                    "validade": "2020-12-24",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "3xtYb9qH",
            "email": "Gasgano@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 611,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Osvaldo Correia",
                    "numero": 829,
                    "bairro": "Rocha",
                    "cep": "24420400",
                    "cidade": {
                        "nome": "São Gonçalo",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4875703379933180",
                    "nome": "Yarael Poof",
                    "validade": {
                        "month": "06",
                        "year": "24"
                    },
                    "cvv": "001",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "35",
                    "numero": "921215278",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "24",
                    "numero": "27036393",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "61",
                    "numero": "84075787",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "d66ce36e-4e40-49c4-8b6d-48a2791f4dfc",
            "dtCadastro": "01-17-2021, 01:08:37",
            "nome": "Jar Jar Binks",
            "dtNascimento": "2020-12-30",
            "documentos": [
                {
                    "codigo": "311.209.426-32",
                    "validade": "2021-03-09",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "238408861",
                    "validade": "2021-03-23",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "71990678576",
                    "validade": "2020-12-28",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "mP6GeC4u",
            "email": "Jar.Jar Binks@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "300 Conjunto 21",
                    "numero": 287,
                    "bairro": "Recanto das Emas",
                    "cep": "72620122",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "São Vicente",
                    "numero": 889,
                    "bairro": "Sol Nascente",
                    "cep": "29210400",
                    "cidade": {
                        "nome": "Guarapari",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5236056458740807",
                    "nome": "San Hill",
                    "validade": {
                        "month": "06",
                        "year": "23"
                    },
                    "cvv": "266",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4749237892049004",
                    "nome": "Jango Fett",
                    "validade": {
                        "month": 10,
                        "year": "23"
                    },
                    "cvv": "083",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "64",
                    "numero": "17903932",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "a27681cd-20e8-49ea-a63a-2825f7a2d8a2",
            "dtCadastro": "01-28-2021, 04:41:01",
            "nome": "Plo Koon",
            "dtNascimento": "2021-01-17",
            "documentos": [
                {
                    "codigo": "528.727.633-84",
                    "validade": "2021-03-12",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "744012445",
                    "validade": "2021-02-02",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "47812458172",
                    "validade": "2020-12-21",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "IGbVPSau",
            "email": "Plo.Koon@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Rubim",
                    "numero": 137,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Manoel Pereira da Silva",
                    "numero": 85,
                    "bairro": "Parque das Nascentes",
                    "cep": "83327020",
                    "cidade": {
                        "nome": "Pinhais",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "João Amâncio",
                    "numero": 618,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5507012991022296",
                    "nome": "Poggle the Lesser",
                    "validade": {
                        "month": 12,
                        "year": "25"
                    },
                    "cvv": "379",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4763850191775045",
                    "nome": "Shmi Skywalker",
                    "validade": {
                        "month": "08",
                        "year": "26"
                    },
                    "cvv": "902",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5101646142660155",
                    "nome": "Dormé",
                    "validade": {
                        "month": 10,
                        "year": "24"
                    },
                    "cvv": "988",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "62",
                    "numero": "972245470",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "66e1c112-df3d-48d6-b69f-3d1b0e667a76",
            "dtCadastro": "01-29-2021, 11:54:05",
            "nome": "Greedo",
            "dtNascimento": "2021-01-22",
            "documentos": [
                {
                    "codigo": "043.657.435-70",
                    "validade": "2021-03-05",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "059856274",
                    "validade": "2021-01-01",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "76919764573",
                    "validade": "2021-03-14",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "FlmVtQXF",
            "email": "Greedo@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Grêmio",
                    "numero": 652,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 504,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 1,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5234409311482749",
                    "nome": "Kit Fisto",
                    "validade": {
                        "month": "04",
                        "year": "24"
                    },
                    "cvv": "895",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4571681741917486",
                    "nome": "Plo Koon",
                    "validade": {
                        "month": 11,
                        "year": "26"
                    },
                    "cvv": "758",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "50",
                    "numero": "922819176",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "34",
                    "numero": "01882769",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "ec8b3796-5c1e-4f8e-af06-d88af8e51568",
            "dtCadastro": "03-14-2021, 07:38:06",
            "nome": "Jek Tono Porkins",
            "dtNascimento": "2021-01-13",
            "documentos": [
                {
                    "codigo": "323.756.041-30",
                    "validade": "2021-03-17",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "647476167",
                    "validade": "2021-02-19",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "51860555425",
                    "validade": "2021-01-01",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "aICg3MRF",
            "email": "Jek.Tono Porkins@gmail.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Eugenio Garcia",
                    "numero": 166,
                    "bairro": "Vila Sarney",
                    "cep": "65090707",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Osvaldo Correia",
                    "numero": 999,
                    "bairro": "Rocha",
                    "cep": "24420400",
                    "cidade": {
                        "nome": "São Gonçalo",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5266749510669369",
                    "nome": "Zam Wesell",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "742",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "64",
                    "numero": "13577868",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "52",
                    "numero": "954887602",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "86",
                    "numero": "63084018",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "33788534-9c26-48ae-ae13-cac95074a4fa",
            "dtCadastro": "03-16-2021, 04:36:22",
            "nome": "Biggs Darklighter",
            "dtNascimento": "2021-01-11",
            "documentos": [
                {
                    "codigo": "439.936.188-31",
                    "validade": "2020-12-17",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "844635577",
                    "validade": "2020-11-27",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "54365035847",
                    "validade": "2021-02-04",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "kCGASeI9",
            "email": "Biggs.Darklighter@bol.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Paraná",
                    "numero": 176,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "19-G",
                    "numero": 496,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5395598885731815",
                    "nome": "Greedo",
                    "validade": {
                        "month": "08",
                        "year": "25"
                    },
                    "cvv": "510",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "39",
                    "numero": "926305392",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "07",
                    "numero": "71364669",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "98",
                    "numero": "37663346",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "5dd5c80e-3002-4ace-9b3a-2b8769eec5ad",
            "dtCadastro": "01-05-2021, 04:24:52",
            "nome": "Nien Nunb",
            "dtNascimento": "2021-01-10",
            "documentos": [
                {
                    "codigo": "587.543.651-47",
                    "validade": "2020-12-26",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "143264894",
                    "validade": "2021-02-10",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "33801216414",
                    "validade": "2020-12-07",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "ec5LBIrp",
            "email": "Nien.Nunb@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 70,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Grêmio",
                    "numero": 127,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4823791802017229",
                    "nome": "Rugor Nass",
                    "validade": {
                        "month": "06",
                        "year": "24"
                    },
                    "cvv": "063",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5223209136234587",
                    "nome": "Shaak Ti",
                    "validade": {
                        "month": "08",
                        "year": "26"
                    },
                    "cvv": "233",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4271893867624076",
                    "nome": "Ki-Adi-Mundi",
                    "validade": {
                        "month": "06",
                        "year": "23"
                    },
                    "cvv": "513",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "50",
                    "numero": "69945168",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "6e4a64b6-4e7f-4672-b764-fda409835a84",
            "dtCadastro": "03-07-2021, 10:13:08",
            "nome": "Obi-Wan Kenobi",
            "dtNascimento": "2021-01-29",
            "documentos": [
                {
                    "codigo": "636.340.493-24",
                    "validade": "2021-03-16",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "657841472",
                    "validade": "2021-02-10",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "77474227531",
                    "validade": "2021-01-15",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "PkSyDnMr",
            "email": "Obi-Wan.Kenobi@outlook.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Conceição",
                    "numero": 696,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 614,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 809,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Escadaria"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Sebastiana Almeida de Araújo",
                    "numero": 214,
                    "bairro": "Coramara",
                    "cep": "29313327",
                    "cidade": {
                        "nome": "Cachoeiro de Itapemirim",
                        "estado": {
                            "uf": "ES"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5372498171724847",
                    "nome": "Cordé",
                    "validade": {
                        "month": 10,
                        "year": "23"
                    },
                    "cvv": "768",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "04",
                    "numero": "34668033",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "81",
                    "numero": "955433834",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "881d91e8-4e2c-4a2d-8811-89d391948f52",
            "dtCadastro": "02-18-2021, 05:09:36",
            "nome": "Qui-Gon Jinn",
            "dtNascimento": "2021-02-18",
            "documentos": [
                {
                    "codigo": "753.651.268-66",
                    "validade": "2021-02-06",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "277244104",
                    "validade": "2021-01-18",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "82226371357",
                    "validade": "2021-01-09",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "r7iFTIpN",
            "email": "Qui-Gon.Jinn@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SHCGN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "715 Bloco D",
                    "numero": 887,
                    "bairro": "Asa Norte",
                    "cep": "70770704",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "300 Conjunto 21",
                    "numero": 589,
                    "bairro": "Recanto das Emas",
                    "cep": "72620122",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Conceição",
                    "numero": 77,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 286,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5232785925362357",
                    "nome": "Nute Gunray",
                    "validade": {
                        "month": 10,
                        "year": "24"
                    },
                    "cvv": "344",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "24",
                    "numero": "40812125",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "35cd50ab-8ee8-4de4-b945-71b6a761c30b",
            "dtCadastro": "03-03-2021, 06:57:12",
            "nome": "IG-88",
            "dtNascimento": "2021-01-09",
            "documentos": [
                {
                    "codigo": "958.736.863-00",
                    "validade": "2021-02-20",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "118650983",
                    "validade": "2021-03-17",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "65827384664",
                    "validade": "2020-12-12",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "3Uowbo2A",
            "email": "IG-88@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Grêmio",
                    "numero": 282,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Delmar Pismel",
                    "numero": 351,
                    "bairro": "Conjunto Guiomard Santos",
                    "cep": "69901411",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Rubim",
                    "numero": 469,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 699,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4590393596310406",
                    "nome": "Taun We",
                    "validade": {
                        "month": "09",
                        "year": "25"
                    },
                    "cvv": "628",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4752737358730637",
                    "nome": "Bossk",
                    "validade": {
                        "month": 11,
                        "year": "24"
                    },
                    "cvv": "645",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4629717516709807",
                    "nome": "Anakin Skywalker",
                    "validade": {
                        "month": "02",
                        "year": "23"
                    },
                    "cvv": "575",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "86",
                    "numero": "53939295",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "06",
                    "numero": "909453645",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "90",
                    "numero": "18184265",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "901702f2-91d1-49d4-83fa-4ad63bef4919",
            "dtCadastro": "01-21-2021, 05:29:24",
            "nome": "Tarfful",
            "dtNascimento": "2021-01-25",
            "documentos": [
                {
                    "codigo": "454.819.670-65",
                    "validade": "2021-01-16",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "127884662",
                    "validade": "2021-01-05",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "41767773431",
                    "validade": "2021-01-29",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "eoKxGESA",
            "email": "Tarfful@gmail.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Paris",
                    "numero": 635,
                    "bairro": "Jardim Europa",
                    "cep": "18045200",
                    "cidade": {
                        "nome": "Sorocaba",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Rubim",
                    "numero": 690,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "João Amâncio",
                    "numero": 218,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4304991486354454",
                    "nome": "Darth Maul",
                    "validade": {
                        "month": "01",
                        "year": "25"
                    },
                    "cvv": "094",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4184242809260100",
                    "nome": "Tion Medon",
                    "validade": {
                        "month": "06",
                        "year": "24"
                    },
                    "cvv": "361",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "41",
                    "numero": "83115172",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "75c38f91-6323-4a4c-b275-c9cceb9f05ad",
            "dtCadastro": "03-06-2021, 03:28:17",
            "nome": "Dormé",
            "dtNascimento": "2021-01-19",
            "documentos": [
                {
                    "codigo": "726.263.550-62",
                    "validade": "2020-11-28",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "988537600",
                    "validade": "2020-12-27",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "45298566233",
                    "validade": "2021-02-18",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "NGZFg9sS",
            "email": "Dormé@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Rubim",
                    "numero": 442,
                    "bairro": "Fátima",
                    "cep": "39800186",
                    "cidade": {
                        "nome": "Teófilo Otoni",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Pinheiro Sales",
                    "numero": 693,
                    "bairro": "Sete de Abril",
                    "cep": "41385745",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SQN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "115",
                    "numero": 687,
                    "bairro": "Asa Norte",
                    "cep": "70772000",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 425,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5146751405295512",
                    "nome": "Raymus Antilles",
                    "validade": {
                        "month": "02",
                        "year": "24"
                    },
                    "cvv": "267",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5285177345822937",
                    "nome": "Rugor Nass",
                    "validade": {
                        "month": "04",
                        "year": "24"
                    },
                    "cvv": "252",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4721130025829164",
                    "nome": "Ki-Adi-Mundi",
                    "validade": {
                        "month": "03",
                        "year": "24"
                    },
                    "cvv": "879",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "51",
                    "numero": "61285117",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "01daa8cd-1824-4e02-9082-90a1bc8f2bd9",
            "dtCadastro": "03-17-2021, 11:26:43",
            "nome": "Raymus Antilles",
            "dtNascimento": "2021-01-20",
            "documentos": [
                {
                    "codigo": "121.621.217-19",
                    "validade": "2021-01-24",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "968688344",
                    "validade": "2021-02-06",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "31699817184",
                    "validade": "2020-12-28",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "pYcEAEXa",
            "email": "Raymus.Antilles@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Paraná",
                    "numero": 7,
                    "bairro": "Estrela do Céu",
                    "cep": "23812020",
                    "cidade": {
                        "nome": "Itaguaí",
                        "estado": {
                            "uf": "RJ"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 447,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5543280196646757",
                    "nome": "Yoda",
                    "validade": {
                        "month": "04",
                        "year": "26"
                    },
                    "cvv": "471",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "34",
                    "numero": "964267112",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "90",
                    "numero": "82637767",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                },
                {
                    "ddd": "48",
                    "numero": "12416433",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "e4cda1ac-9dc0-4fa8-bbda-e53a8ecf2a9b",
            "dtCadastro": "02-05-2021, 08:02:17",
            "nome": "Greedo",
            "dtNascimento": "2021-02-22",
            "documentos": [
                {
                    "codigo": "152.828.510-75",
                    "validade": "2021-03-16",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "938421424",
                    "validade": "2021-02-02",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "00172834587",
                    "validade": "2021-01-25",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "ZGS9Dhoj",
            "email": "Greedo@outlook.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Caminho"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "19-G",
                    "numero": 604,
                    "bairro": "Jaguaripe I",
                    "cep": "41342738",
                    "cidade": {
                        "nome": "Salvador",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Avenida"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Ribeirão Vermelho",
                    "numero": 424,
                    "bairro": "Jardim Alto da Boa Vista",
                    "cep": "86600248",
                    "cidade": {
                        "nome": "Rolândia",
                        "estado": {
                            "uf": "PR"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "da Conceição",
                    "numero": 142,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4857008455714674",
                    "nome": "Biggs Darklighter",
                    "validade": {
                        "month": 10,
                        "year": "25"
                    },
                    "cvv": "597",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "07",
                    "numero": "975361247",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "65",
                    "numero": "72312100",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "3d51fded-e347-4203-a16e-bdd036c832d5",
            "dtCadastro": "01-24-2021, 12:41:27",
            "nome": "Taun We",
            "dtNascimento": "2021-01-29",
            "documentos": [
                {
                    "codigo": "654.476.282-29",
                    "validade": "2021-02-05",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "737044667",
                    "validade": "2021-03-05",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "69274408417",
                    "validade": "2020-12-16",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "WEnXTwz9",
            "email": "Taun.We@gmail.com",
            "enderecos": [
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Odete",
                    "numero": 78,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 587,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 187,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Odete",
                    "numero": 353,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4908608625849323",
                    "nome": "Wat Tambor",
                    "validade": {
                        "month": "01",
                        "year": "24"
                    },
                    "cvv": "670",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4652736998189700",
                    "nome": "Sebulba",
                    "validade": {
                        "month": "03",
                        "year": "26"
                    },
                    "cvv": "210",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5103225063095853",
                    "nome": "Lama Su",
                    "validade": {
                        "month": "04",
                        "year": "24"
                    },
                    "cvv": "942",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "20",
                    "numero": "55455522",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "53",
                    "numero": "76127014",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "6f808099-4473-467f-ae41-408a73d768bc",
            "dtCadastro": "01-01-2021, 07:14:10",
            "nome": "Rugor Nass",
            "dtNascimento": "2021-01-14",
            "documentos": [
                {
                    "codigo": "360.628.030-05",
                    "validade": "2021-03-15",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "220312978",
                    "validade": "2021-02-28",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "45782783229",
                    "validade": "2021-01-26",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "0crGTJkg",
            "email": "Rugor.Nass@bol.com",
            "enderecos": [
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Vitória",
                    "numero": 462,
                    "bairro": "Chácara Brasil",
                    "cep": "65066883",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": ""
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "",
                    "numero": 878,
                    "bairro": "Delmiro Gouveia",
                    "cep": "62258000",
                    "cidade": {
                        "nome": "Pires Ferreira",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "João Amâncio",
                    "numero": 489,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4075917768343557",
                    "nome": "Taun We",
                    "validade": {
                        "month": "07",
                        "year": "23"
                    },
                    "cvv": "660",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4041818940409178",
                    "nome": "Cordé",
                    "validade": {
                        "month": "01",
                        "year": "25"
                    },
                    "cvv": "577",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "45",
                    "numero": "25519974",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "51",
                    "numero": "48852455",
                    "tipoTelefone": {
                        "nomeTipo": "Residencial"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "97a57eba-fec9-47ab-a4c1-bfe8628148d5",
            "dtCadastro": "01-30-2021, 05:47:24",
            "nome": "Taun We",
            "dtNascimento": "2021-01-31",
            "documentos": [
                {
                    "codigo": "877.678.315-40",
                    "validade": "2021-02-28",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "831577384",
                    "validade": "2021-03-14",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "15882514641",
                    "validade": "2021-01-07",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "Hz3ydUJu",
            "email": "Taun.We@bol.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Delmar Pismel",
                    "numero": 355,
                    "bairro": "Conjunto Guiomard Santos",
                    "cep": "69901411",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "minha casa",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Grêmio",
                    "numero": 430,
                    "bairro": "Parque Ipê",
                    "cep": "44054456",
                    "cidade": {
                        "nome": "Feira de Santana",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "João Amâncio",
                    "numero": 400,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "esconderijo",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Travessa"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Conceição",
                    "numero": 19,
                    "bairro": "Sacavém",
                    "cep": "65042660",
                    "cidade": {
                        "nome": "São Luís",
                        "estado": {
                            "uf": "MA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5364185936434503",
                    "nome": "Tarfful",
                    "validade": {
                        "month": "07",
                        "year": "25"
                    },
                    "cvv": "156",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4422921409282414",
                    "nome": "Saesee Tiin",
                    "validade": {
                        "month": 10,
                        "year": "26"
                    },
                    "cvv": "296",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4936461696027379",
                    "nome": "Gregar Typho",
                    "validade": {
                        "month": "02",
                        "year": "26"
                    },
                    "cvv": "074",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "41",
                    "numero": "11163598",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "06",
                    "numero": "945163771",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "44",
                    "numero": "928335484",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "7b01398c-a2bc-41f5-a9e4-0e7561642bc7",
            "dtCadastro": "12-15-2020, 05:43:40",
            "nome": "Shaak Ti",
            "dtNascimento": "2020-12-23",
            "documentos": [
                {
                    "codigo": "984.126.492-73",
                    "validade": "2021-01-23",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "764888876",
                    "validade": "2021-03-20",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "52755228702",
                    "validade": "2021-02-26",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "EG4KERFt",
            "email": "Shaak.Ti@outlook.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 437,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "SHCGN"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "715 Bloco D",
                    "numero": 696,
                    "bairro": "Asa Norte",
                    "cep": "70770704",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "4146214706303769",
                    "nome": "Gregar Typho",
                    "validade": {
                        "month": "06",
                        "year": "24"
                    },
                    "cvv": "056",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5403810903580581",
                    "nome": "Dexter Jettster",
                    "validade": {
                        "month": "09",
                        "year": "24"
                    },
                    "cvv": "889",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5181512975807441",
                    "nome": "Luminara Unduli",
                    "validade": {
                        "month": "03",
                        "year": "23"
                    },
                    "cvv": "192",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "74",
                    "numero": "943033555",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "d1234e13-9108-4b12-8f17-6063963f4be7",
            "dtCadastro": "12-07-2020, 01:58:25",
            "nome": "Grievous",
            "dtNascimento": "2021-02-11",
            "documentos": [
                {
                    "codigo": "432.132.645-12",
                    "validade": "2021-03-08",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "372833448",
                    "validade": "2021-01-20",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "41535889514",
                    "validade": "2021-03-21",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "mdgeAhwN",
            "email": "Grievous@bol.com",
            "enderecos": [
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "da Caridade",
                    "numero": 312,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Edelvira Souza",
                    "numero": 165,
                    "bairro": "Conquista",
                    "cep": "45650262",
                    "cidade": {
                        "nome": "Ilhéus",
                        "estado": {
                            "uf": "BA"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5534077681881209",
                    "nome": "Sly Moore",
                    "validade": {
                        "month": "08",
                        "year": "24"
                    },
                    "cvv": "466",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5154752504810002",
                    "nome": "Adi Gallia",
                    "validade": {
                        "month": "04",
                        "year": "24"
                    },
                    "cvv": "859",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "5189010250902948",
                    "nome": "Qui-Gon Jinn",
                    "validade": {
                        "month": "03",
                        "year": "23"
                    },
                    "cvv": "188",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "29",
                    "numero": "909326028",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "56",
                    "numero": "951665636",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "effec398-c870-4396-aeb8-558b1f15de1f",
            "dtCadastro": "12-23-2020, 02:27:54",
            "nome": "Mas Amedda",
            "dtNascimento": "2021-02-03",
            "documentos": [
                {
                    "codigo": "410.924.449-80",
                    "validade": "2021-01-08",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "458511578",
                    "validade": "2020-12-27",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "83221816347",
                    "validade": "2021-01-12",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Feminino"
            },
            "senha": "Tc8KHzIZ",
            "email": "Mas.Amedda@outlook.com",
            "enderecos": [
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Araiporanga",
                    "numero": 795,
                    "bairro": "Vila Formosa",
                    "cep": "03360040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Ignázio Danti",
                    "numero": 873,
                    "bairro": "Jardim Santa Emília",
                    "cep": "04183040",
                    "cidade": {
                        "nome": "São Paulo",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "300 Conjunto 21",
                    "numero": 316,
                    "bairro": "Recanto das Emas",
                    "cep": "72620122",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5375763670334142",
                    "nome": "Sebulba",
                    "validade": {
                        "month": "05",
                        "year": "26"
                    },
                    "cvv": "000",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4794145415702823",
                    "nome": "Bossk",
                    "validade": {
                        "month": "05",
                        "year": "23"
                    },
                    "cvv": "860",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                },
                {
                    "numero": "4313359855761239",
                    "nome": "Chewbacca",
                    "validade": {
                        "month": "04",
                        "year": "26"
                    },
                    "cvv": "704",
                    "bandeira": {
                        "nome": "visa"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "94",
                    "numero": "18141281",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "44",
                    "numero": "56462738",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "ae9101b8-fda7-4075-8a08-f9bfc4843efc",
            "dtCadastro": "11-29-2020, 08:47:48",
            "nome": "Bib Fortuna",
            "dtNascimento": "2021-01-06",
            "documentos": [
                {
                    "codigo": "341.573.058-17",
                    "validade": "2021-01-25",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "639265842",
                    "validade": "2021-01-13",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "55734444744",
                    "validade": "2021-01-18",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Masculino"
            },
            "senha": "sl5zuTqE",
            "email": "Bib.Fortuna@outlook.com",
            "enderecos": [
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "da Caridade",
                    "numero": 267,
                    "bairro": "Padre Ernesto Sassida",
                    "cep": "79310410",
                    "cidade": {
                        "nome": "Corumbá",
                        "estado": {
                            "uf": "MS"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da amante",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "Um",
                    "numero": 97,
                    "bairro": "Jardim Maracanã (Nova Veneza)",
                    "cep": "13181000",
                    "cidade": {
                        "nome": "Sumaré",
                        "estado": {
                            "uf": "SP"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Vila"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Odete",
                    "numero": 536,
                    "bairro": "Monte Castelo",
                    "cep": "60326160",
                    "cidade": {
                        "nome": "Fortaleza",
                        "estado": {
                            "uf": "CE"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "oto praneta",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Casa"
                    },
                    "endereco": "João Amâncio",
                    "numero": 910,
                    "bairro": "João Paulo",
                    "cep": "69912058",
                    "cidade": {
                        "nome": "Rio Branco",
                        "estado": {
                            "uf": "AC"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5347904074658828",
                    "nome": "Lama Su",
                    "validade": {
                        "month": "01",
                        "year": "25"
                    },
                    "cvv": "676",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "41",
                    "numero": "964430287",
                    "tipoTelefone": {
                        "nomeTipo": "Celular"
                    }
                },
                {
                    "ddd": "10",
                    "numero": "44817499",
                    "tipoTelefone": {}
                },
                {
                    "ddd": "29",
                    "numero": "07266966",
                    "tipoTelefone": {}
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        },
        {
            "id": "236b3172-8dc5-4a60-94f8-4ac93ebdb986",
            "dtCadastro": "01-30-2021, 05:41:28",
            "nome": "Zam Wesell",
            "dtNascimento": "2021-01-26",
            "documentos": [
                {
                    "codigo": "280.776.138-02",
                    "validade": "2021-01-17",
                    "tipoDocumento": {
                        "nome": "CPF"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "414038026",
                    "validade": "2021-03-15",
                    "tipoDocumento": {
                        "nome": "RG"
                    },
                    "ativo": 1
                },
                {
                    "codigo": "33032162122",
                    "validade": "2021-01-08",
                    "tipoDocumento": {
                        "nome": "CNH"
                    },
                    "ativo": 1
                }
            ],
            "genero": {
                "name": "Não declarado"
            },
            "senha": "7VxfcRxL",
            "email": "Zam.Wesell@outlook.com",
            "enderecos": [
                {
                    "descricao": "casa da mamai",
                    "tipoEndereco": {
                        "nomeTipo": "cobrança"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Rua"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Residencial"
                    },
                    "endereco": "Oswaldo de Souza",
                    "numero": 895,
                    "bairro": "Dom Bosco",
                    "cep": "30850400",
                    "cidade": {
                        "nome": "Belo Horizonte",
                        "estado": {
                            "uf": "MG"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                },
                {
                    "descricao": "trabalho",
                    "tipoEndereco": {
                        "nomeTipo": "entrega"
                    },
                    "tipoLogradouro": {
                        "nomeTipo": "Quadra"
                    },
                    "tipoResidencia": {
                        "nomeTipo": "Apartamento"
                    },
                    "endereco": "37 Conjunto J",
                    "numero": 744,
                    "bairro": "Paranoá",
                    "cep": "71575250",
                    "cidade": {
                        "nome": "Brasília",
                        "estado": {
                            "uf": "DF"
                        }
                    },
                    "complemento": "",
                    "ativo": 1
                }
            ],
            "cartoes": [
                {
                    "numero": "5354149200949903",
                    "nome": "Jocasta Nu",
                    "validade": {
                        "month": "04",
                        "year": "26"
                    },
                    "cvv": "619",
                    "bandeira": {
                        "nome": "mastercard"
                    },
                    "ativo": 1
                }
            ],
            "telefones": [
                {
                    "ddd": "83",
                    "numero": "52667631",
                    "tipoTelefone": {
                        "nomeTipo": "Recado"
                    }
                }
            ],
            "tipoCliente": "usuario",
            "ativo": 1
        }
    ],
    clienteDetails: [],
    tipoDocumento: [],
    tipoLogradouro: [],
    enderecos: [],
};


const cliente = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'CLIENTE_UPDATE_VALUE':
            return {
                ...state,
                clientes: action.payload.clientes
            }
        case 'CLIENTE_DETAILS_UPDATE_VALUE':
            return {
                ...state,
                clienteDetails: action.payload.clienteDetails
            }
        case 'CLIENTE_ID_UPDATE_VALUE':
            return {
                ...state,
                clienteId: action.payload.clienteId
            }
        case 'TIPO_DOCUMENTO_UPDATE_VALUE':
            return {
                ...state,
                tipoDocumento: action.payload.tipoDocumento
            }
        case 'TIPO_LOGRADOURO_UPDATE_VALUE':
            return {
                ...state,
                tipoLogradouro: action.payload.tipoLogradouro
            }
        case 'ENDERECO_UPDATE_VALUE':
            return {
                ...state,
                tipoLogradouro: action.payload.tipoLogradouro
            }
        default:
            return state;
    }
}

export default cliente;