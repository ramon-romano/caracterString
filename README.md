# Contador de Caracteres em String

Este projeto é uma função em JavaScript que conta a frequência de cada caractere em uma string fornecida, retornando um objeto com cada caractere e sua quantidade de ocorrência.

## Funcionalidade

- **Contar Caracteres**: A função analisa cada caractere em uma string e registra quantas vezes cada um aparece.

## Explicação do Código

1. **Criação do Objeto `objeto`**  
   O objeto `objeto` armazena os caracteres e suas respectivas contagens.
   
2. **Loop na String**  
   A função percorre cada caractere da string:
   - Se o caractere já existe no objeto, aumenta a contagem em 1.
   - Se o caractere não existe no objeto, é adicionado ao objeto com uma contagem inicial de 1.
   
3. **Retorno do Objeto**  
   Ao final do loop, o objeto `objeto` é retornado, mostrando a frequência de cada caractere.

## Exemplo de Uso

```javascript
console.log(caracterString('banana'));
