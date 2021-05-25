import * as THREE from '../engine/three.js-master/build/three.module.js';
import Dice from '../game/mechanics/Dice.js';
import Alchemist from '../game/entity/expertise/Alchemist.js';
import Cleric from '../game/entity/expertise/Cleric.js';
import Druid from '../game/entity/expertise/Druid.js';
import Fighter from '../game/entity/expertise/Fighter.js';
import Paladin from '../game/entity/expertise/Paladin.js';
import Ranger from '../game/entity/expertise/Ranger.js';
import Rogue from '../game/entity/expertise/Rogue.js';
import Sorcerer from '../game/entity/expertise/Sorcerer.js';
import Summoner from '../game/entity/expertise/Summoner.js';
import Wizard from '../game/entity/expertise/Wizard.js';

function main() {
	let dice = new Dice();
	console.log(dice.fourSided());
	console.log(dice.sixSided());
	console.log(dice.tenSided());
	console.log(dice.twelveSided());
	console.log(dice.twentySided());
	console.log(`${dice.percentage()}%`);
	console.log(dice.startingStats());
	console.log(new Alchemist(1, 16, 3));
	console.log(new Cleric(1, 16, 3));
	console.log(new Druid(1, 16, 3));
	console.log(new Fighter(1, 16, 3));
	console.log(new Paladin(1, 16, 3));
	console.log(new Ranger(1, 16, 3));
	console.log(new Rogue(1, 16, 3));
	console.log(new Sorcerer(1, 16, 3));
	console.log(new Summoner(1, 16, 3));
	console.log(new Wizard(1, 16, 3));
	const canvas = document.querySelector('#canvas');
	const renderer = new THREE.WebGLRenderer({canvas});

	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 2;

	const scene = new THREE.Scene();

	{
		const color = 0xFFFFFF;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		scene.add(light);
	}

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

	function makeInstance(geometry, color, x) {
		const material = new THREE.MeshPhongMaterial({color});

		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		cube.position.x = x;

		return cube;
	}

	const cubes = [
		makeInstance(geometry, 0x44aa88,  0),
		makeInstance(geometry, 0x8844aa, -2),
		makeInstance(geometry, 0xaa8844,  2),
	];

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const pixelRatio = window.devicePixelRatio;
		const width  = canvas.clientWidth  * pixelRatio | 0;
		const height = canvas.clientHeight * pixelRatio | 0;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

	function render(time) {
		time *= 0.001;

		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		cubes.forEach((cube, ndx) => {
			const speed = 1 + ndx * .1;
			const rot = time * speed;
			cube.rotation.x = rot;
			cube.rotation.y = rot;
		});

		renderer.render(scene, camera);

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
}

main();