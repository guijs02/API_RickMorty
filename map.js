const service = require('./service')


async function main() {
    try {
        const result = await service.GetCharacter('330')

        const name = result.episode.map((e) => e.slice(-2))

        console.log("Episodes: ", name)

    } catch (error) {
        console.error(error)
    }

}

main()