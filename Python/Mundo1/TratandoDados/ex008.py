#Escreva um programa que leia um valor em metros e o exiba convertido em centimetros e milimetros

numero = float(input('Digite o número: '))

print('O valor de {} em centímetros é: {}'.format(numero, numero * 100))
print('O valor de {} em milímetros é: {}'.format(numero, numero * 1000))