# @tairu/loader

Tairu loader, loading and verifying tiles served by a Tairu handler.

## Installation

```sh
npm install @tairu/loader
```

## Classes

### Loader

#### Constructors

##### new Loader(params)

> **new Loader**(`params`): [`Loader`](loader.md#loader)

###### Parameters

• **params**: [`LoaderParams`](loader.md#loaderparams)= `{}`

###### Returns

[`Loader`](loader.md#loader)

#### Accessors

##### signer

> **`get`** **signer**(): [`ActionSigner`](loader.md#actionsigner)

> **`set`** **signer**(`value`): `void`

###### Parameters

• **value**: [`ActionSigner`](loader.md#actionsigner)

###### Returns

[`ActionSigner`](loader.md#actionsigner)

#### Methods

##### getRenderedTile()

> **getRenderedTile**(`url`, `format`): `Promise`\<`string`\>

###### Parameters

• **url**: `string`

• **format**: [`RenderFormat`](loader.md#renderformat)

###### Returns

`Promise`\<`string`\>

##### getTile()

> **getTile**(`url`): `Promise`\<`Object`\>

###### Parameters

• **url**: `string`

###### Returns

`Promise`\<`Object`\>

> ###### props
>
> > **props**: `Object`
>
> ###### props.actions?
>
> > **`optional`** **actions**: (`Object` \| `Object` \| `Object`)[]
>
> ###### props.children?
>
> > **`optional`** **children**: `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\>[]
>
> ###### props.description?
>
> > **`optional`** **description**: `string`
>
> ###### props.input?
>
> > **`optional`** **input**: `Object` \| `Object`
>
> ###### props.key?
>
> > **`optional`** **key**: `string`
>
> ###### props.state?
>
> > **`optional`** **state**: `Record`\<`string`, `any`\>
>
> ###### props.style?
>
> > **`optional`** **style**: `Object`
>
> ###### props.style.alignItems?
>
> > **`optional`** **alignItems**: `"center"` \| `"flex-end"` \| `"flex-start"`
>
> ###### props.style.alignSelf?
>
> > **`optional`** **alignSelf**: `"center"` \| `"flex-end"` \| `"flex-start"` \| `"auto"`
>
> ###### props.style.backgroundClip?
>
> > **`optional`** **backgroundClip**: `"border-box"` \| `"text"`
>
> ###### props.style.backgroundColor?
>
> > **`optional`** **backgroundColor**: `string`
>
> ###### props.style.backgroundImage?
>
> > **`optional`** **backgroundImage**: `string`
>
> ###### props.style.backgroundPosition?
>
> > **`optional`** **backgroundPosition**: `string`
>
> ###### props.style.backgroundRepeat?
>
> > **`optional`** **backgroundRepeat**: `"no-repeat"` \| `"repeat"` \| `"repeat-x"` \| `"repeat-y"`
>
> ###### props.style.backgroundSize?
>
> > **`optional`** **backgroundSize**: `string`
>
> ###### props.style.borderBottomColor?
>
> > **`optional`** **borderBottomColor**: `string`
>
> ###### props.style.borderBottomLeftRadius?
>
> > **`optional`** **borderBottomLeftRadius**: `string` \| `number`
>
> ###### props.style.borderBottomRightRadius?
>
> > **`optional`** **borderBottomRightRadius**: `string` \| `number`
>
> ###### props.style.borderBottomStyle?
>
> > **`optional`** **borderBottomStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderBottomWidth?
>
> > **`optional`** **borderBottomWidth**: `number`
>
> ###### props.style.borderColor?
>
> > **`optional`** **borderColor**: `string`
>
> ###### props.style.borderLeftColor?
>
> > **`optional`** **borderLeftColor**: `string`
>
> ###### props.style.borderLeftStyle?
>
> > **`optional`** **borderLeftStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderLeftWidth?
>
> > **`optional`** **borderLeftWidth**: `number`
>
> ###### props.style.borderRadius?
>
> > **`optional`** **borderRadius**: `string` \| `number`
>
> ###### props.style.borderRightColor?
>
> > **`optional`** **borderRightColor**: `string`
>
> ###### props.style.borderRightStyle?
>
> > **`optional`** **borderRightStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderRightWidth?
>
> > **`optional`** **borderRightWidth**: `number`
>
> ###### props.style.borderStyle?
>
> > **`optional`** **borderStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderTopColor?
>
> > **`optional`** **borderTopColor**: `string`
>
> ###### props.style.borderTopLeftRadius?
>
> > **`optional`** **borderTopLeftRadius**: `string` \| `number`
>
> ###### props.style.borderTopRightRadius?
>
> > **`optional`** **borderTopRightRadius**: `string` \| `number`
>
> ###### props.style.borderTopStyle?
>
> > **`optional`** **borderTopStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderTopWidth?
>
> > **`optional`** **borderTopWidth**: `number`
>
> ###### props.style.borderWidth?
>
> > **`optional`** **borderWidth**: `number`
>
> ###### props.style.bottom?
>
> > **`optional`** **bottom**: `number`
>
> ###### props.style.boxShadow?
>
> > **`optional`** **boxShadow**: `string`
>
> ###### props.style.display?
>
> > **`optional`** **display**: `"none"` \| `"flex"`
>
> ###### props.style.flexBasis?
>
> > **`optional`** **flexBasis**: `number`
>
> ###### props.style.flexDirection?
>
> > **`optional`** **flexDirection**: `"column"` \| `"column-reverse"` \| `"row"` \| `"row-reverse"`
>
> ###### props.style.flexGrow?
>
> > **`optional`** **flexGrow**: `number`
>
> ###### props.style.flexShrink?
>
> > **`optional`** **flexShrink**: `number`
>
> ###### props.style.flexWrap?
>
> > **`optional`** **flexWrap**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`
>
> ###### props.style.gap?
>
> > **`optional`** **gap**: `number`
>
> ###### props.style.height?
>
> > **`optional`** **height**: `number`
>
> ###### props.style.justifyContent?
>
> > **`optional`** **justifyContent**: `"center"` \| `"flex-end"` \| `"flex-start"` \| `"space-around"` \| `"space-between"`
>
> ###### props.style.left?
>
> > **`optional`** **left**: `number`
>
> ###### props.style.margin?
>
> > **`optional`** **margin**: `number`
>
> ###### props.style.marginBottom?
>
> > **`optional`** **marginBottom**: `number`
>
> ###### props.style.marginLeft?
>
> > **`optional`** **marginLeft**: `number`
>
> ###### props.style.marginRight?
>
> > **`optional`** **marginRight**: `number`
>
> ###### props.style.marginTop?
>
> > **`optional`** **marginTop**: `number`
>
> ###### props.style.maxHeight?
>
> > **`optional`** **maxHeight**: `number`
>
> ###### props.style.maxWidth?
>
> > **`optional`** **maxWidth**: `number`
>
> ###### props.style.minHeight?
>
> > **`optional`** **minHeight**: `number`
>
> ###### props.style.minWidth?
>
> > **`optional`** **minWidth**: `number`
>
> ###### props.style.objectFit?
>
> > **`optional`** **objectFit**: `"none"` \| `"contain"` \| `"cover"`
>
> ###### props.style.opacity?
>
> > **`optional`** **opacity**: `number`
>
> ###### props.style.overflow?
>
> > **`optional`** **overflow**: `"hidden"` \| `"visible"`
>
> ###### props.style.padding?
>
> > **`optional`** **padding**: `number`
>
> ###### props.style.paddingBottom?
>
> > **`optional`** **paddingBottom**: `number`
>
> ###### props.style.paddingLeft?
>
> > **`optional`** **paddingLeft**: `number`
>
> ###### props.style.paddingRight?
>
> > **`optional`** **paddingRight**: `number`
>
> ###### props.style.paddingTop?
>
> > **`optional`** **paddingTop**: `number`
>
> ###### props.style.position?
>
> > **`optional`** **position**: `"absolute"` \| `"relative"`
>
> ###### props.style.right?
>
> > **`optional`** **right**: `number`
>
> ###### props.style.top?
>
> > **`optional`** **top**: `number`
>
> ###### props.style.width?
>
> > **`optional`** **width**: `number`
>
> ###### props.title
>
> > **title**: `string`
>
> ###### type
>
> > **type**: `"Tile"`
>
> ###### version
>
> > **version**: `"0.1"`
>

##### postAction()

> **postAction**(`url`, `action`, `useSigner`?): `Promise`\<`Object`\>

###### Parameters

• **url**: `string`

• **action**: `Object` \| `Object`

• **useSigner?**: [`ActionSigner`](loader.md#actionsigner)

###### Returns

`Promise`\<`Object`\>

> ###### props
>
> > **props**: `Object`
>
> ###### props.actions?
>
> > **`optional`** **actions**: (`Object` \| `Object` \| `Object`)[]
>
> ###### props.children?
>
> > **`optional`** **children**: `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\>[]
>
> ###### props.description?
>
> > **`optional`** **description**: `string`
>
> ###### props.input?
>
> > **`optional`** **input**: `Object` \| `Object`
>
> ###### props.key?
>
> > **`optional`** **key**: `string`
>
> ###### props.state?
>
> > **`optional`** **state**: `Record`\<`string`, `any`\>
>
> ###### props.style?
>
> > **`optional`** **style**: `Object`
>
> ###### props.style.alignItems?
>
> > **`optional`** **alignItems**: `"center"` \| `"flex-end"` \| `"flex-start"`
>
> ###### props.style.alignSelf?
>
> > **`optional`** **alignSelf**: `"center"` \| `"flex-end"` \| `"flex-start"` \| `"auto"`
>
> ###### props.style.backgroundClip?
>
> > **`optional`** **backgroundClip**: `"border-box"` \| `"text"`
>
> ###### props.style.backgroundColor?
>
> > **`optional`** **backgroundColor**: `string`
>
> ###### props.style.backgroundImage?
>
> > **`optional`** **backgroundImage**: `string`
>
> ###### props.style.backgroundPosition?
>
> > **`optional`** **backgroundPosition**: `string`
>
> ###### props.style.backgroundRepeat?
>
> > **`optional`** **backgroundRepeat**: `"no-repeat"` \| `"repeat"` \| `"repeat-x"` \| `"repeat-y"`
>
> ###### props.style.backgroundSize?
>
> > **`optional`** **backgroundSize**: `string`
>
> ###### props.style.borderBottomColor?
>
> > **`optional`** **borderBottomColor**: `string`
>
> ###### props.style.borderBottomLeftRadius?
>
> > **`optional`** **borderBottomLeftRadius**: `string` \| `number`
>
> ###### props.style.borderBottomRightRadius?
>
> > **`optional`** **borderBottomRightRadius**: `string` \| `number`
>
> ###### props.style.borderBottomStyle?
>
> > **`optional`** **borderBottomStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderBottomWidth?
>
> > **`optional`** **borderBottomWidth**: `number`
>
> ###### props.style.borderColor?
>
> > **`optional`** **borderColor**: `string`
>
> ###### props.style.borderLeftColor?
>
> > **`optional`** **borderLeftColor**: `string`
>
> ###### props.style.borderLeftStyle?
>
> > **`optional`** **borderLeftStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderLeftWidth?
>
> > **`optional`** **borderLeftWidth**: `number`
>
> ###### props.style.borderRadius?
>
> > **`optional`** **borderRadius**: `string` \| `number`
>
> ###### props.style.borderRightColor?
>
> > **`optional`** **borderRightColor**: `string`
>
> ###### props.style.borderRightStyle?
>
> > **`optional`** **borderRightStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderRightWidth?
>
> > **`optional`** **borderRightWidth**: `number`
>
> ###### props.style.borderStyle?
>
> > **`optional`** **borderStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderTopColor?
>
> > **`optional`** **borderTopColor**: `string`
>
> ###### props.style.borderTopLeftRadius?
>
> > **`optional`** **borderTopLeftRadius**: `string` \| `number`
>
> ###### props.style.borderTopRightRadius?
>
> > **`optional`** **borderTopRightRadius**: `string` \| `number`
>
> ###### props.style.borderTopStyle?
>
> > **`optional`** **borderTopStyle**: `"dashed"` \| `"solid"`
>
> ###### props.style.borderTopWidth?
>
> > **`optional`** **borderTopWidth**: `number`
>
> ###### props.style.borderWidth?
>
> > **`optional`** **borderWidth**: `number`
>
> ###### props.style.bottom?
>
> > **`optional`** **bottom**: `number`
>
> ###### props.style.boxShadow?
>
> > **`optional`** **boxShadow**: `string`
>
> ###### props.style.display?
>
> > **`optional`** **display**: `"none"` \| `"flex"`
>
> ###### props.style.flexBasis?
>
> > **`optional`** **flexBasis**: `number`
>
> ###### props.style.flexDirection?
>
> > **`optional`** **flexDirection**: `"column"` \| `"column-reverse"` \| `"row"` \| `"row-reverse"`
>
> ###### props.style.flexGrow?
>
> > **`optional`** **flexGrow**: `number`
>
> ###### props.style.flexShrink?
>
> > **`optional`** **flexShrink**: `number`
>
> ###### props.style.flexWrap?
>
> > **`optional`** **flexWrap**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`
>
> ###### props.style.gap?
>
> > **`optional`** **gap**: `number`
>
> ###### props.style.height?
>
> > **`optional`** **height**: `number`
>
> ###### props.style.justifyContent?
>
> > **`optional`** **justifyContent**: `"center"` \| `"flex-end"` \| `"flex-start"` \| `"space-around"` \| `"space-between"`
>
> ###### props.style.left?
>
> > **`optional`** **left**: `number`
>
> ###### props.style.margin?
>
> > **`optional`** **margin**: `number`
>
> ###### props.style.marginBottom?
>
> > **`optional`** **marginBottom**: `number`
>
> ###### props.style.marginLeft?
>
> > **`optional`** **marginLeft**: `number`
>
> ###### props.style.marginRight?
>
> > **`optional`** **marginRight**: `number`
>
> ###### props.style.marginTop?
>
> > **`optional`** **marginTop**: `number`
>
> ###### props.style.maxHeight?
>
> > **`optional`** **maxHeight**: `number`
>
> ###### props.style.maxWidth?
>
> > **`optional`** **maxWidth**: `number`
>
> ###### props.style.minHeight?
>
> > **`optional`** **minHeight**: `number`
>
> ###### props.style.minWidth?
>
> > **`optional`** **minWidth**: `number`
>
> ###### props.style.objectFit?
>
> > **`optional`** **objectFit**: `"none"` \| `"contain"` \| `"cover"`
>
> ###### props.style.opacity?
>
> > **`optional`** **opacity**: `number`
>
> ###### props.style.overflow?
>
> > **`optional`** **overflow**: `"hidden"` \| `"visible"`
>
> ###### props.style.padding?
>
> > **`optional`** **padding**: `number`
>
> ###### props.style.paddingBottom?
>
> > **`optional`** **paddingBottom**: `number`
>
> ###### props.style.paddingLeft?
>
> > **`optional`** **paddingLeft**: `number`
>
> ###### props.style.paddingRight?
>
> > **`optional`** **paddingRight**: `number`
>
> ###### props.style.paddingTop?
>
> > **`optional`** **paddingTop**: `number`
>
> ###### props.style.position?
>
> > **`optional`** **position**: `"absolute"` \| `"relative"`
>
> ###### props.style.right?
>
> > **`optional`** **right**: `number`
>
> ###### props.style.top?
>
> > **`optional`** **top**: `number`
>
> ###### props.style.width?
>
> > **`optional`** **width**: `number`
>
> ###### props.title
>
> > **title**: `string`
>
> ###### type
>
> > **type**: `"Tile"`
>
> ###### version
>
> > **version**: `"0.1"`
>

## Type Aliases

### ActionSigner

> **ActionSigner**: `DIDSigner` \| `Promise`\<`DIDSigner`\>

***

### LoaderParams

> **LoaderParams**: `Object`

#### Type declaration

##### signer?

> **`optional`** **signer**: [`ActionSigner`](loader.md#actionsigner)

***

### PostActionParams

> **PostActionParams**: `Object`

#### Type declaration

##### action

> **action**: `PostActionV0`

##### signer

> **signer**: [`ActionSigner`](loader.md#actionsigner)

##### url

> **url**: `string`

***

### RenderFormat

> **RenderFormat**: `"html"` \| `"html-embed"` \| `"svg"`

## Functions

### getTile()

> **getTile**(`url`): `Promise`\<`TileV0`\>

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<`TileV0`\>

***

### postAction()

> **postAction**(`params`): `Promise`\<`TileV0`\>

#### Parameters

• **params**: [`PostActionParams`](loader.md#postactionparams)

#### Returns

`Promise`\<`TileV0`\>
