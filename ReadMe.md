# ThreeJs Journey

## **Chapter 1**: *Basics*

### 1.1: **First Scene**

[Scene](https://threejs.org/docs/index.html#api/en/scenes/Scene)

    Scenes allow you to set up what and where is to be rendered by three.js.
    This is where you place objects, lights and cameras.

[BoxGeomtery](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)

    BoxGeometry is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'.
    On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.

[MeshBasicMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial)

    A material for drawing geometries in a simple shaded (flat or wireframe) way.
    This material is not affected by lights.

[Color](https://threejs.org/docs/index.html#api/en/math/Color)

    Class representing a color.
    Iterating through a Color instance will yield its components (r, g, b) in the corresponding order.

[Mesh](https://threejs.org/docs/index.html#api/en/objects/Mesh)

    Class representing triangular polygon mesh based objects.
    Also serves as a base for other classes such as SkinnedMesh.

[PerspectiveCamera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)

    Camera that uses perspective projection.

    This projection mode is designed to mimic the way the human eye sees.
    It is the most common projection mode used for rendering a 3D scene.

[WebGLRenderer](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)

    The WebGL renderer displays your beautifully crafted scenes using WebGL.

### 1.2: **Transforming Objects**

[Object3D](https://threejs.org/docs/#api/en/core/Object3D)

    This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.

[Vector3](https://threejs.org/docs/#api/en/math/Vector3)

    Class representing a 3D vector. A 3D vector is an ordered triplet of numbers (labeled x, y, and z), which can be used to represent a number of things, such as:
        • A point in 3D space
        • A direction and length in 3D space
        • Any arbitrary orderd triplet of numbers.

[AxesHelper](https://threejs.org/docs/#api/en/helpers/AxesHelper)

    An axis object to visualize the 3 axes in a simple way.
    The X axis is red. The Y axis is green. The Z axis is blue.

[Euler](https://threejs.org/docs/index.html#api/en/math/Euler)

    A class representing Euler Angles.
    Euler angles describe a rotational transformation by rotating an object on its various axes in specified amounts per axis, and a specified axis order.

[Quaternion](https://threejs.org/docs/#api/en/math/Quaternion)

    Implementation of a quaternion.
    Quaternions are used in three.js to represent rotations.

    Iterating through a Quaternion instance will yield its components (x, y, z, w) in the corresponding order.

[Group](https://threejs.org/docs/#api/en/objects/Group)

    This is almost identical to an Object3D. Its purpose is to make working with groups of objects syntactically clearer.

### 1.3: **Animations**

[clock](https://threejs.org/docs/#api/en/core/Clock)

    Object for keeping track of time.
    This uses performance.now() if it is available, otherwise it reverts to the less accurate Date.now().
