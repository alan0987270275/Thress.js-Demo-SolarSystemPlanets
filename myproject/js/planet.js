import * as THREE from 'three';


const normalTexture = new THREE.TextureLoader().load('img/normal.jpg');

export const sun = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/sun.jpeg'),
    normalMap: normalTexture,
  })
);

export const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('img/mercury.jpeg'),
      bumpMap: new THREE.TextureLoader().load('img/mercury_bump.jpg'),
    })
);

export const venus = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('img/venus.jpeg'),
      bumpMap: new THREE.TextureLoader().load('img/venus_bump.jpg'),
    })
);

export const earth = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('img/earth.jpeg'),
      bumpMap: new THREE.TextureLoader().load('img/earth_bump.jpg'),
    })
);

export const mars = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('img/mars.jpeg'),
      normalMap: new THREE.TextureLoader().load('img/mars_normal.jpg'),
      bumpMap: new THREE.TextureLoader().load('img/mars_bump.jpg'),
    })
);

export const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('img/jupiter.jpeg')
    })
);

export const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('img/saturn.jpeg')
    })
);

export const saturnTorus = new THREE.Mesh(
    new THREE.TorusGeometry(6, 0.5, 2, 100),  
    new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('img/saturn_ring.jpeg'),
        alphaMap: new THREE.TextureLoader().load('img/saturn_ring_transparency')
      })
);

export const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('img/uranus.jpeg')
    })
);

export const uranusTorus = new THREE.Mesh(
    new THREE.TorusGeometry(6, 1, 2, 100),  
    new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('img/uranus_ring.jpeg'),
        alphaMap: new THREE.TextureLoader().load('img/uranus_ring_transparency')
      })
);

export const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('img/neptune.jpeg')
    })
);