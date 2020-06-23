import math

adj = float(input('Digite o cateto adjacente.\n'))
opo = float(input('Digite o cateto oposto.\n'))

print('A hipotenusa é: {:.2}'.format(math.sqrt(math.pow(adj,2) + math.pow(opo, 2))))