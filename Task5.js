class ElectricalAppliances {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isOn = false;
    }
  
  EnabledAppliances() {
    console.log(`${this.name} +  is On!`);
    this.isOn = true
  }
  
  DisabledAppliances() {
    console.log(`${this.name} +  is Off!`);
    this.isOn = false
  }
  
  GetPowerAppliances() {
    return this.isOn ? this.power : 0;
  }
}

  function TotalPowerConsuption() {
      let total = notebook.GetPowerAppliances() + tv.GetPowerAppliances();
      return(total);
}  

  const notebook = new ElectricalAppliances('notebook', 700); 
  const tv = new ElectricalAppliances('tv', 1500);

  notebook.EnabledAppliances();
  console.log(notebook.GetPowerAppliances());
  
  tv.EnabledAppliances();
  console.log(tv.GetPowerAppliances());
  
  console.log(`Общая потребляемая мощность `+ TotalPowerConsuption());
  