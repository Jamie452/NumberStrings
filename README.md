NumberStrings.js
================

A simple Javascript class that formats numeric values into a more readable format.

By default it will format up to a `septillion (1,000,000,000,000,000,000,000,000)`, however you can pass your own list of `units` to the constructor if you would like to overwrite/extend the default list of units (more on that below).

If you have any ideas;

- for new features
- to improve performance

please let me know by creating an issue/pull request!


Basic Usage:
------------

```js
var ns = new NumberStrings();
console.log('1,000 = ' + ns.format(1000)); // outputs: "1,000 = 1 thousand"
console.log('50,000,000 = ' + ns.format(50000000)); // outputs: "50,000,000 = 50 million"
console.log('999,999,999 = ' + ns.format(999999999)); // outputs: "999,999,999 = 999.999999 million"
```




Advanced Usage:
------------
The below methods are useful if you want to further format the decimal or unit name that is returned before they are concatinated into a string (default behavior of `ns.format(integer)`).


getName(integer):
------------

```js
var ns = new NumberStrings();
ns.getName(1000); // Returns the string "thousand"
```


getDecimal(integer):
------------

```js
var ns = new NumberStrings();
ns.getDecimal(1000); // Returns the decimal that goes in front of the unit name, in this case: 1
```


Overwritting/extending the list of units:
-----------------------------------------
To overwrite/extend the default list of units, you can pass the below `units` option to the `NumberStrings()` constructor.
The `value` is the lowest number that can possibly be counted as the specified unit `name`.

```js
var ns = new NumberStrings({
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
            }
            ...
        ]
    });
```
