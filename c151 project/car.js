AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { default: "../6x6 ford raptor.glb" }
    },
    init: function() {
  
      this.el.setAttribute("glb-model", this.data.modelRef);
      const position = { x: 0, y: 50, z: 80 };
      const rotation = { x: 0, y: -100, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    }
  });