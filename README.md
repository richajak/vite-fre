# vite-fre

This is my take to create a template for FRE. I am inspired by WMR Preact that impressed me when it was launched several months ago. That's said, WMR is pretty much tied up with Preact, not usable with other framework as of now. I chose Vite as it's comparable to WMR.

In this template, I only use FRE library, nothing else, no dev dependency either (babel, webpack, etc). The size of 'node_modules' is very small, less than 100kb, compared to React CRA that can be more than 100 MB. Note that I am installing VITE as a global package, saving lots of space if we have multiple projects.

Steps    
1. `npm install`   
2. `vite`  

Note: `npm install -g vite` installing VITE as global package, just need to do once.      
