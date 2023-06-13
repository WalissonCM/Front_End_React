const disciplinaValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 25,
            message: 'A quantidade de caracteres máxima é 25'
        }
    },
    curso: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 25,
            message: 'A quantidade de caracteres máxima é 2'
        },
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        }
    }
    
}

export default disciplinaValidator