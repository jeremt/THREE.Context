
~function () {

var context = new THREE.Context();

context.updateCubeColor = function (dt) {
  this.cubeHue += dt * 0.2;
  if (this.cubeHue > 1)
    this.cubeHue = 0;
  this.cube.material.color.setHSL(this.cubeHue, 0.5, 0.5);
}

context.updateCubePosition = function (dt) {
  this.cube.rotation.x += dt;
  this.cube.rotation.y += dt;
  this.cube.rotation.z += dt;
}

context.addEventListener("start", function () {

  // Place camera.

  this.camera.position.z = 500;

  // Create lights.

  var ambient = new THREE.AmbientLight(0x202010);
  this.scene.add(ambient);
  var directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 0, 1).normalize();
  this.scene.add(directionalLight);

  // Create simple cube.

  this.cubeHue = 0;
  this.cube = new THREE.Mesh(
    new THREE.CubeGeometry(100, 100, 100),
    new THREE.MeshPhongMaterial({color: 0xff0000})
  );

  this.scene.add(this.cube);

});

context.addEventListener("frame", function (event) {
  this.updateCubeColor(event.deltaTime);
  this.updateCubePosition(event.deltaTime);
});

context.addEventListener("pause", function () {
});

context.addEventListener("play", function () {
});

context.addEventListener("quit", function () {
});

context.start();

}();