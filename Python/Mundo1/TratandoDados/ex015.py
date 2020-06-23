#Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais foi alugado. Calcule o preço a pagar, sabendo que  carro custa R$ 60 por dia e R$ 0,15 por km rodado

rodados = float(input('Quantos Km rodados?\n'))
alugado = float(input('Quantos dias alugados?\n'))

print('O valor a pagar é de R$ {}'.format(alugado * 60 + 0.15 * rodados))