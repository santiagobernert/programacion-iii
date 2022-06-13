var1=int(input("Escribe el 1 numero: "))
var2=int(input("Escribe el 2 numero: "))
var3=int(input("Escribe el 3 numero: "))
if var1 > var2 and var1 > var3:
    print("El numero", var1," es mayor")

elif var2 > var1 and var2 > var3:
    print("El numero", var2," es mayor")

else:
    print("El numero", var3," es mayor")

