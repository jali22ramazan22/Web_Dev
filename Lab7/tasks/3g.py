x = int(input())

divider = 2

while divider <= x:
    if x % divider == 0:
        print(divider)
        break
    divider += 1