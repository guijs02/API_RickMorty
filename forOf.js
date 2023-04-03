const service = require('./service')

async function main() {
    try {
        const result = await service.GetCharacter('330')
        const names = []

        console.time('forOf')
        // Foi adicionado esta linha
        for (r of result.name) {
            names.push(r)
        }
        console.timeEnd('forOf')

        console.log('Nomes:', names)


    } catch (error) {
        console.log('ERROUUU', error)
    }
}

main()