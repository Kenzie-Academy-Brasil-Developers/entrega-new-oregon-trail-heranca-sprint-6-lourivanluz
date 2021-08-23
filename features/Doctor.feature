# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo racionar meus mantimentos e recuperar a saude dos outros viajantes
    Para que eu possa seguir a viagem saudável.

    Contexto:
        Dado um Doctor de nome "Emanuel"
        E ele começa a viagem com 1 refeição
        E ele inicia a viagem saudável sempre.

    Cenário: comeu e recuperou a saude de outro viajante
        Quando o Doctor para pra comer 1 vezes
        E recuperou a saude de um viajante
        Então a quantidade de refeiçoes deve ser igual 0
        E Doctor ficará saudável
        E Traveler ficará saudável

    Cenário: caçou,comeu e recuperou a saude de outro viajante
        Quando o Doctor para pra caçar 1 vezes
        E o Doctor para pra comer 4 vezes
        E recuperou a saude de um viajante
        Então a quantidade de refeiçoes deve ser igual 0
        E Doctor ficará doente
        E Traveler ficará saudável
        
    