# @tairu/handler

Tairu handler, handling HTTP requests to serve tiles.

## Installation

```sh
npm install @tairu/handler
```

## Classes

### Tairu

#### Constructors

##### new Tairu(options)

> **new Tairu**(`options`): [`Tairu`](handler.md#tairu)

###### Parameters

• **options**: [`TairuOptions`](handler.md#tairuoptions)= `{}`

###### Returns

[`Tairu`](handler.md#tairu)

#### Accessors

##### app

> **`get`** **app**(): `App`

###### Returns

`App`

##### handler

> **`get`** **handler**(): `EventHandler`\<`EventHandlerRequest`, `any`\>

###### Returns

`EventHandler`\<`EventHandlerRequest`, `any`\>

##### nodeListener

> **`get`** **nodeListener**(): [`NodeListener`](handler.md#nodelistener-1)

###### Returns

[`NodeListener`](handler.md#nodelistener-1)

#### Methods

##### addHandler()

> **addHandler**\<`Params`\>(`path`, `handler`): `void`

###### Type parameters

• **Params** extends `ParamsRecord` = `ParamsRecord`

###### Parameters

• **path**: `string`

• **handler**: [`TileHandler`](handler.md#tilehandlerparams)\<`Params`\>

###### Returns

`void`

##### render()

> **render**(`event`, `tile`): `Promise`\<`Response`\>

###### Parameters

• **event**: `H3Event`\<`EventHandlerRequest`\>

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

###### Returns

`Promise`\<`Response`\>

## Type Aliases

### BoxProps

> **BoxProps**: `Object`

#### Type declaration

##### children?

> **`optional`** **children**: `ReactNode`

##### style?

> **`optional`** **style**: `BoxStyleV0`

***

### ImageProps

> **ImageProps**: `Object`

#### Type declaration

##### alt

> **alt**: `string`

##### src

> **src**: `string`

***

### NodeListener

> **NodeListener**: (`req`, `res`) => `void`

#### Parameters

• **req**: `IncomingMessage`

• **res**: `ServerResponse`

#### Returns

`void`

***

### TairuOptions

> **TairuOptions**: `Object`

#### Type declaration

##### runtimeScriptURL?

> **`optional`** **runtimeScriptURL**: `string`

##### urlPrefix?

> **`optional`** **urlPrefix**: `string`

***

### TextProps

> **TextProps**: `Object`

#### Type declaration

##### children

> **children**: `ReactNode`

##### style?

> **`optional`** **style**: `TextStyleV0`

***

### TileHandler\<Params\>

> **TileHandler**\<`Params`\>: (`request`) => `Tile` \| `TileElement` \| `Promise`\<`Tile` \| `TileElement`\>

#### Type parameters

• **Params** extends `ParamsRecord` = `ParamsRecord`

#### Parameters

• **request**: [`TileRequest`](handler.md#tilerequestparams)\<`Params`\>

#### Returns

`Tile` \| `TileElement` \| `Promise`\<`Tile` \| `TileElement`\>

***

### TileHandlers

> **TileHandlers**: [`TileHandler`](handler.md#tilehandlerparams) \| `Record`\<`string`, [`TileHandler`](handler.md#tilehandlerparams)\>

***

### TileProps

> **TileProps**: [`BoxProps`](handler.md#boxprops) & `TileInteractiveV0` & `TileMetaV0`

***

### TileRequest\<Params\>

> **TileRequest**\<`Params`\>: `Object`

#### Type parameters

• **Params** extends `ParamsRecord` = `ParamsRecord`

#### Type declaration

##### action

> **action**: `VerifiedAction` \| `null`

##### params

> **params**: `Params`

## Functions

### Box()

> **Box**(`props`): `DOMElement`

#### Parameters

• **props**: [`BoxProps`](handler.md#boxprops)

#### Returns

`DOMElement`

***

### Image()

> **Image**(`props`): `ReactElement`

#### Parameters

• **props**: [`ImageProps`](handler.md#imageprops)

#### Returns

`ReactElement`

***

### Text()

> **Text**(`props`): `DOMElement`

#### Parameters

• **props**: [`TextProps`](handler.md#textprops)

#### Returns

`DOMElement`

***

### Tile()

> **Tile**(`props`): `DOMElement`

#### Parameters

• **props**: [`TileProps`](handler.md#tileprops)

#### Returns

`DOMElement`

***

### handle()

> **handle**(`handlers`, `options`?): `EventHandler`

#### Parameters

• **handlers**: [`TileHandlers`](handler.md#tilehandlers)

• **options?**: [`TairuOptions`](handler.md#tairuoptions)

#### Returns

`EventHandler`

***

### tairu()

> **tairu**(`handlers`, `options`?): [`Tairu`](handler.md#tairu)

#### Parameters

• **handlers**: [`TileHandlers`](handler.md#tilehandlers)

• **options?**: [`TairuOptions`](handler.md#tairuoptions)

#### Returns

[`Tairu`](handler.md#tairu)
