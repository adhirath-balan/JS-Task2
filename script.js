console.log('Hello')
var data = [
    {
        Name : "Bruce Wayne" ,
        Age : 20 ,
        Courses : ['Data Science' , 'Python' , 'ML']
    },
    {
        Name : "Clark Kent" ,
        Age : 20 ,
        Courses : ['Web Development' , 'CSS' , 'JS']
    },
    {
        Name : "Barry Allen" ,
        Age : 20 ,
        Courses : ['C' , 'C++' , 'Java']
    }
]

var studElem = document.getElementsByClassName('student')

for(var i = 0 ; i < data.length ; i++){
    var nameElem = document.createElement('h6')
    var ageElem = document.createElement('h6')
    var unordered = document.createElement('ul')
    var h3ElemOne = document.createElement('h4')
    var h3ElemTwo = document.createElement('h4')
    var h3ElemThree = document.createElement('h4')
    h3ElemOne.textContent = 'Name:'
    h3ElemTwo.textContent = 'Age:'
    h3ElemThree.textContent = 'Courses:'
    nameElem.textContent = data[i].Name
    ageElem.textContent = data[i].Age
    studElem[0].appendChild(h3ElemOne)
    studElem[0].appendChild(nameElem)
    studElem[0].appendChild(h3ElemTwo)
    studElem[0].appendChild(ageElem)
    studElem[0].appendChild(h3ElemThree)
    for( var j=0 ; j < data[0].Courses.length ; j++){
        var liElem = document.createElement('li')
        liElem.textContent = data[i].Courses[j]
        studElem[0].appendChild(liElem)
    }
    studElem[0].appendChild(document.createElement('br'))
}