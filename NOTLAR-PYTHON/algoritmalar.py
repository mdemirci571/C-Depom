import random
import math
import numpy as np

def Give_Name_And_Print():
    name = input("What is your name? ")
    print("Hello, " + name + "!")

def sum_and_average():
    sum1 = int(input("Enter the first number: "))
    sum2 = int(input("Enter the second number: "))
    print("The sum of the two numbers is: " + str(int(sum1) + int(sum2)))
    print("The average of the two numbers is: " + str((int(sum1) + int(sum2)) / 2))

def findDelta():
    a = int(input("a : "))
    b = int(input("b : "))
    c = int(input("c : "))
    #delta
    delta = b**2 - (4*a*c)
    print("Delta is: " + str(delta))
    #control 2 delta
    if delta > 0:
        root1 = (-b + delta**0.5) / (2*a)
        root2 = (-b - delta**0.5) / (2*a)
        print("Root 1 is: " + str(root1))
        print("Root 2 is: " + str(root2))

def Not_Gecti_Kaldi():
    vizeNot = int(input("Vize Notunuz: "))
    finalNot = int(input("Final Notunuz: "))
    vize = (vizeNot*40)/100
    final = (finalNot*60)/100
    ort = (vize+final)/2
    print("Kaldınız" if ort < 50 else "Geçtiniz")

def Sum_1_100():
    sum = 0
    for i in range(1, 101):
        sum += i
    print("Sum of 1 to 100 is: " + str(sum))

def Sum_1_100_Odd():
    sum = 0
    for i in range(1, 101):
        if (i % 2 != 0):
            sum+=i
    print("Sum of 1 to 100 odd numbers is: " + str(sum))

def N_To_M_7Divide():
    result = []
    n = int(input("n : "))
    m = int(input("m : "))
    for i in range(n, m+1):
        if (i % 7 == 0):
            result.append(i)
    print(result)

def Reverse_Name():
    name = str(input("Name: "))
    reversedName = name[::-1]
    print(reversedName)

def Sesli_Sessiz_Harf():
    text = str(input("Text: "))
    sembol=0
    space=0
    sesli=0
    sessiz=0
    for i in text:
        sesliler = "eaıiouöüAEIİOUÖÜ"
        sessizler = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
        if i == " ":
            space+=1
        if i in sesliler:
            sesli+=1
        if i in sessizler:
            sessiz+=1
        else:
            sembol+=1
    print("Sesli Harf Sayısı: " + str(sesli) + " " + "Sessiz Harf Sayısı: " + str(sessiz) + " " + "Boşluk Sayısı: " + str(space) + " " + "Sembol Sayısı: " + str(sembol))


def Fibonacci():
    n = int(input("n : "))
    a = 0
    b = 1
    for i in range(n):
        print(a)
        ### a = b yani ikinci sayıyı ilk sayıya atıyoruz ###
        ### b = a+b yani iki sayının toplamını alıyoruz ###
        a, b = b, a + b

def Prime_Nums(n):
    sum, sieve = [], ([True] * n)

    for p in range(2, n):
        if sieve[p]:
            sum.append(p)

            for i in range(p*p, n, p):
                sieve[i] = False
    return sum

def Num10_Average_Sum_And_Odd_Even():
    sum = 0
    odd = 0
    even = 0
    for i in range(10):
        num = int(input("Enter a number: "))
        sum+=num
        if (num % 2 == 0):
            even+=1
        if (num % 2 != 0):
            odd+=1
    print("Sum of numbers: " + str(sum) + " " + "Average of numbers: " + str(sum/10) + " " + "Odd numbers: " + str(odd) + " " + "Even numbers: " + str(even))

def Avarege_Unlimited():
    numLength = int(input("How many numbers do you want to enter? "))
    sum = 0
    for i in range(numLength):
        num = int(input("Enter a number: "))
        sum+=num
    avarege = sum / numLength
    print("Sum of numbers: " + str(sum) + " " + "Average of numbers: " + str(avarege))

def StandartSapma():
    defaultList = []
    listLength = int(input("How many numbers do you want to enter? "))
    #sayıları random bir şekilde arraya ekledik sonraki işlemimiz bu sayıları işlemek olacak
    for i in range(0, listLength):
        num = random.randint(0, 100)
        defaultList.append(num)
    avarege = sum(defaultList) / listLength
    squareList = []
    for x in defaultList:
        squareList.append((x-avarege)**2)
    standartSapma = math.sqrt(sum(squareList)/(squareList.__len__()-1))
    print("Standart Sapma: " + str(standartSapma))

