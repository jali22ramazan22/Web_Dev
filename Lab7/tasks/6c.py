def xor(x, y):
    if (x and not y) or (y and not x):
        return 1
    else:
        return 0

x, y = map(int, input("Введите два числа через пробел (0 или 1): ").split())

result = xor(x, y)
print("Результат xor для", x, "и", y, ":", result)