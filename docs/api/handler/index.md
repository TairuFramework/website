# handler

Tairu handler, handling HTTP requests to serve tiles.

## Installation

```sh
npm install @tairu/handler
```

## Classes

### Tairu

#### Constructors

##### new Tairu()

> **new Tairu**(`options`): [`Tairu`](index.md#tairu)

###### Parameters

• **options**: [`TairuOptions`](index.md#tairuoptions) = `{}`

###### Returns

[`Tairu`](index.md#tairu)

#### Accessors

##### app

> `get` **app**(): `App`

###### Returns

`App`

***

##### handler

> `get` **handler**(): [`TairuHandler`](index.md#tairuhandler)

###### Returns

[`TairuHandler`](index.md#tairuhandler)

***

##### nodeListener

> `get` **nodeListener**(): [`NodeListener`](index.md#nodelistener-1)

###### Returns

[`NodeListener`](index.md#nodelistener-1)

#### Methods

##### addHandler()

> **addHandler**\<`PathParams`, `SearchParams`\>(`path`, `handler`): `void`

###### Type Parameters

• **PathParams** *extends* `ParamsRecord` = `ParamsRecord`

• **SearchParams** *extends* `ParamsRecord` = `ParamsRecord`

###### Parameters

• **path**: `string`

• **handler**: [`TileHandler`](index.md#tilehandlerpathparamssearchparams)\<`PathParams`, `SearchParams`\>

###### Returns

`void`

***

##### render()

> **render**(`event`, `tile`): `Promise`\<`Response`\>

###### Parameters

• **event**: `H3Event`\<`EventHandlerRequest`\>

• **tile**

• **tile.props**

• **tile.props.actions?**: (`object` \| `object` \| `object`)[]

• **tile.props.children?**: `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\> \| `objectOutputType`\<`object`, `ZodTypeAny`, `"passthrough"`\>[]

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

`Promise`\<`Response`\>

## Type Aliases

### BoxElement

> **BoxElement**: `ReactElement`\<[`BoxProps`](index.md#boxprops), *typeof* [`Box`](index.md#box)\>

***

### BoxProps

> **BoxProps**: `object`

#### Type declaration

##### children?

> `optional` **children**: `ReactNode`

##### style?

> `optional` **style**: `BoxStyleV0`

***

### ImageElement

> **ImageElement**: `ReactElement`\<[`ImageProps`](index.md#imageprops), *typeof* [`Image`](index.md#image)\>

***

### ImageProps

> **ImageProps**: `object`

#### Type declaration

##### alt

> **alt**: `string`

##### height

> **height**: `number`

##### src

> **src**: `string`

##### width

> **width**: `number`

***

### NodeListener()

> **NodeListener**: (`req`, `res`) => `void`

#### Parameters

• **req**: `IncomingMessage`

• **res**: `ServerResponse`

#### Returns

`void`

***

### OpenActionElement

> **OpenActionElement**: `ReactElement`\<[`OpenActionProps`](index.md#openactionprops), *typeof* [`OpenAction`](index.md#openaction)\>

***

### OpenActionProps

> **OpenActionProps**: `object`

#### Type declaration

##### label

> **label**: `string`

##### uri

> **uri**: `string`

***

### OptionElement

> **OptionElement**: `ReactElement`\<[`OptionProps`](index.md#optionprops), *typeof* [`Option`](index.md#option)\>

***

### OptionProps

> **OptionProps**: `InputOptionV0`

***

### OptionsInputElement

> **OptionsInputElement**: `ReactElement`\<[`OptionsInputProps`](index.md#optionsinputprops), *typeof* [`OptionsInput`](index.md#optionsinput)\>

***

### OptionsInputProps

> **OptionsInputProps**: `object`

#### Type declaration

##### children

> **children**: [`OptionElement`](index.md#optionelement) \| [`OptionElement`](index.md#optionelement)[]

##### multiple?

> `optional` **multiple**: `boolean`

***

### SignActionElement

> **SignActionElement**: `ReactElement`\<[`SignActionProps`](index.md#signactionprops), *typeof* [`SignAction`](index.md#signaction)\>

***

### SignActionProps

> **SignActionProps**: `object`

#### Type declaration

##### label

> **label**: `string`

##### payload?

> `optional` **payload**: `Record`\<`string`, `unknown`\>

##### state?

> `optional` **state**: `Record`\<`string`, `unknown`\>

***

### SubmitActionElement

> **SubmitActionElement**: `ReactElement`\<[`SubmitActionProps`](index.md#submitactionprops), *typeof* [`SubmitAction`](index.md#submitaction)\>

***

### SubmitActionProps

> **SubmitActionProps**: `object`

#### Type declaration

##### label

> **label**: `string`

##### state?

> `optional` **state**: `Record`\<`string`, `unknown`\>

***

### TairuHandler

> **TairuHandler**: `EventHandler`

***

### TairuOptions

> **TairuOptions**: `object`

#### Type declaration

##### runtimeScriptURL?

> `optional` **runtimeScriptURL**: `string`

##### urlPrefix?

> `optional` **urlPrefix**: `string`

***

### TextElement

> **TextElement**: `ReactElement`\<[`TextProps`](index.md#textprops), *typeof* [`Text`](index.md#text)\>

***

### TextInputElement

> **TextInputElement**: `ReactElement`\<[`TextInputProps`](index.md#textinputprops), *typeof* [`TextInput`](index.md#textinput)\>

***

### TextInputProps

> **TextInputProps**: `object`

#### Type declaration

##### defaultValue?

> `optional` **defaultValue**: `string`

##### label

> **label**: `string`

##### placeholder?

> `optional` **placeholder**: `string`

##### secure?

> `optional` **secure**: `boolean`

***

### TextProps

> **TextProps**: `object`

#### Type declaration

##### children

> **children**: `ReactNode`

##### style?

> `optional` **style**: `TextStyleV0`

***

### TileElement

> **TileElement**: `ReactElement`\<[`TileProps`](index.md#tileprops), *typeof* [`Tile`](index.md#tile)\>

***

### TileHandler()\<PathParams, SearchParams\>

> **TileHandler**\<`PathParams`, `SearchParams`\>: (`request`) => `Tile` \| [`TileElement`](index.md#tileelement) \| `Promise`\<`Tile` \| [`TileElement`](index.md#tileelement)\>

#### Type Parameters

• **PathParams** *extends* `ParamsRecord` = `ParamsRecord`

• **SearchParams** *extends* `ParamsRecord` = `ParamsRecord`

#### Parameters

• **request**: [`TileRequest`](index.md#tilerequestpathparamssearchparams)\<`PathParams`, `SearchParams`\>

#### Returns

`Tile` \| [`TileElement`](index.md#tileelement) \| `Promise`\<`Tile` \| [`TileElement`](index.md#tileelement)\>

***

### TileHandlers

> **TileHandlers**: [`TileHandler`](index.md#tilehandlerpathparamssearchparams)\<`any`, `any`\> \| `Record`\<`string`, [`TileHandler`](index.md#tilehandlerpathparamssearchparams)\<`any`, `any`\>\>

***

### TileProps

> **TileProps**: [`BoxProps`](index.md#boxprops) & `TileMetaV0` & `object`

#### Type declaration

##### actions?

> `optional` **actions**: `TileActionsProp`

##### input?

> `optional` **input**: `TileInputProp`

***

### TileRequest\<PathParams, SearchParams\>

> **TileRequest**\<`PathParams`, `SearchParams`\>: `object`

#### Type Parameters

• **PathParams** *extends* `ParamsRecord` = `ParamsRecord`

• **SearchParams** *extends* `ParamsRecord` = `ParamsRecord`

#### Type declaration

##### action

> **action**: `VerifiedAction` \| `null`

##### context

> **context**: [`TileRequestContext`](index.md#tilerequestcontext)

##### pathParams

> **pathParams**: `PathParams`

##### searchParams

> **searchParams**: `SearchParams`

##### urlPrefix

> **urlPrefix**: `string`

***

### TileRequestContext

> **TileRequestContext**: `H3EventContext`

## Functions

### Box()

> **Box**(`props`): `DOMElement`

#### Parameters

• **props**: [`BoxProps`](index.md#boxprops)

#### Returns

`DOMElement`

***

### Image()

> **Image**(`props`): `ReactElement`\<[`ImageProps`](index.md#imageprops), `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`ImageProps`](index.md#imageprops)

#### Returns

`ReactElement`\<[`ImageProps`](index.md#imageprops), `string` \| `JSXElementConstructor`\>

***

### OpenAction()

> **OpenAction**(`props`): `ReactElement`\<[`OpenActionProps`](index.md#openactionprops), `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`OpenActionProps`](index.md#openactionprops)

#### Returns

`ReactElement`\<[`OpenActionProps`](index.md#openactionprops), `string` \| `JSXElementConstructor`\>

***

### Option()

> **Option**(`props`): `ReactElement`\<`object`, `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**

• **props.label**: `string`

• **props.value**: `string` \| `number` \| `boolean`

#### Returns

`ReactElement`\<`object`, `string` \| `JSXElementConstructor`\>

##### label

> **label**: `string`

##### value

> **value**: `string` \| `number` \| `boolean`

***

### OptionsInput()

> **OptionsInput**(`props`): `DOMElement`

#### Parameters

• **props**: [`OptionsInputProps`](index.md#optionsinputprops)

#### Returns

`DOMElement`

***

### SignAction()

> **SignAction**(`props`): `ReactElement`\<[`SignActionProps`](index.md#signactionprops), `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`SignActionProps`](index.md#signactionprops)

#### Returns

`ReactElement`\<[`SignActionProps`](index.md#signactionprops), `string` \| `JSXElementConstructor`\>

***

### SubmitAction()

> **SubmitAction**(`props`): `ReactElement`\<[`SubmitActionProps`](index.md#submitactionprops), `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`SubmitActionProps`](index.md#submitactionprops)

#### Returns

`ReactElement`\<[`SubmitActionProps`](index.md#submitactionprops), `string` \| `JSXElementConstructor`\>

***

### Text()

> **Text**(`props`): `DOMElement`

#### Parameters

• **props**: [`TextProps`](index.md#textprops)

#### Returns

`DOMElement`

***

### TextInput()

> **TextInput**(`props`): `ReactElement`\<[`TextInputProps`](index.md#textinputprops), `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`TextInputProps`](index.md#textinputprops)

#### Returns

`ReactElement`\<[`TextInputProps`](index.md#textinputprops), `string` \| `JSXElementConstructor`\>

***

### Tile()

> **Tile**(`props`): `DOMElement`

#### Parameters

• **props**: [`TileProps`](index.md#tileprops)

#### Returns

`DOMElement`

***

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

### tairu()

> **tairu**\<`Handlers`\>(`handlers`, `options`?): [`Tairu`](index.md#tairu)

#### Type Parameters

• **Handlers** *extends* [`TileHandlers`](index.md#tilehandlers)

#### Parameters

• **handlers**: `Handlers`

• **options?**: [`TairuOptions`](index.md#tairuoptions)

#### Returns

[`Tairu`](index.md#tairu)
