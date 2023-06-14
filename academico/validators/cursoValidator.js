const cursoValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 40,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    duracao: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 2,
            message: 'A quantidade de caracteres máxima é 2'
        },
        min: {
            value: 5,
            message: 'O valor mínimo é 5'
        },
        max: {
            value: 12,
            message: 'O valor máximo é 12'
        }
    },
    modalidade: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 1,
            message: 'A quantidade de caracteres mínima é 1'
        },
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        },
    }
}

export default cursoValidator