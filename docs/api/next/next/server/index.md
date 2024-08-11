# @tairu/next/server

Tairu Next.js integration for route handlers.

## Installation

```sh
npm install @tairu/next/server
```

## Type Aliases

### BoxElement

> **BoxElement**: `ReactElement`\<[`BoxProps`](index.md#boxprops), *typeof* [`Box`](index.md#box)\>

***

### BoxProps

> **BoxProps**: `object`

#### Type declaration

##### children?

> `optional` **children**: `ReactNode` \| [`BoxV0`](../../../protocol/index.md#boxv0) \| [`TextV0`](../../../protocol/index.md#textv0) \| ([`BoxV0`](../../../protocol/index.md#boxv0) \| [`TextV0`](../../../protocol/index.md#textv0))[]

##### style?

> `optional` **style**: [`BoxStyleV0`](../../../protocol/index.md#boxstylev0)

***

### Context

> **Context**: `object`

#### Type declaration

##### revalidate()

> **revalidate**: () => `void`

###### Returns

`void`

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

### Method

> **Method**: `"GET"` \| `"OPTIONS"` \| `"POST"`

***

### NextHandler()

> **NextHandler**: (`req`) => `Promise`\<`Response`\>

#### Parameters

• **req**: `NextRequest`

#### Returns

`Promise`\<`Response`\>

***

### NextHandlers

> **NextHandlers**: `Record`\<[`Method`](index.md#method), [`NextHandler`](index.md#nexthandler)\>

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

> **OptionProps**: [`InputOptionV0`](../../../protocol/index.md#inputoptionv0)

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

> **children**: `ReactNode` \| [`TextV0`](../../../protocol/index.md#textv0) \| [`TextV0`](../../../protocol/index.md#textv0)[]

##### style?

> `optional` **style**: [`TextStyleV0`](../../../protocol/index.md#textstylev0)

***

### TileElement

> **TileElement**: `ReactElement`\<[`TileProps`](index.md#tileprops), *typeof* [`Tile`](index.md#tile)\>

***

### TileProps

> **TileProps**: [`BoxProps`](index.md#boxprops) & [`TileMetaV0`](../../../protocol/index.md#tilemetav0) & `object`

#### Type declaration

##### actions?

> `optional` **actions**: [`TileActionsProp`](../../../jsx/index.md#tileactionsprop)

##### input?

> `optional` **input**: [`TileInputProp`](../../../jsx/index.md#tileinputprop)

## Functions

### Box()

> **Box**(`props`): `ReactElement`\<[`BoxProps`](index.md#boxprops), `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`BoxProps`](index.md#boxprops)

#### Returns

`ReactElement`\<[`BoxProps`](index.md#boxprops), `string` \| `JSXElementConstructor`\>

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

> **Text**(`props`): `ReactElement`\<[`TextProps`](index.md#textprops), `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`TextProps`](index.md#textprops)

#### Returns

`ReactElement`\<[`TextProps`](index.md#textprops), `string` \| `JSXElementConstructor`\>

***

### TextInput()

> **TextInput**(`props`): `ReactElement`\<[`TextInputProps`](index.md#textinputprops), `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`TextInputProps`](index.md#textinputprops)

#### Returns

`ReactElement`\<[`TextInputProps`](index.md#textinputprops), `string` \| `JSXElementConstructor`\>

***

### Tile()

> **Tile**(`props`): `ReactElement`\<[`BoxProps`](index.md#boxprops) & `object` & `object`, `string` \| `JSXElementConstructor`\>

#### Parameters

• **props**: [`TileProps`](index.md#tileprops)

#### Returns

`ReactElement`\<[`BoxProps`](index.md#boxprops) & `object` & `object`, `string` \| `JSXElementConstructor`\>

***

### handle()

> **handle**\<`SearchParams`\>(`tileHandler`): [`NextHandlers`](index.md#nexthandlers)

#### Type Parameters

• **SearchParams** *extends* `ParamsRecord` = `ParamsRecord`

#### Parameters

• **tileHandler**: `TileHandler`\<`Record`\<`string`, `never`\>, `SearchParams`, [`ValidTileInput`](../../../jsx/index.md#validtileinput), [`Context`](index.md#context)\>

#### Returns

[`NextHandlers`](index.md#nexthandlers)
