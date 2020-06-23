#Faça um algoritmo que leia o salário de um funconário e mostre seu novo slaário, com 15% de aumento

salario = float(input('Digite o salário do(a) funcionário(a)\n'))

print('O salário do funcionário, já atualizado, é de R$ {}'.format(salario + (salario * 15) / 100))