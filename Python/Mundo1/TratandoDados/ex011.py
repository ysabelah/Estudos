#Faça um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade de tinta necessária para pintá-las, sabendo que cada litro de tinta pinta uma área de 2m^2

altura = float(input('Qual a altura da parede: '))
largura = float(input('Qual a largura da parede: '))

area = largura * altura

print('Serão necessárias {} litro(s) de tinta.'.format(area / 2))