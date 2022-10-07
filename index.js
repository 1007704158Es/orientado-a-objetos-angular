var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bill = /** @class */ (function () {
    function bill(monto, name, creationdate) {
        this.monto = monto;
        this.name = name;
        this.creationdate = creationdate;
    }
    bill.prototype.entry = function () {
        return "ingreso  " + this.monto;
    };
    bill.prototype.refund = function () {
        return "reintegro  " + this.monto;
    };
    return bill;
}());
;
var worth = new bill(1000235, "saving", "1/10/2022");
console.log(worth.entry());
console.log(worth.refund());
var counter = /** @class */ (function () {
    function counter(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    counter.prototype.increase = function () {
        return this.number1 + this.number2;
    };
    counter.prototype.decrease = function () {
        return this.number1 - this.number2;
    };
    return counter;
}());
;
var increase = new counter(6, 5);
console.log(increase.increase());
console.log(increase.decrease());
var vehicle = /** @class */ (function () {
    function vehicle(brand, color, Type, serialnumber) {
        this.brand = brand;
        this.color = color;
        this.Type = Type;
        this.serialnumber = serialnumber;
    }
    vehicle.prototype.light = function () {
        return "encendido";
    };
    vehicle.prototype.startup = function () {
        return "arranco";
    };
    vehicle.prototype.toturnoff = function () {
        return "apagado";
    };
    return vehicle;
}());
;
var trolley = new vehicle("mx12", "rojo", "van", "10142MX");
console.log(trolley.light());
console.log(trolley.startup());
console.log(trolley.toturnoff());
var motorcycle = /** @class */ (function (_super) {
    __extends(motorcycle, _super);
    function motorcycle(capacidaddecarga, speed, brand, color, type, numerodeserie) {
        var _this = _super.call(this, brand, color, type, numerodeserie) || this;
        _this.capacidaddecarga = capacidaddecarga;
        _this.speed = speed;
        return _this;
    }
    motorcycle.prototype.brakemotorcycle = function () {
        return "frenar la moto";
    };
    motorcycle.prototype.beepmotorcycle = function () {
        return "la moto pito";
    };
    return motorcycle;
}(vehicle));
;
var suzuki = new motorcycle("setenta kilos", "100 k/m", "x12m", "azul", "sporty", "4632AX1");
console.log(suzuki.brakemotorcycle());
console.log(suzuki.beepmotorcycle());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(numerodeejes, capacidaddecarga, brand, color, type, numerodeserie) {
        var _this = _super.call(this, brand, color, type, numerodeserie) || this;
        _this.numerodeejes = numerodeejes;
        _this.capacidaddecarga = capacidaddecarga;
        return _this;
    }
    car.prototype.speedup = function () {
        return "el carro esta aselerando rum rum";
    };
    car.prototype.stop = function () {
        return "el carro esta detenido";
    };
    return car;
}(vehicle));
;
var toyota = new car("6 ejes", "30 toneladas", "kenworth", "black", "tractor", "7K8MX");
console.log(toyota.speedup());
console.log(toyota.stop());
