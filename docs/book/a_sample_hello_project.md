# A Sample Hello Project

## Template Structure

```
assets/
  styles.css
index.html.handlebars
{{greeting}}.html.handlebars
```

## Template Files

assets/styles.css:

```css
.greeting {
  font-size: 200%;
}
```

index.html.handlebars:

```html
<html>
  <body>
    <a href="./{{greeting}}.html">:)</a>
  </body>
</html>
```

{{greeting}}.html.handlebars:

```html
<html>
  <head>
		<link rel="stylesheet" href="./assets/styles.css" type="text/css" />
  </head>
  <body>
    <p class="greeting">{{greeting}}!</p>
  </body>
</html>
```

## Rendering the Template with the repoplate Command

```sh
repoplate /path/to/template /path/to/outdir '{"greeting": "hello"}'
```

## Output Structure

```
assets/
  styles.css
index.html
hello.html
```

## Output Files

assets/styles.css:

```css
.greeting {
  font-size: 200%;
}
```

index.html:

```html
<html>
  <body>
    <a href="./hello.html">:)</a>
  </body>
</html>
```

hello.html:

```html
<html>
  <head>
		<link rel="stylesheet" href="./assets/styles.css" type="text/css" />
  </head>
  <body>
    <p class="greeting">hello!</p>
  </body>
</html>
```

