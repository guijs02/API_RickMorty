const service = require('./service')

async function main() {
    try {
        const result = await service.GetCharacter('330')
        const names = []

        console.time('forIn')
        // Foi adicionado esta linha
        for (let i in result.name) {
            const name = result.name[i]
            names.push(name)
        }
        console.timeEnd('forIn')

        console.log('letras do nome:', names)

    } catch (error) {
        console.log('ERROUUU', error)
    }
}

main()