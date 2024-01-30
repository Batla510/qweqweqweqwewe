// function makeUser(name,age){
//     return {
//         name:name,
//         age:age
//     }
// }

// let obj1 = makeUser('Vasya',15)
// let obj2 = {
//     '1':'one',
//     '2':'two',
//     '10':'ten',
//     '4':'four'
// }
// // for (let i in obj1){
// //     console.log(obj1[i])
// // }
// console.log(obj2)

// let user = {
//     name:'user',
//     login:'user1',
//     password:'User1234567',
//     hello_user(){
//         console.log('Hello',this.name)
//     },
//     say_hi(){
//         let arrow = () =>{
//             console.log('Arrow',this.name)
//         }
//         arrow()
//     }
// }
// function goodbye_user(){
//     console.log(`good bye ${this.name}`)
// }
// user.bye = goodbye_user
// user.say_hi()
// user.hello_user()
// user.bye()
// let permissions = {
//     'is_admin':true
// }
// let admin = Object.assign({},user,permissions)
// let manager = {}
// for (let i in user){
//     manager[i]=user[i]
// }
// manager.name = 'manager'
// console.log(manager)
// console.log(user)
// console.log(admin)


// function User(name){
//     this.name = name,
//     this.isAdmin = false
// }

// let user = new User('Vasya')
// console.log(user)

// let user = {
//     fio: {
//         name:'Vasya',
//         surname:'Petrov'
//     },
//     age:15
// }
// // console.log(user?.key?.asdadasds)
// let userAdmin = {
//     admin(){ console.log('ADMIN')}

// }
// let user1 = {}
// // userAdmin.admin()
// // user1.admin?.()
// delete user.name
// console.log(user)

// let user2 = {name,age,login,password}



// let arr = [];
// let arr2 = new Array();
// let fruits = ['apple','orange','plump','pear','banana'];
// fruits[fruits.length] = 'orange'
// fruits.pop()
// fruits.push('banana')
// fruits.unshift('gregory')
// fruits.shift()
// console.log(fruits)

// for (let i=0; i<fruits.length;i++){
//     console.log(i,fruits[i])
// }
// for (let i in fruits){
//     console.log(i,fruits[i])
// }
// for (let fruit of fruits){
//     console.log(fruit)
// }


// let arr = [1,2,3,4,5,6,7,8];
// let result = arr.reduce((sum,current) => sum+current,0)
// console.log(result)
// for (let i of arr){
//     console.log(i)
// }
// function fun(item,index){
//     console.log(index,item*2)
// }
// let arr2 = arr.map(item =>{
//     console.log(item*5)
// })
// arr.forEach((item,index) => fun(item,index))
// console.log(arr)
// let f = arr.splice(1,2,'asdasds',[10,20])
// console.log(arr.splice(-2))

// for (let i in arr){
//     if (arr[i] !== a[i]){
//         console.log('No')
//     }
// }

// Задачи для решения
// let arr = ["Привет,","мир","!"]
// for (let i of arr){
//         console.log(i)
//     }
// let result = arr.reduce((sum,current) => sum+current,)
// console.log(result)
// arr.shift()
// arr.unshift('Пока,')
// console.log(arr)
// let zp = {'Petya':'500','Vasya':'15000','Kolya':'5200000000'}
// console.log(zp['Petya'],zp['Kolya'])

// let arr2 = {
//     'ru':['голубой',"красный","зеленый"],
//     'en':['blue','red','green']
// }
// console.log(arr2['ru'][1])

// // Работа с массивами и Обьекты

// let arr3 = ['a','b','c']
// alert(arr3)
// alert(arr3[0])
// alert(arr3[1])
// alert(arr3[2])
// let arr4 = ['a','b','c','d']
// alert(`${arr4[0]}+${arr4[1]},${arr4[2]}+${arr4[3]}`)
// let arr5 = ['2','5','3','9']
// let result = arr5[0]*arr5[1]+arr5[2]*arr5[3]
// console.log(result)

// var obj = {a:1,b:2,c:3}
// console.log(obj['c'],obj.c)

// var obj1 = {'Коля':"1000","Вася":"500","Петя":"200"}
// console.log(obj1['Петя'],obj1['Коля'])

// var ned = {'1':"Понедельник","2":"Вторник","3":"Среда",'4':"Четверг","5":"Пятница","6":"Суббота","7":"Воскресенье"}
// console.log(ned[5])

// let day = 5
// console.log(ned[day])


// Многомерные массивы
// var arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(arr[1][0])

// var obj = {'js':['jQuery','Angular'],'php':'hello','css':'world'}
// console.log(obj['js'][0])

