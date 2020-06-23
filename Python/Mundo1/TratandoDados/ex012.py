#Faça um algoritmo que leia o preço de um produto e mostre seu novo preço com 5% de desconto

preco = float(input('Qual o preço do produto? '))

print('O preço do produto com 5% de desconto é R$ {}'.format(preco - (preco * 5) / 100))