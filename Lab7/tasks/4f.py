x = float(input())
y = float(input())

distance = x
days = 1

while distance < y:
    distance *= 1.1
    days += 1

print(days)