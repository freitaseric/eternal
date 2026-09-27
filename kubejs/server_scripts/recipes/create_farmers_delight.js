ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    '3x farmersdelight:wheat_dough',
    [
      '3x minecraft:wheat',
      Fluid.of('minecraft:water', 250)
    ]
  ).id('eternal:create/mixing/wheat_dough');
});
