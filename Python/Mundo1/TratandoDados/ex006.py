#Crie um algoritmo que leia um número e mostre seu dobro, triplo e raiz quadrada

numero = int(input('Digite um número: '))

print('O dobro é: {}'.format(pow(numero,2)))
print('O triplo é: {}'.format(pow(numero,3)))
print('A raiz quadrada é: {}'.format(pow(numero,1/2)))