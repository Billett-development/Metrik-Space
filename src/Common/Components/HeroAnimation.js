import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

import "../Styles/_Hero.scss";

class HeroAnimation extends Component {
  componentDidMount() {
    var scene;
    var camera;
    var renderer;
    var maxParticles = 1000,
      particles,
      particleMaterial,
      particleSystem,
      clock = new THREE.Clock(),
      deltaTime = 0;

    function scene_setup() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      renderer = new THREE.WebGLRenderer();
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      document
        .getElementById("canvas-container")
        .appendChild(renderer.domElement);
    }
    scene_setup();

    var geometry = new THREE.IcosahedronGeometry(1, 0);
    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shading: THREE.FlatShading,
    });
    var material2 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shading: THREE.FlatShading,
    });
    var cube = new THREE.Mesh(geometry, material);
    var cube2 = new THREE.Mesh(geometry, material2);
    var cube3 = new THREE.Mesh(geometry, material);
    var cube4 = new THREE.Mesh(geometry, material);
    var cube5 = new THREE.Mesh(geometry, material);
    var cube6 = new THREE.Mesh(geometry, material);
    var cube7 = new THREE.Mesh(geometry, material);
    var cube8 = new THREE.Mesh(geometry, material);
    var cube9 = new THREE.Mesh(geometry, material);
    var cube10 = new THREE.Mesh(geometry, material);
    var cube11 = new THREE.Mesh(geometry, material);
    var cube12 = new THREE.Mesh(geometry, material);
    var cube13 = new THREE.Mesh(geometry, material);
    var cube14 = new THREE.Mesh(geometry, material);
    var cube15 = new THREE.Mesh(geometry, material);
    var cube16 = new THREE.Mesh(geometry, material);
    var cube17 = new THREE.Mesh(geometry, material);
    var cube18 = new THREE.Mesh(geometry, material);
    var cube19 = new THREE.Mesh(geometry, material);
    var cube20 = new THREE.Mesh(geometry, material);
    var cube21 = new THREE.Mesh(geometry, material);
    var cube22 = new THREE.Mesh(geometry, material);

    scene.add(
      cube,
      cube2,
      cube3,
      cube4,
      cube5,
      cube6,
      cube7,
      cube8,
      cube9,
      cube10,
      cube11,
      cube12,
      cube13,
      cube14,
      cube14,
      cube15,
      cube16,
      cube17,
      cube18,
      cube19,
      cube20,
      cube21,
      cube22
    );
    cube.position.z = -4;
    cube2.position.z = -4;
    cube3.position.z = -4;
    cube4.position.z = -4;
    cube5.position.z = -4;
    cube6.position.z = -4;
    cube7.position.z = -4;
    cube8.position.z = -4;
    cube9.position.z = -4;
    cube10.position.z = -4;
    cube11.position.z = -4;
    cube12.position.z = -4;
    cube13.position.z = -4;
    cube14.position.z = -4;
    cube15.position.z = -4;
    cube16.position.z = -4;
    cube17.position.z = -4;
    cube18.position.z = -4;
    cube19.position.z = -4;
    cube20.position.z = -4;
    cube21.position.z = -4;
    cube22.position.z = -4;
    cube.position.x = 1.2;
    cube2.position.x = 2;
    cube3.position.x = 6.5;
    cube4.position.x = 5.5;
    cube5.position.x = 5.5;
    cube6.position.x = 4.5;
    cube7.position.x = 3;
    cube8.position.x = 5;
    cube9.position.x = 4;
    cube10.position.x = 4.2;
    cube11.position.x = 5.4;
    cube12.position.x = 3.5;
    cube13.position.x = 2.6;
    cube14.position.x = 1.9;
    cube15.position.x = 1.2;
    cube16.position.x = 0.5;
    cube17.position.x = 0;
    cube18.position.x = -0.5;
    cube19.position.x = -1;
    cube20.position.x = -1.5;
    cube21.position.x = -2;
    cube22.position.x = 5.5;
    cube.position.y = -3.25;
    cube2.position.y = -2.8;
    cube3.position.y = 0;
    cube4.position.y = -1;
    cube5.position.y = -2;
    cube6.position.y = -2;
    cube7.position.y = -2.5;
    cube8.position.y = -2;
    cube9.position.y = -2.25;
    cube10.position.y = -1.2;
    cube11.position.y = -0.5;
    cube12.position.y = -1.9;
    cube13.position.y = -2.4;
    cube14.position.y = -2.9;
    cube15.position.y = -2.9;
    cube16.position.y = -3.2;
    cube17.position.y = -3.4;
    cube18.position.y = -3.4;
    cube19.position.y = -3.6;
    cube20.position.y = -3.8;
    cube21.position.y = -4;
    cube22.position.y = -3;

    particles = new THREE.Geometry();
    for (var i = 0; i < maxParticles; i++) {
      var particle = new THREE.Vector3(
        random(-400, 400),
        random(-200, 200),
        random(-300, 300)
      );
      particles.vertices.push(particle);
    }
    particleMaterial = new THREE.ParticleBasicMaterial({
      color: 0x313639,
      size: 2,
    });
    particleSystem = new THREE.ParticleSystem(particles, particleMaterial);
    particleSystem.sortParticles = true;
    scene.add(particleSystem);

    // render loop
    function render() {
      requestAnimationFrame(render);

      deltaTime = clock.getDelta();
      particleSystem.rotation.y += deltaTime / 4;

      renderer.render(scene, camera);
    }
    render();

    function random(min, max) {
      if (isNaN(max)) {
        max = min;
        min = 0;
      }
      return Math.random() * (max - min) + min;
    }

    // handles all of the responsive
    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // this code handles mouse movement
    var mouseTolerance = 0.4;
    document.onmousemove = function (e) {
      var centerX = window.innerWidth * 0.9;
      var centerY = window.innerHeight * 0.9;

      particleSystem.rotation.x =
        ((e.clientY - centerY) / centerY) * mouseTolerance;
      particleSystem.rotation.y =
        ((e.clientX - centerX) / centerX) * mouseTolerance;
    };

    // this is code for the hero text
    var text2 = document.createElement("h1");
    text2.style.position = "absolute";
    text2.style.fontSize = 7 + "vw";
    text2.style.fontFamily = "Rajdhani";
    text2.style.color = "#313639";
    text2.style.padding = -1 + "vw";
    text2.innerHTML = "THIS IS METRIK SPACE";
    text2.style.top = 10 + "%";
    text2.style.left = 5 + "%";
    text2.style.right = 25.9 + "%";
    text2.style.width = 46 + "%";
    text2.style.zIndex = 3;
    document.body.appendChild(text2);

    var lights = [];
    lights[0] = new THREE.DirectionalLight(0x191c1e, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new THREE.DirectionalLight(0x313639, 1);
    lights[1].position.set(0, 1, 0);
    lights[2] = new THREE.DirectionalLight(0x313639, 1);
    lights[2].position.set(0, -1, 0);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);

    function render() {
      cube.rotation.z += 0.005;
      cube.rotation.y -= 0.005;
      cube2.rotation.z += 0.005;
      cube2.rotation.y -= 0.005;
      cube3.rotation.z += 0.005;
      cube3.rotation.y -= 0.005;
      cube4.rotation.z -= 0.005;
      cube4.rotation.y += 0.005;
      cube5.rotation.z += 0.005;
      cube5.rotation.y -= 0.005;
      cube6.rotation.z += 0.005;
      cube6.rotation.y -= 0.005;
      cube7.rotation.z -= 0.005;
      cube7.rotation.y += 0.005;
      cube8.rotation.z -= 0.005;
      cube8.rotation.y += 0.005;
      cube9.rotation.z -= 0.005;
      cube9.rotation.y += 0.005;
      cube10.rotation.z += 0.005;
      cube10.rotation.y -= 0.005;
      cube11.rotation.z += 0.005;
      cube11.rotation.y -= 0.005;
      cube12.rotation.z -= 0.005;
      cube12.rotation.y += 0.005;
      cube13.rotation.z -= 0.005;
      cube13.rotation.y -= 0.005;
      cube14.rotation.z += 0.005;
      cube14.rotation.y += 0.005;
      cube15.rotation.z -= 0.005;
      cube15.rotation.y += 0.005;
      cube16.rotation.z -= 0.005;
      cube16.rotation.y -= 0.005;
      cube17.rotation.z -= 0.005;
      cube17.rotation.y += 0.005;
      cube18.rotation.z += 0.005;
      cube18.rotation.y += 0.005;
      cube19.rotation.z -= 0.005;
      cube19.rotation.y -= 0.005;
      cube20.rotation.z += 0.005;
      cube20.rotation.y -= 0.005;
      cube21.rotation.z += 0.005;
      cube21.rotation.y += 0.005;
      deltaTime = clock.getDelta();
      particleSystem.rotation.y += deltaTime / 60;

      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
  }
  render() {
    return (
      <div class="hero" id="canvas-container">
        <div />
      </div>
    );
  }
}
export default HeroAnimation;
