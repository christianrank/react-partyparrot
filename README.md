# ![](parrots/parrot.gif) react-partyparrot ![](parrots/rightparrot.gif)

[![](https://git.bitrain.co/christianrank/react-partyparrot/badges/master/build.svg)](https://git.bitrain.co/christianrank/react-partyparrot)

## ![](/parrots/rotatingparrot.gif) Installation
Install the package `react-partyparrot` with your favorite package manager.

## ![](/parrots/fixparrot.gif) Configuration
You need to make the parrot gifs publicly accessible. There are the following options to do that:

- symlink or copy the folder `node_modules/react-partyparrot/parrots` manually to your public directory
- or better: Use [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) to copy the files at build time

The component expects the gif to be accessible in `/parrots`, but you can change that.
```js
import { setPublicParrotPath } from 'react-partyparrot'

setPublicParrotPath('/your/custom/parrot/path')
```

## ![](/parrots/dealwithitnowparrot.gif) Usage
Import the parrot component
```js
import Parrot from 'react-partyparrot'
```
And use it in your app
```jsx
<Parrot />
```

## ![](/parrots/confusedparrot.gif) Props

| Name | Type   | Required | Default | Description                                         |
| ---- | ------ | -------- | ------- | --------------------------------------------------- |
| name | string | no       | ''      | Name of the parrot. Omit to get the default parrot. |
| hd   | bool   | no       | false   | Get HD version of the parrot.                       |

## ![](/parrots/opensourceparrot.gif) License

[View the license file](LICENSE)
