x = int(input())

for divider in range(2, x + 1):
    if x % divider == 0:
        print(divider)
        break