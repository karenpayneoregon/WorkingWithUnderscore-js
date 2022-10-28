# About

Experimenting with JetBrains [WebStorm](https://www.jetbrains.com/webstorm/)  

[Underscore.js](https://underscorejs.org/#) 

Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects.


![](assets/kendo2.png)

```javascript
$('#btnMax').click(function (event) {
    const numbers = [100, 50, 400, 66, 7900];
    kendoConsole.log("Max " + _.max(numbers));
});

$('#btnPluck').click(function (event) {
    _.each(_.pluck(employeesCollection, "name"), function (element, index, list) {
        const output = index + ' ' + element;
        kendoConsole.log(output);
    })
});

$('#btnFilter').click(function (event) {
    _.each(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), function (element, index) {
        const output = index + ' ' + element;
        kendoConsole.log(output);
});
    
$('#btnSome').click(function (event) {

    let hasDesignation = function (value) {
        return (value.designation === 'SSE');
    };

    let result = _.some(employeesCollection, hasDesignation) === true ? 'Yes' : 'No';
    kendoConsole.log('<span class="text-danger">employeesCollection</span> has at least one SSE ' + result );

});


$('#btnGetSalary').click(function (event) {

    let hasDesignation = function (value) {
        return (value.designation === 'SSE');
    };

    let person = _.get(employeesCollection[0], 'name');
    let salary = _.get(employeesCollection[0], 'salary');


    kendoConsole.log('<span class="fw-bold">' + person + '</span> makes ' + formatter.format(salary));

});

$('#btnClearConsole').click(function (event) {
    document.getElementById('kpConsole').innerHTML = '';
});


```


![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)