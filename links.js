var links=new Array()

links[0]="https://luzbelito77.github.io/La-Cocina-de-Rodri/noquis.html"
links[1]="https://luzbelito77.github.io/La-Cocina-de-Rodri/bife.html"
links[2]="https://luzbelito77.github.io/La-Cocina-de-Rodri/pechuga.html"
links[3]="https://luzbelito77.github.io/La-Cocina-de-Rodri/escalope.html"
links[4]="https://luzbelito77.github.io/La-Cocina-de-Rodri/guiso.html"

function link(){
window.location=links[Math.floor(Math.random()*links.length)]
}