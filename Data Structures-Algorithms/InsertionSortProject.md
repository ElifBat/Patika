## Patika Insertation Sort Project

### [22,27,16,2,18,6] -> Insertion Sort
*İlk 4 soru bu diziye göre cevaplandırılmıştır.*


### **1. Soru: Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.**
- [2,27,16,22,18,6]
- [2,6,16,22,18,27]
- [2,6,16,18,22,27]
- [2,6,16,18,22,27] 
Son aşamada tüm elemanlar uygun şekilde dizili geldiği için sıralama işlemine devam edilmez.

---
### **2. Soru: Yukarı verilen dizinin big-O gösterimini yazınız.**
Insertion sortların Big-O notation'ı O(n^2)'dir. Bu dizi 6 elemanlı olduğu için O(36)'dır.

---
### **3. Soru: Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.**
- Avarage case: [2,6,**16,18**,22,27]= 16 ve 18
- Worst case : [2,6,16,18,22,**27**]= 27
- Best case: [**2**,6,16,18,22,27]= 2
---

### **4. Soru: Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.**
Avarage case: Sayın en sonda değildir. BU durumda avarage case'dir.

---
### **5. Soru: [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.**
- [2,3,5,8,7,9,4,15,6]
- [2,3,4,8,7,9,5,15,6]
- [2,3,4,5,7,9,8,15,6]
- [2,3,4,5,6,9,8,15,7]
---