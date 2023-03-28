valor_investido = float(input('valor guardado: '))
tempo_guardado = int(input('Valor em meses que o dinheiro ficará guradado: '))
taxa_juros = float(input('Juros anual: '))
print("****************************************")
if tempo_guardado < 12:
    tempo_guardado = tempo_guardado / 12
valor_final = valor_investido * taxa_juros
valor_mensal = (valor_final - valor_investido)/12
print(f'o valor mensal ficará {valor_mensal}')
print(f'o valor final ficará {valor_final}')

