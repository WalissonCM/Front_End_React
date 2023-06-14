const professorValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade de caracteres mínima é 10'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },
    cpf: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 14,
            message: 'A quantidade de caracteres máxima é 14'
        }
    },
    matricula: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    salario: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 11,
            message: 'A quantidade de caracteres máxima é 11'
        }
    },
    email: {
        required: 'O campo é obrigatório',
    },
    telefone: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 14,
            message: 'A quantidade de caracteres máxima é 14'
        }
    },
    cep: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 9,
            message: 'A quantidade de caracteres máxima é 9'
        }
    },
    logradouro: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade de caracteres mínima é 10'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },
    complemento: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade de caracteres mínima é 10'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },
    numero: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 3,
            message: 'A quantidade de caracteres máxima é 3'
        }
    },
    bairro: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade de caracteres mínima é 10'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },


}

export default professorValidator