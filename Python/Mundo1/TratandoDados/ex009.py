#Faça um programa que leia um númer inteiro qualquer e mostre sua tabuada

numero = int(input('Digite o número: '))

i = 0
while(i <= 10):
    print('{} x {} = {}'.format(numero, i, numero * i))
    i+=1
