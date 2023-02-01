# Cartão de Crédito Válido

## Esse projeto é a simulação de um teste de verificação da validade de um cartão de crédito, tal qual acontece nas páginas de checkout de compra de serviços e produtos em sites.

=================



## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Os critérios mínimos de aceitação deste projeto](#3-os-critérios-mínimos-de-aceitação-deste-projeto)
* [4. Melhorias adicionadas](#4-melhorias-adicionadas)
* [5. Definição do produto](#5-definição-do-produto)
* [6. Considerações técnicas](#6-considerações-técnicas)
* [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
* [8. Status do projeto](#8-status-do-projeto)
* [9. Features](#9-features)

***

## 1. Introdução
O projeto é baseado no [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), um método de verificação que serve para a validação de diferentes informações, como IMEI de telefones celulares, e nesse caso, cartões de crédito. 

## 2. Resumo do projeto

Neste projeto o objetivo era criar um validador para cartões de crédito. 
Meu projeto se apresenta como uma ferramenta gratuita apenas para checagem de númeroa de cartão de crédito, mas ele poderia ser integrado a um marketplace.


## 3. Os critérios mínimos de aceitação deste projeto

* Validar números de cartão de crédito, impedindo que o campo com o número do cartão seja deixado vazio
* Mostrar o resultado do processo de validação, exibindo se o número é ou não válido
* Exibir o número digitado exibindo apenas os últimos 4 diígitos e mascarando os anteriores com o caracter #
* Rodar os testes disponibilizados e garantir o sucesso dos resultados
* Produzir o README com as principais informações sobre o desenvolvimento do projeto

## 4. Melhorias adicionadas

* Permitir apenas a inserção de números no campo que recebe o número do cartão
* Alertar caso o número digitado tenha menos que 16 caracteres
* Exibir máscara de entrada de dados
* CSS orientado para responsividade

## 5. Definição do produto

* O produto é apresentado de forma simplificada, como uma página que executa apenas uma tarefa: verificar se o número do cartão é válido. Porém, o produto é facilmente adaptável para o uso em um site que vende produtos ou serviços.

* O processo de utilização é sinalizado na tela com o uso de título e subtítulo, instrução antes do input de entrada, máscara indicando o tipo de dado que deve ser inserido no input e um botão com uma palavra que convida à ação. 

* A inserção de menos caracteres que o esperado ou nenhuma inserção são notificadas por um "alert" com instruções claras para o prosseguimento da ação.


## 6. Considerações técnicas

O projeto foi feito com html, css e javascript, sem o uso de bibliotecas ou frameworks. Não contém erros no eslint e está disponível no repositório do GitHub e publicado no GitHub Pages.

Esse projeto é derivado do projeto original fornecido pela Laboratória.

## 7. Objetivos de aprendizagem

Os objetivos de aprendizagem do projeto foram atingidos. O projeto é feito com o uso de HTML semântico, css (com o uso de flexbox), seletores de DOM para os itens manipulados por meio de funções e eventos no JS.

Variáveis foram acessadas e definidas, e o laço for e a condicional if/else foram utilizados. Funções usaram o retorno de dados para comparação e definição de resultados, passando assim nos testes disponibilizados no boilerplate original do projeto.

## 8. Status do projeto

O projeto teve seu objetivo atingido, mas isso não impede a implementação do reconhecimento da bandeira do cartão digitado, responsividade e acessibilidade e alterações dinâmicas na DOM. Por esse motivo o projeto mantém-se aberto para futuras adições.

## 9. Features

- [x] Validação do número de cartão de crédito
- [ ] Reconhecimento da bandeira do cartão digitado
- [ ] Responsividade e acessibilidade

