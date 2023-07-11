import * as THREE from "three";
import Experience from "../Experience";

export default class Floor {
  setGeometry() {
    this.geometry = new THREE.CircleGeometry(5, 64);
  }

  setTextutes() {
    this.textures = {};

    this.textures.color = this.resources.items.dirtColorTexture;
    this.textures.color.colorSpace = THREE.SRGBColorSpace;
    this.textures.color.repeat.set(1.5, 1.5);
    this.textures.color.wrapS = THREE.RepeatWrapping
    this.textures.color.wrapT = THREE.RepeatWrapping
    
    this.textures.normal = this.resources.items.dirtNormalTexture;
    this.textures.normal.repeat.set(1.5, 1.5);
    this.textures.normal.wrapS = THREE.RepeatWrapping
    this.textures.normal.wrapT = THREE.RepeatWrapping
  }

  setMaterial() {
    this.matrial = new THREE.MeshStandardMaterial({
        map: this.textures.color,
        normalMap: this.textures.normal
    })
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.matrial)
    this.scene.add(this.mesh)
  }

  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setGeometry();
    this.setTextutes();
    this.setMaterial();
    this.setMesh();
  }
}
