# @tairu/react

React client for Tairu tiles.

## Installation

```sh
npm install @tairu/react
```

## Type Aliases

### RenderContext

> **RenderContext**: `Object`

#### Type declaration

##### isPosting

> **isPosting**: `boolean`

##### postAction

> **postAction**: `PostActionHandler`

##### postError?

> **`optional`** **postError**: `Error`

***

### TileRendererProps

> **TileRendererProps**: [`UseTileElementParams`](react.md#usetileelementparams) & `Object`

#### Type declaration

##### renderError

> **renderError**: (`error`) => `ReactNode`

###### Parameters

• **error**: `Error`

###### Returns

`ReactNode`

##### renderLoading?

> **`optional`** **renderLoading**: () => `ReactNode`

###### Returns

`ReactNode`

***

### UseTile

> **UseTile**: `Object`

#### Type declaration

##### isLoading

> **isLoading**: `boolean`

##### isPosting

> **isPosting**: `boolean`

##### loadError?

> **`optional`** **loadError**: `Error`

##### postAction

> **postAction**: `PostActionHandler`

##### postError?

> **`optional`** **postError**: `Error`

##### tile?

> **`optional`** **tile**: `TileV0`

***

### UseTileElement

> **UseTileElement**: `Object`

#### Type declaration

##### element

> **element**: `ReactNode`

##### error?

> **`optional`** **error**: `Error`

##### isLoading

> **isLoading**: `boolean`

***

### UseTileElementParams

> **UseTileElementParams**: `Object`

#### Type declaration

##### renderer

> **renderer**: `Renderer`\<`ReactNode`, `ReactNode`, [`RenderContext`](react.md#rendercontext)\>

##### signer

> **signer**: `ActionSigner`

##### url

> **url**: `string`

***

### UseTileParams

> **UseTileParams**: `Object`

#### Type declaration

##### loader?

> **`optional`** **loader**: `Loader`

##### signer?

> **`optional`** **signer**: `ActionSigner`

##### url

> **url**: `string`

## Functions

### TileRenderer()

> **TileRenderer**(`props`): `ReactNode`

#### Parameters

• **props**: [`TileRendererProps`](react.md#tilerendererprops)

#### Returns

`ReactNode`

***

### useTile()

> **useTile**(`params`): [`UseTile`](react.md#usetile)

#### Parameters

• **params**: [`UseTileParams`](react.md#usetileparams)

#### Returns

[`UseTile`](react.md#usetile)

***

### useTileElement()

> **useTileElement**(`params`): [`UseTileElement`](react.md#usetileelement)

#### Parameters

• **params**: [`UseTileElementParams`](react.md#usetileelementparams)

#### Returns

[`UseTileElement`](react.md#usetileelement)
