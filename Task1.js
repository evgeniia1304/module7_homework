const person = {
    name: 'Sergey'
  }
    const student = Object.create(person);
    student.ownName = "Ivan"; 
    
    for (let key in student) {
      
         if(student.hasOwnProperty(key)){
          console.log(key);
        }
      }