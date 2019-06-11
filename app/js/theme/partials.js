// $(document).ready(function() {
//     var defaultSource = $("#boiler").html();
//     var indexSource = $("#index").html();
//
//     Handlebars.registerPartial('boiler', defaultSource);
//
//     Handlebars.registerHelper('include', function(source) {
//         return new Handlebars.SafeString(source);
//     });
//
//     var template = Handlebars.compile(indexSource);
//
//     var context = {
//         "address" : "410 S. Gibbons <br>",
//         "mylogo" : "TF Terry Fadz",
//
//         "boilercopy" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//
//         "footer": "<footer>&copy; 2019 Handlebars</footer>"
//     };
//     var html = template(context);
//     $("#main").html(html);
// });