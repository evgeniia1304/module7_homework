function ElectricalAppliances(name, power) {
  this.name = name;
  this.power = power;
  this.isOn = false;
} 

ElectricalAppliances.prototype.enabled = function() {
  console.log(`${this.name} +  is On!`);
  this.isOn = true;
}

ElectricalAppliances.prototype.disabled = function() {
  console.log(`${this.name} +  is Off!`);
  this.isOn = false;
}

ElectricalAppliances.prototype.getPowerUsed = function() {
  return this.isOn ? this.power : 0;
}

function TotalPowerConsuption() {
  let total = notebook.getPowerUsed() + tv.getPowerUsed();
  return(total);
}


const notebook = new ElectricalAppliances('notebook', 700); 
const tv = new ElectricalAppliances('tv', 1500);

notebook.enabled();
console.log(notebook.getPowerUsed());

tv.disabled();
console.log(tv.getPowerUsed());
      

console.log(`Общая потребляемая мощность ` + TotalPowerConsuption());
