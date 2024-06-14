import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Box3, LinearToneMapping, LoadingManager, PMREMGenerator, REVISION, Vector3 } from "three";
import {MeshoptDecoder} from "three/addons/libs/meshopt_decoder.module.js";
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const backgroundColor = 0x191919;
const ambientColor = 0xffffff;
const directColor = 0xffffff;
const directInvensity = 0.8 * Math.PI;
const ambientIntensity = 0.3;
const toneMapping = LinearToneMapping;

const MANAGER = new LoadingManager();
const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;
const DRACO_LOADER = new DRACOLoader(MANAGER).setDecoderPath(
    `${THREE_PATH}/examples/jsm/libs/draco/gltf/`,
);
const KTX2_LOADER = new KTX2Loader(MANAGER).setTranscoderPath(
    `${THREE_PATH}/examples/jsm/libs/basis/`,
);
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
    20,
    window.innerWidth / window.innerHeight,
    0.01,
    1000 );
var controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader()
    .setDRACOLoader(DRACO_LOADER)
    .setKTX2Loader(KTX2_LOADER.detectSupport(renderer))
    .setMeshoptDecoder(MeshoptDecoder);

var object3d;
var box;
var size;
var center;
var pmremGenerator = new PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();
var neutralEnvironment = pmremGenerator.fromScene(new RoomEnvironment()).texture;
const scene = new THREE.Scene();
scene.background = new THREE.Color(backgroundColor);
//camera.position.set(0, 10, 1);
renderer.setSize( window.innerWidth/2, window.innerHeight/2);

function addLights()
{
    renderer.toneMapping = Number(toneMapping);
    renderer.toneMappingExposure = Math.pow(2, 0.0);

    const al = new THREE.AmbientLight(ambientColor, ambientIntensity);
    scene.add(al);
    const dl = new THREE.DirectionalLight(directColor, directInvensity);
    dl.position.set(0.5, 0, 0.866);
    scene.add(dl);
}

window.addEventListener('resize', function()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function addControls() {

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.autoRotate = false;
    controls.minDistance = 10;
    controls.maxDistance = 500;
    controls.update();
    controls.addEventListener();
}

function animate()
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
loader.load('planet_earth.glb', function ( gltf )
    {
        object3d = gltf.scene;
        box = new Box3().setFromObject(object3d);
        size = box.getSize(new Vector3()).length();
        center = box.getCenter(new Vector3());
        console.log(center);
        //object3d.position.x -= center.x;
        object3d.position.y -= center.y;
        // object3d.position.z -= center.z;
        // controls.maxDistance = size * 10;
        // camera.near = size / 100;
        // camera.far = size * 100;
        // camera.updateProjectionMatrix();
        // camera.position.copy(center);
        // camera.position.x += size / 2.0;
        // camera.position.y += size / 5.0;
        // camera.position.z += size / 2.0;
        // camera.lookAt(center);
        //scene.environment = neutralEnvironment;
        //scene.background = neutralEnvironment;

        scene.add( object3d );
        controls.update();
        renderer.render( scene, camera );
        animate();
    },
    undefined,
    function ( error )
    {
        console.error( error );
    } );

addControls();
addLights();
document.getElementById('model').appendChild( renderer.domElement );