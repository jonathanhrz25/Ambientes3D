import * as THREE from"../src/three.module.js";
import { OrbitControls } from "../src/OrbitControls.js";

var scene = new THREE.Scene();
        scene.background = new THREE.Color('black');

        //add camera
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth/window.innerHeight
        );

        //renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //add geometry
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({color: 'blue', wireframe: true});
        var cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        camera.position.z = 5;

        var controls = new OrbitControls(camera, renderer.domElement);

        controls.minDistance = 2;
        controls.minDistance = 10;

        //controls.enableZoom = false;

        controls.enableDamping = true;
        controls.dampingFactor = .2;

        controls.maxPolarAngle = Math.PI;
        controls.screenSpacePanning = true;
        
        //animation
        var animate = function(){
            requestAnimationFrame(animate);

            //cube.rotation.x += 0.01;
            //cube.rotation.y += 0.01;

            renderer.render(scene, camera);

        }

        animate();