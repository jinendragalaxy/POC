# project-2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


async addImage() {
      const url = 'https://placecats.com/millie/300/150'

      try {
        const img = await new Promise((resolve, reject) => {
          fabric.Image.fromURL(
            url,
            (image) => image ? resolve(image)
              : reject(new Error('callback returned null')),
            { crossOrigin: 'anonymous' }
          )
        })

        img.set({ left: 0, top: 0, scaleX: 1, scaleY: 1 })
        this.fab.add(img)
        this.fab.requestRenderAll()


        console.log('objects on canvas:', this.fab.getObjects())

      } catch (err) {
        console.error('Image load failed:', err)
      }
    },