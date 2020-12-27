## ds-section-scroll
<img src="https://badgen.net/npm/v/ds-section-scroll"/><img src="https://badgen.net/npm/dw/ds-section-scroll"/></br>
ds-section-scroll - lightweight and easy to use javascript section fullpage scroll

### Demo
<a href="https://shkredovdmitriy.github.io/ds-section-scroll/" target="_blank">github.io</a> <a href="https://codepen.io/shkredovdmitriy/pen/NWRaRwq" target="_blank">codepen.io</a> 

### Advantages
- Easy to use
- Has no dependencies </br>
- Small size (less than 5kb min+gzip)

### How to use in older browsers
For older browsers please use <a href="https://www.npmjs.com/package/promise-polyfill" target="_blank">promise-polyfill</a>

### Use without installation
Add this line to head
```
<link href="https://unpkg.com/ds-section-scroll/dist/ds-section-scroll.min.css" rel="stylesheet">
```
Add this line to the bottom of the body
```
<script src="https://unpkg.com/ds-section-scroll/dist/ds-section-scroll.min.js"></script>
```

### Simple working example
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <link href="https://unpkg.com/ds-section-scroll/dist/ds-section-scroll.min.css" rel="stylesheet">
</head>
<body>
  <div class="ds-section-scroll-container">
    <div class="ds-section-scroll-item" style="background-color: rgb(38, 68, 138);"></div>
    <div class="ds-section-scroll-item" style="background-color: rgb(136, 11, 11);"></div>
    <div class="ds-section-scroll-item" style="background-color: rgb(11, 117, 11);"></div>
    <div class="ds-section-scroll-item" style="background-color: rgb(104, 8, 90);"></div>
  </div>  
  <script src="https://unpkg.com/ds-section-scroll/dist/ds-section-scroll.min.js"></script>
</body>
</html>
```

### License
MIT License