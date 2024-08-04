# react-native

React Native client for Tairu tiles.

## Installation

```sh
npm install @tairu/react-native
```

## Classes

### ReactNativeRenderer

#### Extends

- `Renderer`\<`ReactNode`\>

#### Constructors

##### new ReactNativeRenderer()

> **new ReactNativeRenderer**(): [`ReactNativeRenderer`](index.md#reactnativerenderer)

###### Returns

[`ReactNativeRenderer`](index.md#reactnativerenderer)

###### Inherited from

`Renderer<ReactNode>.constructor`

#### Methods

##### createBox()

> **createBox**(`__namedParameters`, `children`): `Element`

###### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.children?**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>[]

• **\_\_namedParameters.key?**: `string`

• **\_\_namedParameters.style?**

• **\_\_namedParameters.style.alignItems?**: `"flex-start"` \| `"center"` \| `"flex-end"`

• **\_\_namedParameters.style.alignSelf?**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

• **\_\_namedParameters.style.backgroundClip?**: `"text"` \| `"border-box"`

• **\_\_namedParameters.style.backgroundColor?**: `string`

• **\_\_namedParameters.style.backgroundImage?**: `string`

• **\_\_namedParameters.style.backgroundPosition?**: `string`

• **\_\_namedParameters.style.backgroundRepeat?**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

• **\_\_namedParameters.style.backgroundSize?**: `string`

• **\_\_namedParameters.style.borderBottomColor?**: `string`

• **\_\_namedParameters.style.borderBottomLeftRadius?**: `number`

• **\_\_namedParameters.style.borderBottomRightRadius?**: `number`

• **\_\_namedParameters.style.borderBottomStyle?**: `"solid"` \| `"dashed"`

• **\_\_namedParameters.style.borderBottomWidth?**: `number`

• **\_\_namedParameters.style.borderColor?**: `string`

• **\_\_namedParameters.style.borderLeftColor?**: `string`

• **\_\_namedParameters.style.borderLeftStyle?**: `"solid"` \| `"dashed"`

• **\_\_namedParameters.style.borderLeftWidth?**: `number`

• **\_\_namedParameters.style.borderRadius?**: `number`

• **\_\_namedParameters.style.borderRightColor?**: `string`

• **\_\_namedParameters.style.borderRightStyle?**: `"solid"` \| `"dashed"`

• **\_\_namedParameters.style.borderRightWidth?**: `number`

• **\_\_namedParameters.style.borderStyle?**: `"solid"` \| `"dashed"`

• **\_\_namedParameters.style.borderTopColor?**: `string`

• **\_\_namedParameters.style.borderTopLeftRadius?**: `number`

• **\_\_namedParameters.style.borderTopRightRadius?**: `number`

• **\_\_namedParameters.style.borderTopStyle?**: `"solid"` \| `"dashed"`

• **\_\_namedParameters.style.borderTopWidth?**: `number`

• **\_\_namedParameters.style.borderWidth?**: `number`

• **\_\_namedParameters.style.bottom?**: `number`

• **\_\_namedParameters.style.boxShadow?**: `string`

• **\_\_namedParameters.style.display?**: `"flex"` \| `"none"`

• **\_\_namedParameters.style.flexBasis?**: `number`

• **\_\_namedParameters.style.flexDirection?**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

• **\_\_namedParameters.style.flexGrow?**: `number`

• **\_\_namedParameters.style.flexShrink?**: `number`

• **\_\_namedParameters.style.flexWrap?**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

• **\_\_namedParameters.style.gap?**: `number`

• **\_\_namedParameters.style.height?**: `number`

• **\_\_namedParameters.style.justifyContent?**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

• **\_\_namedParameters.style.left?**: `number`

• **\_\_namedParameters.style.margin?**: `number`

• **\_\_namedParameters.style.marginBottom?**: `number`

• **\_\_namedParameters.style.marginLeft?**: `number`

• **\_\_namedParameters.style.marginRight?**: `number`

• **\_\_namedParameters.style.marginTop?**: `number`

• **\_\_namedParameters.style.maxHeight?**: `number`

• **\_\_namedParameters.style.maxWidth?**: `number`

• **\_\_namedParameters.style.minHeight?**: `number`

• **\_\_namedParameters.style.minWidth?**: `number`

• **\_\_namedParameters.style.objectFit?**: `"none"` \| `"contain"` \| `"cover"`

• **\_\_namedParameters.style.opacity?**: `number`

• **\_\_namedParameters.style.overflow?**: `"visible"` \| `"hidden"`

• **\_\_namedParameters.style.padding?**: `number`

• **\_\_namedParameters.style.paddingBottom?**: `number`

• **\_\_namedParameters.style.paddingLeft?**: `number`

• **\_\_namedParameters.style.paddingRight?**: `number`

• **\_\_namedParameters.style.paddingTop?**: `number`

• **\_\_namedParameters.style.position?**: `"relative"` \| `"absolute"`

• **\_\_namedParameters.style.right?**: `number`

• **\_\_namedParameters.style.top?**: `number`

• **\_\_namedParameters.style.width?**: `number`

• **children**: `Children`

###### Returns

`Element`

###### Overrides

`Renderer.createBox`

***

##### createBoxChildren()

> **createBoxChildren**(`children`?, `key`?): `ElementChildren`\<`ReactNode`\>

###### Parameters

• **children?**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>[]

• **key?**: `string`

###### Returns

`ElementChildren`\<`ReactNode`\>

###### Inherited from

`Renderer.createBoxChildren`

***

##### createElement()

> **createElement**(`el`, `key`?): `ReactNode`

###### Parameters

• **el**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>

• **key?**: `string`

###### Returns

`ReactNode`

###### Inherited from

`Renderer.createElement`

***

##### createImage()

> **createImage**(`__namedParameters`): `ReactNode`

###### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.alt**: `string`

• **\_\_namedParameters.height**: `number`

• **\_\_namedParameters.key?**: `string`

• **\_\_namedParameters.src**: `string`

• **\_\_namedParameters.width**: `number`

###### Returns

`ReactNode`

###### Overrides

`Renderer.createImage`

***

##### createText()

> **createText**(`__namedParameters`, `children`): `Element`

###### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.children**: `string` \| `number` \| `boolean` \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| (`string` \| `number` \| `boolean` \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>)[]

• **\_\_namedParameters.key?**: `string`

• **\_\_namedParameters.style?**

• **\_\_namedParameters.style.color?**: `string`

• **\_\_namedParameters.style.fontFamily?**: `string`

• **\_\_namedParameters.style.fontSize?**: `number`

• **\_\_namedParameters.style.fontStyle?**: `"normal"` \| `"italic"`

• **\_\_namedParameters.style.fontWeight?**: `"bold"` \| `"normal"` \| `"black"` \| `"medium"` \| `"thin"` \| `"100"` \| `"200"` \| `"300"` \| `"400"` \| `"500"` \| `"600"` \| `"700"` \| `"800"` \| `"900"` \| `"ultralight"` \| `"light"` \| `"regular"` \| `"semibold"` \| `"condensedBold"` \| `"condensed"` \| `"heavy"`

• **\_\_namedParameters.style.letterSpacing?**: `number`

• **\_\_namedParameters.style.lineHeight?**: `number`

• **\_\_namedParameters.style.textAlign?**: `"center"` \| `"left"` \| `"right"` \| `"justify"`

• **\_\_namedParameters.style.textDecoration?**: `string`

• **\_\_namedParameters.style.textOverflow?**: `"clip"` \| `"ellipsis"`

• **\_\_namedParameters.style.textShadow?**: `string`

• **\_\_namedParameters.style.textTransform?**: `"none"` \| `"capitalize"` \| `"lowercase"` \| `"uppercase"`

• **\_\_namedParameters.style.textWrap?**: `"wrap"` \| `"balance"`

• **\_\_namedParameters.style.whiteSpace?**: `"nowrap"` \| `"normal"` \| `"pre"` \| `"pre-line"` \| `"pre-wrap"`

• **\_\_namedParameters.style.wordBreak?**: `"normal"` \| `"break-all"` \| `"break-word"` \| `"keep-all"`

• **children**: `Children`

###### Returns

`Element`

###### Overrides

`Renderer.createText`

***

##### createTextChildren()

> **createTextChildren**(`children`?): `ElementChildren`\<`ReactNode`\>

###### Parameters

• **children?**: `string` \| `number` \| `boolean` \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| (`string` \| `number` \| `boolean` \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>)[]

###### Returns

`ElementChildren`\<`ReactNode`\>

###### Inherited from

`Renderer.createTextChildren`

***

##### render()

> **render**(`props`): `ReactNode`

###### Parameters

• **props**: `RenderProps`

###### Returns

`ReactNode`

###### Inherited from

`Renderer.render`

***

##### renderInteractions()

> **renderInteractions**(`props`): `ReactNode`

###### Parameters

• **props**: `RenderInteractionsProps`

###### Returns

`ReactNode`

###### Overrides

`Renderer.renderInteractions`

***

##### renderTile()

> **renderTile**(`props`): `ReactNode`

###### Parameters

• **props**: `RenderTileProps`\<`ReactNode`\>

###### Returns

`ReactNode`

###### Inherited from

`Renderer.renderTile`

## Type Aliases

### TileProps

> **TileProps**: `Omit`\<`TileRendererProps`, `"handleOpenURI"` \| `"renderLoadError"` \| `"renderer"`\> & `object`

#### Type declaration

##### renderLoadError()?

> `optional` **renderLoadError**: (`props`) => `ReactNode`

###### Parameters

• **props**: `LoadErrorProps`

###### Returns

`ReactNode`

##### renderer?

> `optional` **renderer**: `ReactRenderer`

## Functions

### Tile()

> **Tile**(`props`): `Element`

#### Parameters

• **props**: [`TileProps`](index.md#tileprops)

#### Returns

`Element`

***

### createSigner()

> **createSigner**(): `Promise`\<`KeySigner`\>

#### Returns

`Promise`\<`KeySigner`\>

***

### deleteAccount()

> **deleteAccount**(`did`): `Promise`\<`void`\>

#### Parameters

• **did**: `string`

#### Returns

`Promise`\<`void`\>

***

### getPrivateKey()

> **getPrivateKey**(`did`): `Promise`\<`Uint8Array` \| `null`\>

#### Parameters

• **did**: `string`

#### Returns

`Promise`\<`Uint8Array` \| `null`\>

***

### getSigner()

> **getSigner**(`did`): `Promise`\<`KeySigner` \| `null`\>

#### Parameters

• **did**: `string`

#### Returns

`Promise`\<`KeySigner` \| `null`\>

***

### savePrivateKey()

> **savePrivateKey**(`did`, `privateKey`): `Promise`\<`void`\>

#### Parameters

• **did**: `string`

• **privateKey**: `Uint8Array`

#### Returns

`Promise`\<`void`\>
