    if n == 0:
        return 1
    elif n % 2 == 0:
        half_power = fast_power(a, n // 2)
        return half_power * half_power
    else:
        half_power = fast_power(a, n // 2)
        return half_power * half_power * a

# Ввод чисел a и n
a, n = map(float, input("Введите два числа через пробел: ").split())

# Вызов функции быстрого возведения в степень и вывод результата
result = fast_power(a, int(n))
print(result)