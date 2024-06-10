//declarando um objeto literal
const personagem = {
    nome : 'Bruce Wayne',
    codinome : 'Batman',
    idade : 84,
    criadores : ['Bobo Kane', 'Bill Finger'],
    AnoDeCriação : 1939,
    FichaDoPersonagem : function() {
        console.log(`Nome: ${this.nome}.\nCodinome: ${this.codinome}.\nIdade: ${this.idade} anos.\nCriadores:${this.criadores}.\nAno de Criação: ${this.AnoDeCriação}.`)//isso é um metodo
    }
}

personagem.FichaDoPersonagem()
