def majority(x, y, z):
    # Считаем сумму значений, которая будет равна количеству True (1)
    sum_values = x + y + z
    
    # Если сумма больше или равна 2, значит больше True (1)
    if sum_values >= 2:
        return 1
    else:
        return 0

# Ввод значений x, y, z
x, y, z = map(int, input("Введите три числа через пробел (0 или 1): ").split())

# Вызов функции majority и вывод результата
result = majority(x, y, z)
print("Значение, которое встречается чаще среди", x, y, z, ":", result)