# desafio-amigo-secreto
https://desafio-amigo-secreto-ten.vercel.app/

Este projeto permite criar uma lista de amigos secretos, exibir essa lista na tela e sortear um nome aleatório, removendo o amigo sorteado da lista.

Como Funciona

1. Adicionar Amigos:

O usuário digita um nome no campo de input.

Ao clicar no botão de adicionar, o nome é validado:

Campo vazio: exibe uma mensagem de erro.

Campo com números: exibe uma mensagem de erro.

Nome válido: é adicionado à lista de amigos secretos.

O campo de input é limpo após a inclusão ou erro.

2. Exibir Lista:

A lista de amigos secretos é exibida na tela usando a função mostrarNaTela(). Os nomes são separados por quebras de linha.

3. Sortear Amigo:

O botão de sorteio escolhe aleatoriamente um nome da lista.

O nome sorteado é removido da lista e mostrado na tela.

Caso a lista esteja vazia, uma mensagem de alerta é exibida.

Estrutura das Funções

adicionarAmigo()

Adiciona um novo amigo à lista de amigos secretos:

Valida se o input não está vazio e não contém números.

Exibe mensagens de erro quando necessário.

Atualiza a lista na tela.

Limpa o campo de input.

limparCampo()

Limpa o valor do campo de input.

mostrarNaTela(texto1, texto2)

Atualiza um elemento HTML identificado por texto1 com o conteúdo passado em texto2.

sortearAmigo()

Sorteia um amigo da lista aleatoriamente.

Remove o amigo sorteado da lista.

Atualiza a lista exibida na tela.

Exibe uma mensagem de erro se a lista estiver vazia.

Exemplo de Uso

Digite um nome e clique em "Adicionar Amigo".

Veja a lista atualizada na tela.

Clique em "Sortear Amigo" para escolher um aleatório e removê-lo da lista.
