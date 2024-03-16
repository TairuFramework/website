# @tairu/react-dom

React DOM client for Tairu tiles.

## Installation

```sh
npm install @tairu/react-dom
```

## Type Aliases

### CreateRendererParams

> **CreateRendererParams**: `Partial`\<`RendererParams`\<`ReactNode`, `ReactNode`, `RenderContext`\>\>

***

### ReactRenderer

> **ReactRenderer**: `Renderer`\<`ReactNode`, `ReactNode`, `RenderContext`\>

***

### TileProps

> **TileProps**: `Object`

#### Type declaration

##### renderError?

> **`optional`** **renderError**: (`error`) => `ReactNode`

###### Parameters

• **error**: `Error`

###### Returns

`ReactNode`

##### renderer?

> **`optional`** **renderer**: [`ReactRenderer`](react-dom.md#reactrenderer)

##### url

> **url**: `string`

## Functions

### Tile()

> **Tile**(`props`): `Element`

#### Parameters

• **props**: [`TileProps`](react-dom.md#tileprops)

#### Returns

`Element`

***

### createRenderer()

> **createRenderer**(`params`): [`ReactRenderer`](react-dom.md#reactrenderer)

#### Parameters

• **params**: `Partial`\<`RendererParams`\<`ReactNode`, `ReactNode`, `RenderContext`\>\>= `{}`

#### Returns

[`ReactRenderer`](react-dom.md#reactrenderer)