// let arr2 = {
//         'ru':["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],
//         'en':["Mn","Td","Wd","Thd","Fd","Suturday","Sunday"]
//     }
// console.log(arr2['ru'][0],arr2['en'][2])

// let lang = 'ru'
// let day = 3
// console.log(arr2[lang][day])


// for (let child of document.body.childNodes){
//     console.log(child)
// }

// let elem = document.body.firstElementChild.nextElementSibling
// while (elem = elem.parentElement){
//     console.log(elem)
// }

// let elem = document.querySelectorAll('li')
// let elem = document.querySelectorAll('.item')
// let elem2 = document.querySelector('#num')
// for (let i=0; i<elem.length;i++){
//     elem[i].style.color = 'blue';
// }
// elem2.style.color = 'red';
// let elem3 = document.querySelector('.list,item2')


// let elem = document.querySelector('.nav')
// let childElem = elem.querySelector('#num')
// console.log(elem)

// for (let elem of document.querySelectorAll('.item')){
//     console.log(elem)
// }
// let mass = document.querySelector('.list').children
// for (let elem of document.querySelector('.list').children){
//         console.log(elem)
//     }

// Array.from(mass).forEach(elem=>console.log(elem))
// console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByClassName('list'))
// console.log(document.getElementsByName('num'))


// Задачи по ссылке 
// 1.1
// let n = 52
// if (n<0){
//     console.log('Число отрицательное')
// } else{
//     console.log('Число положительное')
// }

// let st = 'dadasdadasdasd'
// console.log(st.length)

// console.log(st.slice(-1))

// let num = 152
// if(num %2 == 0){
//     console.log('Число чётное')
// } else{
//     console.log('число нечётное')
// }

// let slov = 'asdad'
// let slov2 = 'aaaaaaaaaa'

// if (slov[0] == slov2[0]){
//         console.log('jhsfjsgdfksjdf')}



// let elem = document.querySelector('.item2>p')
// let str = elem.innerHTML
// // elem.innerHTML = '<h1>Нормальный текст</h1>'
// elem.outerHTML = '<h1>Нормальный текст</h1>'
// console.log(elem,str)

// let text = document.getElementById('num')
// console.log(text.textContent)
// elem.hidden = true


let elem = document.querySelector('.alert')
// setTimeout(()=>elem.hidden = false,2000)
// let newElem = document.createElement('div')
// newElem.innerHTML = 'New element'
// document.body.append(newElem)
// document.querySelector('.item2').append(newElem)
// document.querySelector('.item2').after(newElem)
// document.querySelector('.item2').prepend(newElem)
// document.querySelector('.item2').replaceWith(newElem)
// let elem2 = document.querySelector('.item2')
// console.log(elem2)
// let text = 'Всем пока '
// for (let i=0;i<3;i++){
// elem2.insertAdjacentHTML('afterend',
// `<div class="alert">
//     <strong>${text} ${i}</strong>Я люблю JS
// </div>`)
// }
// setInterval(()=>elem.classList.toggle('new'),1000);
// elem.classList.remove('alert')
// elem.style.cssText = `background:red;
//                       color:blue;
//                       font-size:25px`
//  console.log(getComputedStyle(elem, '::before').fontSize);
//  let size = getComputedStyle(elem, '::before').fontSize
//  console.log(parseInt(size))
//  elem.style.cssText = `font-size: ${size+'px'}`

// let link = document.querySelector('.link');
// let input = document.querySelector('.input')
// console.log(link.href)
// console.log(input.href)
// console.log(link.value)
// console.log(input.value)
// console.dir(link)

// let input = document.createElement('input')
// input.classList.add('alert')
// input.setAttribute('placeholder','Name')
// input.setAttribute('value','Vasya')
// elem.before(input)
// console.log(input)
// function clk(){
//     elem.classList.toggle('new')
// }

let users = [
    {'name':'Vasya','age':15},
    {'name':'Petya','age':16},
    {'name':'Kolya','age':17},
    {'name':'Misha','age':18},
]

let title = document.querySelector('.title')
for (let i=0;i<users.length;i++){
    title.insertAdjacentHTML('beforeend', 
                            `<div class="user ${'user' +i}" onClick='deleteItem(${i})'>
                                <p class="name">Имя: ${users[i].name}</p>
                                <p class="age">Возраст: ${users[i].age}</p>
                            </div>`)
}
function deleteItem(num){
    let prefix = '.user' +num;
    let elem = document.querySelector(prefix)
    elem.hidden = true
    console.log(elem)
}
console.log(title)