N = int(input())

for num in range(1, N + 1):
    square = num ** 2
    if square <= N:
        print(square)
    else:
        break