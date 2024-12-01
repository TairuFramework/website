# @tairu/react

React client for Tairu tiles.

## Installation

```sh
npm install @tairu/react
```

## Type Aliases

### LoadErrorProps

> **LoadErrorProps**: `object`

#### Type declaration

##### error

> **error**: `Error`

##### retry()

> **retry**: () => `void`

###### Returns

`void`

***

### LoadingProps

> **LoadingProps**: `object`

#### Type declaration

##### renderer

> **renderer**: [`ReactRenderer`](index.md#reactrenderer)

***

### PostErrorProps

> **PostErrorProps**: `object`

#### Type declaration

##### element

> **element**: `ReactNode`

##### error

> **error**: `Error`

##### loadedTile

> **loadedTile**: [`TileV0`](../protocol/index.md#tilev0)

***

### PostingProps

> **PostingProps**: `object`

#### Type declaration

##### element

> **element**: `ReactNode`

##### loadedTile

> **loadedTile**: [`TileV0`](../protocol/index.md#tilev0)

***

### ReactRenderer

> **ReactRenderer**: [`Renderer`](../renderer/index.md#rendererelementtype)\<`ReactNode`\>

***

### TileRendererProps

> **TileRendererProps**: [`UseTileElementParams`](index.md#usetileelementparams) & `object`

#### Type declaration

##### renderLoadError()

> **renderLoadError**: (`props`) => `ReactNode`

###### Parameters

###### props

[`LoadErrorProps`](index.md#loaderrorprops)

###### Returns

`ReactNode`

##### renderLoading()?

> `optional` **renderLoading**: (`props`) => `ReactNode`

###### Parameters

###### props

[`LoadingProps`](index.md#loadingprops)

###### Returns

`ReactNode`

##### renderPostError()?

> `optional` **renderPostError**: (`props`) => `ReactNode`

###### Parameters

###### props

[`PostErrorProps`](index.md#posterrorprops)

###### Returns

`ReactNode`

##### renderPosting()?

> `optional` **renderPosting**: (`props`) => `ReactNode`

###### Parameters

###### props

[`PostingProps`](index.md#postingprops)

###### Returns

`ReactNode`

***

### UseActionHandlerParams

> **UseActionHandlerParams**: `object`

#### Type declaration

##### handleOpenURI()

> **handleOpenURI**: (`uri`) => `void`

###### Parameters

###### uri

`string`

###### Returns

`void`

##### postAction

> **postAction**: [`PostActionHandler`](../protocol/index.md#postactionhandler)

##### signer

> **signer**: `ActionSigner`

***

### UseTile

> **UseTile**: `object`

#### Type declaration

##### isLoading

> **isLoading**: `boolean`

##### isPosting

> **isPosting**: `boolean`

##### loadError?

> `optional` **loadError**: `Error`

##### postAction

> **postAction**: [`PostActionHandler`](../protocol/index.md#postactionhandler)

##### postError?

> `optional` **postError**: `Error`

##### retryLoading()

> **retryLoading**: () => `void`

###### Returns

`void`

##### tile?

> `optional` **tile**: [`TileV0`](../protocol/index.md#tilev0)

***

### UseTileElement

> **UseTileElement**: `object`

#### Type declaration

##### element

> **element**: `ReactNode`

##### isLoading

> **isLoading**: `boolean`

##### isPosting

> **isPosting**: `boolean`

##### loadError?

> `optional` **loadError**: `Error`

##### postError?

> `optional` **postError**: `Error`

##### retryLoading()

> **retryLoading**: () => `void`

###### Returns

`void`

##### tile?

> `optional` **tile**: [`TileV0`](../protocol/index.md#tilev0)

***

### UseTileElementParams

> **UseTileElementParams**: `object`

#### Type declaration

##### handleOpenURI()

> **handleOpenURI**: (`uri`) => `void`

###### Parameters

###### uri

`string`

###### Returns

`void`

##### onLoadError()?

> `optional` **onLoadError**: (`error`) => `void`

###### Parameters

###### error

`Error`

###### Returns

`void`

##### onPostError()?

> `optional` **onPostError**: (`error`) => `void`

###### Parameters

###### error

`Error`

###### Returns

`void`

##### onTileChanged()?

> `optional` **onTileChanged**: (`tile`) => `void`

###### Parameters

###### tile

[`TileV0`](../protocol/index.md#tilev0)

###### Returns

`void`

##### onTileLoaded()?

> `optional` **onTileLoaded**: (`tile`) => `void`

###### Parameters

###### tile

[`TileV0`](../protocol/index.md#tilev0)

###### Returns

`void`

##### options?

> `optional` **options**: `LoaderOptions`

##### renderer

> **renderer**: [`ReactRenderer`](index.md#reactrenderer)

##### signer

> **signer**: `ActionSigner`

##### url

> **url**: `string`

***

### UseTileParams

> **UseTileParams**: `object`

#### Type declaration

##### loader?

> `optional` **loader**: `Loader`

##### options?

> `optional` **options**: `LoaderOptions`

##### signer?

> `optional` **signer**: `ActionSigner`

##### url

> **url**: `string`

## Functions

### TileRenderer()

> **TileRenderer**(`props`): `ReactNode`

#### Parameters

##### props

[`TileRendererProps`](index.md#tilerendererprops)

#### Returns

`ReactNode`

***

### useActionHandler()

> **useActionHandler**(`params`): [`ActionHandler`](../react-dom/react-dom/index.md#actionhandler)

#### Parameters

##### params

[`UseActionHandlerParams`](index.md#useactionhandlerparams)

#### Returns

[`ActionHandler`](../react-dom/react-dom/index.md#actionhandler)

***

### useTile()

> **useTile**(`params`): [`UseTile`](index.md#usetile)

#### Parameters

##### params

[`UseTileParams`](index.md#usetileparams)

#### Returns

[`UseTile`](index.md#usetile)

***

### useTileElement()

> **useTileElement**(`params`): [`UseTileElement`](index.md#usetileelement)

#### Parameters

##### params

[`UseTileElementParams`](index.md#usetileelementparams)

#### Returns

[`UseTileElement`](index.md#usetileelement)
