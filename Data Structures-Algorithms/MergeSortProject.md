## Patika Merge Sort Project

### [16,21,11,8,12,22] -> Merge Sort
*Aşağıdaki 2 soru bu diziye göre cevaplandırılmıştır.*


### **1. Soru: Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.**
                    [16,21,11,8,12,22]
                
            [16,21,11]              [8,12,22]

        [16,21]    [11]         [8,12]      [22]
    
         [16]    [21]    [11]    [8]    [12]    [22]

           [16,21]         [8,11]         [12,22]

             [8,11,16,21]        [12,22]

                  [8,11,12,16,21,22]
    

### **2. Soru: Big-O gösterimini yazınız..**
0(nlogn)= O(6log6)