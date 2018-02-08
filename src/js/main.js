var THREE = require('three');

// Get container in html
const containerRenderer = document.querySelector('.three__container')

// Scene
const scene = new THREE.Scene()

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

// Camera
const camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight)
camera.position.z = 300
scene.add(camera)

// Texture
let texture = new THREE.Texture( generateTexture() );
texture.needsUpdate = true; // important!

//material
let materialGradient = new THREE.MeshBasicMaterial( { map: texture, transparent: true } );


// Object
const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh( geometry, materialGradient )
scene.add( mesh )

// Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setClearColor( 0xffffff )
renderer.setSize(windowWidth, windowHeight)
containerRenderer.appendChild(renderer.domElement)
renderer.render(scene, camera)

// Animate
animate()

function animate(){
    rotateSphere();
    moveSphere();

    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
    
}


//function on Sphere
function rotateSphere(){
    // Rotate Sphere
    mesh.rotation.y += 0.025
    mesh.rotation.z += 0.05
}

var temps = 0
var rayonX = 200
var rayonY = 50
var rayonZ = 250

function moveSphere(){
    temps += 0.01
    mesh.position.x = Math.cos(temps)*rayonX
    mesh.position.y = Math.sin(temps)*rayonY + Math.sin(temps)*rayonY    
    mesh.position.z = Math.sin(temps)*rayonZ
    
}



// On resize
window.addEventListener( 'resize', onWindowResize, false );
onWindowResize();

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );

}

function generateTexture() {

    var size = 512

    // create canvas
    let canvas = document.createElement( 'canvas' )
    canvas.width = 50
    canvas.height = 50

    // get context
    var context = canvas.getContext( '2d' )

    // draw gradient
    context.rect( 0, 0, 50, 50 )
    var gradient = context.createLinearGradient(0,0,50,50)

    gradient.addColorStop(0, 'rgba(255,0,255,0.2)')
    gradient.addColorStop(0.5, 'rgba(0,255,255,0.2)')
    gradient.addColorStop(1, 'rgba(255,0,255,0.2)')

    context.fillStyle = gradient
    context.fill()

    return canvas

}