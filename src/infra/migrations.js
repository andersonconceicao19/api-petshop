const tables = [
    require('../router/fornecedor/fornecedor-model'),
    require('../router/produto/produto-model')
]

async function CreateTable() {
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        await table.sync()
    }
}
CreateTable();