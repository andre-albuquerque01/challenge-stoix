export function TaskRequestWithoutReturnError(message: string): {
    ok: false
    error: string
} {
    if (message === "O titulo é obrigatório.") {
        return { error: "O titulo é obrigatório.", ok: false };
    }
    if (message === "O titulo informado não é válido.") {
        return { error: "O titulo informado não é válido.", ok: false };
    }
    if (message === "O titulo não pode ter mais de 120 caracteres.") {
        return { error: "O titulo não pode ter mais de 120 caracteres.", ok: false };
    }
    if (message === "O titulo deve ter pelo menos 3 caracteres.") {
        return { error: "O titulo deve ter pelo menos 3 caracteres.", ok: false };
    }
    if (message === "A descrição é obrigatório.") {
        return { error: "A descrição é obrigatório.", ok: false };
    }
    if (message === "A descrição informado não é válido.") {
        return { error: "A descrição informado não é válido.", ok: false };
    }
    if (message === "A descrição não pode ter mais de 255 caracteres.") {
        return { error: "A descrição não pode ter mais de 255 caracteres.", ok: false };
    }
    if (message === "A descrição deve ter pelo menos 3 caracteres.") {
        return { error: "A descrição deve ter pelo menos 3 caracteres.", ok: false };
    }
    if (message === "A data de inicio é obrigatório.") {
        return { error: "A data de inicio é obrigatório.", ok: false };
    }
    if (message === "A data de inicio informado não é válido.") {
        return { error: "A data de inicio informado não é válido.", ok: false };
    }
    if (message === "A data de inicio não pode ter mais de 255 caracteres.") {
        return { error: "A data de inicio não pode ter mais de 255 caracteres.", ok: false };
    }
    if (message === "A data de inicio deve ter pelo menos 3 caracteres.") {
        return { error: "A data de inicio deve ter pelo menos 3 caracteres.", ok: false };
    }
    if (message === "A data de finilização é obrigatório.") {
        return { error: "A data de finilização é obrigatório.", ok: false };
    }
    if (message === "A data de finilização informado não é válido.") {
        return { error: "A data de finilização informado não é válido.", ok: false };
    }
    if (message === "A data de finilização não pode ter mais de 255 caracteres.") {
        return { error: "A data de finilização não pode ter mais de 255 caracteres.", ok: false };
    }
    if (message === "A data de finilização deve ter pelo menos 3 caracteres.") {
        return { error: "A data de finilização deve ter pelo menos 3 caracteres.", ok: false };
    }
    if (message === "A data de finilização deve ser igual ou maior que de inicio.") {
        return { error: "A data de finilização deve ser igual ou maior que de inicio.", ok: false };
    }

    return { error: "Ocorreu um erro inesperado", ok: false };
}

export function TaskRequestWithReturnError(message: string) {
    // Erros de título
    if (message.includes('O titulo é obrigatório.')) {
        return 'O titulo é obrigatório.';
    }
    if (message.includes('O titulo informado não é válido.')) {
        return 'O titulo informado não é válido.';
    }
    if (message.includes('O titulo não pode ter mais de 120 caracteres.')) {
        return 'O titulo não pode ter mais de 120 caracteres.';
    }
    if (message.includes('O titulo deve ter pelo menos 3 caracteres.')) {
        return 'O titulo deve ter pelo menos 3 caracteres.';
    }

    // Erros de descrição
    if (message.includes('A descrição é obrigatório.')) {
        return 'A descrição é obrigatório.';
    }
    if (message.includes('A descrição informado não é válido.')) {
        return 'A descrição informado não é válido.';
    }
    if (message.includes('A descrição não pode ter mais de 255 caracteres.')) {
        return 'A descrição não pode ter mais de 255 caracteres.';
    }
    if (message.includes('A descrição deve ter pelo menos 3 caracteres.')) {
        return 'A descrição deve ter pelo menos 3 caracteres.';
    }

    // Erros de data de início
    if (message.includes('A data de inicio é obrigatório.')) {
        return 'A data de inicio é obrigatório.';
    }
    if (message.includes('A data de inicio informado não é válido.')) {
        return 'A data de inicio informado não é válido.';
    }
    if (message.includes('A data de inicio não pode ter mais de 255 caracteres.')) {
        return 'A data de inicio não pode ter mais de 255 caracteres.';
    }
    if (message.includes('A data de inicio deve ter pelo menos 3 caracteres.')) {
        return 'A data de inicio deve ter pelo menos 3 caracteres.';
    }

    // Erros de data de fim
    if (message.includes('A data de finilização é obrigatório.')) {
        return 'A data de finilização é obrigatório.';
    }
    if (message.includes('A data de finilização informado não é válido.')) {
        return 'A data de finilização informado não é válido.';
    }
    if (message.includes('A data de finilização não pode ter mais de 255 caracteres.')) {
        return 'A data de finilização não pode ter mais de 255 caracteres.';
    }
    if (message.includes('A data de finilização deve ter pelo menos 3 caracteres.')) {
        return 'A data de finilização deve ter pelo menos 3 caracteres.';
    }
    if (message.includes('A data de finilização deve ser igual ou maior que de inicio.')) {
        return 'A data de finilização deve ser igual ou maior que de inicio.';
    }

    // Mantenha todas as outras validações originais que você já tinha
    if (message.includes('Unauthenticated')) {
        return 'Não autorizado';
    }
    if (message.includes('O nome é obrigatório.')) {
        return 'O nome é obrigatório.';
    }
    // ... (todas as outras condições originais)

    return 'Ocorreu um erro inesperado';
}