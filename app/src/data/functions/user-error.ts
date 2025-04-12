export function UserRequestWithoutReturnError(message: string): {
    ok: false
    error: string
} {
    if (message === 'O nome é obrigatório.') {
        return { error: 'O nome é obrigatório.', ok: false };
    }
    if (message === 'O nome deve ter pelo menos 3 caracteres.') {
        return { error: 'O nome deve ter pelo menos 3 caracteres.', ok: false };
    }
    if (message === 'O nome não pode ter mais de 120 caracteres.') {
        return { error: 'O nome não pode ter mais de 120 caracteres.', ok: false };
    }
    if (message === 'O nome contém caracteres inválidos.') {
        return { error: 'O nome contém caracteres inválidos.', ok: false };
    }
    if (message === 'É necessário aceitar os termos.') {
        return { error: 'É necessário aceitar os termos.', ok: false };
    }
    if (message === 'O e-mail é obrigatório.') {
        return { error: 'O e-mail é obrigatório.', ok: false };
    }
    if (message === 'O e-mail informado não é válido.') {
        return { error: 'O e-mail informado não é válido.', ok: false };
    }
    if (message === 'O e-mail não pode ter mais de 255 caracteres.') {
        return { error: 'O e-mail não pode ter mais de 255 caracteres.', ok: false };
    }
    if (message === 'O e-mail deve ter pelo menos 2 caracteres.') {
        return { error: 'O e-mail deve ter pelo menos 2 caracteres.', ok: false };
    }
    if (message === 'Este e-mail já está cadastrado.') {
        return { error: 'Este e-mail já está cadastrado.', ok: false };
    }
    if (message === 'A senha é obrigatória.') {
        return { error: 'A senha é obrigatória.', ok: false };
    }
    if (message === 'A confirmação da senha não corresponde.') {
        return { error: 'A confirmação da senha não corresponde.', ok: false };
    }
    if (message === 'A senha deve ter pelo menos 8 caracteres.') {
        return { error: 'A senha deve ter pelo menos 8 caracteres.', ok: false };
    }
    if (message === 'A senha deve conter pelo menos uma letra maiúscula e uma minúscula.') {
        return { error: 'A senha deve conter pelo menos uma letra maiúscula e uma minúscula.', ok: false };
    }
    if (message === 'A senha deve conter pelo menos uma letra.') {
        return { error: 'A senha deve conter pelo menos uma letra.', ok: false };
    }
    if (message === 'A senha deve conter pelo menos um número.') {
        return { error: 'A senha deve conter pelo menos um número.', ok: false };
    }
    if (message === 'A senha deve conter pelo menos um símbolo.') {
        return { error: 'A senha deve conter pelo menos um símbolo.', ok: false };
    }
    if (message === 'A senha escolhida já apareceu em vazamentos de dados. Escolha outra senha.') {
        return { error: 'A senha escolhida já apareceu em vazamentos de dados. Escolha outra senha.', ok: false };
    }
    if (message === 'A confirmação da senha é obrigatória.') {
        return { error: 'A confirmação da senha é obrigatória.', ok: false };
    }
    if (message === 'A confirmação da senha deve ter pelo menos 8 caracteres.') {
        return { error: 'A confirmação da senha deve ter pelo menos 8 caracteres.', ok: false };
    }
    if (message === 'O nome deve ter pelo menos 3 caracteres.') {
        return { error: 'Usuário não criado', ok: false };
    }
    if (message === 'email or password wrong') {
        return { error: 'Email ou senha errada', ok: false };
    }
    if (message === 'Email not verified') {
        return { error: 'Email não verificado', ok: false };
    }
    if (message === 'E-mail or password invalid') {
        return { error: 'E-mail ou senha inválida', ok: false };
    }
    if (message === 'O e-mail informado não é válido.') {
        return { error: 'O e-mail informado não é válido.', ok: false };
    }
    return { error: 'Ocorreu um erro inesperado', ok: false }
}

