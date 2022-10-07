class bill{
monto: number
name: string 
creationdate: string
 

constructor(monto: number, name: string, creationdate: string){
    this.monto = monto;
    this.name = name;
    this.creationdate = creationdate;
}
entry(){
    return "ingreso  " + this.monto
}    

refund(){
    return "reintegro  " + this.monto
}

};

const worth = new bill(1000235,"saving", "1/10/2022");
console.log(worth.entry() );
console.log(worth.refund() );



class counter{
 number1:number 
 number2:number  

 constructor(number1:number,number2:number){
    this.number1 = number1;
    this.number2 = number2;

 }
 increase() {
    return this.number1+this.number2
 }
 decrease() {
    return this.number1-this.number2
 }
};
const increase = new counter(6,5);
console.log(increase. increase () );
console.log(increase.decrease() );


class  vehicle {
brand: string
color: string
Type: string
serialnumber: string

constructor(brand: string, color: string, Type:string, serialnumber: string) {
    this.brand = brand;
    this.color = color;
    this.Type = Type;
    this.serialnumber = serialnumber;
}
light() {
    return "encendido"
}
startup() {
    return "arranco"
}
toturnoff() {
    return "apagado"
}
};
 const trolley = new vehicle ("mx12", "rojo", "van", "10142MX");
 console.log(trolley.light() );
 console.log(trolley.startup() );
 console.log(trolley.toturnoff() );
 
class motorcycle extends vehicle {
capacidaddecarga: string
speed: string

constructor(capacidaddecarga: string, speed: string, brand: string, color: string, type: string, numerodeserie: string){
super(brand,color,type,numerodeserie);  
this.capacidaddecarga = capacidaddecarga;
this.speed = speed;
}
brakemotorcycle() {
    return "frenar la moto"
}
beepmotorcycle() {
    return "la moto pito"
}
};

const suzuki = new motorcycle( "setenta kilos", "100 k/m", "x12m", "azul", "sporty", "4632AX1");
console.log(suzuki.brakemotorcycle());
console.log(suzuki.beepmotorcycle());



class car extends vehicle{
   numerodeejes: string
   capacidaddecarga: string

constructor(numerodeejes: string, capacidaddecarga: string, brand: string, color: string, type:string, numerodeserie: string){
super(brand,color,type,numerodeserie);
this.numerodeejes = numerodeejes;
this.capacidaddecarga = capacidaddecarga;
}
speedup(){
    return "el carro esta aselerando rum rum"
}
stop(){
    return "el carro esta detenido"
}
};

const toyota = new car("6 ejes", "30 toneladas", "kenworth", "black", "tractor","7K8MX");
console.log(toyota.speedup());
console.log(toyota.stop());


