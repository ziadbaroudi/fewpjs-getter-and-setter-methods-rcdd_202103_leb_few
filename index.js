// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius =radius;
  }
  get diameter (){
    return this.radius * 2 
  }
  
  get circumference(){
    return Math.PI * this.diameter
  }
  
  get area (){
    return Math.PI * this.radius * this.radius ;
  }
  
<<<<<<< HEAD
  set diameter(diameter){
    this.radius = diameter/2
  }
  
  set circumference(circumference){
    this.radius= circumference / (2 *Math.PI) 
=======
  set diameter(){
    this.radius = diameter/2
  }
  
  set circumference(){
    this.radius= this.diameter / Math.PI 
>>>>>>> 52c9581e4d1cc2faa434aac5a22dc7d6b2c36203
  }
}