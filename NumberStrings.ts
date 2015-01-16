/**
 * Name:        NumberStrings.js
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

        // Iterate through and decide if we're using the default or the users input
        this.options = options || {};
        for (var opt in default_options) {
            if (default_options.hasOwnProperty(opt) && !this.options.hasOwnProperty(opt)) {
                this.options[opt] = default_options[opt];
            }
        }

        // Put units in their own variable, just to make later code a little more readable
        this.units = this.options.units;

    }

    // Returns the appropriate unit object, depending on the number provided
    getUnit(number){
        var unit = null;
        for (var i = 0; i < this.units.length; i++){
            if (number < this.units[i].value){
                break;
            }
            if (number >= this.units[i].value){
                unit = this.units[i];
            }
        }
        return unit;
    }

    // Returns the name of the unit that is most appropriate for the number provided
    getName(number){
        var unit = this.getUnit(number);
        if (unit){
            return unit.name;
        }else{
            return null;
        }
    }

    // Returns the "decimal" (for lack of a better word) that goes in front of the
    // unit name, for the number provided
    getDecimal(number){
        var unit = this.getUnit(number);
        if (unit){
            return parseFloat(number / unit.value);
        }else{
            return number;
        }
    }

    // Returns a string in the format of: {{decimal}} {{unitname}}, for the number provided
    format(number){
        var unit = this.getUnit(number);
        if (unit){
            return this.getDecimal(number) + ' ' + this.getName(number);
        }else{
            return number;
        }
    }

}

if (typeof exports !== 'undefined' && this.exports !== exports) {
    module.exports =  NumberStrings;
}