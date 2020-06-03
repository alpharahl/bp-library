<template>
  <div>
    <h2>Upload</h2>

    <h3>Directions</h3>
    <div class="d-flex justify-content-center">
      <ol>
        <li>Open your industry window in game.</li>
        <li>Select blueprints tab</li>
        <li>Use the following settings:</li>
        <ul>
          <li>Owned by me</li>
          <li>Desired station to pull blueprints from</li>
          <li>Desired container to pull blueprints from</li>
          <li>Originals</li>
          <li>All groups</li>
        </ul>
        <li>Click into blueprints window, and hit "ctrl" + "a"</li>
        <li>Copy list with "ctrl" + "c"</li>
        <li>Paste into the text area below with "ctrl" + "v"</li>
      </ol>
    </div>



    <form @submit.prevent @submit="processBlueprints">
      <b-form-textarea
        id="blueprints"
        v-model="blueprints"
        placeholder="Paste blueprints here..."
        rows="5"
        max-rows="8"
      >

      </b-form-textarea>
      <b-button type="submit" variant="success" class="mt-3">Submit</b-button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Upload",

    data(){
      return {
        blueprints: "150mm Railgun I Blueprint\t10\t20\t-1\tHybrid Weapon\n" +
          "Acolyte I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Acolyte I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Antimatter Charge L Blueprint\t8\t16\t-1\tHybrid Charge\n" +
          "Antimatter Charge L Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Antimatter Charge M Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Antimatter Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Atron Blueprint\t8\t16\t-1\tFrigate\n" +
          "Ballistic Control System I Blueprint\t0\t20\t-1\tBallistic Control system\n" +
          "Cruise Missile Launcher I Blueprint\t9\t18\t-1\tMissile Launcher Cruise\n" +
          "Epithal Blueprint\t8\t0\t-1\tIndustrial\n" +
          "Fusion M Blueprint\t10\t20\t-1\tProjectile Ammo\n" +
          "Graviton Pulse Generator Blueprint\t0\t0\t-1\tConstruction Components\n" +
          "Hammerhead I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Hobgoblin I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Hobgoblin I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Hornet I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Hornet I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Incursus Blueprint\t8\t16\t-1\tFrigate\n" +
          "Inferno Light Missile Blueprint\t10\t20\t-1\tLight Missile\n" +
          "Infiltrator I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Iridium Charge L Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Iridium Charge M Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Iridium Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Iron Charge M Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Iron Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Iteron Mark V Blueprint\t8\t16\t-1\tIndustrial\n" +
          "Kryos Blueprint\t8\t0\t-1\tIndustrial\n" +
          "Large Capacitor Control Circuit I Blueprint\t8\t16\t-1\tRig Core\n" +
          "Large Core Defense Field Extender I Blueprint\t8\t18\t-1\tRig Shield\n" +
          "Large EM Shield Reinforcer I Blueprint\t8\t16\t-1\tRig Shield\n" +
          "Large Thermal Shield Reinforcer I Blueprint\t8\t16\t-1\tRig Shield\n" +
          "Lead Charge M Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Lead Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Lead Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Maulus Blueprint\t8\t16\t-1\tFrigate\n" +
          "Medium Ancillary Current Router I Blueprint\t9\t18\t-1\tRig Core\n" +
          "Medium Capacitor Control Circuit I Blueprint\t8\t16\t-1\tRig Core\n" +
          "Medium Core Defense Field Extender I Blueprint\t9\t18\t-1\tRig Shield\n" +
          "Medium Core Defense Field Purger I Blueprint\t9\t18\t-1\tRig Shield\n" +
          "Medium Core Defense Operational Solidifier I Blueprint\t9\t18\t-1\tRig Shield\n" +
          "Medium EM Shield Reinforcer I Blueprint\t0\t0\t-1\tRig Shield\n" +
          "Medium Hydraulic Bay Thrusters I Blueprint\t9\t18\t-1\tRig Launcher\n" +
          "Medium Shield Extender I Blueprint\t10\t18\t-1\tShield Extender\n" +
          "Medium Thermal Shield Reinforcer I Blueprint\t9\t18\t-1\tRig Shield\n" +
          "Medium Warhead Calefaction Catalyst I Blueprint\t9\t18\t-1\tRig Launcher\n" +
          "Medium Warhead Flare Catalyst I Blueprint\t9\t18\t-1\tRig Launcher\n" +
          "Medium Warhead Rigor Catalyst I Blueprint\t9\t18\t-1\tRig Launcher\n" +
          "Miasmos Blueprint\t8\t16\t-1\tIndustrial\n" +
          "Mining Drone I Blueprint\t10\t20\t-1\tMining Drone\n" +
          "Missile Guidance Enhancer I Blueprint\t10\t20\t-1\tMissile Guidance Enhancer\n" +
          "Mjolnir Light Missile Blueprint\t10\t20\t-1\tLight Missile\n" +
          "Mjolnir Rocket Blueprint\t10\t20\t-1\tRocket\n" +
          "Nereus Blueprint\t8\t16\t-1\tIndustrial\n" +
          "Nova Light Missile Blueprint\t10\t20\t-1\tLight Missile\n" +
          "Nova Rocket Blueprint\t10\t20\t-1\tRocket\n" +
          "Oxygen Fuel Block Blueprint\t10\t20\t-1\tFuel Block\n" +
          "Phased Plasma L Blueprint\t10\t20\t-1\tProjectile Ammo\n" +
          "Plutonium Charge M Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Plutonium Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "R.A.M.- Ammunition Tech Blueprint\t0\t0\t-1\tTool\n" +
          "R.A.M.- Robotics Blueprint\t8\t16\t-1\tTool\n" +
          "R.A.M.- Shield Tech Blueprint\t0\t0\t-1\tTool\n" +
          "Rapid Heavy Missile Launcher I Blueprint\t9\t18\t-1\tMissile Launcher Rapid Heavy\n" +
          "Scourge Cruise Missile Blueprint\t8\t20\t-1\tCruise Missile\n" +
          "Scourge Heavy Assault Missile Blueprint\t10\t20\t-1\tHeavy Assault Missile\n" +
          "Scourge Heavy Missile Blueprint\t8\t20\t-1\tHeavy Missile\n" +
          "Scourge Light Missile Blueprint\t10\t20\t-1\tLight Missile\n" +
          "Scourge Rocket Blueprint\t10\t20\t-1\tRocket\n" +
          "Small Ancillary Current Router I Blueprint\t10\t20\t-1\tRig Core\n" +
          "Small Armor Repairer I Blueprint\t10\t18\t-1\tArmor Repair Unit\n" +
          "Small Capacitor Control Circuit I Blueprint\t10\t20\t-1\tRig Core\n" +
          "Small Core Defense Field Extender I Blueprint\t10\t20\t-1\tRig Shield\n" +
          "Small Core Defense Operational Solidifier I Blueprint\t8\t16\t-1\tRig Shield\n" +
          "Small EM Shield Reinforcer I Blueprint\t10\t20\t-1\tRig Shield\n" +
          "Small Remote Capacitor Transmitter I Blueprint\t0\t0\t-1\tRemote Capacitor Transmitter\n" +
          "Small Semiconductor Memory Cell I Blueprint\t10\t20\t-1\tRig Core\n" +
          "Small Thermal Shield Reinforcer I Blueprint\t10\t20\t-1\tRig Shield\n" +
          "Thorium Charge M Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Thorium Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Tristan Blueprint\t8\t16\t-1\tFrigate\n" +
          "Tungsten Charge M Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Tungsten Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Uranium Charge M Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Uranium Charge S Blueprint\t10\t20\t-1\tHybrid Charge\n" +
          "Valkyrie I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Vespa I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Vexor Blueprint\t8\t16\t-1\tCruiser\n" +
          "Warrior I Blueprint\t10\t20\t-1\tCombat Drone\n" +
          "Warrior I Blueprint\t10\t20\t-1\tCombat Drone"
      }
    },

    methods: {
      processBlueprints(){
        const lines = this.blueprints.split("\n");
        let blueprints = []
        lines.forEach(line => {
          let bpData = line.split("\t");
          let bp = {};
          bp.name = bpData[0];
          bp.me = bpData[1];
          bp.te = bpData[2];
          bp.runs = bpData[3];
          bp.group = bpData[4];
          blueprints.push(bp);
        })
        console.log(blueprints);
      }
    }
  }
</script>

<style scoped>

</style>
