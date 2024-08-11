# @tairu/json-handler

Tairu JSON handler, handling HTTP requests to serve JSON tiles only.

## Installation

```sh
npm install @tairu/json-handler
```

## Classes

### Tairu\<ResultType, Context\>

#### Type Parameters

• **ResultType** = [`Tile`](../protocol/index.md#tile)

• **Context** = [`TileRequestContext`](index.md#tilerequestcontext)

#### Constructors

##### new Tairu()

> **new Tairu**\<`ResultType`, `Context`\>(`options`): [`Tairu`](index.md#tairuresulttype-context)\<`ResultType`, `Context`\>

###### Parameters

• **options**: [`TairuOptions`](index.md#tairuoptions) = `{}`

###### Returns

[`Tairu`](index.md#tairuresulttype-context)\<`ResultType`, `Context`\>

#### Accessors

##### app

> `get` **app**(): `App`

###### Returns

`App`

###### Defined in

***

##### handler

> `get` **handler**(): [`TairuHandler`](index.md#tairuhandler)

###### Returns

[`TairuHandler`](index.md#tairuhandler)

###### Defined in

***

##### nodeListener

> `get` **nodeListener**(): [`NodeListener`](index.md#nodelistener-1)

###### Returns

[`NodeListener`](index.md#nodelistener-1)

###### Defined in

***

##### plainHandler

> `get` **plainHandler**(): `PlainHandler`

###### Returns

`PlainHandler`

###### Defined in

***

##### urlPrefix

> `get` **urlPrefix**(): `string`

###### Returns

`string`

###### Defined in

#### Methods

##### addHandler()

> **addHandler**\<`PathParams`, `SearchParams`\>(`path`, `handler`): `void`

###### Type Parameters

• **PathParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **SearchParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

###### Parameters

• **path**: `string`

• **handler**: [`TileHandler`](index.md#tilehandlerpathparams-searchparams-resulttype-context)\<`PathParams`, `SearchParams`, `ResultType`, `Context`\>

###### Returns

`void`

***

##### executeHandler()

> **executeHandler**\<`PathParams`, `SearchParams`\>(`handler`, `event`): `Promise`\<`ResultType`\>

###### Type Parameters

• **PathParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **SearchParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

###### Parameters

• **handler**: [`TileHandler`](index.md#tilehandlerpathparams-searchparams-resulttype-context)\<`PathParams`, `SearchParams`, `ResultType`, `Context`\>

• **event**: [`TairuEvent`](index.md#tairuevent)

###### Returns

`Promise`\<`ResultType`\>

***

##### parseHandlerResult()

> **parseHandlerResult**(`result`): `object`

###### Parameters

• **result**: `ResultType`

###### Returns

`object`

###### props

> `readonly` **props**: `object`

###### props.actions?

> `readonly` `optional` **props.actions**: (`object` \| `object` \| `object`)[]

###### props.children?

> `readonly` `optional` **props.children**: `object` & `object` \| `object` & `object`[]

###### props.description?

> `readonly` `optional` **props.description**: `string`

###### props.input?

> `readonly` `optional` **props.input**: `object` \| `object`

###### props.key?

> `readonly` `optional` **props.key**: `string`

###### props.style?

> `readonly` `optional` **props.style**: `object`

###### props.style.alignItems?

> `optional` **props.style.alignItems**: `"flex-start"` \| `"center"` \| `"flex-end"`

###### props.style.alignSelf?

> `optional` **props.style.alignSelf**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

###### props.style.backgroundClip?

> `optional` **props.style.backgroundClip**: `"text"` \| `"border-box"`

###### props.style.backgroundColor?

> `optional` **props.style.backgroundColor**: `string`

###### props.style.backgroundImage?

> `optional` **props.style.backgroundImage**: `string`

###### props.style.backgroundPosition?

> `optional` **props.style.backgroundPosition**: `string`

###### props.style.backgroundRepeat?

> `optional` **props.style.backgroundRepeat**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

###### props.style.backgroundSize?

> `optional` **props.style.backgroundSize**: `string`

###### props.style.borderBottomColor?

> `optional` **props.style.borderBottomColor**: `string`

###### props.style.borderBottomLeftRadius?

> `optional` **props.style.borderBottomLeftRadius**: `number`

###### props.style.borderBottomRightRadius?

> `optional` **props.style.borderBottomRightRadius**: `number`

###### props.style.borderBottomStyle?

> `optional` **props.style.borderBottomStyle**: `"solid"` \| `"dashed"`

###### props.style.borderBottomWidth?

> `optional` **props.style.borderBottomWidth**: `number`

###### props.style.borderColor?

> `optional` **props.style.borderColor**: `string`

###### props.style.borderLeftColor?

> `optional` **props.style.borderLeftColor**: `string`

###### props.style.borderLeftStyle?

> `optional` **props.style.borderLeftStyle**: `"solid"` \| `"dashed"`

###### props.style.borderLeftWidth?

> `optional` **props.style.borderLeftWidth**: `number`

###### props.style.borderRadius?

> `optional` **props.style.borderRadius**: `number`

###### props.style.borderRightColor?

> `optional` **props.style.borderRightColor**: `string`

###### props.style.borderRightStyle?

> `optional` **props.style.borderRightStyle**: `"solid"` \| `"dashed"`

###### props.style.borderRightWidth?

> `optional` **props.style.borderRightWidth**: `number`

###### props.style.borderStyle?

> `optional` **props.style.borderStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopColor?

> `optional` **props.style.borderTopColor**: `string`

###### props.style.borderTopLeftRadius?

> `optional` **props.style.borderTopLeftRadius**: `number`

###### props.style.borderTopRightRadius?

> `optional` **props.style.borderTopRightRadius**: `number`

###### props.style.borderTopStyle?

> `optional` **props.style.borderTopStyle**: `"solid"` \| `"dashed"`

###### props.style.borderTopWidth?

> `optional` **props.style.borderTopWidth**: `number`

###### props.style.borderWidth?

> `optional` **props.style.borderWidth**: `number`

###### props.style.bottom?

> `optional` **props.style.bottom**: `number`

###### props.style.boxShadow?

> `optional` **props.style.boxShadow**: `string`

###### props.style.display?

> `optional` **props.style.display**: `"flex"` \| `"none"`

###### props.style.flexBasis?

> `optional` **props.style.flexBasis**: `number`

###### props.style.flexDirection?

> `optional` **props.style.flexDirection**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

###### props.style.flexGrow?

> `optional` **props.style.flexGrow**: `number`

###### props.style.flexShrink?

> `optional` **props.style.flexShrink**: `number`

###### props.style.flexWrap?

> `optional` **props.style.flexWrap**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

###### props.style.gap?

> `optional` **props.style.gap**: `number`

###### props.style.height?

> `optional` **props.style.height**: `number`

###### props.style.justifyContent?

> `optional` **props.style.justifyContent**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

###### props.style.left?

> `optional` **props.style.left**: `number`

###### props.style.margin?

> `optional` **props.style.margin**: `number`

###### props.style.marginBottom?

> `optional` **props.style.marginBottom**: `number`

###### props.style.marginLeft?

> `optional` **props.style.marginLeft**: `number`

###### props.style.marginRight?

> `optional` **props.style.marginRight**: `number`

###### props.style.marginTop?

> `optional` **props.style.marginTop**: `number`

###### props.style.maxHeight?

> `optional` **props.style.maxHeight**: `number`

###### props.style.maxWidth?

> `optional` **props.style.maxWidth**: `number`

###### props.style.minHeight?

> `optional` **props.style.minHeight**: `number`

###### props.style.minWidth?

> `optional` **props.style.minWidth**: `number`

###### props.style.objectFit?

> `optional` **props.style.objectFit**: `"none"` \| `"contain"` \| `"cover"`

###### props.style.opacity?

> `optional` **props.style.opacity**: `number`

###### props.style.overflow?

> `optional` **props.style.overflow**: `"visible"` \| `"hidden"`

###### props.style.padding?

> `optional` **props.style.padding**: `number`

###### props.style.paddingBottom?

> `optional` **props.style.paddingBottom**: `number`

###### props.style.paddingLeft?

> `optional` **props.style.paddingLeft**: `number`

###### props.style.paddingRight?

> `optional` **props.style.paddingRight**: `number`

###### props.style.paddingTop?

> `optional` **props.style.paddingTop**: `number`

###### props.style.position?

> `optional` **props.style.position**: `"relative"` \| `"absolute"`

###### props.style.right?

> `optional` **props.style.right**: `number`

###### props.style.top?

> `optional` **props.style.top**: `number`

###### props.style.width?

> `optional` **props.style.width**: `number`

###### props.title

> `readonly` **props.title**: `string`

###### type

> `readonly` **type**: `"Tile"`

###### version

> `readonly` **version**: `"0.1"`

***

##### render()

> **render**(`event`, `tile`): `Response` \| `Promise`\<`Response`\>

###### Parameters

• **event**: [`TairuEvent`](index.md#tairuevent)

• **tile**

• **tile.props**

• **tile.props.actions?**: (`object` \| `object` \| `object`)[]

• **tile.props.children?**: `object` & `object` \| `object` & `object`[]

• **tile.props.description?**: `string`

• **tile.props.input?**: `object` \| `object`

• **tile.props.key?**: `string`

• **tile.props.style?**

• **tile.props.style.alignItems?**: `"flex-start"` \| `"center"` \| `"flex-end"`

• **tile.props.style.alignSelf?**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"auto"`

• **tile.props.style.backgroundClip?**: `"text"` \| `"border-box"`

• **tile.props.style.backgroundColor?**: `string`

• **tile.props.style.backgroundImage?**: `string`

• **tile.props.style.backgroundPosition?**: `string`

• **tile.props.style.backgroundRepeat?**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

• **tile.props.style.backgroundSize?**: `string`

• **tile.props.style.borderBottomColor?**: `string`

• **tile.props.style.borderBottomLeftRadius?**: `number`

• **tile.props.style.borderBottomRightRadius?**: `number`

• **tile.props.style.borderBottomStyle?**: `"solid"` \| `"dashed"`

• **tile.props.style.borderBottomWidth?**: `number`

• **tile.props.style.borderColor?**: `string`

• **tile.props.style.borderLeftColor?**: `string`

• **tile.props.style.borderLeftStyle?**: `"solid"` \| `"dashed"`

• **tile.props.style.borderLeftWidth?**: `number`

• **tile.props.style.borderRadius?**: `number`

• **tile.props.style.borderRightColor?**: `string`

• **tile.props.style.borderRightStyle?**: `"solid"` \| `"dashed"`

• **tile.props.style.borderRightWidth?**: `number`

• **tile.props.style.borderStyle?**: `"solid"` \| `"dashed"`

• **tile.props.style.borderTopColor?**: `string`

• **tile.props.style.borderTopLeftRadius?**: `number`

• **tile.props.style.borderTopRightRadius?**: `number`

• **tile.props.style.borderTopStyle?**: `"solid"` \| `"dashed"`

• **tile.props.style.borderTopWidth?**: `number`

• **tile.props.style.borderWidth?**: `number`

• **tile.props.style.bottom?**: `number`

• **tile.props.style.boxShadow?**: `string`

• **tile.props.style.display?**: `"flex"` \| `"none"`

• **tile.props.style.flexBasis?**: `number`

• **tile.props.style.flexDirection?**: `"row"` \| `"row-reverse"` \| `"column"` \| `"column-reverse"`

• **tile.props.style.flexGrow?**: `number`

• **tile.props.style.flexShrink?**: `number`

• **tile.props.style.flexWrap?**: `"nowrap"` \| `"wrap"` \| `"wrap-reverse"`

• **tile.props.style.gap?**: `number`

• **tile.props.style.height?**: `number`

• **tile.props.style.justifyContent?**: `"flex-start"` \| `"center"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`

• **tile.props.style.left?**: `number`

• **tile.props.style.margin?**: `number`

• **tile.props.style.marginBottom?**: `number`

• **tile.props.style.marginLeft?**: `number`

• **tile.props.style.marginRight?**: `number`

• **tile.props.style.marginTop?**: `number`

• **tile.props.style.maxHeight?**: `number`

• **tile.props.style.maxWidth?**: `number`

• **tile.props.style.minHeight?**: `number`

• **tile.props.style.minWidth?**: `number`

• **tile.props.style.objectFit?**: `"none"` \| `"contain"` \| `"cover"`

• **tile.props.style.opacity?**: `number`

• **tile.props.style.overflow?**: `"visible"` \| `"hidden"`

• **tile.props.style.padding?**: `number`

• **tile.props.style.paddingBottom?**: `number`

• **tile.props.style.paddingLeft?**: `number`

• **tile.props.style.paddingRight?**: `number`

• **tile.props.style.paddingTop?**: `number`

• **tile.props.style.position?**: `"relative"` \| `"absolute"`

• **tile.props.style.right?**: `number`

• **tile.props.style.top?**: `number`

• **tile.props.style.width?**: `number`

• **tile.props.title**: `string`

• **tile.type**: `"Tile"`

• **tile.version**: `"0.1"`

###### Returns

`Response` \| `Promise`\<`Response`\>

## Type Aliases

### NodeListener()

> **NodeListener**: (`req`, `res`) => `void`

#### Parameters

• **req**: `IncomingMessage`

• **res**: `ServerResponse`

#### Returns

`void`

***

### ParamsRecord

> **ParamsRecord**: `Record`\<`string`, `string`\>

***

### TairuEvent

> **TairuEvent**: `H3Event`

***

### TairuHandler

> **TairuHandler**: `EventHandler`

***

### TairuOptions

> **TairuOptions**: `object`

#### Type declaration

##### urlPrefix?

> `optional` **urlPrefix**: `string`

***

### TileHandler()\<PathParams, SearchParams, ResultType, Context\>

> **TileHandler**\<`PathParams`, `SearchParams`, `ResultType`, `Context`\>: (`request`) => `ResultType` \| `Promise`\<`ResultType`\>

#### Type Parameters

• **PathParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **SearchParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **ResultType** = [`Tile`](../protocol/index.md#tile)

• **Context** = [`TileRequestContext`](index.md#tilerequestcontext)

#### Parameters

• **request**: [`TileRequest`](index.md#tilerequestpathparams-searchparams-context)\<`PathParams`, `SearchParams`, `Context`\>

#### Returns

`ResultType` \| `Promise`\<`ResultType`\>

***

### TileHandlers

> **TileHandlers**: [`TileHandler`](index.md#tilehandlerpathparams-searchparams-resulttype-context)\<`any`, `any`\> \| `Record`\<`string`, [`TileHandler`](index.md#tilehandlerpathparams-searchparams-resulttype-context)\<`any`, `any`\>\>

***

### TileRequest\<PathParams, SearchParams, Context\>

> **TileRequest**\<`PathParams`, `SearchParams`, `Context`\>: `object`

#### Type Parameters

• **PathParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **SearchParams** *extends* [`ParamsRecord`](index.md#paramsrecord) = [`ParamsRecord`](index.md#paramsrecord)

• **Context** = [`TileRequestContext`](index.md#tilerequestcontext)

#### Type declaration

##### action

> **action**: [`VerifiedAction`](index.md#verifiedactionaction) \| `null`

##### context

> **context**: `Context`

##### pathParams

> **pathParams**: `PathParams`

##### searchParams

> **searchParams**: `SearchParams`

##### urlPrefix

> **urlPrefix**: `string`

***

### TileRequestContext

> **TileRequestContext**: `H3EventContext`

***

### VerifiedAction\<Action\>

> **VerifiedAction**\<`Action`\>: `Action` & `object`

#### Type declaration

##### did

> **did**: `string`

#### Type Parameters

• **Action** *extends* [`PostActionV0`](../protocol/index.md#postactionv0) = [`PostActionV0`](../protocol/index.md#postactionv0)

## Variables

### JSON\_MIME\_TYPE

> `const` **JSON\_MIME\_TYPE**: `"application/json"` = `'application/json'`

***

### URL\_PREFIX

> `const` **URL\_PREFIX**: `string`

## Functions

### handle()

> **handle**\<`Handlers`\>(`handlers`, `options`?): [`TairuHandler`](index.md#tairuhandler)

#### Type Parameters

• **Handlers** *extends* [`TileHandlers`](index.md#tilehandlers)

#### Parameters

• **handlers**: `Handlers`

• **options?**: [`TairuOptions`](index.md#tairuoptions)

#### Returns

[`TairuHandler`](index.md#tairuhandler)

***

### parseAction()

> **parseAction**(`event`): `Promise`\<[`VerifiedAction`](index.md#verifiedactionaction) \| `null`\>

#### Parameters

• **event**: [`TairuEvent`](index.md#tairuevent)

#### Returns

`Promise`\<[`VerifiedAction`](index.md#verifiedactionaction) \| `null`\>

***

### tairu()

> **tairu**\<`Handlers`\>(`handlers`, `options`?): [`Tairu`](index.md#tairuresulttype-context)

#### Type Parameters

• **Handlers** *extends* [`TileHandlers`](index.md#tilehandlers)

#### Parameters

• **handlers**: `Handlers`

• **options?**: [`TairuOptions`](index.md#tairuoptions)

#### Returns

[`Tairu`](index.md#tairuresulttype-context)
