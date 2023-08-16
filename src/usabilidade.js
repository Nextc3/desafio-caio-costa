class Usabilidade {
    static separarString(stringComVirgula) {
        const [parte1, parte2] = stringComVirgula.split(',');
        /*console.log(parte1)
        console.log(parte2)
        console.log([parte1, Number(parte2)]) */
        return [parte1, Number(parte2)];
    }

    static juntarString(string, numero) {
        return `${string} ${numero}`;
    }
}
export { Usabilidade };

//console.log(['cafe,1','chantily,1'].map(element => {return Usabilidade.separarString(element)}))