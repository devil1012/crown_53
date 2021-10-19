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
![](https://i.imgur.com/5zOge3o.png)
![](https://i.imgur.com/p07i3Os.png)
![](https://i.imgur.com/jOtS2HW.png)
![](https://i.imgur.com/OEKYWwA.png)
![](https://i.imgur.com/5PzX5H8.png)
