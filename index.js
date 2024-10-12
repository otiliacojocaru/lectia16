

// const testCase = 'test2';

// switch(testCase) {
//     case 'test1' :{
//         console.log('test1')
//     }
//     case 'test2':{
//         console.log('test2')
//         break
//     }
//     case 'test3':{
//         console.log('test3')
//     }
//     case 'test':{
//         console.log('test')
//     }
//     default : {
//         console.log('no case match')
//     }
// }

// const testCase = 'menu1'

// switch (testCase){
//      case 'menu1':{
//          console.log('test1')
//          break;
//      }
//      case 'menu2':{
//          console.log('test2')     
//          break;
//      }
//      case 'menu3':{
//         console.log(test3)
//         break;
//      }
// }


// const user = {
//     name : 'iulian',
//     job: 'developer',
//     city: 'chisinau',
//     method()=> console.log('hey')
// }


//3 metode:
// console.log(user['city'])
// console.log(user.job)
// console.log(user)
// user.name


// const condition = 'menu3'
// const user = {
//    menu1:()=> console.log('menu1'),
//    menu2:()=> console.log('menu2'),
//    menu3:()=> console.log('menu3'),
//    menu4:()=> console.log('menu4'),
// }

// user[condition]()


////////////////////
// const str = 'lorem ks anjag ai' ;

//console.log(str.length)

// console.log(str.charAt(2))
// console.log(str.charAt(str.length -1))
// console.log(str[3])

// console.log(str.substring(2))
// console.log(str.substring(2, 4))
// console.log(str.slice(-2))
// console.log(str.indexOf('ks'))
// console.log(str.lastIndexOf('ai'))
// console.log(str.replace('ai','changet'))
// console.log(str.split(' '))
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())


///////////
// const countBE = 3;

// console.log(countBE/2)
// console.log(5%2)

// const hourMin = 60;
// const dayMin = 1440;
// const weekMin = 10080;

// if (countBE / weekMin >=1) {
//     console.log('more than one week')
// } else if (countBE / dayMin >=1) {
//     console.log('more than one day')
// }else if (countBE / hourMin >=1) {
//     console.log('more than one hour')
// }else{
//     console.log('less than one hour')
// }

/////////////////
 const countBE=20000;

 const hour=60;
 const day=1440;
 const week=10080;

 if (countBE/week>=1) {

    const remainingWeeks = countBE/week
    const remainigDaysInMinutes = countBE % week

    console.log(`${Math.floor(remainingWeeks)} w ${Math.floor(remainigDaysInMinutes/day)}d`)
    
    }else if (countBE / dayMin >=1) {
        console.log('more than one day')
    }else if (countBE / hourMin >=1) {
        console.log('more than one hour')
    }else{
        console.log('less than one hour')
    }