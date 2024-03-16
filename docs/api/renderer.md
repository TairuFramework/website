# @tairu/renderer

Renderer for tiles implementing the Tairu protocol.

## Installation

```sh
npm install @tairu/renderer
```

## Classes

### Renderer\<CreatedElement, RenderedOutput, RenderExtraArg\>

#### Type parameters

• **CreatedElement**

• **RenderedOutput**

• **RenderExtraArg** = `void`

#### Constructors

##### new Renderer(params)

> **new Renderer**\<`CreatedElement`, `RenderedOutput`, `RenderExtraArg`\>(`params`): [`Renderer`](renderer.md#renderercreatedelementrenderedoutputrenderextraarg)\<`CreatedElement`, `RenderedOutput`, `RenderExtraArg`\>

###### Parameters

• **params**: [`RendererParams`](renderer.md#rendererparamscreatedelementrenderedoutputrenderextraarg)\<`CreatedElement`, `RenderedOutput`, `RenderExtraArg`\>

###### Returns

[`Renderer`](renderer.md#renderercreatedelementrenderedoutputrenderextraarg)\<`CreatedElement`, `RenderedOutput`, `RenderExtraArg`\>

#### Methods

##### createBoxChildren()

> **createBoxChildren**(`children`?, `key`?): [`ElementChildren`](renderer.md#elementchildrencreatedelement)\<`CreatedElement`\>

###### Parameters

• **children?**: `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\>[]

• **key?**: `string`

###### Returns

[`ElementChildren`](renderer.md#elementchildrencreatedelement)\<`CreatedElement`\>

##### createElement()

> **createElement**(`el`, `key`?): `CreatedElement`

###### Parameters

• **el**: `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\>

• **key?**: `string`

###### Returns

`CreatedElement`

##### createTextChildren()

> **createTextChildren**(`children`?): [`ElementChildren`](renderer.md#elementchildrencreatedelement)\<`CreatedElement`\>

###### Parameters

• **children?**: `string` \| `number` \| `boolean` \| `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\> \| (`string` \| `number` \| `boolean` \| `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\>)[]

###### Returns

[`ElementChildren`](renderer.md#elementchildrencreatedelement)\<`CreatedElement`\>

##### render()

> **render**(`tile`, `extra`): `RenderedOutput`

###### Parameters

• **tile**

• **tile\.props**

• **tile\.props\.actions?**: (`Object` \| `Object` \| `Object`)[]

• **tile\.props\.children?**: `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`Object`, `ZodTypeAny`, `"passthrough"`\>[]

• **tile\.props\.description?**: `string`

• **tile\.props\.input?**: `Object` \| `Object`

• **tile\.props\.key?**: `string`

• **tile\.props\.state?**: `Record`\<`string`, `any`\>

• **tile\.props\.style?**

• **tile\.props\.style\.alignItems?**: `"center"` \| `"flex-end"` \| `"flex-start"`

• **tile\.props\.style\.alignSelf?**: `"center"` \| `"flex-end"` \| `"flex-start"` \| `"auto"`

• **tile\.props\.style\.backgroundClip?**: `"border-box"` \| `"text"`

• **tile\.props\.style\.backgroundColor?**: `string`

• **tile\.props\.style\.backgroundImage?**: `string`

• **tile\.props\.style\.backgroundPosition?**: `string`

• **tile\.props\.style\.backgroundRepeat?**: `"no-repeat"` \| `"repeat"` \| `"repeat-x"` \| `"repeat-y"`

• **tile\.props\.style\.backgroundSize?**: `string`

• **tile\.props\.style\.borderBottomColor?**: `string`

• **tile\.props\.style\.borderBottomLeftRadius?**: `string` \| `number`

• **tile\.props\.style\.borderBottomRightRadius?**: `string` \| `number`

• **tile\.props\.style\.borderBottomStyle?**: `"dashed"` \| `"solid"`

• **tile\.props\.style\.borderBottomWidth?**: `number`

• **tile\.props\.style\.borderColor?**: `string`

• **tile\.props\.style\.borderLeftColor?**: `string`

• **tile\.props\.style\.borderLeftStyle?**: `"dashed"` \| `"solid"`

• **tile\.props\.style\.borderLeftWidth?**: `number`

• **tile\.props\.style\.borderRadius?**: `string` \| `number`

• **tile\.props\.style\.borderRightColor?**: `string`

• **tile\.props\.style\.borderRightStyle?**: `"dashed"` \| `"solid"`

• **tile\.props\.style\.borderRightWidth?**: `number`

• **tile\.props\.style\.borderStyle?**: `"dashed"` \| `"solid"`

• **tile\.props\.style\.borderTopColor?**: `string`

• **tile\.props\.style\.borderTopLeftRadius?**: `string` \| `number`

• **tile\.props\.style\.borderTopRightRadius?**: `string` \| `number`

• **tile\.props\.style\.borderTopStyle?**: `"dashed"` \| `"solid"`

• **tile\.props\.style\.borderTopWidth?**: `number`

• **tile\.props\.style\.borderWidth?**: `number`

• **tile\.props\.style\.bottom?**: `number`

• **tile\.props\.style\.boxShadow?**: `string`

• **tile\.props\.style\.display?**: `"none"` \| `"flex"`

• **tile\.props\.style\.flexBasis?**: `number`

• **tile\.props\.style\.flexDirection?**: `"column"` \| `"column-reverse"` \| `"row"` \| `"row-reverse"`

• **tile\.props\.style\.flexGrow?**: `number`

• **tile\.props\.style\.flexShrink?**: `number`

• **tile\.props\.style\.flexWrap?**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

• **tile\.props\.style\.gap?**: `number`

• **tile\.props\.style\.height?**: `number`

• **tile\.props\.style\.justifyContent?**: `"center"` \| `"flex-end"` \| `"flex-start"` \| `"space-around"` \| `"space-between"`

• **tile\.props\.style\.left?**: `number`

• **tile\.props\.style\.margin?**: `number`

• **tile\.props\.style\.marginBottom?**: `number`

• **tile\.props\.style\.marginLeft?**: `number`

• **tile\.props\.style\.marginRight?**: `number`

• **tile\.props\.style\.marginTop?**: `number`

• **tile\.props\.style\.maxHeight?**: `number`

• **tile\.props\.style\.maxWidth?**: `number`

• **tile\.props\.style\.minHeight?**: `number`

• **tile\.props\.style\.minWidth?**: `number`

• **tile\.props\.style\.objectFit?**: `"none"` \| `"contain"` \| `"cover"`

• **tile\.props\.style\.opacity?**: `number`

• **tile\.props\.style\.overflow?**: `"hidden"` \| `"visible"`

• **tile\.props\.style\.padding?**: `number`

• **tile\.props\.style\.paddingBottom?**: `number`

• **tile\.props\.style\.paddingLeft?**: `number`

• **tile\.props\.style\.paddingRight?**: `number`

• **tile\.props\.style\.paddingTop?**: `number`

• **tile\.props\.style\.position?**: `"absolute"` \| `"relative"`

• **tile\.props\.style\.right?**: `number`

• **tile\.props\.style\.top?**: `number`

• **tile\.props\.style\.width?**: `number`

• **tile\.props\.title**: `string`

• **tile\.type**: `"Tile"`

• **tile\.version**: `"0.1"`

• **extra**: `RenderExtraArg`

###### Returns

`RenderedOutput`

## Type Aliases

### CreateBoxHandler\<CreatedElement\>

> **CreateBoxHandler**\<`CreatedElement`\>: (`props`, `children`) => `CreatedElement`

#### Type parameters

• **CreatedElement**

#### Parameters

• **props**: `BoxPropsV0`

• **children**: [`ElementChildren`](renderer.md#elementchildrencreatedelement)\<`CreatedElement`\>

#### Returns

`CreatedElement`

***

### CreateElementHandler\<Type, CreatedElement\>

> **CreateElementHandler**\<`Type`, `CreatedElement`\>: (`type`, `props`, `children`?) => `CreatedElement`

#### Type parameters

• **Type**

• **CreatedElement**

#### Parameters

• **type**: `Type`

• **props**: `Record`\<`string`, `unknown`\>

• **children?**: [`ElementChildren`](renderer.md#elementchildrencreatedelement)\<`CreatedElement`\>

#### Returns

`CreatedElement`

***

### CreateImageHandler\<CreatedElement\>

> **CreateImageHandler**\<`CreatedElement`\>: (`props`) => `CreatedElement`

#### Type parameters

• **CreatedElement**

#### Parameters

• **props**: `ImagePropsV0`

#### Returns

`CreatedElement`

***

### CreateTextHandler\<CreatedElement\>

> **CreateTextHandler**\<`CreatedElement`\>: (`props`, `children`) => `CreatedElement`

#### Type parameters

• **CreatedElement**

#### Parameters

• **props**: `TextPropsV0`

• **children**: [`ElementChildren`](renderer.md#elementchildrencreatedelement)\<`CreatedElement`\>

#### Returns

`CreatedElement`

***

### ElementChild\<CreatedElement\>

> **ElementChild**\<`CreatedElement`\>: `null` \| `ValueV0` \| `CreatedElement`

#### Type parameters

• **CreatedElement**

***

### ElementChildren\<CreatedElement\>

> **ElementChildren**\<`CreatedElement`\>: [`ElementChild`](renderer.md#elementchildcreatedelement)\<`CreatedElement`\> \| [`ElementChild`](renderer.md#elementchildcreatedelement)\<`CreatedElement`\>[]

#### Type parameters

• **CreatedElement**

***

### RenderTileHandler\<CreatedElement, RenderedOutput, ExtraArg\>

> **RenderTileHandler**\<`CreatedElement`, `RenderedOutput`, `ExtraArg`\>: (`tile`, `children`, `extra`) => `RenderedOutput`

#### Type parameters

• **CreatedElement**

• **RenderedOutput**

• **ExtraArg** = `void`

#### Parameters

• **tile**: `TileV0`

• **children**: [`ElementChildren`](renderer.md#elementchildrencreatedelement)\<`CreatedElement`\>

• **extra**: `ExtraArg`

#### Returns

`RenderedOutput`

***

### RendererParams\<CreatedElement, RenderedOutput, RenderExtraArg\>

> **RendererParams**\<`CreatedElement`, `RenderedOutput`, `RenderExtraArg`\>: `Object`

#### Type parameters

• **CreatedElement**

• **RenderedOutput**

• **RenderExtraArg** = `void`

#### Type declaration

##### createBox

> **createBox**: [`CreateBoxHandler`](renderer.md#createboxhandlercreatedelement)\<`CreatedElement`\>

##### createImage

> **createImage**: [`CreateImageHandler`](renderer.md#createimagehandlercreatedelement)\<`CreatedElement`\>

##### createText

> **createText**: [`CreateTextHandler`](renderer.md#createtexthandlercreatedelement)\<`CreatedElement`\>

##### renderTile

> **renderTile**: [`RenderTileHandler`](renderer.md#rendertilehandlercreatedelementrenderedoutputextraarg)\<`CreatedElement`, `RenderedOutput`, `RenderExtraArg`\>
