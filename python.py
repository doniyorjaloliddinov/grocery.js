# grocery_list = []
# user_input = input(str("Do'kondan sizgga nimalar kerak: "))
# if user_input == int(user_input):
#     print("Iltimos son kiritmang")
# else:
#     grocery_list.append(user_input)
# print(grocery_list) 
# savol = "Yaxshi ko\'rgan kitobingizni kiriting"
# savol += "(Dasturni to\'xtatish uchun 'stop' deb yozing): "
# shart = ''
# while shart != 'stop':
#     shart = input(savol)      
#     if shart != 'stop':
#         continue
#     else:
#         print("Dastur tugadi")

    
grocery_list = []
user_question = str("Do'kondan sizgga nimalar kerak?")
user_input = str("Davom etasizmi ?(ha/yoq)")
shart = ''

while shart != "yoq":
    shart = input(user_input)
    if shart == "ha":
        grocery_list.append(user_input) 
    else:
        break
print(f"Sizning olgan mahsulotlaringiz: {grocery_list}")
        

   