x = int(input())

reversed_num = 0
while x > 0:
    digit = x % 10
    reversed_num = reversed_num * 10 + digit
    x //= 10

print(reversed_num)