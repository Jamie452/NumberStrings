/**
 * Author:      Jamie Street
 * Website:     http://jamie.st
 */

class NumberStrings {

    private units;

    constructor (private options){

        // Declare the default options
        var default_options = {
            units: [
                {
                    name: 'hundred',
                    value: 100
                },
                {
                    name: 'thousand',
                    value: 1000
                },
                {
                    name: 'million',
                    value: 1000000
                },
                {
                    name: 'billion',
                    value: 1000000000
                },
                {
                    name: 'trillion',
                    value: 1000000000000
                },
                {
                    name: 'quadrillion',
                    value: 1000000000000000
                },
                {
                    name: 'quintillion',
                    value: 1000000000000000000
                },
                {
                    name: 'sextillion',
                    value: 1000000000000000000000
                },
                {
                    name: 'septillion',
                    value: 1000000000000000000000000
                }
            ]
        };

        // Iterate through and decide if we're using the default of the users input
        this.options = options || {};
        for (var opt in default_options) {
            if (default_options.hasOwnProperty(opt) && !this.options.hasOwnProperty(opt)) {
                this.options[opt] = default_options[opt];
            }
        }

        this.units = this.options.units;

    }

    getUnit(number){
        var unit = null;
        for (var i = 0; i < this.units.length; i++){
            //console.log('Iteration... ' + (i+1));
            if (number < this.units[i].value){
                //console.log('Breaking...');
                break;
            }
            if (number >= this.units[i].value){
                unit = this.units[i];
            }
        }
        return unit;
    }

    getName(number){
        var unit = this.getUnit(number);
        if (unit){
            return unit.name;
        }else{
            return null;
        }
    }

    getDecimal(number){
        var unit = this.getUnit(number);
        if (unit){
            return parseFloat(number / unit.value);
        }else{
            return number;
        }
    }

    format(number){
        var unit = this.getUnit(number);
        if (unit){
            return this.getDecimal(number) + ' ' + this.getName(number);
        }else{
            return number;
        }
    }

}