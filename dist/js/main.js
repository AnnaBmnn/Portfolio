// import * as THREE from 'three';

// //const scene = new THREE.Scene();

// var container;
// var camera, scene, renderer;
// var sphere;
// var controls;
// console.log('hey')
// window.addEventListener( 'load', function() {
//     init();
//     animate();
// });

// function init() {

//     container = document.createElement( 'div' );
//     document.body.appendChild( container );

//     camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
//     camera.rotation.x = Math.PI;
//     camera.position.set( 0, 0, 50 );

//     scene = new THREE.Scene();

//     renderer = new THREE.WebGLRenderer();
//     renderer.setClearColor( 0xf0f0f0 );
//     renderer.setPixelRatio( window.devicePixelRatio );
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     container.appendChild(renderer.domElement);

//     controls = new THREE.OrbitControls( camera, renderer.domElement );
//     controls.enableZoom = true;

//     var material2 = new THREE.MeshBasicMaterial({
//         color: 0x000000,
//         opacity: 0.9,
//         transparent: true 
//     });			

//     // material texture
//     var texture = new THREE.Texture( generateTexture() );
//     texture.needsUpdate = true; // important!

//     // material
//     var material_gradient = new THREE.MeshBasicMaterial( { map: texture, transparent: true } );

//     var material = new THREE.MeshPhongMaterial({
//         color: 0xdcfded
//     });

//     // var loader = new THREE.FontLoader();
//     // var font = loader.load(
//     // 	// resource URL
//     // 	'fonts/Larish_Neue_Regular.json',

//     // 	// onLoad callback
//     // 	function ( font ) {
//     // 		// do something with the font
//     // 		textGeo = new THREE.TextGeometry( '23', {
//     // 			font: font,
//     // 			size: 50,
//     // 			height: 0,
//     // 			curveSegments: 12,
//     // 			bevelEnabled: true,
//     // 			bevelThickness: 10,
//     // 			bevelSize: 1,
//     // 			bevelSegments: 5,
//     // 			material: material2,
//     // 			extrudeMaterial: 1
//     // 		});
//     // 		textGeo.computeBoundingBox();
//     // 		textGeo.computeVertexNormals();
//     // 		textMesh1 = new THREE.Mesh( textGeo, material2 );

//     // 		scene.add( textMesh1 );
//     // 	},

//     // 	// onProgress callback
//     // 	function ( xhr ) {
//     // 		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
//     // 	},

//     // 	// onError callback
//     // 	function ( err ) {
//     // 		console.log( 'An error happened' );
//     // 	}
//     // );

//     var sphere = new THREE.SphereGeometry(50, 20, 20)
//     var trueSphere = new THREE.Mesh(sphere, material_gradient)
//     // trueSphere.position.x = 100
//     // trueSphere.position.z = -100
//     scene.add( trueSphere )
//     console.log(trueSphere)

//     window.addEventListener( 'resize', onWindowResize, false );
//     onWindowResize();

// }

// function onWindowResize() {

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );

// }
// function generateTexture() {

//     var size = 512;

//     // create canvas
//     canvas = document.createElement( 'canvas' );
//     canvas.width = 50;
//     canvas.height = 50;

//     // get context
//     var context = canvas.getContext( '2d' );

//     // draw gradient
//     context.rect( 0, 0, 50, 50 );
//     var gradient = context.createLinearGradient(0,0,100,100);

//     gradient.addColorStop(0, 'rgba(255,0,255,0.2)');
//     gradient.addColorStop(0.5, 'rgba(0,255,255,0.2)');
//     gradient.addColorStop(1, 'rgba(255,0,255,0.2)');

//     context.fillStyle = gradient;
//     context.fill();

//     return canvas;

// }

// function animate() {

//     requestAnimationFrame( animate );

//     controls.update();
//     render();

// }

// function render() {

//     if( sphere ) sphere.position.copy( camera.position );
//     renderer.render( scene, camera );

// }
"use strict";