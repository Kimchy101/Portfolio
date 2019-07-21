<template>
  <v-layout column align-center fixed>
    <canvas id="cube">
    </canvas>
    <h1>Andrew <sub>C h o i</sub></h1>
    <h2 v-html="caption"></h2>
  </v-layout>
</template>

<style scoped>
h1
{
  font-size: 50px;
  position:relative;
  bottom: 75px;
  font-weight: 500;
}
h2
{
  position:relative;
  bottom:75px;
  color:grey
}
</style>

<script>
import * as Three from 'three'

import Vue from 'vue'

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      cubeMesh: null, cubeWireMesh: null,
      time: 0,
      speed: 0.03
    }
  },
  methods: {
    animate: function() {
      // ensures repetition of animation...
      requestAnimationFrame(this.animate);

      // gets rid of this statements...
      const {cubeMesh, cubeWireMesh, time, rotate} = 
        {cubeMesh: this.cubeMesh, cubeWireMesh: this.cubeWireMesh, time: this.time, rotate: this.rotate};

      if (cubeWireMesh.position.z < -300) {
          
        // end position will be -300...
        cubeWireMesh.position.z = 
          -300 + ((-Math.cos(time) - 1) * 100) * 2;
          
        if (time > Math.PI) {
          cubeWireMesh.position.z = -300;
        }
      }
        else {
          const rS = this.speed / 2;
          rotate(cubeMesh, 0, rS, rS);
          rotate(cubeWireMesh, rS, 0, rS);

          // loop growth
          cubeMesh.position.z = -300 + (Math.cos(time) - 1) * 100;
        }

        this.time += this.speed;
        
        this.renderer.render(this.scene, this.camera);
    },
    generateRenderer: function()
    {
      this.renderer = new Three.WebGLRenderer({
        canvas: document.getElementById('cube'), 
        alpha: true, 
        antialias: true});

      this.renderer.setSize(300, 300);

      this.camera = new Three.PerspectiveCamera(35, 1, 0.01, 3000);
    },
    generateScene: function()
    {
      this.cubeMesh = this.generateCubeMesh(
        50, 
        new Three.MeshLambertMaterial({color: 0x643c3c}), 
        -500)
      ;

      this.cubeWireMesh = this.generateCubeMesh(
        50 * Math.sqrt(3), 
        new Three.MeshNormalMaterial({wireframe: true}), 
        -700
      );

      this.scene = new Three.Scene();
      this.scene.add(
        new Three.AmbientLight(0xffffff, 0), 
        new Three.PointLight(0xffffff, 3), 
        this.cubeMesh, 
        this.cubeWireMesh
      );
    },
    generateCubeMesh: function(length, material, z)
    {
      const mesh = new Three.Mesh(
        new Three.CubeGeometry(length, length, length),
        material
      );
      mesh.position.setZ(z);

      return mesh;
    },
    rotate: function(mesh, x, y, z)
    {
      mesh.rotation.x += x;
      mesh.rotation.y += y;
      mesh.rotation.z += z;
    }
  },
  mounted() {
    if (this.time == 0) {
      this.generateRenderer();
      
      this.generateScene();
    }
    
    this.animate();
  },
  props: {
    caption: ""
  }
}

</script>
