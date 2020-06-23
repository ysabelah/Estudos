import random

aluno1 = input('Digite o nome do(a) 1º aluno(a).\n')
aluno2 = input('Digite o nome do(a) 2º aluno(a).\n')
aluno3 = input('Digite o nome do(a) 3º aluno(a).\n')
aluno4 = input('Digite o nome do(a) 4º aluno(a).\n')

print('O(A) escolhido(a) foi ... {}.'. format(random.choice([aluno1, aluno2, aluno3, aluno4])))