# calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

import matplotlib.pyplot as plt

title = ['SP','RJ','MG','ES','outros']
valor = [67836.43,36678.66,29229.88,27165.48,19849.53]

fig, ax = plt.subplots(figsize=(12,5))
ax.pie(valor, labels=title, autopct= "%.2f%%")
ax.set_title('Faturamento por região', fontsize = 14)

plt.show()
