//创建场景
var scene = new THREE.Scene();
//定义摄影机  属性分别是：视野、浏览器宽高比、近剪裁面，远剪裁面
var camera = new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight,0.1,1000);
//创建渲染器
var renderer = new THREE.WebGLRenderer();
//在窗口渲染场景
renderer.setSize(window.innerWidth*0.8,window.innerHeight*0.8);
//把场景添加到浏览器中
document.body.appendChild(renderer.domElement);

//创建一个几何体
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x2d7092 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 8;

function animate(){
	requestAnimationFrame(animate);
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;
	renderer.render( scene, camera );
}
if (Detector.webgl) {
    // Initiate function or other initializations here
    animate();
} else {
    var warning = Detector.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}