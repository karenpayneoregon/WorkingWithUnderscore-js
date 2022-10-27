# About

Experimenting with JetBrains [WebStorm](https://www.jetbrains.com/webstorm/) and [Underscore.js](https://underscorejs.org/#)

![](assets/kendo.png)

```javascript
<script type="text/javascript">

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


</script>
```