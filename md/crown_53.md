# First One

![](https://i.imgur.com/oJ4f9YA.png)
**index.ejs**
```html
<body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <h3>My name is <%=name%></h3>
    <h3>My ID is <%= id %></h3>
  </body>
```
**index.js**
```js
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,name:'Zachary',id:'204410053'});
});
```