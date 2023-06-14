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

### 1.4: **Cameras**

[Camera](https://threejs.org/docs/#api/en/cameras/Camera)

    Abstract base class for cameras. 
    This class should always be inherited when you build a new camera.

[ArrayCamera](https://threejs.org/docs/#api/en/cameras/ArrayCamera)

    ArrayCamera can be used in order to efficiently render a scene with a predefined set of cameras.
    This is an important performance aspect for rendering VR scenes.
    An instance of ArrayCamera always has an array of sub cameras.
    It's mandatory to define for each sub camera the viewport property which determines the part of the viewport that is rendered with this camera.

[StereoCamera](https://threejs.org/docs/#api/en/cameras/StereoCamera)

    Dual PerspectiveCameras used for effects such as 3D Anaglyph or Parallax Barrier.

[CubeCamera](https://threejs.org/docs/#api/en/cameras/CubeCamera)

    Creates 6 cameras that render to a WebGLCubeRenderTarget.

[OrthoGraphicCamera](https://threejs.org/docs/#api/en/cameras/OrthographicCamera)

    In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.

    This can be useful for rendering 2D scenes and UI elements, amongst other things.

[FlyControls](https://threejs.org/docs/#examples/en/controls/FlyControls)

    FlyControls enables a navigation similar to fly modes in DCC tools like Blender. You can arbitrarily transform the camera in 3D space without any limitations (e.g. focus on a specific target).

[FirstPersonControl](https://threejs.org/docs/#examples/en/controls/FirstPersonControls)

    This class is an alternative implementation of FlyControls.

[PointerLockControl](https://threejs.org/docs/#examples/en/controls/PointerLockControls)

    The implementation of this class is based on the Pointer Lock API. PointerLockControls is a perfect choice for first person 3D games.

[OrbitControl](https://threejs.org/docs/#examples/en/controls/OrbitControls)

    Orbit controls allow the camera to orbit around a target.
    To use this, as with all files in the /examples directory, you will have to include the file separately in your HTML.

[TrackBallControl](https://threejs.org/docs/#examples/en/controls/TrackballControls)

    TrackballControls is similar to OrbitControls. However, it does not maintain a constant camera up vector. That means if the camera orbits over the “north” and “south” poles, it does not flip to stay "right side up".

[TransformControls](https://threejs.org/docs/#examples/en/controls/TransformControls)

    This class can be used to transform objects in 3D space by adapting a similar interaction model of DCC tools like Blender.
    Unlike other controls, it is not intended to transform the scene's camera.

    TransformControls expects that its attached 3D object is part of the scene graph.

[DragControls](https://threejs.org/docs/#examples/en/controls/DragControls)

    This class can be used to provide a drag'n'drop interaction.

[Pointer Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API)

### 1.5: **FullScreen and Resizing**

[dblclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)

### 1.6: **Geometries**

[BufferGeometry](https://threejs.org/docs/#api/en/core/BufferGeometry)

    A representation of mesh, line, or point geometry.
    Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers, reducing the cost of passing all this data to the GPU.

    To read and edit data in BufferGeometry attributes, see BufferAttribute documentation.

[PlaneGeometry](https://threejs.org/docs/#api/en/geometries/PlaneGeometry)

    A class for generating plane geometries

[circleGeometry](https://threejs.org/docs/#api/en/geometries/CircleGeometry)

    CircleGeometry is a simple shape of Euclidean geometry. It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius. It is built counter-clockwise from a start angle and a given central angle. It can also be used to create regular polygons, where the number of segments determines the number of sides.

[ConeGeometry](https://threejs.org/docs/#api/en/geometries/ConeGeometry)

    A class for generating cone geometries

[CylinderGeometry](https://threejs.org/docs/#api/en/geometries/CylinderGeometry)

    A class for generating cylinder geometries

[RingGeometry](https://threejs.org/docs/#api/en/geometries/RingGeometry)

    A class for generating a two-dimensional ring geometry

[TorusGeometry](https://threejs.org/docs/#api/en/geometries/TorusGeometry)

    A class for generating torus geometries

[TorusKnotGeometry](https://threejs.org/docs/#api/en/geometries/TorusKnotGeometry)

    Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q. If p and q are not coprime, the result will be a torus link.

[DodecahedronGeometry](https://threejs.org/docs/#api/en/geometries/DodecahedronGeometry)

    A class for generating a Dodecahedron geometries

[OctahedronGeometry](https://threejs.org/docs/#api/en/geometries/OctahedronGeometry)
    A class for generating an octahedron geometries

[TetraheadronGeometry](https://threejs.org/docs/#api/en/geometries/TetrahedronGeometry)

    A class for generating a tetrahedron geometries

[IcosohedronGeometry](https://threejs.org/docs/#api/en/geometries/TetrahedronGeometry)

    A class for generating a icosahedronGeometry

[SphereGeometry](https://threejs.org/docs/#api/en/geometries/SphereGeometry)

    A class for generating sphere geometries

[ShapeGeometry](https://threejs.org/docs/#api/en/geometries/ShapeGeometry)

    Creates an one-sided polygonal geometry from one or more path shapes.

[TubeGeometry](https://threejs.org/docs/#api/en/geometries/TubeGeometry)

    Creates a tube that extrudes along a 3d curve.

[LatheGeometry](https://threejs.org/docs/#api/en/geometries/LatheGeometry)

    Creates meshes with axial symmetry like vases. The lathe rotates around the Y axis.

[TextGeometry](https://threejs.org/docs/?q=textge#examples/en/geometries/TextGeometry)

    A class for generating text as a single geometry.
    It is constructed by providing a string of text, and a set of parameters consisting of a loaded font and settings for the geometry's parent ExtrudeGeometry

[Float32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

    Treats the array the same as a float array in the c language