def Matris_3X3():
    #örnek matris:
    #[[1,2,3],
    # [4,5,6],
    # [7,8,9]]
    #matris toplama işlemi sayıların denk geldiği sayılar ile toplanarak yeni liste oluşturulması ile tamamlanır.
    a = np.random.randint(10, size=(3, 3))
    b = np.random.randint(10, size=(3, 3))
    c = []
    for x in range(3):
        c.append([])
        for y in range(3):
            sumMatris = a[x][y] + b[x][y]
            c[x].append(sumMatris)
    
    #print result
    print('\n'.join([''.join(['{:3}'.format(item) for item in row]) for row in c]))

def Matris_Transpoze():
    #Transpoze bir matrisin yukarıdan aşağı olan verilerini sağdan sola şeklinde değiştirmesidir örn:
    ##[[1,2,3],
    # [4,5,6],
    # [7,8,9]]
    #bu matrisin ilk satırını transpoze edelim [1,2,3] den [1,4,7] e çeviirlir ve buna transpoze denir.
    m = int(input("height of matrix: "))
    n = int(input("width of matrix: "))
    matris = np.random.randint(10, size=(m, n))
    result = []
    for i in range(n):
        newMatrisTable = []
        for x in range(m):
            newMatrisTable.append(matris[x][i])
        result.append(newMatrisTable)
    print(f"Old Matris: \n{matris}")
    print("*****************************")
    print(f"Transposed Matris: \n{result}")

def InsertPosition():
    nums=[1,3,5,7]
    target = int(input("Target: "))
    for i in range(nums.__len__()):
        if (nums[i] == target):
            print(i)
            break
        if (nums[i] > target):
            print(i)
            break
        if (i == nums.__len__()-1):
            print(i+1)

def LengthLastWorld():
    s = str(input("Son Kelime Uzunluğunu Hesaplamak Istediğiniz Cümleyi Giriniz :"))
    s.strip().split(" ")
    x = s[-1].__len__()
    print(s)

def AddOne():
    digits=[99]
    s = ""
    for x in digits:
        s+=str(x)
    s = int(s)+1
    s = str(s)
    result = []
    for i in s:
        result.append(int(i))
    print(s)

def AddBinary():
    a = "1010"
    b = "1011"
    result = int(a, 2) + int(b, 2)
    print(bin(result))

def Shapes_3d():
    grid = [[1,2],[3,4]]
    s=0
    for i in range(grid.__len__()):
        for x in range(grid[i].__len__()):
            if grid[i][x]:
                s+=(grid[i][x]*4)+2
            if i:
                s-=min(grid[i][x],grid[i-1][x])*2
            if x:
                s-=min(grid[i][x],grid[i][x-1])*2
    print(s)

def RotateString():
    s = "abcde"
    goal = "cdeab"
    if s.__len__() != goal.__len__():
        print(False)
    else:
        for i in range(s.__len__()):
            s = s[-1] + s[:-1]
            print(s)
            if s == goal:
                print(True)
                break
            if i == s.__len__()-1:
                print(False)

def ReshapeMatrix():
    #In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data. You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix
    mat = [[1,2],[3,4]]
    r = 1
    c = 4
    if (mat.__len__()*mat[0].__len__()) != (r*c):
        print(mat)
    else:
        result = []
        for i in range(r):
            result.append([])
            for x in range(c):
                result[i].append(mat[0][0])
                mat[0].pop(0)
                if mat[0].__len__()==0:
                    mat.pop(0)
        print(result)

class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def SubtreeAnotherTree():
    #Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
    #A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
    root = TreeNode(3,TreeNode(4,TreeNode(1),TreeNode(2)),TreeNode(5))
    subRoot = TreeNode(4,TreeNode(1),TreeNode(2))
    def isSameTree(p: TreeNode, q: TreeNode) -> bool:
        if p == None and q == None:
            return True
        if p == None or q == None:
            return False
        if p.val != q.val:
            return False
        return isSameTree(p.left,q.left) and isSameTree(p.right,q.right)
    def isSubtree(root: TreeNode, subRoot: TreeNode) -> bool:
        if root == None:
            return False
        if isSameTree(root,subRoot):
            return True
        return isSubtree(root.left,subRoot) or isSubtree(root.right,subRoot)

def distributeCandies():
    candyType = [1,1,2,3]
    return min(len(candyType) / 2, len(set(candyType)))

def segmentsinaString():
    s="Of all the gin joints in all the towns in all the world,   "
    s=s.strip()
    if(s.isspace() or not s):
            return 0
    else:
        removeChars = "!@#$%^&*()_+-=',.:"
        for i in removeChars:
            s = s.replace(i,"")
            s=s.strip()
        s = s.split(" ")
        return s.__len__()

def SpellsAndPotions():
    spells=[5,1,3]
    potions=[1,2,3,4,5]
    arr=[]
    for i in range(spells.__len__()):
        arr.append([])
        for x in range(potions.__len__()):
            arr[i].append(potions[x]*spells[i])
    res=[]
    count=0
    for y in arr:
        for j in y:
            if(j not in potions and j != 6):
                print(j)
                count+=1
        res.append(int(count))
        count=0
    print(res)
