const { GetCharacter } = require('./service')

async function main() {
    try {

        const results = await GetCharacter("330")

        const episodios = results.episode.map(item => parseInt(item.slice(-2)))

        const SomaEpisodios = episodios.reduce((anterior, proximo) => {
            return anterior + proximo
        })

        var ep = (number) => episodios.filter((numEp) => numEp == number)

        console.log(`o episódio ${ep(10)} + ${ep(22)} = ${SomaEpisodios}`)

    } catch (error) {
        console.log("Errou", error)
    }

}


main()
