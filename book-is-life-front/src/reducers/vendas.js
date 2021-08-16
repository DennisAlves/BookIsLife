const initialState = {
    carrinho: [],
    carrinhoVenda: [],
    vendas: [
        {
            id: "97218a04-42ea-4f1e-8713-d6aa03bcaed5",
            data: "01-20-2021, 11:20:56",
            cliente: "a668d27a-0218-4674-851c-af2941629fe6",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Araiporanga",
                numero: 936,
                bairro: "Vila Formosa",
                cep: "03360040",
                cidade: {
                    nome: "São Paulo",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "8bb3e31a-5bd1-46c8-9c92-4b6f89baa246",
                    titulo: "Madame Bovary ",
                    qtde: 1,
                    preco: 101.25
                },
                {
                    id: "87faea56-c9df-4f57-a2fc-4789d8d1d1a8",
                    titulo: "O Morro dos Ventos Uivantes ",
                    qtde: 1,
                    preco: 150.15
                },
                {
                    id: "cd83f10a-c3ad-40d8-ae05-f4f259aa3ca3",
                    titulo: "Alice no País das Maravilhas ",
                    qtde: 2,
                    preco: 86.25
                }
            ],
            pagamento: [
                {
                    numero: "4600497657462002",
                    valor: 141.29999999999998
                },
                {
                    numero: "4289399038920872",
                    valor: 141.29999999999998
                },
                {
                    numero: "5362483407090991",
                    valor: 141.29999999999998
                }
            ],
            total: 423.9,
            status: "EM TRANSPORTE"
        },
        {
            id: "dc95eca3-4491-4c48-a073-657469c24b3b",
            data: "03-01-2021, 10:20:12",
            cliente: "8abc4e63-634c-4cdc-8162-9b1185147e7f",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Paraná",
                numero: 404,
                bairro: "Estrela do Céu",
                cep: "23812020",
                cidade: {
                    nome: "Itaguaí",
                    estado: {
                        uf: "RJ"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "04b67854-22ef-480d-b6a8-101ae1c905e0",
                    titulo: "O Processo ",
                    qtde: 1,
                    preco: 231
                },
                {
                    id: "61dc32e0-eb6e-448b-98c6-0b7c48b0f6af",
                    titulo: "O Senhor das Moscas ",
                    qtde: 2,
                    preco: 79.2
                },
                {
                    id: "b939787e-997c-4c74-8805-8cc4e59432e5",
                    titulo: "As Vinhas da Ira ",
                    qtde: 2,
                    preco: 120.75
                },
                {
                    id: "4c2ee76b-be8c-4146-9784-1c4afe63e92b",
                    titulo: "Enquanto Agonizo ",
                    qtde: 1,
                    preco: 295.9
                }
            ],
            pagamento: [
                {
                    numero: "5248863892834781",
                    valor: 926.8
                }
            ],
            total: 926.8,
            status: "REPROVADA"
        },
        {
            id: "a2ff5e59-ceac-4406-8796-68af522a0835",
            data: "02-13-2021, 08:46:24",
            cliente: "9454357f-ac5a-473e-aee5-689da2aeb2df",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Quadra"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "300 Conjunto 21",
                numero: 811,
                bairro: "Recanto das Emas",
                cep: "72620122",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "bc1eaf84-e7fd-4301-ab9a-ad891f70a6ea",
                    titulo: "Ilíada",
                    qtde: 2,
                    preco: 136.85
                },
                {
                    id: "22a6773b-210f-4aad-80b5-fc793a6d1daa",
                    titulo: "O Velho e o Mar ",
                    qtde: 1,
                    preco: 80.5
                }
            ],
            pagamento: [
                {
                    numero: "4063122743811075",
                    valor: 354.2
                }
            ],
            total: 354.2,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "bc1eaf84-e7fd-4301-ab9a-ad891f70a6ea",
                    titulo: "Ilíada",
                    qtde: 2,
                    preco: 136.85
                },
                {
                    id: "22a6773b-210f-4aad-80b5-fc793a6d1daa",
                    titulo: "O Velho e o Mar ",
                    qtde: 1,
                    preco: 80.5
                }
            ]
        },
        {
            id: "fb3b1188-a515-4071-8307-f01cea2b3b0f",
            data: "01-31-2021, 07:37:43",
            cliente: "efd055b3-b353-4416-a17b-ba423ced68e4",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Paris",
                numero: 270,
                bairro: "Jardim Europa",
                cep: "18045200",
                cidade: {
                    nome: "Sorocaba",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "65a2b621-efbf-4d4a-8dd2-5e8394b294e0",
                    titulo: "Adeus às Armas ",
                    qtde: 1,
                    preco: 55
                }
            ],
            pagamento: [
                {
                    numero: "5104393572952763",
                    valor: 55
                }
            ],
            total: 55,
            status: "APROVADA"
        },
        {
            id: "e00c50f3-fef7-4220-9338-b67aad270af3",
            data: "02-09-2021, 10:18:54",
            cliente: "0245503f-eb21-4d93-a9b3-356a3dcc9984",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: ""
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "",
                numero: 434,
                bairro: "Delmiro Gouveia",
                cep: "62258000",
                cidade: {
                    nome: "Pires Ferreira",
                    estado: {
                        uf: "CE"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "d2a64eb9-5133-47ac-93ef-0db5abf5375c",
                    titulo: "O Som e A Fúria ",
                    qtde: 2,
                    preco: 239.4
                },
                {
                    id: "b496af83-2ccd-4277-a56c-47ce6a8b960e",
                    titulo: "Ficções ",
                    qtde: 1,
                    preco: 120.75
                },
                {
                    id: "d2a64eb9-5133-47ac-93ef-0db5abf5375c",
                    titulo: "O Som e A Fúria ",
                    qtde: 2,
                    preco: 239.4
                },
                {
                    id: "e1359d2b-8a6b-42ec-806a-bc619731a102",
                    titulo: "Édipo Rei ",
                    qtde: 1,
                    preco: 75.6
                }
            ],
            pagamento: [
                {
                    numero: "5579916185369482",
                    valor: 1153.9499999999998
                }
            ],
            total: 1153.9499999999998,
            status: "REPROVADA"
        },
        {
            id: "53d0f9d8-1df2-416d-b64e-dba8db64654b",
            data: "02-13-2021, 12:49:26",
            cliente: "ec883109-c5a6-4449-a9a8-7d26ac5a7bab",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Um",
                numero: 32,
                bairro: "Jardim Maracanã (Nova Veneza)",
                cep: "13181000",
                cidade: {
                    nome: "Sumaré",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "16843fc4-cef2-4235-bea7-b2b814db409e",
                    titulo: "Journey to the End of the Night ",
                    qtde: 1,
                    preco: 173.65
                },
                {
                    id: "ca294fe9-110f-4cc5-ab6e-9ae2a87e7f9e",
                    titulo: "Paraíso Perdido ",
                    qtde: 2,
                    preco: 32.55
                },
                {
                    id: "cd83f10a-c3ad-40d8-ae05-f4f259aa3ca3",
                    titulo: "Alice no País das Maravilhas ",
                    qtde: 1,
                    preco: 86.25
                },
                {
                    id: "db6a38e4-f6aa-49a2-8794-5ef7614ffc84",
                    titulo: "À Sombra do Vulcão ",
                    qtde: 2,
                    preco: 258.75
                }
            ],
            pagamento: [
                {
                    numero: "5214206921601906",
                    valor: 842.5
                }
            ],
            total: 842.5,
            status: "REPROVADA"
        },
        {
            id: "5ae09da5-1515-4354-830e-426ecfa64706",
            data: "12-03-2020, 08:39:52",
            cliente: "ae80b73f-73d9-41fe-95d7-71ca0ccd0e0d",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "da Conceição",
                numero: 182,
                bairro: "Sacavém",
                cep: "65042660",
                cidade: {
                    nome: "São Luís",
                    estado: {
                        uf: "MA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "bb0684c0-ba4b-4e4c-b506-ddf62bb23cd2",
                    titulo: "As Viagens de Gulliver ",
                    qtde: 1,
                    preco: 80.5
                },
                {
                    id: "829717fc-afd0-4144-b8ed-5c21f3196136",
                    titulo: "Mrs Dalloway ",
                    qtde: 2,
                    preco: 33
                }
            ],
            pagamento: [
                {
                    numero: "5475335019167225",
                    valor: 146.5
                }
            ],
            total: 146.5,
            status: "REPROVADA"
        },
        {
            id: "86e27319-713b-40e7-af2a-50c5d2ade807",
            data: "02-18-2021, 02:39:52",
            cliente: "d90521a4-834a-4d03-8581-b7d2043f1c06",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "da Caridade",
                numero: 618,
                bairro: "Padre Ernesto Sassida",
                cep: "79310410",
                cidade: {
                    nome: "Corumbá",
                    estado: {
                        uf: "MS"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "3c106be3-ae9d-437c-a425-c34ebe855701",
                    titulo: "Orgulho e Preconceito ",
                    qtde: 1,
                    preco: 216.25
                },
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 1,
                    preco: 113.3
                },
                {
                    id: "7e28a464-fc91-4f79-b748-52e7680e473c",
                    titulo: "Os Demônios ",
                    qtde: 1,
                    preco: 78.75
                }
            ],
            pagamento: [
                {
                    numero: "4957453534563339",
                    valor: 408.3
                }
            ],
            total: 408.3,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "3c106be3-ae9d-437c-a425-c34ebe855701",
                    titulo: "Orgulho e Preconceito ",
                    qtde: 1,
                    preco: 216.25
                }
            ]
        },
        {
            id: "9ed1cd6c-0ee5-4f1a-bbd1-ab413487cbcb",
            data: "03-10-2021, 11:44:56",
            cliente: "508a006b-38ed-440e-8913-1e232e78d793",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Oswaldo de Souza",
                numero: 7,
                bairro: "Dom Bosco",
                cep: "30850400",
                cidade: {
                    nome: "Belo Horizonte",
                    estado: {
                        uf: "MG"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "b496af83-2ccd-4277-a56c-47ce6a8b960e",
                    titulo: "Ficções ",
                    qtde: 2,
                    preco: 120.75
                },
                {
                    id: "d2a64eb9-5133-47ac-93ef-0db5abf5375c",
                    titulo: "O Som e A Fúria ",
                    qtde: 2,
                    preco: 239.4
                },
                {
                    id: "7e28a464-fc91-4f79-b748-52e7680e473c",
                    titulo: "Os Demônios ",
                    qtde: 2,
                    preco: 78.75
                }
            ],
            pagamento: [
                {
                    numero: "4032063626597308",
                    valor: 438.9
                },
                {
                    numero: "4179399861464157",
                    valor: 438.9
                }
            ],
            total: 877.8,
            status: "ENTREGUE"
        },
        {
            id: "c53f6d3d-20a1-4adb-a9ca-00ae42b77cdc",
            data: "03-22-2021, 05:00:43",
            cliente: "4b27813f-34a4-4d50-9a76-d00db15aa67a",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Grêmio",
                numero: 119,
                bairro: "Parque Ipê",
                cep: "44054456",
                cidade: {
                    nome: "Feira de Santana",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "9a484503-8098-4cba-9bec-25a0b9f35015",
                    titulo: "Os Irmãos Karamazov ",
                    qtde: 1,
                    preco: 185.15
                },
                {
                    id: "a00f9787-8e5f-4b28-af7f-126e72521e05",
                    titulo: "Charlotte’s Web ",
                    qtde: 1,
                    preco: 227.7
                },
                {
                    id: "152534a4-36a7-455e-9985-c678b305816d",
                    titulo: "Uma Passagem Para a Índia ",
                    qtde: 1,
                    preco: 219.6
                },
                {
                    id: "65a2b621-efbf-4d4a-8dd2-5e8394b294e0",
                    titulo: "Adeus às Armas ",
                    qtde: 2,
                    preco: 55
                }
            ],
            pagamento: [
                {
                    numero: "5431860406900196",
                    valor: 742.45
                }
            ],
            total: 742.45,
            status: "ENTREGUE"
        },
        {
            id: "c31cdeec-47f9-472e-9d1d-4c8291f0ece4",
            data: "01-30-2021, 04:53:10",
            cliente: "3d451c94-68ba-4516-beee-0ab8535d4745",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Avenida"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Ribeirão Vermelho",
                numero: 177,
                bairro: "Jardim Alto da Boa Vista",
                cep: "86600248",
                cidade: {
                    nome: "Rolândia",
                    estado: {
                        uf: "PR"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "87faea56-c9df-4f57-a2fc-4789d8d1d1a8",
                    titulo: "O Morro dos Ventos Uivantes ",
                    qtde: 1,
                    preco: 150.15
                },
                {
                    id: "8bb3e31a-5bd1-46c8-9c92-4b6f89baa246",
                    titulo: "Madame Bovary ",
                    qtde: 1,
                    preco: 101.25
                },
                {
                    id: "11ad57d1-0bfd-4aba-b5b0-1ce9e160b9bd",
                    titulo: "O Bom Soldado ",
                    qtde: 2,
                    preco: 313.75
                }
            ],
            pagamento: [
                {
                    numero: "5309568958385711",
                    valor: 878.9
                }
            ],
            total: 878.9,
            status: "EM TRANSPORTE"
        },
        {
            id: "858e76cb-8443-4762-83d7-5d02d739b031",
            data: "12-22-2020, 11:20:06",
            cliente: "75c38f91-6323-4a4c-b275-c9cceb9f05ad",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Rubim",
                numero: 442,
                bairro: "Fátima",
                cep: "39800186",
                cidade: {
                    nome: "Teófilo Otoni",
                    estado: {
                        uf: "MG"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "5f386a31-6bb6-4db6-ae9b-805c106937b3",
                    titulo: "O Senhor dos Anéis ",
                    qtde: 1,
                    preco: 352.5
                },
                {
                    id: "b4836fec-4229-4940-b744-ad9001418246",
                    titulo: "Antígona ",
                    qtde: 2,
                    preco: 35
                }
            ],
            pagamento: [
                {
                    numero: "5146751405295512",
                    valor: 211.25
                },
                {
                    numero: "5285177345822937",
                    valor: 211.25
                }
            ],
            total: 422.5,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "5f386a31-6bb6-4db6-ae9b-805c106937b3",
                    titulo: "O Senhor dos Anéis ",
                    qtde: 1,
                    preco: 352.5
                },
                {
                    id: "b4836fec-4229-4940-b744-ad9001418246",
                    titulo: "Antígona ",
                    qtde: 2,
                    preco: 35
                }
            ]
        },
        {
            id: "c912f11a-9532-495e-a1f5-fedddbd146d2",
            data: "03-05-2021, 06:08:30",
            cliente: "ec883109-c5a6-4449-a9a8-7d26ac5a7bab",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Um",
                numero: 32,
                bairro: "Jardim Maracanã (Nova Veneza)",
                cep: "13181000",
                cidade: {
                    nome: "Sumaré",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "a00f9787-8e5f-4b28-af7f-126e72521e05",
                    titulo: "Charlotte’s Web ",
                    qtde: 1,
                    preco: 227.7
                },
                {
                    id: "f0ed1ab9-568c-4aad-a56c-572b7ea1c526",
                    titulo: "Gargântua e Pantagruel ",
                    qtde: 2,
                    preco: 151.25
                },
                {
                    id: "65bdd03d-396b-4824-a048-e3ebbadfa1a6",
                    titulo: "A Cor Púrpura ",
                    qtde: 1,
                    preco: 191.4
                }
            ],
            pagamento: [
                {
                    numero: "5214206921601906",
                    valor: 360.8
                },
                {
                    numero: "4464098167420046",
                    valor: 360.8
                }
            ],
            total: 721.6,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "a00f9787-8e5f-4b28-af7f-126e72521e05",
                    titulo: "Charlotte’s Web ",
                    qtde: 1,
                    preco: 227.7
                },
                {
                    id: "f0ed1ab9-568c-4aad-a56c-572b7ea1c526",
                    titulo: "Gargântua e Pantagruel ",
                    qtde: 2,
                    preco: 151.25
                }
            ]
        },
        {
            id: "ba3d4104-07c3-4f4a-a59d-80b215c11808",
            data: "12-20-2020, 11:00:25",
            cliente: "a27681cd-20e8-49ea-a63a-2825f7a2d8a2",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Manoel Pereira da Silva",
                numero: 85,
                bairro: "Parque das Nascentes",
                cep: "83327020",
                cidade: {
                    nome: "Pinhais",
                    estado: {
                        uf: "PR"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "b551dae6-a840-4bfa-a308-2007a7d4ca90",
                    titulo: "Fausto ",
                    qtde: 2,
                    preco: 47.25
                }
            ],
            pagamento: [
                {
                    numero: "5507012991022296",
                    valor: 47.25
                },
                {
                    numero: "4763850191775045",
                    valor: 47.25
                }
            ],
            total: 94.5,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "b551dae6-a840-4bfa-a308-2007a7d4ca90",
                    titulo: "Fausto ",
                    qtde: 2,
                    preco: 47.25
                }
            ]
        },
        {
            id: "92ddf758-6b07-419d-a50c-2ea96286361d",
            data: "02-10-2021, 12:10:40",
            cliente: "c191cb93-9fd0-4a95-8e80-de20d89c240d",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Ignázio Danti",
                numero: 516,
                bairro: "Jardim Santa Emília",
                cep: "04183040",
                cidade: {
                    nome: "São Paulo",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "3c106be3-ae9d-437c-a425-c34ebe855701",
                    titulo: "Orgulho e Preconceito ",
                    qtde: 1,
                    preco: 216.25
                }
            ],
            pagamento: [
                {
                    numero: "5168915962029092",
                    valor: 216.25
                }
            ],
            total: 216.25,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "3c106be3-ae9d-437c-a425-c34ebe855701",
                    titulo: "Orgulho e Preconceito ",
                    qtde: 1,
                    preco: 216.25
                }
            ]
        },
        {
            id: "ad93f5fb-14f5-4ea8-a339-284dabb2da91",
            data: "12-21-2020, 11:50:58",
            cliente: "33788534-9c26-48ae-ae13-cac95074a4fa",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Caminho"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "19-G",
                numero: 496,
                bairro: "Jaguaripe I",
                cep: "41342738",
                cidade: {
                    nome: "Salvador",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "6a2f1246-e221-4ddf-b2df-7f62e857d616",
                    titulo: "As Aventuras de Huckleberry Finn ",
                    qtde: 1,
                    preco: 277.2
                },
                {
                    id: "42cccb80-bd67-402d-a9c2-589a5bd2dc69",
                    titulo: "A Metamorfose ",
                    qtde: 1,
                    preco: 195.8
                }
            ],
            pagamento: [
                {
                    numero: "5395598885731815",
                    valor: 473
                }
            ],
            total: 473,
            status: "ENTREGUE"
        },
        {
            id: "064a5bc1-42ba-4f5f-8c6b-04130f273463",
            data: "02-11-2021, 12:34:39",
            cliente: "a584c93e-6504-4746-80b2-b3e5398f07a7",
            enderecoDeEntrega: {
                descricao: "esconderijo",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "SHCGN"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "715 Bloco D",
                numero: 893,
                bairro: "Asa Norte",
                cep: "70770704",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "7676c01a-9363-4fa1-8bbf-9015688c8f44",
                    titulo: "Native Son ",
                    qtde: 1,
                    preco: 24
                },
                {
                    id: "2ca5e7df-2384-4abe-a1e0-ce9bffef16b5",
                    titulo: "A Vida e as Opiniões de Tristram Shandy ",
                    qtde: 1,
                    preco: 368.75
                },
                {
                    id: "c07ba4ce-3944-419b-84c5-b39e742abe80",
                    titulo: "Os Contos da Cantuária ",
                    qtde: 1,
                    preco: 110.5
                }
            ],
            pagamento: [
                {
                    numero: "4087447625003265",
                    valor: 251.625
                },
                {
                    numero: "5240923302916145",
                    valor: 251.625
                }
            ],
            total: 503.25,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "7676c01a-9363-4fa1-8bbf-9015688c8f44",
                    titulo: "Native Son ",
                    qtde: 1,
                    preco: 24
                },
                {
                    id: "2ca5e7df-2384-4abe-a1e0-ce9bffef16b5",
                    titulo: "A Vida e as Opiniões de Tristram Shandy ",
                    qtde: 1,
                    preco: 368.75
                }
            ]
        },
        {
            id: "e71eae73-c39f-46d6-942f-98dd9d7de570",
            data: "02-21-2021, 03:54:05",
            cliente: "d1234e13-9108-4b12-8f17-6063963f4be7",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "da Caridade",
                numero: 312,
                bairro: "Padre Ernesto Sassida",
                cep: "79310410",
                cidade: {
                    nome: "Corumbá",
                    estado: {
                        uf: "MS"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "cd83f10a-c3ad-40d8-ae05-f4f259aa3ca3",
                    titulo: "Alice no País das Maravilhas ",
                    qtde: 2,
                    preco: 86.25
                },
                {
                    id: "db6a38e4-f6aa-49a2-8794-5ef7614ffc84",
                    titulo: "À Sombra do Vulcão ",
                    qtde: 2,
                    preco: 258.75
                }
            ],
            pagamento: [
                {
                    numero: "5534077681881209",
                    valor: 230
                },
                {
                    numero: "5154752504810002",
                    valor: 230
                },
                {
                    numero: "5189010250902948",
                    valor: 230
                }
            ],
            total: 690,
            status: "APROVADA"
        },
        {
            id: "d05e286f-b11a-4a5c-b4fd-21e4a0b2cbaf",
            data: "12-24-2020, 06:32:30",
            cliente: "f89fa3be-b2bc-408c-b738-e82cfe81888a",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Paraná",
                numero: 977,
                bairro: "Estrela do Céu",
                cep: "23812020",
                cidade: {
                    nome: "Itaguaí",
                    estado: {
                        uf: "RJ"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "b89392c8-fe9d-4be6-9957-b64e861ab684",
                    titulo: "Tess Dos D’Urbervilles ",
                    qtde: 1,
                    preco: 31.2
                },
                {
                    id: "3923f519-2281-4182-98af-7da80330db81",
                    titulo: "Admirável Mundo Novo ",
                    qtde: 2,
                    preco: 145.95
                },
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 1,
                    preco: 113.3
                }
            ],
            pagamento: [
                {
                    numero: "5518695492187324",
                    valor: 436.4
                }
            ],
            total: 436.4,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "b89392c8-fe9d-4be6-9957-b64e861ab684",
                    titulo: "Tess Dos D’Urbervilles ",
                    qtde: 1,
                    preco: 31.2
                },
                {
                    id: "3923f519-2281-4182-98af-7da80330db81",
                    titulo: "Admirável Mundo Novo ",
                    qtde: 2,
                    preco: 145.95
                }
            ]
        },
        {
            id: "9bb310c9-b960-469b-8a07-2d28b36550ff",
            data: "12-27-2020, 05:15:20",
            cliente: "c947c4a7-65e3-40e5-adcf-ed8e2d36693f",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Pinheiro Sales",
                numero: 845,
                bairro: "Sete de Abril",
                cep: "41385745",
                cidade: {
                    nome: "Salvador",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "065b44c0-7663-43a3-b8fe-91fd6b0587c3",
                    titulo: "O Mundo se Despedaça ",
                    qtde: 2,
                    preco: 80.85
                },
                {
                    id: "4a44cb45-ec9c-40d8-af8c-b341a482be2a",
                    titulo: "E O Vento Levou ",
                    qtde: 1,
                    preco: 315.1
                }
            ],
            pagamento: [
                {
                    numero: "4182793709160693",
                    valor: 476.8
                }
            ],
            total: 476.8,
            status: "EM TRANSPORTE"
        },
        {
            id: "c68e5f3e-a7a1-4264-ac86-027fb47564ca",
            data: "01-24-2021, 09:13:56",
            cliente: "8abc4e63-634c-4cdc-8162-9b1185147e7f",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Paraná",
                numero: 404,
                bairro: "Estrela do Céu",
                cep: "23812020",
                cidade: {
                    nome: "Itaguaí",
                    estado: {
                        uf: "RJ"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "2ca5e7df-2384-4abe-a1e0-ce9bffef16b5",
                    titulo: "A Vida e as Opiniões de Tristram Shandy ",
                    qtde: 1,
                    preco: 368.75
                },
                {
                    id: "a6eeecf1-8076-4670-ab45-82f50987d7c8",
                    titulo: "Odisseia",
                    qtde: 1,
                    preco: 23.4
                },
                {
                    id: "32222bcc-5b63-426a-8cfd-97d0442e2662",
                    titulo: "Robinson Crusoe ",
                    qtde: 2,
                    preco: 201.25
                },
                {
                    id: "65bdd03d-396b-4824-a048-e3ebbadfa1a6",
                    titulo: "A Cor Púrpura ",
                    qtde: 2,
                    preco: 191.4
                }
            ],
            pagamento: [
                {
                    numero: "5248863892834781",
                    valor: 1177.45
                }
            ],
            total: 1177.45,
            status: "APROVADA"
        },
        {
            id: "f196711a-5389-4021-89ad-20bb38056919",
            data: "02-18-2021, 05:29:59",
            cliente: "ed2502c1-d10d-464e-afab-6b5fed8ee40d",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: ""
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "",
                numero: 754,
                bairro: "Delmiro Gouveia",
                cep: "62258000",
                cidade: {
                    nome: "Pires Ferreira",
                    estado: {
                        uf: "CE"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "9a9c8f78-f5a1-4c66-af74-3d7ccccfd900",
                    titulo: "As Histórias Completas de Franz Kafka ",
                    qtde: 1,
                    preco: 33.35
                },
                {
                    id: "e137f961-b727-462c-acd1-65cdacc2ebf6",
                    titulo: "Jane Eyre ",
                    qtde: 2,
                    preco: 336.25
                }
            ],
            pagamento: [
                {
                    numero: "5553065506145807",
                    valor: 352.925
                },
                {
                    numero: "4624448725674732",
                    valor: 352.925
                }
            ],
            total: 705.85,
            status: "REPROVADA"
        },
        {
            id: "6135faf3-c123-4d43-bd7b-72866bb08516",
            data: "01-07-2021, 02:50:27",
            cliente: "6ccdcf4c-ed6a-40f2-bbf6-408c0361452d",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Grêmio",
                numero: 497,
                bairro: "Parque Ipê",
                cep: "44054456",
                cidade: {
                    nome: "Feira de Santana",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "829717fc-afd0-4144-b8ed-5c21f3196136",
                    titulo: "Mrs Dalloway ",
                    qtde: 1,
                    preco: 33
                },
                {
                    id: "db6a38e4-f6aa-49a2-8794-5ef7614ffc84",
                    titulo: "À Sombra do Vulcão ",
                    qtde: 2,
                    preco: 258.75
                },
                {
                    id: "65bdd03d-396b-4824-a048-e3ebbadfa1a6",
                    titulo: "A Cor Púrpura ",
                    qtde: 1,
                    preco: 191.4
                },
                {
                    id: "f0ed1ab9-568c-4aad-a56c-572b7ea1c526",
                    titulo: "Gargântua e Pantagruel ",
                    qtde: 1,
                    preco: 151.25
                }
            ],
            pagamento: [
                {
                    numero: "4718307759516382",
                    valor: 893.15
                }
            ],
            total: 893.15,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "829717fc-afd0-4144-b8ed-5c21f3196136",
                    titulo: "Mrs Dalloway ",
                    qtde: 1,
                    preco: 33
                }
            ]
        },
        {
            id: "1a7d02a8-1d54-4d6f-8e06-5b27afc291e9",
            data: "01-12-2021, 07:57:25",
            cliente: "508a006b-38ed-440e-8913-1e232e78d793",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Oswaldo de Souza",
                numero: 7,
                bairro: "Dom Bosco",
                cep: "30850400",
                cidade: {
                    nome: "Belo Horizonte",
                    estado: {
                        uf: "MG"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "d2a64eb9-5133-47ac-93ef-0db5abf5375c",
                    titulo: "O Som e A Fúria ",
                    qtde: 1,
                    preco: 239.4
                },
                {
                    id: "9a484503-8098-4cba-9bec-25a0b9f35015",
                    titulo: "Os Irmãos Karamazov ",
                    qtde: 1,
                    preco: 185.15
                },
                {
                    id: "4420506c-dee2-4270-9571-89bc93b59551",
                    titulo: "O Sol é Para Todos ",
                    qtde: 2,
                    preco: 338.1
                },
                {
                    id: "c07ba4ce-3944-419b-84c5-b39e742abe80",
                    titulo: "Os Contos da Cantuária ",
                    qtde: 1,
                    preco: 110.5
                }
            ],
            pagamento: [
                {
                    numero: "4032063626597308",
                    valor: 605.625
                },
                {
                    numero: "4179399861464157",
                    valor: 605.625
                }
            ],
            total: 1211.25,
            status: "REPROVADA"
        },
        {
            id: "bc85031d-d91c-490f-aed5-d6c2f63f1860",
            data: "12-03-2020, 01:21:57",
            cliente: "4e609290-eaa6-489f-b517-732ee6f02524",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "São Vicente",
                numero: 944,
                bairro: "Sol Nascente",
                cep: "29210400",
                cidade: {
                    nome: "Guarapari",
                    estado: {
                        uf: "ES"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "8d48f63c-8560-4b1a-b95c-979655a7ff4a",
                    titulo: "O Idiota ",
                    qtde: 1,
                    preco: 66
                },
                {
                    id: "4c2ee76b-be8c-4146-9784-1c4afe63e92b",
                    titulo: "Enquanto Agonizo ",
                    qtde: 1,
                    preco: 295.9
                },
                {
                    id: "4420506c-dee2-4270-9571-89bc93b59551",
                    titulo: "O Sol é Para Todos ",
                    qtde: 2,
                    preco: 338.1
                },
                {
                    id: "1b784fa6-4f14-43cc-b67e-0ad6501d422b",
                    titulo: "Grandes Esperanças ",
                    qtde: 2,
                    preco: 177.6
                }
            ],
            pagamento: [
                {
                    numero: "5370543004189809",
                    valor: 696.65
                },
                {
                    numero: "5227628405638663",
                    valor: 696.65
                }
            ],
            total: 1393.3,
            status: "ENTREGUE"
        },
        {
            id: "d97d936a-c1c7-40aa-b740-e2c47de8d896",
            data: "01-09-2021, 05:30:22",
            cliente: "6f70a080-7412-46ec-bead-6483ee76cde2",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Edelvira Souza",
                numero: 110,
                bairro: "Conquista",
                cep: "45650262",
                cidade: {
                    nome: "Ilhéus",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "83c57ba2-77b2-43b5-9679-3621bb67a9bd",
                    titulo: "Amada ",
                    qtde: 1,
                    preco: 285.6
                },
                {
                    id: "fa21ba9a-7eb5-4370-bb2d-cde9b319e110",
                    titulo: "Almas Mortas ",
                    qtde: 2,
                    preco: 20.7
                },
                {
                    id: "bc1eaf84-e7fd-4301-ab9a-ad891f70a6ea",
                    titulo: "Ilíada",
                    qtde: 2,
                    preco: 136.85
                }
            ],
            pagamento: [
                {
                    numero: "4513555908836070",
                    valor: 300.35
                },
                {
                    numero: "5520188637818298",
                    valor: 300.35
                }
            ],
            total: 600.7,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "83c57ba2-77b2-43b5-9679-3621bb67a9bd",
                    titulo: "Amada ",
                    qtde: 1,
                    preco: 285.6
                },
                {
                    id: "fa21ba9a-7eb5-4370-bb2d-cde9b319e110",
                    titulo: "Almas Mortas ",
                    qtde: 2,
                    preco: 20.7
                }
            ]
        },
        {
            id: "6c300d56-c90e-47be-b1e2-f4b1283ec23d",
            data: "12-24-2020, 12:14:24",
            cliente: "8677eb28-d632-46d0-8172-fbbcff9b78dd",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Acre",
                numero: 69,
                bairro: "Parque Eldorado",
                cep: "25240430",
                cidade: {
                    nome: "Duque de Caxias",
                    estado: {
                        uf: "RJ"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "5d6e2d8a-84d3-4d9e-a79d-acf00353da8a",
                    titulo: "Rebecca ",
                    qtde: 2,
                    preco: 248.4
                },
                {
                    id: "28e089c7-c1be-4d8b-91df-cdbf30b89b7c",
                    titulo: "Crime e Castigo ",
                    qtde: 1,
                    preco: 150.15
                },
                {
                    id: "9a9c8f78-f5a1-4c66-af74-3d7ccccfd900",
                    titulo: "As Histórias Completas de Franz Kafka ",
                    qtde: 2,
                    preco: 33.35
                }
            ],
            pagamento: [
                {
                    numero: "4476102666500013",
                    valor: 356.82500000000005
                },
                {
                    numero: "4867233401736286",
                    valor: 356.82500000000005
                }
            ],
            total: 713.6500000000001,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "5d6e2d8a-84d3-4d9e-a79d-acf00353da8a",
                    titulo: "Rebecca ",
                    qtde: 2,
                    preco: 248.4
                },
                {
                    id: "28e089c7-c1be-4d8b-91df-cdbf30b89b7c",
                    titulo: "Crime e Castigo ",
                    qtde: 1,
                    preco: 150.15
                }
            ]
        },
        {
            id: "ab9926a9-419e-4171-adc7-b20c90706882",
            data: "12-21-2020, 09:57:38",
            cliente: "abf05e8b-7ae4-4222-9df3-042140d7a810",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "da Conceição",
                numero: 436,
                bairro: "Sacavém",
                cep: "65042660",
                cidade: {
                    nome: "São Luís",
                    estado: {
                        uf: "MA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "475e4b75-08cf-4948-b102-3ce69d8f2a4a",
                    titulo: "Tom Jones ",
                    qtde: 2,
                    preco: 263.35
                },
                {
                    id: "9a484503-8098-4cba-9bec-25a0b9f35015",
                    titulo: "Os Irmãos Karamazov ",
                    qtde: 2,
                    preco: 185.15
                },
                {
                    id: "ed680d5a-3d21-4880-bb15-7325999630ce",
                    titulo: "O Coração das Trevas ",
                    qtde: 2,
                    preco: 165.6
                }
            ],
            pagamento: [
                {
                    numero: "5217600724768929",
                    valor: 614.1
                },
                {
                    numero: "4545714434077764",
                    valor: 614.1
                }
            ],
            total: 1228.2,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "475e4b75-08cf-4948-b102-3ce69d8f2a4a",
                    titulo: "Tom Jones ",
                    qtde: 2,
                    preco: 263.35
                },
                {
                    id: "9a484503-8098-4cba-9bec-25a0b9f35015",
                    titulo: "Os Irmãos Karamazov ",
                    qtde: 2,
                    preco: 185.15
                }
            ]
        },
        {
            id: "67821780-4b51-4e63-a162-35272711f5af",
            data: "01-26-2021, 04:04:58",
            cliente: "d1234e13-9108-4b12-8f17-6063963f4be7",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "da Caridade",
                numero: 312,
                bairro: "Padre Ernesto Sassida",
                cep: "79310410",
                cidade: {
                    nome: "Corumbá",
                    estado: {
                        uf: "MS"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "d96d6e68-39fc-4d1e-b49a-840c174f2eae",
                    titulo: "Os Filhos da Meia-Noite ",
                    qtde: 1,
                    preco: 63.6
                },
                {
                    id: "5f386a31-6bb6-4db6-ae9b-805c106937b3",
                    titulo: "O Senhor dos Anéis ",
                    qtde: 2,
                    preco: 352.5
                },
                {
                    id: "1",
                    titulo: "The Hobbit",
                    qtde: 1,
                    preco: 46
                }
            ],
            pagamento: [
                {
                    numero: "5534077681881209",
                    valor: 814.6
                }
            ],
            total: 814.6,
            status: "ENTREGUE"
        },
        {
            id: "7b4e2bce-2b51-46d7-b59f-5dcc6c8e92bf",
            data: "01-20-2021, 07:40:52",
            cliente: "6f70a080-7412-46ec-bead-6483ee76cde2",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Edelvira Souza",
                numero: 110,
                bairro: "Conquista",
                cep: "45650262",
                cidade: {
                    nome: "Ilhéus",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "ed680d5a-3d21-4880-bb15-7325999630ce",
                    titulo: "O Coração das Trevas ",
                    qtde: 1,
                    preco: 165.6
                },
                {
                    id: "cd83f10a-c3ad-40d8-ae05-f4f259aa3ca3",
                    titulo: "Alice no País das Maravilhas ",
                    qtde: 1,
                    preco: 86.25
                },
                {
                    id: "14ddf336-9472-44e2-954a-722f121e2f56",
                    titulo: "O Vermelho e o Negro ",
                    qtde: 1,
                    preco: 218.75
                }
            ],
            pagamento: [
                {
                    numero: "4513555908836070",
                    valor: 470.6
                }
            ],
            total: 470.6,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "ed680d5a-3d21-4880-bb15-7325999630ce",
                    titulo: "O Coração das Trevas ",
                    qtde: 1,
                    preco: 165.6
                },
                {
                    id: "cd83f10a-c3ad-40d8-ae05-f4f259aa3ca3",
                    titulo: "Alice no País das Maravilhas ",
                    qtde: 1,
                    preco: 86.25
                },
                {
                    id: "14ddf336-9472-44e2-954a-722f121e2f56",
                    titulo: "O Vermelho e o Negro ",
                    qtde: 1,
                    preco: 218.75
                }
            ]
        },
        {
            id: "9fa303fe-f621-4d4e-9b60-849837214cbf",
            data: "01-26-2021, 04:29:54",
            cliente: "e6b95762-ece9-480e-9ebf-b89e7f850a7b",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Edelvira Souza",
                numero: 236,
                bairro: "Conquista",
                cep: "45650262",
                cidade: {
                    nome: "Ilhéus",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "b496af83-2ccd-4277-a56c-47ce6a8b960e",
                    titulo: "Ficções ",
                    qtde: 1,
                    preco: 120.75
                },
                {
                    id: "e8463ed5-42b0-4d66-8168-ebb87fad9680",
                    titulo: "A Revolução dos Bichos ",
                    qtde: 1,
                    preco: 145.2
                }
            ],
            pagamento: [
                {
                    numero: "4521722937850494",
                    valor: 265.95
                }
            ],
            total: 265.95,
            status: "APROVADA"
        },
        {
            id: "9e23d5e1-076e-4666-bcde-2d45c96a6239",
            data: "03-21-2021, 11:01:12",
            cliente: "01f21186-a6d6-421d-9fe0-c41a961be0d1",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Quadra"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "300 Conjunto 21",
                numero: 765,
                bairro: "Recanto das Emas",
                cep: "72620122",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "2c44fd9b-b8af-4bd4-96aa-3e8687aa0539",
                    titulo: "Retrato de Uma Senhora ",
                    qtde: 1,
                    preco: 260
                },
                {
                    id: "a0a58198-6ef6-47ee-bbdf-97a3cfb09bb9",
                    titulo: "Retrato do Artista Quando Jovem ",
                    qtde: 1,
                    preco: 49.35
                },
                {
                    id: "9af02e23-ff66-443d-8576-a6ae634f617b",
                    titulo: "Feira das Vaidades ",
                    qtde: 1,
                    preco: 292.95
                }
            ],
            pagamento: [
                {
                    numero: "5510134506437762",
                    valor: 200.76666666666665
                },
                {
                    numero: "5395292214745965",
                    valor: 200.76666666666665
                },
                {
                    numero: "4038099997106331",
                    valor: 200.76666666666665
                }
            ],
            total: 602.3,
            status: "APROVADA"
        },
        {
            id: "a3a98d10-2c72-4fef-be5e-bb4b15e5f5ff",
            data: "02-25-2021, 07:14:32",
            cliente: "c2cacad1-8d20-4a57-a277-57c1c87cd03d",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Pinheiro Sales",
                numero: 667,
                bairro: "Sete de Abril",
                cep: "41385745",
                cidade: {
                    nome: "Salvador",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "bb0684c0-ba4b-4e4c-b506-ddf62bb23cd2",
                    titulo: "As Viagens de Gulliver ",
                    qtde: 2,
                    preco: 80.5
                },
                {
                    id: "c8e1155c-e35b-43e5-bd6e-04ee6cca145c",
                    titulo: "Seus Olhos Viam Deus ",
                    qtde: 1,
                    preco: 163.2
                },
                {
                    id: "e137f961-b727-462c-acd1-65cdacc2ebf6",
                    titulo: "Jane Eyre ",
                    qtde: 2,
                    preco: 336.25
                }
            ],
            pagamento: [
                {
                    numero: "5183914024124604",
                    valor: 996.7
                }
            ],
            total: 996.7,
            status: "ENTREGUE"
        },
        {
            id: "a1d741dc-b8b1-49a0-ad51-ea5e769d4284",
            data: "03-12-2021, 08:22:19",
            cliente: "7b01398c-a2bc-41f5-a9e4-0e7561642bc7",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "SHCGN"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "715 Bloco D",
                numero: 696,
                bairro: "Asa Norte",
                cep: "70770704",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "8d48f63c-8560-4b1a-b95c-979655a7ff4a",
                    titulo: "O Idiota ",
                    qtde: 1,
                    preco: 66
                },
                {
                    id: "b8455455-aeda-40d7-843e-dbd9bc62ffbe",
                    titulo: "Divina Comédia ",
                    qtde: 1,
                    preco: 310.5
                },
                {
                    id: "cd83f10a-c3ad-40d8-ae05-f4f259aa3ca3",
                    titulo: "Alice no País das Maravilhas ",
                    qtde: 2,
                    preco: 86.25
                }
            ],
            pagamento: [
                {
                    numero: "4146214706303769",
                    valor: 274.5
                },
                {
                    numero: "5403810903580581",
                    valor: 274.5
                }
            ],
            total: 549,
            status: "EM TRANSPORTE"
        },
        {
            id: "ad3ba320-ca74-4408-a242-f2850cd40f2e",
            data: "01-25-2021, 05:05:47",
            cliente: "33788534-9c26-48ae-ae13-cac95074a4fa",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Caminho"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "19-G",
                numero: 496,
                bairro: "Jaguaripe I",
                cep: "41342738",
                cidade: {
                    nome: "Salvador",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "b496af83-2ccd-4277-a56c-47ce6a8b960e",
                    titulo: "Ficções ",
                    qtde: 1,
                    preco: 120.75
                }
            ],
            pagamento: [
                {
                    numero: "5395598885731815",
                    valor: 120.75
                }
            ],
            total: 120.75,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "b496af83-2ccd-4277-a56c-47ce6a8b960e",
                    titulo: "Ficções ",
                    qtde: 1,
                    preco: 120.75
                }
            ]
        },
        {
            id: "0f09e895-ee39-4176-9b3b-913800b003cd",
            data: "12-31-2020, 02:03:30",
            cliente: "d90521a4-834a-4d03-8581-b7d2043f1c06",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Grêmio",
                numero: 532,
                bairro: "Parque Ipê",
                cep: "44054456",
                cidade: {
                    nome: "Feira de Santana",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 2,
                    preco: 113.3
                },
                {
                    id: "9af02e23-ff66-443d-8576-a6ae634f617b",
                    titulo: "Feira das Vaidades ",
                    qtde: 1,
                    preco: 292.95
                },
                {
                    id: "2c54222a-c1c0-4139-8468-ca93237fc179",
                    titulo: "Ardil-22 ",
                    qtde: 2,
                    preco: 65
                }
            ],
            pagamento: [
                {
                    numero: "4957453534563339",
                    valor: 649.55
                }
            ],
            total: 649.55,
            status: "EM TRANSPORTE"
        },
        {
            id: "a47e48c1-4d49-4177-865b-7a111789221a",
            data: "02-21-2021, 09:16:42",
            cliente: "afd63546-c717-4959-8d6a-74abfd70ba0b",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "da Caridade",
                numero: 911,
                bairro: "Padre Ernesto Sassida",
                cep: "79310410",
                cidade: {
                    nome: "Corumbá",
                    estado: {
                        uf: "MS"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "11ad57d1-0bfd-4aba-b5b0-1ce9e160b9bd",
                    titulo: "O Bom Soldado ",
                    qtde: 1,
                    preco: 313.75
                },
                {
                    id: "16843fc4-cef2-4235-bea7-b2b814db409e",
                    titulo: "Journey to the End of the Night ",
                    qtde: 1,
                    preco: 173.65
                },
                {
                    id: "e1359d2b-8a6b-42ec-806a-bc619731a102",
                    titulo: "Édipo Rei ",
                    qtde: 2,
                    preco: 75.6
                },
                {
                    id: "2f9d90ee-7b2a-4d5f-b752-a44d13786a0f",
                    titulo: "As Flores do Mal ",
                    qtde: 2,
                    preco: 85.1
                }
            ],
            pagamento: [
                {
                    numero: "5500586406952657",
                    valor: 404.4
                },
                {
                    numero: "5535609558496080",
                    valor: 404.4
                }
            ],
            total: 808.8,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "11ad57d1-0bfd-4aba-b5b0-1ce9e160b9bd",
                    titulo: "O Bom Soldado ",
                    qtde: 1,
                    preco: 313.75
                },
                {
                    id: "16843fc4-cef2-4235-bea7-b2b814db409e",
                    titulo: "Journey to the End of the Night ",
                    qtde: 1,
                    preco: 173.65
                },
                {
                    id: "e1359d2b-8a6b-42ec-806a-bc619731a102",
                    titulo: "Édipo Rei ",
                    qtde: 2,
                    preco: 75.6
                }
            ]
        },
        {
            id: "c0814059-57a1-4387-9999-c6ad6d76bca9",
            data: "12-28-2020, 02:24:46",
            cliente: "ae80b73f-73d9-41fe-95d7-71ca0ccd0e0d",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "da Conceição",
                numero: 182,
                bairro: "Sacavém",
                cep: "65042660",
                cidade: {
                    nome: "São Luís",
                    estado: {
                        uf: "MA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "13c3f3f1-7a35-4b41-895f-21fedbc13a80",
                    titulo: "Matadouro 5 ",
                    qtde: 2,
                    preco: 85
                }
            ],
            pagamento: [
                {
                    numero: "5475335019167225",
                    valor: 170
                }
            ],
            total: 170,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "13c3f3f1-7a35-4b41-895f-21fedbc13a80",
                    titulo: "Matadouro 5 ",
                    qtde: 2,
                    preco: 85
                }
            ]
        },
        {
            id: "1ffed255-32b4-4453-b4b2-a13d4ca3133a",
            data: "12-19-2020, 12:14:33",
            cliente: "717c75cd-bc1e-4ac6-a728-105af2a93a00",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Quadra"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "37 Conjunto J",
                numero: 729,
                bairro: "Paranoá",
                cep: "71575250",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "5f5d2be0-ea95-4910-8d5c-f922ca2734f4",
                    titulo: "Folhas de Relva ",
                    qtde: 1,
                    preco: 296.4
                },
                {
                    id: "152534a4-36a7-455e-9985-c678b305816d",
                    titulo: "Uma Passagem Para a Índia ",
                    qtde: 2,
                    preco: 219.6
                },
                {
                    id: "4037ce61-f1be-44a8-8e0f-d7ac612ccecb",
                    titulo: "Cândido, ou O Otimismo ",
                    qtde: 1,
                    preco: 153.75
                }
            ],
            pagamento: [
                {
                    numero: "5266401271937698",
                    valor: 296.45
                },
                {
                    numero: "4487372782391657",
                    valor: 296.45
                },
                {
                    numero: "5409936513947334",
                    valor: 296.45
                }
            ],
            total: 889.3499999999999,
            status: "EM TRANSPORTE"
        },
        {
            id: "777186ce-f652-45bb-8aaa-587ea681b193",
            data: "02-10-2021, 11:04:56",
            cliente: "33788534-9c26-48ae-ae13-cac95074a4fa",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Paraná",
                numero: 176,
                bairro: "Estrela do Céu",
                cep: "23812020",
                cidade: {
                    nome: "Itaguaí",
                    estado: {
                        uf: "RJ"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "8d48f63c-8560-4b1a-b95c-979655a7ff4a",
                    titulo: "O Idiota ",
                    qtde: 2,
                    preco: 66
                },
                {
                    id: "b496af83-2ccd-4277-a56c-47ce6a8b960e",
                    titulo: "Ficções ",
                    qtde: 1,
                    preco: 120.75
                },
                {
                    id: "61dc32e0-eb6e-448b-98c6-0b7c48b0f6af",
                    titulo: "O Senhor das Moscas ",
                    qtde: 1,
                    preco: 79.2
                }
            ],
            pagamento: [
                {
                    numero: "5395598885731815",
                    valor: 331.95
                }
            ],
            total: 331.95,
            status: "APROVADA"
        },
        {
            id: "3c245ccd-8c48-4d51-bf1b-38ef58b811bf",
            data: "01-03-2021, 11:28:32",
            cliente: "53c1e909-2742-42e5-81fa-99bc5e23ff29",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: ""
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "",
                numero: 772,
                bairro: "Delmiro Gouveia",
                cep: "62258000",
                cidade: {
                    nome: "Pires Ferreira",
                    estado: {
                        uf: "CE"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "f74ad2cb-63ae-41ba-8929-847f4c51c6ae",
                    titulo: "O Sol Também se Levanta ",
                    qtde: 1,
                    preco: 26.4
                },
                {
                    id: "1",
                    titulo: "The Hobbit",
                    qtde: 1,
                    preco: 46
                },
                {
                    id: "2",
                    titulo: "O mundo assombrado pelos demônios",
                    qtde: 1,
                    preco: 28.75
                }
            ],
            pagamento: [
                {
                    numero: "5276714258997388",
                    valor: 50.575
                },
                {
                    numero: "5558204435176584",
                    valor: 50.575
                }
            ],
            total: 101.15,
            status: "EM TRANSPORTE"
        },
        {
            id: "74deed87-e127-4ed2-b70f-cb532adb99dc",
            data: "02-10-2021, 12:39:30",
            cliente: "effec398-c870-4396-aeb8-558b1f15de1f",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Ignázio Danti",
                numero: 873,
                bairro: "Jardim Santa Emília",
                cep: "04183040",
                cidade: {
                    nome: "São Paulo",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "fa21ba9a-7eb5-4370-bb2d-cde9b319e110",
                    titulo: "Almas Mortas ",
                    qtde: 1,
                    preco: 20.7
                },
                {
                    id: "fc8bfe12-dc81-4f63-af9d-04820fab1483",
                    titulo: "Middlemarch: Um Estudo da Vida Provinciana ",
                    qtde: 2,
                    preco: 59.8
                }
            ],
            pagamento: [
                {
                    numero: "5375763670334142",
                    valor: 70.14999999999999
                },
                {
                    numero: "4794145415702823",
                    valor: 70.14999999999999
                }
            ],
            total: 140.29999999999998,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "fa21ba9a-7eb5-4370-bb2d-cde9b319e110",
                    titulo: "Almas Mortas ",
                    qtde: 1,
                    preco: 20.7
                }
            ]
        },
        {
            id: "512cbf87-e34f-4ead-85b3-a81354919a0b",
            data: "12-12-2020, 09:44:51",
            cliente: "35cd50ab-8ee8-4de4-b945-71b6a761c30b",
            enderecoDeEntrega: {
                descricao: "esconderijo",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Delmar Pismel",
                numero: 351,
                bairro: "Conjunto Guiomard Santos",
                cep: "69901411",
                cidade: {
                    nome: "Rio Branco",
                    estado: {
                        uf: "AC"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "e137f961-b727-462c-acd1-65cdacc2ebf6",
                    titulo: "Jane Eyre ",
                    qtde: 1,
                    preco: 336.25
                },
                {
                    id: "42cccb80-bd67-402d-a9c2-589a5bd2dc69",
                    titulo: "A Metamorfose ",
                    qtde: 2,
                    preco: 195.8
                }
            ],
            pagamento: [
                {
                    numero: "4590393596310406",
                    valor: 363.925
                },
                {
                    numero: "4752737358730637",
                    valor: 363.925
                }
            ],
            total: 727.85,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "e137f961-b727-462c-acd1-65cdacc2ebf6",
                    titulo: "Jane Eyre ",
                    qtde: 1,
                    preco: 336.25
                },
                {
                    id: "42cccb80-bd67-402d-a9c2-589a5bd2dc69",
                    titulo: "A Metamorfose ",
                    qtde: 2,
                    preco: 195.8
                }
            ]
        },
        {
            id: "6f8ab75c-dfee-4287-9109-78c867626105",
            data: "12-05-2020, 03:03:44",
            cliente: "d06dc5b7-f627-46aa-9286-889134adbb76",
            enderecoDeEntrega: {
                descricao: "esconderijo",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Um",
                numero: 781,
                bairro: "Jardim Maracanã (Nova Veneza)",
                cep: "13181000",
                cidade: {
                    nome: "Sumaré",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "65a2b621-efbf-4d4a-8dd2-5e8394b294e0",
                    titulo: "Adeus às Armas ",
                    qtde: 1,
                    preco: 55
                },
                {
                    id: "fc8bfe12-dc81-4f63-af9d-04820fab1483",
                    titulo: "Middlemarch: Um Estudo da Vida Provinciana ",
                    qtde: 2,
                    preco: 59.8
                }
            ],
            pagamento: [
                {
                    numero: "4336007435146628",
                    valor: 174.6
                }
            ],
            total: 174.6,
            status: "EM TRANSPORTE"
        },
        {
            id: "52b25096-d71e-42df-b652-666eb3677ece",
            data: "01-10-2021, 09:26:39",
            cliente: "103dc9c5-09bb-4521-b13f-fdbefd8e7d16",
            enderecoDeEntrega: {
                descricao: "esconderijo",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Escadaria"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Sebastiana Almeida de Araújo",
                numero: 107,
                bairro: "Coramara",
                cep: "29313327",
                cidade: {
                    nome: "Cachoeiro de Itapemirim",
                    estado: {
                        uf: "ES"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "fc8bfe12-dc81-4f63-af9d-04820fab1483",
                    titulo: "Middlemarch: Um Estudo da Vida Provinciana ",
                    qtde: 1,
                    preco: 59.8
                },
                {
                    id: "6a2f1246-e221-4ddf-b2df-7f62e857d616",
                    titulo: "As Aventuras de Huckleberry Finn ",
                    qtde: 1,
                    preco: 277.2
                },
                {
                    id: "fa21ba9a-7eb5-4370-bb2d-cde9b319e110",
                    titulo: "Almas Mortas ",
                    qtde: 1,
                    preco: 20.7
                }
            ],
            pagamento: [
                {
                    numero: "5550261872504403",
                    valor: 357.7
                }
            ],
            total: 357.7,
            status: "EM TRANSPORTE"
        },
        {
            id: "bda317e2-ce92-4f9b-823e-c67e445198c5",
            data: "11-28-2020, 02:17:43",
            cliente: "6e4a64b6-4e7f-4672-b764-fda409835a84",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Pinheiro Sales",
                numero: 809,
                bairro: "Sete de Abril",
                cep: "41385745",
                cidade: {
                    nome: "Salvador",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "c8e1155c-e35b-43e5-bd6e-04ee6cca145c",
                    titulo: "Seus Olhos Viam Deus ",
                    qtde: 2,
                    preco: 163.2
                },
                {
                    id: "e950954a-585b-4400-bbb6-75c1380ab77d",
                    titulo: "Homem Invisível ",
                    qtde: 2,
                    preco: 312.5
                }
            ],
            pagamento: [
                {
                    numero: "5372498171724847",
                    valor: 951.4
                }
            ],
            total: 951.4,
            status: "ENTREGUE"
        },
        {
            id: "2f4d6c49-4669-45fd-a545-453f178269f1",
            data: "12-19-2020, 01:37:33",
            cliente: "a3fbf316-6067-4c2b-aa48-cddf9ba4bc52",
            enderecoDeEntrega: {
                descricao: "esconderijo",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Vitória",
                numero: 594,
                bairro: "Chácara Brasil",
                cep: "65066883",
                cidade: {
                    nome: "São Luís",
                    estado: {
                        uf: "MA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 1,
                    preco: 113.3
                },
                {
                    id: "fa21ba9a-7eb5-4370-bb2d-cde9b319e110",
                    titulo: "Almas Mortas ",
                    qtde: 1,
                    preco: 20.7
                }
            ],
            pagamento: [
                {
                    numero: "4230325786101266",
                    valor: 67
                },
                {
                    numero: "4466068109533063",
                    valor: 67
                }
            ],
            total: 134,
            status: "REPROVADA"
        },
        {
            id: "7fe9e91c-4627-430f-afd4-97baf07fcff6",
            data: "03-23-2021, 10:58:58",
            cliente: "6e4a64b6-4e7f-4672-b764-fda409835a84",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Pinheiro Sales",
                numero: 809,
                bairro: "Sete de Abril",
                cep: "41385745",
                cidade: {
                    nome: "Salvador",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 2,
                    preco: 113.3
                },
                {
                    id: "b8455455-aeda-40d7-843e-dbd9bc62ffbe",
                    titulo: "Divina Comédia ",
                    qtde: 1,
                    preco: 310.5
                }
            ],
            pagamento: [
                {
                    numero: "5372498171724847",
                    valor: 537.1
                }
            ],
            total: 537.1,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 2,
                    preco: 113.3
                },
                {
                    id: "b8455455-aeda-40d7-843e-dbd9bc62ffbe",
                    titulo: "Divina Comédia ",
                    qtde: 1,
                    preco: 310.5
                }
            ]
        },
        {
            id: "6ff285a0-6d77-46be-a578-640e4b060282",
            data: "12-01-2020, 02:16:27",
            cliente: "494e59be-af34-4f00-a7d8-aab563023c15",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Eugenio Garcia",
                numero: 994,
                bairro: "Vila Sarney",
                cep: "65090707",
                cidade: {
                    nome: "São Luís",
                    estado: {
                        uf: "MA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "b89392c8-fe9d-4be6-9957-b64e861ab684",
                    titulo: "Tess Dos D’Urbervilles ",
                    qtde: 1,
                    preco: 31.2
                },
                {
                    id: "65bdd03d-396b-4824-a048-e3ebbadfa1a6",
                    titulo: "A Cor Púrpura ",
                    qtde: 1,
                    preco: 191.4
                }
            ],
            pagamento: [
                {
                    numero: "5378813783332900",
                    valor: 111.3
                },
                {
                    numero: "5358211062299706",
                    valor: 111.3
                }
            ],
            total: 222.6,
            status: "ENTREGUE"
        },
        {
            id: "b7d88b06-de27-47b3-81b4-10d7c5bf9011",
            data: "03-19-2021, 08:06:39",
            cliente: "54b5dd97-1bf9-4bec-8987-caf0fc54df01",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Avenida"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Ribeirão Vermelho",
                numero: 442,
                bairro: "Jardim Alto da Boa Vista",
                cep: "86600248",
                cidade: {
                    nome: "Rolândia",
                    estado: {
                        uf: "PR"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "3c106be3-ae9d-437c-a425-c34ebe855701",
                    titulo: "Orgulho e Preconceito ",
                    qtde: 1,
                    preco: 216.25
                },
                {
                    id: "2c44fd9b-b8af-4bd4-96aa-3e8687aa0539",
                    titulo: "Retrato de Uma Senhora ",
                    qtde: 2,
                    preco: 260
                }
            ],
            pagamento: [
                {
                    numero: "4664656725252140",
                    valor: 736.25
                }
            ],
            total: 736.25,
            status: "EM TRANSPORTE"
        },
        {
            id: "c1719120-cc6c-4110-8393-301ecc810c58",
            data: "12-26-2020, 05:36:25",
            cliente: "c947c4a7-65e3-40e5-adcf-ed8e2d36693f",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Grêmio",
                numero: 946,
                bairro: "Parque Ipê",
                cep: "44054456",
                cidade: {
                    nome: "Feira de Santana",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "16843fc4-cef2-4235-bea7-b2b814db409e",
                    titulo: "Journey to the End of the Night ",
                    qtde: 1,
                    preco: 173.65
                },
                {
                    id: "c02cc1b1-5760-49c5-abfe-184d105afb70",
                    titulo: "Absalão, Absalão! ",
                    qtde: 1,
                    preco: 233.75
                }
            ],
            pagamento: [
                {
                    numero: "4182793709160693",
                    valor: 407.4
                }
            ],
            total: 407.4,
            status: "EM TRANSPORTE"
        },
        {
            id: "af12b4ab-979a-4bb2-bc18-9640dd7062e1",
            data: "02-11-2021, 12:10:53",
            cliente: "3d7e69bb-1fb4-4fe2-9ed5-129fc6017ada",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "SQN"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "115",
                numero: 12,
                bairro: "Asa Norte",
                cep: "70772000",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "bc1eaf84-e7fd-4301-ab9a-ad891f70a6ea",
                    titulo: "Ilíada",
                    qtde: 1,
                    preco: 136.85
                },
                {
                    id: "a00f9787-8e5f-4b28-af7f-126e72521e05",
                    titulo: "Charlotte’s Web ",
                    qtde: 1,
                    preco: 227.7
                },
                {
                    id: "b4836fec-4229-4940-b744-ad9001418246",
                    titulo: "Antígona ",
                    qtde: 1,
                    preco: 35
                }
            ],
            pagamento: [
                {
                    numero: "5267267312434246",
                    valor: 399.54999999999995
                }
            ],
            total: 399.54999999999995,
            status: "REPROVADA"
        },
        {
            id: "0671e3d8-4998-4f01-acea-47ee03280dc4",
            data: "03-18-2021, 01:02:13",
            cliente: "3d451c94-68ba-4516-beee-0ab8535d4745",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Acre",
                numero: 915,
                bairro: "Parque Eldorado",
                cep: "25240430",
                cidade: {
                    nome: "Duque de Caxias",
                    estado: {
                        uf: "RJ"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "3923f519-2281-4182-98af-7da80330db81",
                    titulo: "Admirável Mundo Novo ",
                    qtde: 1,
                    preco: 145.95
                }
            ],
            pagamento: [
                {
                    numero: "5309568958385711",
                    valor: 145.95
                }
            ],
            total: 145.95,
            status: "REPROVADA"
        },
        {
            id: "2c1def3c-311e-44f3-b6f1-118b41fdac88",
            data: "01-18-2021, 02:01:25",
            cliente: "d2110644-9260-4362-a015-9c524939dc98",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Grêmio",
                numero: 714,
                bairro: "Parque Ipê",
                cep: "44054456",
                cidade: {
                    nome: "Feira de Santana",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 2,
                    preco: 113.3
                },
                {
                    id: "7e28a464-fc91-4f79-b748-52e7680e473c",
                    titulo: "Os Demônios ",
                    qtde: 1,
                    preco: 78.75
                },
                {
                    id: "b5c82263-7149-4642-a9d3-1b38860f0a7f",
                    titulo: "O Estrangeiro ",
                    qtde: 1,
                    preco: 201.6
                }
            ],
            pagamento: [
                {
                    numero: "4972993175871583",
                    valor: 506.95000000000005
                }
            ],
            total: 506.95000000000005,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 2,
                    preco: 113.3
                }
            ]
        },
        {
            id: "7fc9c20a-ed7d-494f-957e-39c8b95fba69",
            data: "03-09-2021, 05:44:25",
            cliente: "6ccdcf4c-ed6a-40f2-bbf6-408c0361452d",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Grêmio",
                numero: 497,
                bairro: "Parque Ipê",
                cep: "44054456",
                cidade: {
                    nome: "Feira de Santana",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "22a6773b-210f-4aad-80b5-fc793a6d1daa",
                    titulo: "O Velho e o Mar ",
                    qtde: 2,
                    preco: 80.5
                },
                {
                    id: "4c2ee76b-be8c-4146-9784-1c4afe63e92b",
                    titulo: "Enquanto Agonizo ",
                    qtde: 1,
                    preco: 295.9
                }
            ],
            pagamento: [
                {
                    numero: "4718307759516382",
                    valor: 456.9
                }
            ],
            total: 456.9,
            status: "REPROVADA"
        },
        {
            id: "471ea7f4-53aa-4fc2-b945-d5b370c93176",
            data: "12-24-2020, 07:30:57",
            cliente: "3d451c94-68ba-4516-beee-0ab8535d4745",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: ""
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "",
                numero: 619,
                bairro: "Delmiro Gouveia",
                cep: "62258000",
                cidade: {
                    nome: "Pires Ferreira",
                    estado: {
                        uf: "CE"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "5d6e2d8a-84d3-4d9e-a79d-acf00353da8a",
                    titulo: "Rebecca ",
                    qtde: 1,
                    preco: 248.4
                },
                {
                    id: "61dc32e0-eb6e-448b-98c6-0b7c48b0f6af",
                    titulo: "O Senhor das Moscas ",
                    qtde: 1,
                    preco: 79.2
                },
                {
                    id: "b939787e-997c-4c74-8805-8cc4e59432e5",
                    titulo: "As Vinhas da Ira ",
                    qtde: 1,
                    preco: 120.75
                },
                {
                    id: "ed680d5a-3d21-4880-bb15-7325999630ce",
                    titulo: "O Coração das Trevas ",
                    qtde: 1,
                    preco: 165.6
                }
            ],
            pagamento: [
                {
                    numero: "5309568958385711",
                    valor: 613.95
                }
            ],
            total: 613.95,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "5d6e2d8a-84d3-4d9e-a79d-acf00353da8a",
                    titulo: "Rebecca ",
                    qtde: 1,
                    preco: 248.4
                },
                {
                    id: "61dc32e0-eb6e-448b-98c6-0b7c48b0f6af",
                    titulo: "O Senhor das Moscas ",
                    qtde: 1,
                    preco: 79.2
                },
                {
                    id: "b939787e-997c-4c74-8805-8cc4e59432e5",
                    titulo: "As Vinhas da Ira ",
                    qtde: 1,
                    preco: 120.75
                }
            ]
        },
        {
            id: "4de8af42-323f-4cff-8863-02323b9ef253",
            data: "01-18-2021, 01:37:43",
            cliente: "4b80e6a0-3602-4541-b7cf-87e31f4d3b55",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "SHCGN"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "715 Bloco D",
                numero: 424,
                bairro: "Asa Norte",
                cep: "70770704",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "db6a38e4-f6aa-49a2-8794-5ef7614ffc84",
                    titulo: "À Sombra do Vulcão ",
                    qtde: 2,
                    preco: 258.75
                },
                {
                    id: "ed680d5a-3d21-4880-bb15-7325999630ce",
                    titulo: "O Coração das Trevas ",
                    qtde: 2,
                    preco: 165.6
                }
            ],
            pagamento: [
                {
                    numero: "4313478435758430",
                    valor: 424.35
                },
                {
                    numero: "4548693359163733",
                    valor: 424.35
                }
            ],
            total: 848.7,
            status: "EM TRANSPORTE"
        },
        {
            id: "30b384bb-a215-4bd3-942f-02fe15b658b3",
            data: "12-27-2020, 11:03:18",
            cliente: "bf8ddcd3-837d-4515-8d5c-2724d0a02f6e",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Rubim",
                numero: 81,
                bairro: "Fátima",
                cep: "39800186",
                cidade: {
                    nome: "Teófilo Otoni",
                    estado: {
                        uf: "MG"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "9af02e23-ff66-443d-8576-a6ae634f617b",
                    titulo: "Feira das Vaidades ",
                    qtde: 1,
                    preco: 292.95
                },
                {
                    id: "4a44cb45-ec9c-40d8-af8c-b341a482be2a",
                    titulo: "E O Vento Levou ",
                    qtde: 2,
                    preco: 315.1
                },
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 2,
                    preco: 113.3
                }
            ],
            pagamento: [
                {
                    numero: "4150928466702273",
                    valor: 574.875
                },
                {
                    numero: "5581534110894437",
                    valor: 574.875
                }
            ],
            total: 1149.75,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "9af02e23-ff66-443d-8576-a6ae634f617b",
                    titulo: "Feira das Vaidades ",
                    qtde: 1,
                    preco: 292.95
                },
                {
                    id: "4a44cb45-ec9c-40d8-af8c-b341a482be2a",
                    titulo: "E O Vento Levou ",
                    qtde: 2,
                    preco: 315.1
                }
            ]
        },
        {
            id: "9f79cd96-5963-4fe9-8a3c-eb6519b0221a",
            data: "11-29-2020, 11:33:17",
            cliente: "cbdee5de-5632-42fc-9bb7-164a454ea851",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: ""
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "",
                numero: 454,
                bairro: "Delmiro Gouveia",
                cep: "62258000",
                cidade: {
                    nome: "Pires Ferreira",
                    estado: {
                        uf: "CE"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "9a9c8f78-f5a1-4c66-af74-3d7ccccfd900",
                    titulo: "As Histórias Completas de Franz Kafka ",
                    qtde: 1,
                    preco: 33.35
                },
                {
                    id: "7e28a464-fc91-4f79-b748-52e7680e473c",
                    titulo: "Os Demônios ",
                    qtde: 1,
                    preco: 78.75
                }
            ],
            pagamento: [
                {
                    numero: "4453744606514104",
                    valor: 112.1
                }
            ],
            total: 112.1,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "9a9c8f78-f5a1-4c66-af74-3d7ccccfd900",
                    titulo: "As Histórias Completas de Franz Kafka ",
                    qtde: 1,
                    preco: 33.35
                }
            ]
        },
        {
            id: "e0096cb1-6a45-4568-991d-3c04779fa4be",
            data: "02-21-2021, 08:46:04",
            cliente: "dfbd579b-cde4-4633-8138-a3c4a4f59f62",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Manoel Pereira da Silva",
                numero: 484,
                bairro: "Parque das Nascentes",
                cep: "83327020",
                cidade: {
                    nome: "Pinhais",
                    estado: {
                        uf: "PR"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "829717fc-afd0-4144-b8ed-5c21f3196136",
                    titulo: "Mrs Dalloway ",
                    qtde: 1,
                    preco: 33
                },
                {
                    id: "fc8bfe12-dc81-4f63-af9d-04820fab1483",
                    titulo: "Middlemarch: Um Estudo da Vida Provinciana ",
                    qtde: 1,
                    preco: 59.8
                },
                {
                    id: "b939787e-997c-4c74-8805-8cc4e59432e5",
                    titulo: "As Vinhas da Ira ",
                    qtde: 2,
                    preco: 120.75
                }
            ],
            pagamento: [
                {
                    numero: "5317064287601937",
                    valor: 334.3
                }
            ],
            total: 334.3,
            status: "APROVADA"
        },
        {
            id: "4f992fa0-bac6-492c-b89f-518a133ec649",
            data: "01-01-2021, 10:54:36",
            cliente: "5dd5c80e-3002-4ace-9b3a-2b8769eec5ad",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Ignázio Danti",
                numero: 70,
                bairro: "Jardim Santa Emília",
                cep: "04183040",
                cidade: {
                    nome: "São Paulo",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "65a2b621-efbf-4d4a-8dd2-5e8394b294e0",
                    titulo: "Adeus às Armas ",
                    qtde: 2,
                    preco: 55
                },
                {
                    id: "3c106be3-ae9d-437c-a425-c34ebe855701",
                    titulo: "Orgulho e Preconceito ",
                    qtde: 2,
                    preco: 216.25
                },
                {
                    id: "e950954a-585b-4400-bbb6-75c1380ab77d",
                    titulo: "Homem Invisível ",
                    qtde: 1,
                    preco: 312.5
                },
                {
                    id: "e1359d2b-8a6b-42ec-806a-bc619731a102",
                    titulo: "Édipo Rei ",
                    qtde: 2,
                    preco: 75.6
                }
            ],
            pagamento: [
                {
                    numero: "4823791802017229",
                    valor: 1006.2
                }
            ],
            total: 1006.2,
            status: "ENTREGUE"
        },
        {
            id: "28f53e93-7e85-43b2-8e79-d0d9100e6529",
            data: "02-11-2021, 02:32:55",
            cliente: "a3fbf316-6067-4c2b-aa48-cddf9ba4bc52",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "da Caridade",
                numero: 980,
                bairro: "Padre Ernesto Sassida",
                cep: "79310410",
                cidade: {
                    nome: "Corumbá",
                    estado: {
                        uf: "MS"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "03afe5ef-c877-414e-a08c-f737f1b3a205",
                    titulo: "A Terra Inútil ",
                    qtde: 1,
                    preco: 216
                },
                {
                    id: "28e089c7-c1be-4d8b-91df-cdbf30b89b7c",
                    titulo: "Crime e Castigo ",
                    qtde: 2,
                    preco: 150.15
                },
                {
                    id: "61dc32e0-eb6e-448b-98c6-0b7c48b0f6af",
                    titulo: "O Senhor das Moscas ",
                    qtde: 2,
                    preco: 79.2
                },
                {
                    id: "a0a58198-6ef6-47ee-bbdf-97a3cfb09bb9",
                    titulo: "Retrato do Artista Quando Jovem ",
                    qtde: 1,
                    preco: 49.35
                }
            ],
            pagamento: [
                {
                    numero: "4230325786101266",
                    valor: 362.025
                },
                {
                    numero: "4466068109533063",
                    valor: 362.025
                }
            ],
            total: 724.05,
            status: "ENTREGUE"
        },
        {
            id: "76b46106-098f-438d-aa21-10147c898b38",
            data: "03-20-2021, 07:22:42",
            cliente: "efd055b3-b353-4416-a17b-ba423ced68e4",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Caminho"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "19-G",
                numero: 891,
                bairro: "Jaguaripe I",
                cep: "41342738",
                cidade: {
                    nome: "Salvador",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "61dc32e0-eb6e-448b-98c6-0b7c48b0f6af",
                    titulo: "O Senhor das Moscas ",
                    qtde: 1,
                    preco: 79.2
                }
            ],
            pagamento: [
                {
                    numero: "5104393572952763",
                    valor: 26.400000000000002
                },
                {
                    numero: "4797265125419166",
                    valor: 26.400000000000002
                },
                {
                    numero: "5248162228087879",
                    valor: 26.400000000000002
                }
            ],
            total: 79.2,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "61dc32e0-eb6e-448b-98c6-0b7c48b0f6af",
                    titulo: "O Senhor das Moscas ",
                    qtde: 1,
                    preco: 79.2
                }
            ]
        },
        {
            id: "08ae8c36-ae09-43a0-92f5-18db9b7f0d3d",
            data: "12-25-2020, 08:16:28",
            cliente: "901702f2-91d1-49d4-83fa-4ad63bef4919",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Paris",
                numero: 635,
                bairro: "Jardim Europa",
                cep: "18045200",
                cidade: {
                    nome: "Sorocaba",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "5f5d2be0-ea95-4910-8d5c-f922ca2734f4",
                    titulo: "Folhas de Relva ",
                    qtde: 1,
                    preco: 296.4
                },
                {
                    id: "7e28a464-fc91-4f79-b748-52e7680e473c",
                    titulo: "Os Demônios ",
                    qtde: 2,
                    preco: 78.75
                },
                {
                    id: "ad6159ff-4bc2-4cc3-aa3e-15dace382359",
                    titulo: "O Conto da Aia ",
                    qtde: 1,
                    preco: 106.95
                }
            ],
            pagamento: [
                {
                    numero: "4304991486354454",
                    valor: 560.85
                }
            ],
            total: 560.85,
            status: "ENTREGUE"
        },
        {
            id: "7a97d2f1-1bc1-4f53-b683-70ad5c2f29ae",
            data: "12-09-2020, 10:00:22",
            cliente: "96252d8c-670c-4357-b2f2-25b83f4bf6f3",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "da Conceição",
                numero: 510,
                bairro: "Sacavém",
                cep: "65042660",
                cidade: {
                    nome: "São Luís",
                    estado: {
                        uf: "MA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "7e28a464-fc91-4f79-b748-52e7680e473c",
                    titulo: "Os Demônios ",
                    qtde: 2,
                    preco: 78.75
                },
                {
                    id: "e1359d2b-8a6b-42ec-806a-bc619731a102",
                    titulo: "Édipo Rei ",
                    qtde: 1,
                    preco: 75.6
                }
            ],
            pagamento: [
                {
                    numero: "4565783117448514",
                    valor: 233.1
                }
            ],
            total: 233.1,
            status: "REPROVADA"
        },
        {
            id: "0be38778-04fd-40e1-9d05-87ba5eb869ee",
            data: "03-03-2021, 10:21:09",
            cliente: "efd055b3-b353-4416-a17b-ba423ced68e4",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Paris",
                numero: 270,
                bairro: "Jardim Europa",
                cep: "18045200",
                cidade: {
                    nome: "Sorocaba",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "152534a4-36a7-455e-9985-c678b305816d",
                    titulo: "Uma Passagem Para a Índia ",
                    qtde: 2,
                    preco: 219.6
                },
                {
                    id: "065b44c0-7663-43a3-b8fe-91fd6b0587c3",
                    titulo: "O Mundo se Despedaça ",
                    qtde: 2,
                    preco: 80.85
                }
            ],
            pagamento: [
                {
                    numero: "5104393572952763",
                    valor: 300.45
                },
                {
                    numero: "4797265125419166",
                    valor: 300.45
                }
            ],
            total: 600.9,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "152534a4-36a7-455e-9985-c678b305816d",
                    titulo: "Uma Passagem Para a Índia ",
                    qtde: 2,
                    preco: 219.6
                }
            ]
        },
        {
            id: "63e56325-d446-4845-826e-7efb54f0ebcf",
            data: "12-17-2020, 05:02:09",
            cliente: "3944aedf-e835-43b2-a4c8-19ce74c9c852",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Escadaria"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Sebastiana Almeida de Araújo",
                numero: 571,
                bairro: "Coramara",
                cep: "29313327",
                cidade: {
                    nome: "Cachoeiro de Itapemirim",
                    estado: {
                        uf: "ES"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "5d6e2d8a-84d3-4d9e-a79d-acf00353da8a",
                    titulo: "Rebecca ",
                    qtde: 1,
                    preco: 248.4
                }
            ],
            pagamento: [
                {
                    numero: "5532256858163482",
                    valor: 124.2
                },
                {
                    numero: "4603823383754551",
                    valor: 124.2
                }
            ],
            total: 248.4,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "5d6e2d8a-84d3-4d9e-a79d-acf00353da8a",
                    titulo: "Rebecca ",
                    qtde: 1,
                    preco: 248.4
                }
            ]
        },
        {
            id: "dd7587a5-dd94-4541-beb6-9ba0f20783fa",
            data: "01-01-2021, 12:58:24",
            cliente: "7b3728f3-2f0d-40c2-87f8-772ace2e1453",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Delmar Pismel",
                numero: 916,
                bairro: "Conjunto Guiomard Santos",
                cep: "69901411",
                cidade: {
                    nome: "Rio Branco",
                    estado: {
                        uf: "AC"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "e1359d2b-8a6b-42ec-806a-bc619731a102",
                    titulo: "Édipo Rei ",
                    qtde: 2,
                    preco: 75.6
                },
                {
                    id: "34ec7f3f-a78e-4ed8-8888-c1f543122928",
                    titulo: "Frankenstein ",
                    qtde: 2,
                    preco: 276.1
                },
                {
                    id: "e137f961-b727-462c-acd1-65cdacc2ebf6",
                    titulo: "Jane Eyre ",
                    qtde: 2,
                    preco: 336.25
                }
            ],
            pagamento: [
                {
                    numero: "4244861347253562",
                    valor: 1375.9
                }
            ],
            total: 1375.9,
            status: "REPROVADA"
        },
        {
            id: "bad19ea9-6f19-4762-b938-1c6edef2cf34",
            data: "01-02-2021, 08:51:38",
            cliente: "8abc4e63-634c-4cdc-8162-9b1185147e7f",
            enderecoDeEntrega: {
                descricao: "esconderijo",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Edelvira Souza",
                numero: 845,
                bairro: "Conquista",
                cep: "45650262",
                cidade: {
                    nome: "Ilhéus",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "c8e1155c-e35b-43e5-bd6e-04ee6cca145c",
                    titulo: "Seus Olhos Viam Deus ",
                    qtde: 1,
                    preco: 163.2
                },
                {
                    id: "3f85f34e-e261-4328-9292-6431fe47b652",
                    titulo: "A Época da Inocência ",
                    qtde: 2,
                    preco: 143.85
                }
            ],
            pagamento: [
                {
                    numero: "5248863892834781",
                    valor: 225.45
                },
                {
                    numero: "5459626799010662",
                    valor: 225.45
                }
            ],
            total: 450.9,
            status: "EM TRANSPORTE"
        },
        {
            id: "b24fe07b-3615-4039-be63-8c84a2299cc6",
            data: "03-02-2021, 11:22:36",
            cliente: "6f808099-4473-467f-ae41-408a73d768bc",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: ""
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "",
                numero: 878,
                bairro: "Delmiro Gouveia",
                cep: "62258000",
                cidade: {
                    nome: "Pires Ferreira",
                    estado: {
                        uf: "CE"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "178feb97-b16d-45f5-b12c-ddf90c940ccd",
                    titulo: "O Castelo ",
                    qtde: 2,
                    preco: 308.4
                },
                {
                    id: "b496af83-2ccd-4277-a56c-47ce6a8b960e",
                    titulo: "Ficções ",
                    qtde: 2,
                    preco: 120.75
                },
                {
                    id: "c07ba4ce-3944-419b-84c5-b39e742abe80",
                    titulo: "Os Contos da Cantuária ",
                    qtde: 2,
                    preco: 110.5
                },
                {
                    id: "256b869c-37ba-4b05-8250-136e02804da6",
                    titulo: "As Mil e Uma Noites ",
                    qtde: 2,
                    preco: 51.25
                }
            ],
            pagamento: [
                {
                    numero: "4075917768343557",
                    valor: 590.9
                },
                {
                    numero: "4041818940409178",
                    valor: 590.9
                }
            ],
            total: 1181.8,
            status: "ENTREGUE"
        },
        {
            id: "f29969a2-cdb8-45fd-aae0-6df825aea830",
            data: "02-03-2021, 10:05:04",
            cliente: "6ccdcf4c-ed6a-40f2-bbf6-408c0361452d",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "da Conceição",
                numero: 91,
                bairro: "Sacavém",
                cep: "65042660",
                cidade: {
                    nome: "São Luís",
                    estado: {
                        uf: "MA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "e8463ed5-42b0-4d66-8168-ebb87fad9680",
                    titulo: "A Revolução dos Bichos ",
                    qtde: 1,
                    preco: 145.2
                }
            ],
            pagamento: [
                {
                    numero: "4718307759516382",
                    valor: 145.2
                }
            ],
            total: 145.2,
            status: "REPROVADA"
        },
        {
            id: "fbe4bd98-5fcc-458d-8b29-e6f495d4aec0",
            data: "12-16-2020, 12:25:18",
            cliente: "2f9a60a8-0d02-4e61-bde4-6a45415ccdd7",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Oswaldo de Souza",
                numero: 482,
                bairro: "Dom Bosco",
                cep: "30850400",
                cidade: {
                    nome: "Belo Horizonte",
                    estado: {
                        uf: "MG"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "8356e0bd-f675-4e4f-ae8a-c6661378514e",
                    titulo: "Os Melhores Contos e Poemas de Edgar Allan Poe ",
                    qtde: 1,
                    preco: 30
                },
                {
                    id: "35646590-8476-4038-88e0-65ba5bb4e5a4",
                    titulo: "1984 ",
                    qtde: 2,
                    preco: 51.25
                }
            ],
            pagamento: [
                {
                    numero: "4589126749023564",
                    valor: 132.5
                }
            ],
            total: 132.5,
            status: "ENTREGUE"
        },
        {
            id: "9877f5d0-b4b7-4f0a-9910-06a1e1b734bd",
            data: "12-11-2020, 11:54:11",
            cliente: "c2cacad1-8d20-4a57-a277-57c1c87cd03d",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Vitória",
                numero: 419,
                bairro: "Chácara Brasil",
                cep: "65066883",
                cidade: {
                    nome: "São Luís",
                    estado: {
                        uf: "MA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "fc8bfe12-dc81-4f63-af9d-04820fab1483",
                    titulo: "Middlemarch: Um Estudo da Vida Provinciana ",
                    qtde: 2,
                    preco: 59.8
                },
                {
                    id: "31d203a7-f1d9-4796-a4f6-32a02a28bb09",
                    titulo: "A Letra Escarlate ",
                    qtde: 1,
                    preco: 162.15
                },
                {
                    id: "8d48f63c-8560-4b1a-b95c-979655a7ff4a",
                    titulo: "O Idiota ",
                    qtde: 1,
                    preco: 66
                }
            ],
            pagamento: [
                {
                    numero: "5183914024124604",
                    valor: 347.75
                }
            ],
            total: 347.75,
            status: "REPROVADA"
        },
        {
            id: "e2d13629-3c15-40c0-bf5d-84384895e45a",
            data: "02-21-2021, 07:16:12",
            cliente: "dfbd579b-cde4-4633-8138-a3c4a4f59f62",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Manoel Pereira da Silva",
                numero: 415,
                bairro: "Parque das Nascentes",
                cep: "83327020",
                cidade: {
                    nome: "Pinhais",
                    estado: {
                        uf: "PR"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "256b869c-37ba-4b05-8250-136e02804da6",
                    titulo: "As Mil e Uma Noites ",
                    qtde: 2,
                    preco: 51.25
                }
            ],
            pagamento: [
                {
                    numero: "5317064287601937",
                    valor: 51.25
                },
                {
                    numero: "4799152784569796",
                    valor: 51.25
                }
            ],
            total: 102.5,
            status: "REPROVADA"
        },
        {
            id: "742eda22-ee62-49a0-af92-caf5df20c4ba",
            data: "01-23-2021, 04:45:02",
            cliente: "8f825ce1-1b17-420c-aab6-8baa14025198",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Grêmio",
                numero: 322,
                bairro: "Parque Ipê",
                cep: "44054456",
                cidade: {
                    nome: "Feira de Santana",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "32222bcc-5b63-426a-8cfd-97d0442e2662",
                    titulo: "Robinson Crusoe ",
                    qtde: 1,
                    preco: 201.25
                },
                {
                    id: "04b67854-22ef-480d-b6a8-101ae1c905e0",
                    titulo: "O Processo ",
                    qtde: 1,
                    preco: 231
                },
                {
                    id: "87faea56-c9df-4f57-a2fc-4789d8d1d1a8",
                    titulo: "O Morro dos Ventos Uivantes ",
                    qtde: 1,
                    preco: 150.15
                }
            ],
            pagamento: [
                {
                    numero: "4336452573898616",
                    valor: 582.4
                }
            ],
            total: 582.4,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "32222bcc-5b63-426a-8cfd-97d0442e2662",
                    titulo: "Robinson Crusoe ",
                    qtde: 1,
                    preco: 201.25
                },
                {
                    id: "04b67854-22ef-480d-b6a8-101ae1c905e0",
                    titulo: "O Processo ",
                    qtde: 1,
                    preco: 231
                },
                {
                    id: "87faea56-c9df-4f57-a2fc-4789d8d1d1a8",
                    titulo: "O Morro dos Ventos Uivantes ",
                    qtde: 1,
                    preco: 150.15
                }
            ]
        },
        {
            id: "3d0155cd-c7e3-4236-b25a-801ae7af8487",
            data: "03-22-2021, 03:45:32",
            cliente: "717c75cd-bc1e-4ac6-a728-105af2a93a00",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Paraná",
                numero: 120,
                bairro: "Estrela do Céu",
                cep: "23812020",
                cidade: {
                    nome: "Itaguaí",
                    estado: {
                        uf: "RJ"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "31d203a7-f1d9-4796-a4f6-32a02a28bb09",
                    titulo: "A Letra Escarlate ",
                    qtde: 2,
                    preco: 162.15
                },
                {
                    id: "fd85d608-f0d7-4dc7-8b47-aa762062416f",
                    titulo: "Anna Karenina ",
                    qtde: 2,
                    preco: 21.25
                },
                {
                    id: "4a44cb45-ec9c-40d8-af8c-b341a482be2a",
                    titulo: "E O Vento Levou ",
                    qtde: 1,
                    preco: 315.1
                },
                {
                    id: "04b67854-22ef-480d-b6a8-101ae1c905e0",
                    titulo: "O Processo ",
                    qtde: 2,
                    preco: 231
                }
            ],
            pagamento: [
                {
                    numero: "5266401271937698",
                    valor: 381.3
                },
                {
                    numero: "4487372782391657",
                    valor: 381.3
                },
                {
                    numero: "5409936513947334",
                    valor: 381.3
                }
            ],
            total: 1143.9,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "31d203a7-f1d9-4796-a4f6-32a02a28bb09",
                    titulo: "A Letra Escarlate ",
                    qtde: 2,
                    preco: 162.15
                },
                {
                    id: "fd85d608-f0d7-4dc7-8b47-aa762062416f",
                    titulo: "Anna Karenina ",
                    qtde: 2,
                    preco: 21.25
                },
                {
                    id: "4a44cb45-ec9c-40d8-af8c-b341a482be2a",
                    titulo: "E O Vento Levou ",
                    qtde: 1,
                    preco: 315.1
                },
                {
                    id: "04b67854-22ef-480d-b6a8-101ae1c905e0",
                    titulo: "O Processo ",
                    qtde: 2,
                    preco: 231
                }
            ]
        },
        {
            id: "81231527-7848-4421-987f-0723992a5ca3",
            data: "12-21-2020, 07:58:04",
            cliente: "afd63546-c717-4959-8d6a-74abfd70ba0b",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Quadra"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "37 Conjunto J",
                numero: 162,
                bairro: "Paranoá",
                cep: "71575250",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "decb3266-df27-4ee3-af23-cb21f06af9a0",
                    titulo: "Emma ",
                    qtde: 1,
                    preco: 171.6
                },
                {
                    id: "4420506c-dee2-4270-9571-89bc93b59551",
                    titulo: "O Sol é Para Todos ",
                    qtde: 1,
                    preco: 338.1
                },
                {
                    id: "b496af83-2ccd-4277-a56c-47ce6a8b960e",
                    titulo: "Ficções ",
                    qtde: 1,
                    preco: 120.75
                },
                {
                    id: "b89392c8-fe9d-4be6-9957-b64e861ab684",
                    titulo: "Tess Dos D’Urbervilles ",
                    qtde: 1,
                    preco: 31.2
                }
            ],
            pagamento: [
                {
                    numero: "5500586406952657",
                    valor: 330.82500000000005
                },
                {
                    numero: "5535609558496080",
                    valor: 330.82500000000005
                }
            ],
            total: 661.6500000000001,
            status: "EM TRANSPORTE"
        },
        {
            id: "6e5ef1a5-08e4-427c-b0db-d5e3b19c2731",
            data: "02-18-2021, 07:23:22",
            cliente: "d90521a4-834a-4d03-8581-b7d2043f1c06",
            enderecoDeEntrega: {
                descricao: "esconderijo",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Quadra"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "37 Conjunto J",
                numero: 802,
                bairro: "Paranoá",
                cep: "71575250",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "8d48f63c-8560-4b1a-b95c-979655a7ff4a",
                    titulo: "O Idiota ",
                    qtde: 2,
                    preco: 66
                },
                {
                    id: "5d6e2d8a-84d3-4d9e-a79d-acf00353da8a",
                    titulo: "Rebecca ",
                    qtde: 2,
                    preco: 248.4
                }
            ],
            pagamento: [
                {
                    numero: "4957453534563339",
                    valor: 628.8
                }
            ],
            total: 628.8,
            status: "EM TRANSPORTE"
        },
        {
            id: "0c9068dd-e5f5-40bc-85ca-ba7d30da1e1d",
            data: "01-26-2021, 04:32:36",
            cliente: "8abc4e63-634c-4cdc-8162-9b1185147e7f",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Paraná",
                numero: 404,
                bairro: "Estrela do Céu",
                cep: "23812020",
                cidade: {
                    nome: "Itaguaí",
                    estado: {
                        uf: "RJ"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "f0ed1ab9-568c-4aad-a56c-572b7ea1c526",
                    titulo: "Gargântua e Pantagruel ",
                    qtde: 1,
                    preco: 151.25
                }
            ],
            pagamento: [
                {
                    numero: "5248863892834781",
                    valor: 75.625
                },
                {
                    numero: "5459626799010662",
                    valor: 75.625
                }
            ],
            total: 151.25,
            status: "EM TRANSPORTE"
        },
        {
            id: "af8adbfb-55a9-411a-9958-2aa237dbc665",
            data: "02-27-2021, 08:49:19",
            cliente: "3d451c94-68ba-4516-beee-0ab8535d4745",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Grêmio",
                numero: 837,
                bairro: "Parque Ipê",
                cep: "44054456",
                cidade: {
                    nome: "Feira de Santana",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "d61e41df-4ff1-4f25-a89a-c69a06ea67d2",
                    titulo: "A Montanha Mágica ",
                    qtde: 2,
                    preco: 135
                }
            ],
            pagamento: [
                {
                    numero: "5309568958385711",
                    valor: 270
                }
            ],
            total: 270,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "d61e41df-4ff1-4f25-a89a-c69a06ea67d2",
                    titulo: "A Montanha Mágica ",
                    qtde: 2,
                    preco: 135
                }
            ]
        },
        {
            id: "7be753cb-5230-41b0-a94b-65e3b4bac9c8",
            data: "12-26-2020, 06:34:12",
            cliente: "e3231f48-a5d3-4e67-a42b-96bdd37b56dd",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "SQN"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "115",
                numero: 233,
                bairro: "Asa Norte",
                cep: "70772000",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "ad6159ff-4bc2-4cc3-aa3e-15dace382359",
                    titulo: "O Conto da Aia ",
                    qtde: 1,
                    preco: 106.95
                },
                {
                    id: "11ad57d1-0bfd-4aba-b5b0-1ce9e160b9bd",
                    titulo: "O Bom Soldado ",
                    qtde: 2,
                    preco: 313.75
                }
            ],
            pagamento: [
                {
                    numero: "4936664502214913",
                    valor: 367.225
                },
                {
                    numero: "5300281502266150",
                    valor: 367.225
                }
            ],
            total: 734.45,
            status: "APROVADA"
        },
        {
            id: "4e7e442b-256c-4a08-b53a-777b04c91d7a",
            data: "02-25-2021, 02:11:52",
            cliente: "3d51fded-e347-4203-a16e-bdd036c832d5",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Edelvira Souza",
                numero: 187,
                bairro: "Conquista",
                cep: "45650262",
                cidade: {
                    nome: "Ilhéus",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "11ad57d1-0bfd-4aba-b5b0-1ce9e160b9bd",
                    titulo: "O Bom Soldado ",
                    qtde: 1,
                    preco: 313.75
                }
            ],
            pagamento: [
                {
                    numero: "4908608625849323",
                    valor: 156.875
                },
                {
                    numero: "4652736998189700",
                    valor: 156.875
                }
            ],
            total: 313.75,
            status: "APROVADA"
        },
        {
            id: "15919565-dd0f-4998-a819-ab5896fef7e6",
            data: "02-28-2021, 06:32:46",
            cliente: "75c38f91-6323-4a4c-b275-c9cceb9f05ad",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "SQN"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "115",
                numero: 687,
                bairro: "Asa Norte",
                cep: "70772000",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "b939787e-997c-4c74-8805-8cc4e59432e5",
                    titulo: "As Vinhas da Ira ",
                    qtde: 1,
                    preco: 120.75
                },
                {
                    id: "fa21ba9a-7eb5-4370-bb2d-cde9b319e110",
                    titulo: "Almas Mortas ",
                    qtde: 1,
                    preco: 20.7
                }
            ],
            pagamento: [
                {
                    numero: "5146751405295512",
                    valor: 141.45
                }
            ],
            total: 141.45,
            status: "APROVADA"
        },
        {
            id: "5d0a576a-512d-4dec-83af-4082ec55867f",
            data: "11-29-2020, 09:04:39",
            cliente: "ec883109-c5a6-4449-a9a8-7d26ac5a7bab",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Um",
                numero: 32,
                bairro: "Jardim Maracanã (Nova Veneza)",
                cep: "13181000",
                cidade: {
                    nome: "Sumaré",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "ed680d5a-3d21-4880-bb15-7325999630ce",
                    titulo: "O Coração das Trevas ",
                    qtde: 1,
                    preco: 165.6
                }
            ],
            pagamento: [
                {
                    numero: "5214206921601906",
                    valor: 82.8
                },
                {
                    numero: "4464098167420046",
                    valor: 82.8
                }
            ],
            total: 165.6,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "ed680d5a-3d21-4880-bb15-7325999630ce",
                    titulo: "O Coração das Trevas ",
                    qtde: 1,
                    preco: 165.6
                }
            ]
        },
        {
            id: "ccb91202-c46d-4f3b-930c-48087a27eabf",
            data: "02-28-2021, 11:26:54",
            cliente: "effec398-c870-4396-aeb8-558b1f15de1f",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Ignázio Danti",
                numero: 873,
                bairro: "Jardim Santa Emília",
                cep: "04183040",
                cidade: {
                    nome: "São Paulo",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "bc1eaf84-e7fd-4301-ab9a-ad891f70a6ea",
                    titulo: "Ilíada",
                    qtde: 1,
                    preco: 136.85
                },
                {
                    id: "bc1eaf84-e7fd-4301-ab9a-ad891f70a6ea",
                    titulo: "Ilíada",
                    qtde: 1,
                    preco: 136.85
                }
            ],
            pagamento: [
                {
                    numero: "5375763670334142",
                    valor: 273.7
                }
            ],
            total: 273.7,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "bc1eaf84-e7fd-4301-ab9a-ad891f70a6ea",
                    titulo: "Ilíada",
                    qtde: 1,
                    preco: 136.85
                }
            ]
        },
        {
            id: "6453df93-57e8-471e-a4e5-bd54d3e34631",
            data: "02-28-2021, 04:18:49",
            cliente: "ed2502c1-d10d-464e-afab-6b5fed8ee40d",
            enderecoDeEntrega: {
                descricao: "esconderijo",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Araiporanga",
                numero: 234,
                bairro: "Vila Formosa",
                cep: "03360040",
                cidade: {
                    nome: "São Paulo",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "decb3266-df27-4ee3-af23-cb21f06af9a0",
                    titulo: "Emma ",
                    qtde: 2,
                    preco: 171.6
                },
                {
                    id: "3f85f34e-e261-4328-9292-6431fe47b652",
                    titulo: "A Época da Inocência ",
                    qtde: 2,
                    preco: 143.85
                }
            ],
            pagamento: [
                {
                    numero: "5553065506145807",
                    valor: 315.45
                },
                {
                    numero: "4624448725674732",
                    valor: 315.45
                }
            ],
            total: 630.9,
            status: "REPROVADA"
        },
        {
            id: "f614f1db-ccac-43e1-b3a8-65c13dbbeb5e",
            data: "01-27-2021, 06:08:26",
            cliente: "d1234e13-9108-4b12-8f17-6063963f4be7",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Edelvira Souza",
                numero: 165,
                bairro: "Conquista",
                cep: "45650262",
                cidade: {
                    nome: "Ilhéus",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "b89392c8-fe9d-4be6-9957-b64e861ab684",
                    titulo: "Tess Dos D’Urbervilles ",
                    qtde: 1,
                    preco: 31.2
                },
                {
                    id: "c02cc1b1-5760-49c5-abfe-184d105afb70",
                    titulo: "Absalão, Absalão! ",
                    qtde: 2,
                    preco: 233.75
                },
                {
                    id: "6a2f1246-e221-4ddf-b2df-7f62e857d616",
                    titulo: "As Aventuras de Huckleberry Finn ",
                    qtde: 2,
                    preco: 277.2
                }
            ],
            pagamento: [
                {
                    numero: "5534077681881209",
                    valor: 1053.1
                }
            ],
            total: 1053.1,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "b89392c8-fe9d-4be6-9957-b64e861ab684",
                    titulo: "Tess Dos D’Urbervilles ",
                    qtde: 1,
                    preco: 31.2
                },
                {
                    id: "c02cc1b1-5760-49c5-abfe-184d105afb70",
                    titulo: "Absalão, Absalão! ",
                    qtde: 2,
                    preco: 233.75
                }
            ]
        },
        {
            id: "4a61b533-c8a1-4ebe-a39b-bcdeda74ae6d",
            data: "12-16-2020, 05:05:59",
            cliente: "540e9003-61f5-46ee-9ff9-84bdaee99915",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Delmar Pismel",
                numero: 187,
                bairro: "Conjunto Guiomard Santos",
                cep: "69901411",
                cidade: {
                    nome: "Rio Branco",
                    estado: {
                        uf: "AC"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "31d203a7-f1d9-4796-a4f6-32a02a28bb09",
                    titulo: "A Letra Escarlate ",
                    qtde: 2,
                    preco: 162.15
                },
                {
                    id: "ad6159ff-4bc2-4cc3-aa3e-15dace382359",
                    titulo: "O Conto da Aia ",
                    qtde: 2,
                    preco: 106.95
                }
            ],
            pagamento: [
                {
                    numero: "4402809327260618",
                    valor: 269.1
                },
                {
                    numero: "4126060551765709",
                    valor: 269.1
                }
            ],
            total: 538.2,
            status: "APROVADA"
        },
        {
            id: "0bfb5852-14b4-4d2c-a798-9c978abe0f6c",
            data: "12-13-2020, 01:31:47",
            cliente: "bed26ee7-bbde-4655-a9d9-0012e91570dc",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Rubim",
                numero: 977,
                bairro: "Fátima",
                cep: "39800186",
                cidade: {
                    nome: "Teófilo Otoni",
                    estado: {
                        uf: "MG"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "14ddf336-9472-44e2-954a-722f121e2f56",
                    titulo: "O Vermelho e o Negro ",
                    qtde: 1,
                    preco: 218.75
                },
                {
                    id: "61dc32e0-eb6e-448b-98c6-0b7c48b0f6af",
                    titulo: "O Senhor das Moscas ",
                    qtde: 1,
                    preco: 79.2
                },
                {
                    id: "256b869c-37ba-4b05-8250-136e02804da6",
                    titulo: "As Mil e Uma Noites ",
                    qtde: 2,
                    preco: 51.25
                }
            ],
            pagamento: [
                {
                    numero: "4980678369457253",
                    valor: 200.225
                },
                {
                    numero: "5422232320409848",
                    valor: 200.225
                }
            ],
            total: 400.45,
            status: "REPROVADA"
        },
        {
            id: "f8096171-bfd2-40eb-9a20-bbc48861eec9",
            data: "03-06-2021, 05:07:57",
            cliente: "3d7e69bb-1fb4-4fe2-9ed5-129fc6017ada",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "SQN"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "115",
                numero: 12,
                bairro: "Asa Norte",
                cep: "70772000",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "2",
                    titulo: "O mundo assombrado pelos demônios",
                    qtde: 2,
                    preco: 28.75
                },
                {
                    id: "22a6773b-210f-4aad-80b5-fc793a6d1daa",
                    titulo: "O Velho e o Mar ",
                    qtde: 1,
                    preco: 80.5
                }
            ],
            pagamento: [
                {
                    numero: "5267267312434246",
                    valor: 138
                }
            ],
            total: 138,
            status: "REPROVADA"
        },
        {
            id: "f43079da-9d95-4be8-98fe-d17299a7c89a",
            data: "01-10-2021, 01:58:40",
            cliente: "a1646e6b-b611-43b3-add8-c2d99989be32",
            enderecoDeEntrega: {
                descricao: "minha casa",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Avenida"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Ribeirão Vermelho",
                numero: 300,
                bairro: "Jardim Alto da Boa Vista",
                cep: "86600248",
                cidade: {
                    nome: "Rolândia",
                    estado: {
                        uf: "PR"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "fc8bfe12-dc81-4f63-af9d-04820fab1483",
                    titulo: "Middlemarch: Um Estudo da Vida Provinciana ",
                    qtde: 2,
                    preco: 59.8
                },
                {
                    id: "2c54222a-c1c0-4139-8468-ca93237fc179",
                    titulo: "Ardil-22 ",
                    qtde: 2,
                    preco: 65
                }
            ],
            pagamento: [
                {
                    numero: "4001589682918308",
                    valor: 249.6
                }
            ],
            total: 249.6,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "fc8bfe12-dc81-4f63-af9d-04820fab1483",
                    titulo: "Middlemarch: Um Estudo da Vida Provinciana ",
                    qtde: 2,
                    preco: 59.8
                },
                {
                    id: "2c54222a-c1c0-4139-8468-ca93237fc179",
                    titulo: "Ardil-22 ",
                    qtde: 2,
                    preco: 65
                }
            ]
        },
        {
            id: "d9c4c802-49e4-44b6-98f9-5056126e2319",
            data: "12-29-2020, 01:46:16",
            cliente: "c947c4a7-65e3-40e5-adcf-ed8e2d36693f",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Pinheiro Sales",
                numero: 845,
                bairro: "Sete de Abril",
                cep: "41385745",
                cidade: {
                    nome: "Salvador",
                    estado: {
                        uf: "BA"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "7676c01a-9363-4fa1-8bbf-9015688c8f44",
                    titulo: "Native Son ",
                    qtde: 1,
                    preco: 24
                },
                {
                    id: "34ec7f3f-a78e-4ed8-8888-c1f543122928",
                    titulo: "Frankenstein ",
                    qtde: 2,
                    preco: 276.1
                },
                {
                    id: "4c2ee76b-be8c-4146-9784-1c4afe63e92b",
                    titulo: "Enquanto Agonizo ",
                    qtde: 2,
                    preco: 295.9
                }
            ],
            pagamento: [
                {
                    numero: "4182793709160693",
                    valor: 1168
                }
            ],
            total: 1168,
            status: "EM TRANSPORTE"
        },
        {
            id: "020d5783-a3ab-4973-bc95-f125018875b6",
            data: "03-21-2021, 02:00:52",
            cliente: "96252d8c-670c-4357-b2f2-25b83f4bf6f3",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Vila"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Odete",
                numero: 473,
                bairro: "Monte Castelo",
                cep: "60326160",
                cidade: {
                    nome: "Fortaleza",
                    estado: {
                        uf: "CE"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "35646590-8476-4038-88e0-65ba5bb4e5a4",
                    titulo: "1984 ",
                    qtde: 1,
                    preco: 51.25
                },
                {
                    id: "3c106be3-ae9d-437c-a425-c34ebe855701",
                    titulo: "Orgulho e Preconceito ",
                    qtde: 1,
                    preco: 216.25
                },
                {
                    id: "e137f961-b727-462c-acd1-65cdacc2ebf6",
                    titulo: "Jane Eyre ",
                    qtde: 2,
                    preco: 336.25
                },
                {
                    id: "34ec7f3f-a78e-4ed8-8888-c1f543122928",
                    titulo: "Frankenstein ",
                    qtde: 2,
                    preco: 276.1
                }
            ],
            pagamento: [
                {
                    numero: "4565783117448514",
                    valor: 1492.2
                }
            ],
            total: 1492.2,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "35646590-8476-4038-88e0-65ba5bb4e5a4",
                    titulo: "1984 ",
                    qtde: 1,
                    preco: 51.25
                },
                {
                    id: "3c106be3-ae9d-437c-a425-c34ebe855701",
                    titulo: "Orgulho e Preconceito ",
                    qtde: 1,
                    preco: 216.25
                },
                {
                    id: "e137f961-b727-462c-acd1-65cdacc2ebf6",
                    titulo: "Jane Eyre ",
                    qtde: 2,
                    preco: 336.25
                }
            ]
        },
        {
            id: "688cd64c-0714-46af-8611-93ed557748e1",
            data: "12-06-2020, 05:43:07",
            cliente: "540e9003-61f5-46ee-9ff9-84bdaee99915",
            enderecoDeEntrega: {
                descricao: "casa da mamai",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "Paris",
                numero: 505,
                bairro: "Jardim Europa",
                cep: "18045200",
                cidade: {
                    nome: "Sorocaba",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "d96d6e68-39fc-4d1e-b49a-840c174f2eae",
                    titulo: "Os Filhos da Meia-Noite ",
                    qtde: 2,
                    preco: 63.6
                },
                {
                    id: "a6eeecf1-8076-4670-ab45-82f50987d7c8",
                    titulo: "Odisseia",
                    qtde: 2,
                    preco: 23.4
                }
            ],
            pagamento: [
                {
                    numero: "4402809327260618",
                    valor: 87
                },
                {
                    numero: "4126060551765709",
                    valor: 87
                }
            ],
            total: 174,
            status: "EM TROCA",
            itensTroca: [
                {
                    id: "d96d6e68-39fc-4d1e-b49a-840c174f2eae",
                    titulo: "Os Filhos da Meia-Noite ",
                    qtde: 2,
                    preco: 63.6
                },
                {
                    id: "a6eeecf1-8076-4670-ab45-82f50987d7c8",
                    titulo: "Odisseia",
                    qtde: 2,
                    preco: 23.4
                }
            ]
        },
        {
            id: "a2021548-f246-4b48-af91-b65bab0a1065",
            data: "01-12-2021, 03:19:29",
            cliente: "01f21186-a6d6-421d-9fe0-c41a961be0d1",
            enderecoDeEntrega: {
                descricao: "casa da amante",
                tipoEndereco: {
                    nomeTipo: "entrega"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "João Amâncio",
                numero: 36,
                bairro: "João Paulo",
                cep: "69912058",
                cidade: {
                    nome: "Rio Branco",
                    estado: {
                        uf: "AC"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "1b784fa6-4f14-43cc-b67e-0ad6501d422b",
                    titulo: "Grandes Esperanças ",
                    qtde: 1,
                    preco: 177.6
                },
                {
                    id: "a00f9787-8e5f-4b28-af7f-126e72521e05",
                    titulo: "Charlotte’s Web ",
                    qtde: 2,
                    preco: 227.7
                },
                {
                    id: "5f5d2be0-ea95-4910-8d5c-f922ca2734f4",
                    titulo: "Folhas de Relva ",
                    qtde: 1,
                    preco: 296.4
                }
            ],
            pagamento: [
                {
                    numero: "5510134506437762",
                    valor: 464.7
                },
                {
                    numero: "5395292214745965",
                    valor: 464.7
                }
            ],
            total: 929.4,
            status: "ENTREGUE"
        },
        {
            id: "90d7f7be-f4c2-44e5-b562-0d69384dfe84",
            data: "03-11-2021, 06:31:28",
            cliente: "d90521a4-834a-4d03-8581-b7d2043f1c06",
            enderecoDeEntrega: {
                descricao: "trabalho",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Rua"
                },
                tipoResidencia: {
                    nomeTipo: "Casa"
                },
                endereco: "da Caridade",
                numero: 618,
                bairro: "Padre Ernesto Sassida",
                cep: "79310410",
                cidade: {
                    nome: "Corumbá",
                    estado: {
                        uf: "MS"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "666b46ee-c527-4df3-b0e6-c5b1314b455f",
                    titulo: "On The Road: Pé na Estrada ",
                    qtde: 1,
                    preco: 113.3
                },
                {
                    id: "c8e1155c-e35b-43e5-bd6e-04ee6cca145c",
                    titulo: "Seus Olhos Viam Deus ",
                    qtde: 1,
                    preco: 163.2
                }
            ],
            pagamento: [
                {
                    numero: "4957453534563339",
                    valor: 276.5
                }
            ],
            total: 276.5,
            status: "EM TRANSPORTE"
        },
        {
            id: "5634b87e-1f6e-4a2a-9b40-8093d408fc11",
            data: "02-13-2021, 08:53:44",
            cliente: "4243ccb9-e079-4f95-a3b9-7acfeac4e295",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Vila"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "Odete",
                numero: 457,
                bairro: "Monte Castelo",
                cep: "60326160",
                cidade: {
                    nome: "Fortaleza",
                    estado: {
                        uf: "CE"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "03afe5ef-c877-414e-a08c-f737f1b3a205",
                    titulo: "A Terra Inútil ",
                    qtde: 1,
                    preco: 216
                },
                {
                    id: "5f386a31-6bb6-4db6-ae9b-805c106937b3",
                    titulo: "O Senhor dos Anéis ",
                    qtde: 2,
                    preco: 352.5
                }
            ],
            pagamento: [
                {
                    numero: "4851223213513328",
                    valor: 460.5
                },
                {
                    numero: "4882482688507412",
                    valor: 460.5
                }
            ],
            total: 921,
            status: "EM TRANSPORTE"
        },
        {
            id: "ca6fa8e1-c407-4e8e-9da4-6aab4c2a09b8",
            data: "01-26-2021, 05:24:50",
            cliente: "881d91e8-4e2c-4a2d-8811-89d391948f52",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "SHCGN"
                },
                tipoResidencia: {
                    nomeTipo: "Residencial"
                },
                endereco: "715 Bloco D",
                numero: 887,
                bairro: "Asa Norte",
                cep: "70770704",
                cidade: {
                    nome: "Brasília",
                    estado: {
                        uf: "DF"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "34ec7f3f-a78e-4ed8-8888-c1f543122928",
                    titulo: "Frankenstein ",
                    qtde: 1,
                    preco: 276.1
                },
                {
                    id: "8d48f63c-8560-4b1a-b95c-979655a7ff4a",
                    titulo: "O Idiota ",
                    qtde: 1,
                    preco: 66
                }
            ],
            pagamento: [
                {
                    numero: "5232785925362357",
                    valor: 342.1
                }
            ],
            total: 342.1,
            status: "TROCADO",
            itensTroca: [
                {
                    id: "34ec7f3f-a78e-4ed8-8888-c1f543122928",
                    titulo: "Frankenstein ",
                    qtde: 1,
                    preco: 276.1
                },
                {
                    id: "8d48f63c-8560-4b1a-b95c-979655a7ff4a",
                    titulo: "O Idiota ",
                    qtde: 1,
                    preco: 66
                }
            ]
        },
        {
            id: "dd5be183-0307-4acc-9016-2d59962dea60",
            data: "02-17-2021, 03:48:17",
            cliente: "b1374694-3bf7-4373-a3c5-ce97d654b92f",
            enderecoDeEntrega: {
                descricao: "oto praneta",
                tipoEndereco: {
                    nomeTipo: "cobranca"
                },
                tipoLogradouro: {
                    nomeTipo: "Travessa"
                },
                tipoResidencia: {
                    nomeTipo: "Apartamento"
                },
                endereco: "Paris",
                numero: 573,
                bairro: "Jardim Europa",
                cep: "18045200",
                cidade: {
                    nome: "Sorocaba",
                    estado: {
                        uf: "SP"
                    }
                },
                complemento: "",
                ativo: 1
            },
            itens: [
                {
                    id: "256b869c-37ba-4b05-8250-136e02804da6",
                    titulo: "As Mil e Uma Noites ",
                    qtde: 1,
                    preco: 51.25
                },
                {
                    id: "9af02e23-ff66-443d-8576-a6ae634f617b",
                    titulo: "Feira das Vaidades ",
                    qtde: 2,
                    preco: 292.95
                },
                {
                    id: "8bb3e31a-5bd1-46c8-9c92-4b6f89baa246",
                    titulo: "Madame Bovary ",
                    qtde: 1,
                    preco: 101.25
                }
            ],
            pagamento: [
                {
                    numero: "4641178360556139",
                    valor: 369.2
                },
                {
                    numero: "4703033634223708",
                    valor: 369.2
                }
            ],
            total: 738.4,
            status: "ENTREGUE"
        }
    ],
    vendaId: "",
    cupons: [
            {
                id: "c19668fc-952c-4dde-bc21-c1d5002d6bb1",
                cupom: "cupom10",
                valor: "10",
                qtde: "25",
                validade: "2024-06-19"
            },
            {
                id: "41f8cf0b-0310-48e2-acbb-01048cc55bdf",
                cupom: "cupom25",
                valor: "25",
                qtde: "25",
                validade: "2022-06-19"
            },
            {
                id: "132b9995-83c2-4cbc-8268-72c37240998f",
                cupom: "cupom natal",
                valor: "25",
                qtde: "10",
                validade: "2023-12-25"
            }
        ],
    pedidosDeTroca:[],
};

const vendas = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'CARRINHO_UPDATE_VALUE':
            return {
                ...state,
                carrinho: action.payload.carrinho
            }
        case 'CARRINHO_VENDA_UPDATE_VALUE':
            return {
                ...state,
                carrinhoVenda: action.payload.carrinhoVenda
            }
        case 'VENDA_ID_UPDATE_VALUE':
            return {
                ...state,
                vendaId: action.payload.vendaId
            }
        case 'VENDAS_UPDATE_VALUE':
            return {
                ...state,
                vendas: action.payload.vendas
            }
        case 'CUPONS_UPDATE_VALUE':
            return {
                ...state,
                cupons: action.payload.cupons
            }
        case 'PEDIDOS_DE_TROCA_UPDATE_VALUE':
            return {
                ...state,
                pedidosDeTroca: action.payload.pedidosDeTroca
            }
        default:
            return state;
    }
}

export default vendas;

