answer_testing_system = int(input())
answer_student = int(input())

if answer_student != 1:
    if answer_testing_system == 1:
        print("NO")
    else:
        print("YES")
else:
    if answer_testing_system == 1:
        print("YES")
    else:
        print("NO")