export function UserRequestWithReturnError(message: string) {
    if (message.includes('Unauthenticated')) {
        return 'Não autorizado'
    }
    if (message.includes('O nome é obrigatório.')) {
        return 'O nome é obrigatório.'
    }
    if (message.includes('O nome deve ter pelo menos 3 caracteres.')) {
        return 'O nome deve ter pelo menos 3 caracteres.'
    }
    if (message.includes('O nome não pode ter mais de 120 caracteres.')) {
        return 'O nome não pode ter mais de 120 caracteres.'
    }
    if (message.includes('O nome contém caracteres inválidos.')) {
        return 'O nome contém caracteres inválidos.'
    }
    if (message.includes('O contato é obrigatório.')) {
        return 'O contato é obrigatório.'
    }
    if (message.includes('Esse número de telefone já está cadastrado.')) {
        return 'Esse número de telefone já está cadastrado.'
    }
    if (message.includes('O nome deve ter pelo menos 8 caracteres.')) {
        return 'O nome deve ter pelo menos 8 caracteres.'
    }
    if (message.includes('O nome não pode ter mais de 11 caracteres.')) {
        return 'O nome não pode ter mais de 11 caracteres.'
    }
    if (message.includes('É necessário aceitar os termos.')) {
        return 'É necessário aceitar os termos.'
    }
    if (message.includes('O campo de aceite contém caracteres inválidos.')) {
        return 'O campo de aceite contém caracteres inválidos.'
    }
    if (message.includes('O e-mail é obrigatório.')) {
        return 'O e-mail é obrigatório.'
    }
    if (message.includes('O e-mail informado não é válido.')) {
        return 'O e-mail informado não é válido.'
    }
    if (message.includes('O e-mail não pode ter mais de 255 caracteres.')) {
        return 'O e-mail não pode ter mais de 255 caracteres.'
    }
    if (message.includes('O e-mail deve ter pelo menos 2 caracteres.')) {
        return 'O e-mail deve ter pelo menos 2 caracteres.'
    }
    if (message.includes('Este e-mail já está cadastrado.')) {
        return 'Este e-mail já está cadastrado.'
    }
    if (message.includes('E-mail não verificado')) {
        return 'E-mail não verificado'
    }
    if (message.includes('A senha é obrigatória.')) {
        return 'A senha é obrigatória.'
    }
    if (message.includes('A confirmação da senha não corresponde.')) {
        return 'A confirmação da senha não corresponde.'
    }
    if (message.includes('A senha deve ter pelo menos 8 caracteres.')) {
        return 'A senha deve ter pelo menos 8 caracteres.'
    }
    if (
        message.includes(
            'A senha deve conter pelo menos uma letra maiúscula e uma minúscula.'
        ) || message.includes('The password field must contain at least one uppercase and one lowercase letter.')) {
        return 'A senha deve conter pelo menos uma letra maiúscula e uma minúscula.'
    }
    if (message.includes('A senha deve conter pelo menos uma letra.')) {
        return 'A senha deve conter pelo menos uma letra.'
    }
    if (message.includes('A senha deve conter pelo menos um número.')) {
        return 'A senha deve conter pelo menos um número.'
    }
    if (message.includes('A senha deve conter pelo menos um símbolo.')) {
        return 'A senha deve conter pelo menos um símbolo.'
    }
    if (
        message.includes(
            'A senha escolhida já apareceu em vazamentos de dados. Escolha outra senha.'
        )) {
        return 'A senha escolhida já apareceu em vazamentos de dados. Escolha outra senha.'
    }
    if (message.includes('A confirmação da senha é obrigatória.')) {
        return 'A confirmação da senha é obrigatória.'
    }
    if (message.includes('A confirmação da senha deve ter pelo menos 8 caracteres.')) {
        return 'A confirmação da senha deve ter pelo menos 8 caracteres.'
    }
    if (message.includes('Failed to send email')) {
        return 'E-mail não cadastrado.'
    }
    if (message.includes('E-mail or password invalid')) {
        return 'E-mail ou senha inválida.'
    }
    return 'Ocorreu um erro inesperado'
}