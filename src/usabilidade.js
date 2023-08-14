class Usabilidade {
    static separarString(stringComVirgula) {
        const [parte1, parte2] = stringComVirgula.split(',');
        return [parte1, Number(parte2)];
    }

    static juntarString(string, numero) {
        return `${string} ${numero}`;
    }
}
export { Usabilidade };