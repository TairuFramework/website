# @tairu/testing

Tairu testing library, providing utilities to test tile handlers.

## Installation

```sh
npm install @tairu/testing
```

## Classes

### TestAgent

#### Extends

- `Loader`

#### Constructors

##### new TestAgent(handlers, signer)

> **new TestAgent**(`handlers`, `signer`?): [`TestAgent`](testing.md#testagent)

###### Parameters

• **handlers**: `TileHandlers`

• **signer?**: `DIDSigner`

###### Returns

[`TestAgent`](testing.md#testagent)

###### Overrides

`Loader.constructor`

#### Accessors

##### signer

> **`get`** **signer**(): `ActionSigner`

> **`set`** **signer**(`value`): `void`

###### Parameters

• **value**: `ActionSigner`

###### Returns

`ActionSigner`

#### Methods

##### getRenderedTile()

> **getRenderedTile**(`path`, `format`): `Promise`\<`string`\>

###### Parameters

• **path**: `string`

• **format**: `RenderFormat`

###### Returns

`Promise`\<`string`\>

###### Overrides

`Loader.getRenderedTile`

##### getTile()

> **getTile**(`path`): `Promise`\<`Object`\>

###### Parameters

• **path**: `string`= `'/'`

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

###### Overrides

`Loader.getTile`

##### postAction()

> **postAction**(`path`, `action`, `useSigner`?): `Promise`\<`Object`\>

###### Parameters

• **path**: `string`

• **action**: `Object` \| `Object`

• **useSigner?**: `DIDSigner`

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

###### Overrides

`Loader.postAction`

##### sign()

> **sign**(`payload`, `useSigner`?): `Promise`\<`Object`\>

###### Parameters

• **payload**: `Record`\<`string`, `unknown`\>

• **useSigner?**: `DIDSigner`

###### Returns

`Promise`\<`Object`\>

> ###### payload
>
> > **payload**: `string`
>
> ###### signatures
>
> > **signatures**: `Object`[]
>

##### create()

> **`static`** **create**(`handlers`, `signer`?): [`TestAgent`](testing.md#testagent)

###### Parameters

• **handlers**: `TileHandlers`

• **signer?**: `DIDSigner`

###### Returns

[`TestAgent`](testing.md#testagent)

***

### TestDIDSigner

#### Implements

- `DIDSigner`

#### Constructors

##### new TestDIDSigner(did)

> **new TestDIDSigner**(`did`): [`TestDIDSigner`](testing.md#testdidsigner)

###### Parameters

• **did**: `DID`

###### Returns

[`TestDIDSigner`](testing.md#testdidsigner)

#### Accessors

##### id

> **`get`** **id**(): `string`

###### Returns

`string`

#### Methods

##### sign()

> **sign**\<`T`\>(`payload`): `Promise`\<`Object`\>

###### Type parameters

• **T** extends `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

###### Parameters

• **payload**: `T`

###### Returns

`Promise`\<`Object`\>

> ###### payload
>
> > **payload**: `string`
>
> ###### signatures
>
> > **signatures**: `Object`[]
>

###### Implementation of

`DIDSigner.sign`

##### get()

> **`static`** **get**(): `Promise`\<`DIDSigner`\>

###### Returns

`Promise`\<`DIDSigner`\>

##### reset()

> **`static`** **reset**(`privateKey`?): `Promise`\<`DIDSigner`\>

###### Parameters

• **privateKey?**: `Uint8Array`

###### Returns

`Promise`\<`DIDSigner`\>

##### set()

> **`static`** **set**(`privateKey`): `Promise`\<`DIDSigner`\>

###### Parameters

• **privateKey**: `Uint8Array`

###### Returns

`Promise`\<`DIDSigner`\>

##### sign()

> **`static`** **sign**\<`T`\>(`payload`): `Promise`\<`Object`\>

###### Type parameters

• **T** extends `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

###### Parameters

• **payload**: `T`

###### Returns

`Promise`\<`Object`\>

> ###### payload
>
> > **payload**: `string`
>
> ###### signatures
>
> > **signatures**: `Object`[]
>

## Functions

### generatePrivateKey()

> **generatePrivateKey**(): `Uint8Array`

#### Returns

`Uint8Array`
