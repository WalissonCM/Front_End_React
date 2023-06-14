const disciplinaValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },
    curso: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 2'
        },
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        }
    }
    
}

export default disciplinaValidator