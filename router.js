var home = require('./app/controllers/home');
app.get('/', home.index);
app.get('/about', home.about);
app.get('/manage', home.checkLogin, home.manage);
app.get('/login', home.loginView);
app.get('/logout', home.checkLogin, home.logout);
app.post('/login', home.login);
app.get('/google-auth', home.checkPwd, home.googleAuthView);
app.post('/google-auth', home.checkPwd, home.googleAuth);

var blog = require('./app/controllers/blog');
app.get('/blog', blog.blogPerpage);
app.get('/getBlogPerpage', blog.getBlogPerpage);
app.get('/blog/:id', blog.perBlog);
app.get('/post', home.checkLogin, blog.postView);
app.post('/post', home.checkLogin, blog.post);
app.post('/postimg', home.checkLogin, blog.postImg);
app.get('/editblog/:id', home.checkLogin, blog.editBlogView);
app.post('/editblog/:id', home.checkLogin, blog.editBlog);
app.get('/view', blog.viewIndex);
app.get('/deleteblog', home.checkLogin, blog.deleteBlog);