export function FormatDate(dataISO: string): string {
    function padLeft(value: number): string {
        return value < 10 ? '0' + value : value.toString();
    }

    if (dataISO) {
        // Cria a data ajustando para o fuso horário local
        const data = new Date(dataISO);
        // Ajusta para compensar o fuso horário
        data.setMinutes(data.getMinutes() + data.getTimezoneOffset());

        const dia = padLeft(data.getDate());
        const mes = padLeft(data.getMonth() + 1);
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
    return '';
}

export function formatDateToMysql(date: Date): string {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}