const employeesCollection = [
    {"id": 1, "name": "Karen", "designation": "SE", "salary": 25000},
    {"id": 2, "name": "Joe", "designation": "SSE", "salary": 35000},
    {"id": 3, "name": "Mary", "designation": "Manager", "salary": 45000},
    {"id": 4, "name": "Frank", "designation": "Accountant", "salary": 30000},
    {"id": 5, "name": "Anne", "designation": "SSE", "salary": 35000}
];

$(document).ready(function () {



    $('#btnMax').click(function (event) {
        const numbers = [100, 50, 400, 66, 7900];
        kendoConsole.log("Max " + _.max(numbers));
    });

    $('#btnPluck').click(function (event) {
        _.each(_.pluck(employeesCollection, "name"), function (element, index) {
            const output = index + ' ' + element;
            kendoConsole.log(output);
        });
    });

    $('#btnFilter').click(function (event) {
        _.each(_.filter([1, 2, 3, 4, 5, 6], function (num) {
            return num % 2 === 0; }), function (element, index) {
            const output = index + ' ' + element;
            kendoConsole.log(output);
        });
    });

    $('#btnSort').click(function (event) {
        const ordered = _.sortBy(employeesCollection, 'name');
        /*
         * ordered works fine but kendoConsole adds them in reverse order
         * so we clone/reverse the collection then we are good to go.
         */
        _.each(_.clone(ordered).reverse(), function (v, i) {
            kendoConsole.log(`<span class="text-primary fw-bold">${v.name}`) + '</span>';
        });
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


    /*
    * Format object as USD currency
    * */
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
});