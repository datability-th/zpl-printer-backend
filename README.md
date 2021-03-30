# zpl-printer-backend

## How to run

```bash
node app.js
```

## Installation

### Dependency

```bash
"node": v15.11.0
"npm": 7.6.0
"yarn": 1.22.5
```

Note: If you have problem about `Printer Package`

```
npm install printer --target_arch=ia32
npm install printer --target_arch=x64
```

more detail - https://www.npmjs.com/package/printer


## How to install dep of Printer
#### if you cannot install priner package !!!
```bash
npm uninstall printer
```

https://github.com/tojocky/node-printer/issues/302
```bash
npm config ls -l
npm config set legacy-peer-deps=true
npm config get legacy-peer-deps
```

```bash
npm install printer --build-from-source
```

Administrator: Windows PowerShell
-----------------------------------
npm install --global --production windows-build-tools
https://gitter.im/tojocky/node-printer?at=59a2ba0a66c1c7c477e77a3c