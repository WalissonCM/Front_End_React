const salaValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    capacidade: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 2,
            message: 'A quantidade de caracteres máxima é 2'
        },
        min: {
            value: 30,
            message: 'O valor mínimo é 30'
        },
        max: {
            value: 60,
            message: 'O valor máximo é 60'
        }
    },
    tipo: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        },
    }
}

export default salaValidator