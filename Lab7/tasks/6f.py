def power(a, n):
    if n == 0:
        return 1
    elif n < 0:
        return 1 / power(a, -n)
    else:
        return a * power(a, n - 1)

a, n = map(float, input("Введите два числа через пробел: ").split())

result = power(a, int(n))
print(result)