/* Author: 

*/

var tabs = document.querySelectorAll(".head")
var content = document.querySelectorAll(".content")


tabs.forEach(function(tab, index){
    tab.addEventListener('click', function(){
        if (content[index].classList.contains('show')){
            content[index].classList.toggle('show')
            tab.classList.toggle('hide')
        }
        else {
            removeActiveClasses()
            content[index].classList.add('show')
            tab.classList.add('hide')
        }
    })
})

function removeActiveClasses() {
    tabs.forEach(function(tab, index){
        tab.classList.remove('hide')
        content[index].classList.remove('show')
    })
}





















