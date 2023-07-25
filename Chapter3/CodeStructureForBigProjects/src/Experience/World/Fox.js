import * as THREE from "three";
import Experience from "../Experience";

export default class Fox {
  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(0.02, 0.02, 0.02);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });

    this.setAnimation();
  }

  setAnimation() {
    this.animation = {};
    this.animation.mixer = new THREE.AnimationMixer(this.model);

    this.animation.actions = {};

    this.animation.actions.idle = this.animation.mixer.clipAction(
      this.resource.animations[0],
    );
    this.animation.actions.walking = this.animation.mixer.clipAction(
      this.resource.animations[1],
    );
    this.animation.actions.running = this.animation.mixer.clipAction(
      this.resource.animations[2],
    );

    this.animation.actions.active = this.animation.actions.idle;
    this.animation.actions.active.play();
    this.animation.play = (name) => {
      const newAction = this.animation.actions[name];
      const oldAction = this.animation.actions.active;

      newAction.reset();
      newAction.play();
      newAction.crossFadeFrom(oldAction, 1);

      this.animation.actions.active = newAction;
    };

    if (this.debug.active) {
      const debugObject = {
        playIdle: () => {
          this.animation.play("idle");
        },
        playWalking: () => {
          this.animation.play("walking");
        },
        playRunning: () => {
          this.animation.play("running");
        },
      };
      for (const animation in debugObject) {
        this.debugFolder.add(debugObject, animation);
      }
    }
  }

  update() {
    this.animation.mixer.update(this.time.delta * 0.001);
  }

  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("fox");
    }

    this.resource = this.resources.items.foxModel;

    this.setModel();
  }
}
