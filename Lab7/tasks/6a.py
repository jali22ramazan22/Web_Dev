numbers = input("Введите четыре числа через пробел: ").split()
numbers = [int(num) for num in numbers]
min_number = min(numbers)

print("Наименьшее число:", min_number)