#Conversão dollar real

dolar = float(input('Qual o valor do dólar: '))
real = float(input('Quantos reais você possui: '))

print('Tendo {} você poderia comprar {:.2} dolares.'.format(real, real / dolar))