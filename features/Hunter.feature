# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo racionar meus mantimentos e manter os outros viajantes alimentados
    Para que eu possa seguir a viagem saudável.

    Contexto:
        Dado um Hunter de nome "Pedro"
        E ele inicia a viagem com 2 refeição
        E ele começa a viagem saudável sempre.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeiçoes deve ser igual a 4
    
    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeiçoes deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeiçoes deve ser igual a 0
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeiçoes deve ser igual a 2
        E o Hunter não ficará doente
    
    Cenário: Saiu para caçar, comeu e doou 1 refeição
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 1 vezes
        E dou 1 refeicão para outro Traveler
        Então a quantidade de refeiçoes do caçador deve ser 3
        E a quantidade de refeicao do Traveler deve ser 2
        E o Hunter não ficará doente
