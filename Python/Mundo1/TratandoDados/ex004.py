#Fazer um programa que leia algo do teclado e diga seu tipo primitivo e todas as informações sobre ela.

teclado = input('Digite algo ')

print('O tipo primitivo é: ', type(teclado))
print('É somente espações? ', teclado.isspace())
print('É um número? ', teclado.isnumeric())
print('É alfabético? ', teclado.isalpha())
print('É alfanúmerico? ', teclado.isalnum())
print('Esta maiúsculo? ', teclado.isupper())
print('Esta minúscula? ', teclado.islower())
print('Esta capitalizada? ', teclado.istitle())
