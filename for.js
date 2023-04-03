const service = require('./service')

async function main() {
    try {
        var result = await service.GetCharacter("262")

        const episodes = []

        console.time('for')
        
        for (let i = 0; i <= result.episode.length - 1; i++) {
            const episode = result.episode[i]
            episodes.push(episode.slice(-2))
        }
        console.timeEnd('for')
        console.log('Episódios:', episodes)

    } catch (error) {
        console.log('ERROUUU', error)
    }
}

main()