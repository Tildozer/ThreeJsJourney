# Chapter 1: Basics

[Scene](https://threejs.org/docs/index.html#api/en/scenes/Scene)

Scenes allow you to set up what and where is to be rendered by three.js.
This is where you place objects, lights and cameras.

[BoxGeomtery](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)

BoxGeometry is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'.
On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.

[MeshBasicMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial)

A material for drawing geometries in a simple shaded (flat or wireframe) way.

**This material is not affected by lights.**

[Color](https://threejs.org/docs/index.html#api/en/math/Color)

Class representing a color.

Iterating through a Color instance will yield its components (r, g, b) in the corresponding order.

[Mesh](https://threejs.org/docs/index.html#api/en/objects/Mesh)

Class representing triangular **polygon mesh** based objects.
Also serves as a base for other classes such as **SkinnedMesh**.

[PerspectiveCamera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)

Camera that uses **perspective projection**.

This projection mode is designed to mimic the way the human eye sees.
It is the most common projection mode used for rendering a 3D scene.

[WebGLRenderer](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)

The WebGL renderer displays your beautifully crafted scenes using **WebGL**.
