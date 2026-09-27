// Eternal 1.1.0 — Silent Gear power-tool gates.
// The gear itself remains modular: only the blueprint for the AOE form is gated.
// This deliberately does not alter material JSON, traits, or repair behaviour.
ServerEvents.recipes(event => {
  const gated = [
    ['silentgear:hammer_blueprint', 'eternal/silent_gear/hammer_blueprint'],
    ['silentgear:excavator_blueprint', 'eternal/silent_gear/excavator_blueprint'],
    ['silentgear:saw_blueprint', 'eternal/silent_gear/saw_blueprint'],
    ['silentgear:paxel_blueprint', 'eternal/silent_gear/paxel_blueprint']
  ];

  // The stock blueprint recipes are too early for a Create/MineColonies pack.
  // Re-add them as late-mid-game Create mechanical crafting recipes. Parts and
  // upgrades are still made through Silent Gear, so a tool can be rebuilt.
  gated.forEach(([output, id]) => {
    event.remove({output: output});
    event.recipes.create.mechanical_crafting(output, [
      'NBN',
      'BAB',
      'NBN'
    ]).key({
      N: 'minecraft:netherite_scrap',
      B: 'create:brass_ingot',
      A: 'create:precision_mechanism'
    }).id(id);
  });
});
