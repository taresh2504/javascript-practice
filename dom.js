document.getElementById('head1').textContent = "from js file"
document.getElementById('head2').textContent = "from js file 2"

document.getElementById('new').textContent = 'practise'

let a = document.getElementById('demo')
a.textContent = "Another way"

let b = document.getElementById('num')
b.innerHTML = "<i> LILY </i>"

var c = document.getElementById('sun')
c.innerHTML = "<u> XYZ </u>"
c.setAttribute('align','center')

document.body.setAttribute('bgcolor','red')    //document.body se body change hoti hai

document.getElementById('head1').removeAttribute('style')

var x = document.getElementById('pic')
x.setAttribute('src','TARESHP2.jpg')