# @tairu/protocol

Tairu protocol schemas and types.

## Installation

```sh
npm install @tairu/protocol
```

## Type Aliases

### ActionV0

> **ActionV0**: `FromSchema`\<*typeof* [`actionV0`](index.md#actionv0-1)\>

***

### BoxChildrenV0

> **BoxChildrenV0**: `FromSchema`\<*typeof* [`boxChildrenV0`](index.md#boxchildrenv0-1)\>

***

### BoxNodeV0

> **BoxNodeV0**: `FromSchema`\<*typeof* [`boxNodeV0`](index.md#boxnodev0-1)\>

***

### BoxPropsV0

> **BoxPropsV0**: `FromSchema`\<*typeof* [`boxPropsV0`](index.md#boxpropsv0-1)\>

***

### BoxStyleV0

> **BoxStyleV0**: `FromSchema`\<*typeof* [`boxStyleV0`](index.md#boxstylev0-1)\>

***

### BoxV0

> **BoxV0**: `FromSchema`\<*typeof* [`boxV0`](index.md#boxv0-1)\>

***

### ElementTypeV0

> **ElementTypeV0**: `FromSchema`\<*typeof* [`elementTypeV0`](index.md#elementtypev0-1)\>

***

### ElementV0

> **ElementV0**: `FromSchema`\<*typeof* [`elementV0`](index.md#elementv0-1)\>

***

### HandlerFormatV0

> **HandlerFormatV0**: `FromSchema`\<*typeof* [`handlerFormatV0`](index.md#handlerformatv0-1)\>

***

### HandlerQueryParamsV0

> **HandlerQueryParamsV0**: `FromSchema`\<*typeof* [`handlerQueryParamsV0`](index.md#handlerqueryparamsv0-1)\>

***

### ImagePropsV0

> **ImagePropsV0**: `FromSchema`\<*typeof* [`imagePropsV0`](index.md#imagepropsv0-1)\>

***

### ImageV0

> **ImageV0**: `FromSchema`\<*typeof* [`imageV0`](index.md#imagev0-1)\>

***

### InputOptionV0

> **InputOptionV0**: `FromSchema`\<*typeof* [`inputOptionV0`](index.md#inputoptionv0-1)\>

***

### InputV0

> **InputV0**: `FromSchema`\<*typeof* [`inputV0`](index.md#inputv0-1)\>

***

### OpenActionV0

> **OpenActionV0**: `FromSchema`\<*typeof* [`openActionV0`](index.md#openactionv0-1)\>

***

### OptionsInputV0

> **OptionsInputV0**: `FromSchema`\<*typeof* [`optionsInputV0`](index.md#optionsinputv0-1)\>

***

### OptionValueV0

> **OptionValueV0**: `FromSchema`\<*typeof* [`optionValueV0`](index.md#optionvaluev0-1)\>

***

### PostActionHandler()

> **PostActionHandler**: (`action`) => `Promise`\<[`TileV0`](index.md#tilev0)\>

#### Parameters

##### action

[`PostActionV0`](index.md#postactionv0)

#### Returns

`Promise`\<[`TileV0`](index.md#tilev0)\>

***

### PostActionV0

> **PostActionV0**: `FromSchema`\<*typeof* [`postActionV0`](index.md#postactionv0-1)\>

***

### SignActionHandler()

> **SignActionHandler**: (`action`) => `Promise`\<`string`\>

#### Parameters

##### action

[`PostActionV0`](index.md#postactionv0)

#### Returns

`Promise`\<`string`\>

***

### SignActionV0

> **SignActionV0**: `FromSchema`\<*typeof* [`signActionV0`](index.md#signactionv0-1)\>

***

### SignedActionV0

> **SignedActionV0**: `FromSchema`\<*typeof* [`signedActionV0`](index.md#signedactionv0-1)\>

***

### SubmitActionV0

> **SubmitActionV0**: `FromSchema`\<*typeof* [`submitActionV0`](index.md#submitactionv0-1)\>

***

### SubmittedActionV0

> **SubmittedActionV0**: `FromSchema`\<*typeof* [`submittedActionV0`](index.md#submittedactionv0-1)\>

***

### SubmitValueV0

> **SubmitValueV0**: `FromSchema`\<*typeof* [`submitValueV0`](index.md#submitvaluev0-1)\>

***

### TextChildrenV0

> **TextChildrenV0**: `FromSchema`\<*typeof* [`textChildrenV0`](index.md#textchildrenv0-1)\>

***

### TextInputV0

> **TextInputV0**: `FromSchema`\<*typeof* [`textInputV0`](index.md#textinputv0-1)\>

***

### TextNodeV0

> **TextNodeV0**: `FromSchema`\<*typeof* [`textNodeV0`](index.md#textnodev0-1)\>

***

### TextPropsV0

> **TextPropsV0**: `FromSchema`\<*typeof* [`textPropsV0`](index.md#textpropsv0-1)\>

***

### TextStyleV0

> **TextStyleV0**: `FromSchema`\<*typeof* [`textStyleV0`](index.md#textstylev0-1)\>

***

### TextV0

> **TextV0**: `FromSchema`\<*typeof* [`textV0`](index.md#textv0-1)\>

***

### Tile

> **Tile**: [`TileV0`](index.md#tilev0)

***

### TileInteractiveV0

> **TileInteractiveV0**: `FromSchema`\<*typeof* [`tileInteractiveV0`](index.md#tileinteractivev0-1)\>

***

### TileMetaV0

> **TileMetaV0**: `FromSchema`\<*typeof* [`tileMetaV0`](index.md#tilemetav0-1)\>

***

### TilePropsV0

> **TilePropsV0**: `FromSchema`\<*typeof* [`tilePropsV0`](index.md#tilepropsv0-1)\>

***

### TileV0

> **TileV0**: `FromSchema`\<*typeof* [`tileV0`](index.md#tilev0-1)\>

***

### ValueV0

> **ValueV0**: `FromSchema`\<*typeof* [`valueV0`](index.md#valuev0-1)\>

## Variables

### actionV0

> `const` **actionV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`, `object`]

***

### boxChildrenV0

> `const` **boxChildrenV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`]

***

### boxNodeV0

> `const` **boxNodeV0**: `object` = `elementV0`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.props

> `readonly` **properties.props**: `object`

###### properties.props.type

> `readonly` **properties.props.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object` = `elementTypeV0`

###### properties.type.enum

> `readonly` **properties.type.enum**: readonly [`"Box"`, `"Image"`, `"Text"`]

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"props"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### boxPropsV0

> `const` **boxPropsV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.children

> `readonly` **properties.children**: `object`

###### properties.children.items

> `readonly` **properties.children.items**: `object` = `boxChildrenV0`

###### properties.children.items.anyOf

> `readonly` **properties.children.items.anyOf**: readonly [`object`, `object`]

###### properties.children.type

> `readonly` **properties.children.type**: `"array"` = `'array'`

###### properties.key

> `readonly` **properties.key**: `object`

###### properties.key.type

> `readonly` **properties.key.type**: `"string"` = `'string'`

###### properties.style

> `readonly` **properties.style**: `object` = `boxStyleV0`

###### properties.style.additionalProperties

> `readonly` **properties.style.additionalProperties**: `false` = `false`

###### properties.style.properties

> `readonly` **properties.style.properties**: `object`

###### properties.style.properties.alignItems

> `readonly` **properties.style.properties.alignItems**: `object`

###### properties.style.properties.alignItems.enum

> `readonly` **properties.style.properties.alignItems.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`]

###### properties.style.properties.alignItems.type

> `readonly` **properties.style.properties.alignItems.type**: `"string"` = `'string'`

###### properties.style.properties.alignSelf

> `readonly` **properties.style.properties.alignSelf**: `object`

###### properties.style.properties.alignSelf.enum

> `readonly` **properties.style.properties.alignSelf.enum**: readonly [`"auto"`, `"flex-start"`, `"center"`, `"flex-end"`]

###### properties.style.properties.alignSelf.type

> `readonly` **properties.style.properties.alignSelf.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundClip

> `readonly` **properties.style.properties.backgroundClip**: `object`

###### properties.style.properties.backgroundClip.enum

> `readonly` **properties.style.properties.backgroundClip.enum**: readonly [`"border-box"`, `"text"`]

###### properties.style.properties.backgroundClip.type

> `readonly` **properties.style.properties.backgroundClip.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundColor

> `readonly` **properties.style.properties.backgroundColor**: `object`

###### properties.style.properties.backgroundColor.type

> `readonly` **properties.style.properties.backgroundColor.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundImage

> `readonly` **properties.style.properties.backgroundImage**: `object`

###### properties.style.properties.backgroundImage.type

> `readonly` **properties.style.properties.backgroundImage.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundPosition

> `readonly` **properties.style.properties.backgroundPosition**: `object`

###### properties.style.properties.backgroundPosition.type

> `readonly` **properties.style.properties.backgroundPosition.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundRepeat

> `readonly` **properties.style.properties.backgroundRepeat**: `object`

###### properties.style.properties.backgroundRepeat.enum

> `readonly` **properties.style.properties.backgroundRepeat.enum**: readonly [`"repeat"`, `"repeat-x"`, `"repeat-y"`, `"no-repeat"`]

###### properties.style.properties.backgroundRepeat.type

> `readonly` **properties.style.properties.backgroundRepeat.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundSize

> `readonly` **properties.style.properties.backgroundSize**: `object`

###### properties.style.properties.backgroundSize.type

> `readonly` **properties.style.properties.backgroundSize.type**: `"string"` = `'string'`

###### properties.style.properties.borderBottomColor

> `readonly` **properties.style.properties.borderBottomColor**: `object`

###### properties.style.properties.borderBottomColor.type

> `readonly` **properties.style.properties.borderBottomColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderBottomLeftRadius

> `readonly` **properties.style.properties.borderBottomLeftRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderBottomLeftRadius.minimum

> `readonly` **properties.style.properties.borderBottomLeftRadius.minimum**: `0` = `0`

###### properties.style.properties.borderBottomLeftRadius.type

> `readonly` **properties.style.properties.borderBottomLeftRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderBottomRightRadius

> `readonly` **properties.style.properties.borderBottomRightRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderBottomRightRadius.minimum

> `readonly` **properties.style.properties.borderBottomRightRadius.minimum**: `0` = `0`

###### properties.style.properties.borderBottomRightRadius.type

> `readonly` **properties.style.properties.borderBottomRightRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderBottomStyle

> `readonly` **properties.style.properties.borderBottomStyle**: `object` = `borderStyle`

###### properties.style.properties.borderBottomStyle.enum

> `readonly` **properties.style.properties.borderBottomStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderBottomStyle.type

> `readonly` **properties.style.properties.borderBottomStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderBottomWidth

> `readonly` **properties.style.properties.borderBottomWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderBottomWidth.minimum

> `readonly` **properties.style.properties.borderBottomWidth.minimum**: `0` = `0`

###### properties.style.properties.borderBottomWidth.type

> `readonly` **properties.style.properties.borderBottomWidth.type**: `"number"` = `'number'`

###### properties.style.properties.borderColor

> `readonly` **properties.style.properties.borderColor**: `object`

###### properties.style.properties.borderColor.type

> `readonly` **properties.style.properties.borderColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderLeftColor

> `readonly` **properties.style.properties.borderLeftColor**: `object`

###### properties.style.properties.borderLeftColor.type

> `readonly` **properties.style.properties.borderLeftColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderLeftStyle

> `readonly` **properties.style.properties.borderLeftStyle**: `object` = `borderStyle`

###### properties.style.properties.borderLeftStyle.enum

> `readonly` **properties.style.properties.borderLeftStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderLeftStyle.type

> `readonly` **properties.style.properties.borderLeftStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderLeftWidth

> `readonly` **properties.style.properties.borderLeftWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderLeftWidth.minimum

> `readonly` **properties.style.properties.borderLeftWidth.minimum**: `0` = `0`

###### properties.style.properties.borderLeftWidth.type

> `readonly` **properties.style.properties.borderLeftWidth.type**: `"number"` = `'number'`

###### properties.style.properties.borderRadius

> `readonly` **properties.style.properties.borderRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderRadius.minimum

> `readonly` **properties.style.properties.borderRadius.minimum**: `0` = `0`

###### properties.style.properties.borderRadius.type

> `readonly` **properties.style.properties.borderRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderRightColor

> `readonly` **properties.style.properties.borderRightColor**: `object`

###### properties.style.properties.borderRightColor.type

> `readonly` **properties.style.properties.borderRightColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderRightStyle

> `readonly` **properties.style.properties.borderRightStyle**: `object` = `borderStyle`

###### properties.style.properties.borderRightStyle.enum

> `readonly` **properties.style.properties.borderRightStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderRightStyle.type

> `readonly` **properties.style.properties.borderRightStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderRightWidth

> `readonly` **properties.style.properties.borderRightWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderRightWidth.minimum

> `readonly` **properties.style.properties.borderRightWidth.minimum**: `0` = `0`

###### properties.style.properties.borderRightWidth.type

> `readonly` **properties.style.properties.borderRightWidth.type**: `"number"` = `'number'`

###### properties.style.properties.borderStyle

> `readonly` **properties.style.properties.borderStyle**: `object` = `borderStyle`

###### properties.style.properties.borderStyle.enum

> `readonly` **properties.style.properties.borderStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderStyle.type

> `readonly` **properties.style.properties.borderStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderTopColor

> `readonly` **properties.style.properties.borderTopColor**: `object`

###### properties.style.properties.borderTopColor.type

> `readonly` **properties.style.properties.borderTopColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderTopLeftRadius

> `readonly` **properties.style.properties.borderTopLeftRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderTopLeftRadius.minimum

> `readonly` **properties.style.properties.borderTopLeftRadius.minimum**: `0` = `0`

###### properties.style.properties.borderTopLeftRadius.type

> `readonly` **properties.style.properties.borderTopLeftRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderTopRightRadius

> `readonly` **properties.style.properties.borderTopRightRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderTopRightRadius.minimum

> `readonly` **properties.style.properties.borderTopRightRadius.minimum**: `0` = `0`

###### properties.style.properties.borderTopRightRadius.type

> `readonly` **properties.style.properties.borderTopRightRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderTopStyle

> `readonly` **properties.style.properties.borderTopStyle**: `object` = `borderStyle`

###### properties.style.properties.borderTopStyle.enum

> `readonly` **properties.style.properties.borderTopStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderTopStyle.type

> `readonly` **properties.style.properties.borderTopStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderTopWidth

> `readonly` **properties.style.properties.borderTopWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderTopWidth.minimum

> `readonly` **properties.style.properties.borderTopWidth.minimum**: `0` = `0`

###### properties.style.properties.borderTopWidth.type

> `readonly` **properties.style.properties.borderTopWidth.type**: `"number"` = `'number'`

###### properties.style.properties.borderWidth

> `readonly` **properties.style.properties.borderWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderWidth.minimum

> `readonly` **properties.style.properties.borderWidth.minimum**: `0` = `0`

###### properties.style.properties.borderWidth.type

> `readonly` **properties.style.properties.borderWidth.type**: `"number"` = `'number'`

###### properties.style.properties.bottom

> `readonly` **properties.style.properties.bottom**: `object`

###### properties.style.properties.bottom.type

> `readonly` **properties.style.properties.bottom.type**: `"number"` = `'number'`

###### properties.style.properties.boxShadow

> `readonly` **properties.style.properties.boxShadow**: `object`

###### properties.style.properties.boxShadow.type

> `readonly` **properties.style.properties.boxShadow.type**: `"string"` = `'string'`

###### properties.style.properties.display

> `readonly` **properties.style.properties.display**: `object`

###### properties.style.properties.display.enum

> `readonly` **properties.style.properties.display.enum**: readonly [`"flex"`, `"none"`]

###### properties.style.properties.display.type

> `readonly` **properties.style.properties.display.type**: `"string"` = `'string'`

###### properties.style.properties.flexBasis

> `readonly` **properties.style.properties.flexBasis**: `object` = `nonNegativeNumber`

###### properties.style.properties.flexBasis.minimum

> `readonly` **properties.style.properties.flexBasis.minimum**: `0` = `0`

###### properties.style.properties.flexBasis.type

> `readonly` **properties.style.properties.flexBasis.type**: `"number"` = `'number'`

###### properties.style.properties.flexDirection

> `readonly` **properties.style.properties.flexDirection**: `object`

###### properties.style.properties.flexDirection.enum

> `readonly` **properties.style.properties.flexDirection.enum**: readonly [`"row"`, `"row-reverse"`, `"column"`, `"column-reverse"`]

###### properties.style.properties.flexDirection.type

> `readonly` **properties.style.properties.flexDirection.type**: `"string"` = `'string'`

###### properties.style.properties.flexGrow

> `readonly` **properties.style.properties.flexGrow**: `object` = `nonNegativeNumber`

###### properties.style.properties.flexGrow.minimum

> `readonly` **properties.style.properties.flexGrow.minimum**: `0` = `0`

###### properties.style.properties.flexGrow.type

> `readonly` **properties.style.properties.flexGrow.type**: `"number"` = `'number'`

###### properties.style.properties.flexShrink

> `readonly` **properties.style.properties.flexShrink**: `object` = `nonNegativeNumber`

###### properties.style.properties.flexShrink.minimum

> `readonly` **properties.style.properties.flexShrink.minimum**: `0` = `0`

###### properties.style.properties.flexShrink.type

> `readonly` **properties.style.properties.flexShrink.type**: `"number"` = `'number'`

###### properties.style.properties.flexWrap

> `readonly` **properties.style.properties.flexWrap**: `object`

###### properties.style.properties.flexWrap.enum

> `readonly` **properties.style.properties.flexWrap.enum**: readonly [`"nowrap"`, `"wrap"`, `"wrap-reverse"`]

###### properties.style.properties.flexWrap.type

> `readonly` **properties.style.properties.flexWrap.type**: `"string"` = `'string'`

###### properties.style.properties.gap

> `readonly` **properties.style.properties.gap**: `object` = `nonNegativeNumber`

###### properties.style.properties.gap.minimum

> `readonly` **properties.style.properties.gap.minimum**: `0` = `0`

###### properties.style.properties.gap.type

> `readonly` **properties.style.properties.gap.type**: `"number"` = `'number'`

###### properties.style.properties.height

> `readonly` **properties.style.properties.height**: `object` = `nonNegativeNumber`

###### properties.style.properties.height.minimum

> `readonly` **properties.style.properties.height.minimum**: `0` = `0`

###### properties.style.properties.height.type

> `readonly` **properties.style.properties.height.type**: `"number"` = `'number'`

###### properties.style.properties.justifyContent

> `readonly` **properties.style.properties.justifyContent**: `object`

###### properties.style.properties.justifyContent.enum

> `readonly` **properties.style.properties.justifyContent.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`, `"space-around"`]

###### properties.style.properties.justifyContent.type

> `readonly` **properties.style.properties.justifyContent.type**: `"string"` = `'string'`

###### properties.style.properties.left

> `readonly` **properties.style.properties.left**: `object`

###### properties.style.properties.left.type

> `readonly` **properties.style.properties.left.type**: `"number"` = `'number'`

###### properties.style.properties.margin

> `readonly` **properties.style.properties.margin**: `object`

###### properties.style.properties.margin.type

> `readonly` **properties.style.properties.margin.type**: `"number"` = `'number'`

###### properties.style.properties.marginBottom

> `readonly` **properties.style.properties.marginBottom**: `object`

###### properties.style.properties.marginBottom.type

> `readonly` **properties.style.properties.marginBottom.type**: `"number"` = `'number'`

###### properties.style.properties.marginLeft

> `readonly` **properties.style.properties.marginLeft**: `object`

###### properties.style.properties.marginLeft.type

> `readonly` **properties.style.properties.marginLeft.type**: `"number"` = `'number'`

###### properties.style.properties.marginRight

> `readonly` **properties.style.properties.marginRight**: `object`

###### properties.style.properties.marginRight.type

> `readonly` **properties.style.properties.marginRight.type**: `"number"` = `'number'`

###### properties.style.properties.marginTop

> `readonly` **properties.style.properties.marginTop**: `object`

###### properties.style.properties.marginTop.type

> `readonly` **properties.style.properties.marginTop.type**: `"number"` = `'number'`

###### properties.style.properties.maxHeight

> `readonly` **properties.style.properties.maxHeight**: `object` = `nonNegativeNumber`

###### properties.style.properties.maxHeight.minimum

> `readonly` **properties.style.properties.maxHeight.minimum**: `0` = `0`

###### properties.style.properties.maxHeight.type

> `readonly` **properties.style.properties.maxHeight.type**: `"number"` = `'number'`

###### properties.style.properties.maxWidth

> `readonly` **properties.style.properties.maxWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.maxWidth.minimum

> `readonly` **properties.style.properties.maxWidth.minimum**: `0` = `0`

###### properties.style.properties.maxWidth.type

> `readonly` **properties.style.properties.maxWidth.type**: `"number"` = `'number'`

###### properties.style.properties.minHeight

> `readonly` **properties.style.properties.minHeight**: `object` = `nonNegativeNumber`

###### properties.style.properties.minHeight.minimum

> `readonly` **properties.style.properties.minHeight.minimum**: `0` = `0`

###### properties.style.properties.minHeight.type

> `readonly` **properties.style.properties.minHeight.type**: `"number"` = `'number'`

###### properties.style.properties.minWidth

> `readonly` **properties.style.properties.minWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.minWidth.minimum

> `readonly` **properties.style.properties.minWidth.minimum**: `0` = `0`

###### properties.style.properties.minWidth.type

> `readonly` **properties.style.properties.minWidth.type**: `"number"` = `'number'`

###### properties.style.properties.objectFit

> `readonly` **properties.style.properties.objectFit**: `object`

###### properties.style.properties.objectFit.enum

> `readonly` **properties.style.properties.objectFit.enum**: readonly [`"none"`, `"contain"`, `"cover"`]

###### properties.style.properties.objectFit.type

> `readonly` **properties.style.properties.objectFit.type**: `"string"` = `'string'`

###### properties.style.properties.opacity

> `readonly` **properties.style.properties.opacity**: `object` = `nonNegativeNumber`

###### properties.style.properties.opacity.minimum

> `readonly` **properties.style.properties.opacity.minimum**: `0` = `0`

###### properties.style.properties.opacity.type

> `readonly` **properties.style.properties.opacity.type**: `"number"` = `'number'`

###### properties.style.properties.overflow

> `readonly` **properties.style.properties.overflow**: `object`

###### properties.style.properties.overflow.enum

> `readonly` **properties.style.properties.overflow.enum**: readonly [`"visible"`, `"hidden"`]

###### properties.style.properties.overflow.type

> `readonly` **properties.style.properties.overflow.type**: `"string"` = `'string'`

###### properties.style.properties.padding

> `readonly` **properties.style.properties.padding**: `object` = `nonNegativeNumber`

###### properties.style.properties.padding.minimum

> `readonly` **properties.style.properties.padding.minimum**: `0` = `0`

###### properties.style.properties.padding.type

> `readonly` **properties.style.properties.padding.type**: `"number"` = `'number'`

###### properties.style.properties.paddingBottom

> `readonly` **properties.style.properties.paddingBottom**: `object` = `nonNegativeNumber`

###### properties.style.properties.paddingBottom.minimum

> `readonly` **properties.style.properties.paddingBottom.minimum**: `0` = `0`

###### properties.style.properties.paddingBottom.type

> `readonly` **properties.style.properties.paddingBottom.type**: `"number"` = `'number'`

###### properties.style.properties.paddingLeft

> `readonly` **properties.style.properties.paddingLeft**: `object` = `nonNegativeNumber`

###### properties.style.properties.paddingLeft.minimum

> `readonly` **properties.style.properties.paddingLeft.minimum**: `0` = `0`

###### properties.style.properties.paddingLeft.type

> `readonly` **properties.style.properties.paddingLeft.type**: `"number"` = `'number'`

###### properties.style.properties.paddingRight

> `readonly` **properties.style.properties.paddingRight**: `object` = `nonNegativeNumber`

###### properties.style.properties.paddingRight.minimum

> `readonly` **properties.style.properties.paddingRight.minimum**: `0` = `0`

###### properties.style.properties.paddingRight.type

> `readonly` **properties.style.properties.paddingRight.type**: `"number"` = `'number'`

###### properties.style.properties.paddingTop

> `readonly` **properties.style.properties.paddingTop**: `object` = `nonNegativeNumber`

###### properties.style.properties.paddingTop.minimum

> `readonly` **properties.style.properties.paddingTop.minimum**: `0` = `0`

###### properties.style.properties.paddingTop.type

> `readonly` **properties.style.properties.paddingTop.type**: `"number"` = `'number'`

###### properties.style.properties.position

> `readonly` **properties.style.properties.position**: `object`

###### properties.style.properties.position.enum

> `readonly` **properties.style.properties.position.enum**: readonly [`"relative"`, `"absolute"`]

###### properties.style.properties.position.type

> `readonly` **properties.style.properties.position.type**: `"string"` = `'string'`

###### properties.style.properties.right

> `readonly` **properties.style.properties.right**: `object`

###### properties.style.properties.right.type

> `readonly` **properties.style.properties.right.type**: `"number"` = `'number'`

###### properties.style.properties.top

> `readonly` **properties.style.properties.top**: `object`

###### properties.style.properties.top.type

> `readonly` **properties.style.properties.top.type**: `"number"` = `'number'`

###### properties.style.properties.width

> `readonly` **properties.style.properties.width**: `object` = `nonNegativeNumber`

###### properties.style.properties.width.minimum

> `readonly` **properties.style.properties.width.minimum**: `0` = `0`

###### properties.style.properties.width.type

> `readonly` **properties.style.properties.width.type**: `"number"` = `'number'`

###### properties.style.type

> `readonly` **properties.style.type**: `"object"` = `'object'`

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### boxStyleV0

> `const` **boxStyleV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.alignItems

> `readonly` **properties.alignItems**: `object`

###### properties.alignItems.enum

> `readonly` **properties.alignItems.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`]

###### properties.alignItems.type

> `readonly` **properties.alignItems.type**: `"string"` = `'string'`

###### properties.alignSelf

> `readonly` **properties.alignSelf**: `object`

###### properties.alignSelf.enum

> `readonly` **properties.alignSelf.enum**: readonly [`"auto"`, `"flex-start"`, `"center"`, `"flex-end"`]

###### properties.alignSelf.type

> `readonly` **properties.alignSelf.type**: `"string"` = `'string'`

###### properties.backgroundClip

> `readonly` **properties.backgroundClip**: `object`

###### properties.backgroundClip.enum

> `readonly` **properties.backgroundClip.enum**: readonly [`"border-box"`, `"text"`]

###### properties.backgroundClip.type

> `readonly` **properties.backgroundClip.type**: `"string"` = `'string'`

###### properties.backgroundColor

> `readonly` **properties.backgroundColor**: `object`

###### properties.backgroundColor.type

> `readonly` **properties.backgroundColor.type**: `"string"` = `'string'`

###### properties.backgroundImage

> `readonly` **properties.backgroundImage**: `object`

###### properties.backgroundImage.type

> `readonly` **properties.backgroundImage.type**: `"string"` = `'string'`

###### properties.backgroundPosition

> `readonly` **properties.backgroundPosition**: `object`

###### properties.backgroundPosition.type

> `readonly` **properties.backgroundPosition.type**: `"string"` = `'string'`

###### properties.backgroundRepeat

> `readonly` **properties.backgroundRepeat**: `object`

###### properties.backgroundRepeat.enum

> `readonly` **properties.backgroundRepeat.enum**: readonly [`"repeat"`, `"repeat-x"`, `"repeat-y"`, `"no-repeat"`]

###### properties.backgroundRepeat.type

> `readonly` **properties.backgroundRepeat.type**: `"string"` = `'string'`

###### properties.backgroundSize

> `readonly` **properties.backgroundSize**: `object`

###### properties.backgroundSize.type

> `readonly` **properties.backgroundSize.type**: `"string"` = `'string'`

###### properties.borderBottomColor

> `readonly` **properties.borderBottomColor**: `object`

###### properties.borderBottomColor.type

> `readonly` **properties.borderBottomColor.type**: `"string"` = `'string'`

###### properties.borderBottomLeftRadius

> `readonly` **properties.borderBottomLeftRadius**: `object` = `nonNegativeNumber`

###### properties.borderBottomLeftRadius.minimum

> `readonly` **properties.borderBottomLeftRadius.minimum**: `0` = `0`

###### properties.borderBottomLeftRadius.type

> `readonly` **properties.borderBottomLeftRadius.type**: `"number"` = `'number'`

###### properties.borderBottomRightRadius

> `readonly` **properties.borderBottomRightRadius**: `object` = `nonNegativeNumber`

###### properties.borderBottomRightRadius.minimum

> `readonly` **properties.borderBottomRightRadius.minimum**: `0` = `0`

###### properties.borderBottomRightRadius.type

> `readonly` **properties.borderBottomRightRadius.type**: `"number"` = `'number'`

###### properties.borderBottomStyle

> `readonly` **properties.borderBottomStyle**: `object` = `borderStyle`

###### properties.borderBottomStyle.enum

> `readonly` **properties.borderBottomStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.borderBottomStyle.type

> `readonly` **properties.borderBottomStyle.type**: `"string"` = `'string'`

###### properties.borderBottomWidth

> `readonly` **properties.borderBottomWidth**: `object` = `nonNegativeNumber`

###### properties.borderBottomWidth.minimum

> `readonly` **properties.borderBottomWidth.minimum**: `0` = `0`

###### properties.borderBottomWidth.type

> `readonly` **properties.borderBottomWidth.type**: `"number"` = `'number'`

###### properties.borderColor

> `readonly` **properties.borderColor**: `object`

###### properties.borderColor.type

> `readonly` **properties.borderColor.type**: `"string"` = `'string'`

###### properties.borderLeftColor

> `readonly` **properties.borderLeftColor**: `object`

###### properties.borderLeftColor.type

> `readonly` **properties.borderLeftColor.type**: `"string"` = `'string'`

###### properties.borderLeftStyle

> `readonly` **properties.borderLeftStyle**: `object` = `borderStyle`

###### properties.borderLeftStyle.enum

> `readonly` **properties.borderLeftStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.borderLeftStyle.type

> `readonly` **properties.borderLeftStyle.type**: `"string"` = `'string'`

###### properties.borderLeftWidth

> `readonly` **properties.borderLeftWidth**: `object` = `nonNegativeNumber`

###### properties.borderLeftWidth.minimum

> `readonly` **properties.borderLeftWidth.minimum**: `0` = `0`

###### properties.borderLeftWidth.type

> `readonly` **properties.borderLeftWidth.type**: `"number"` = `'number'`

###### properties.borderRadius

> `readonly` **properties.borderRadius**: `object` = `nonNegativeNumber`

###### properties.borderRadius.minimum

> `readonly` **properties.borderRadius.minimum**: `0` = `0`

###### properties.borderRadius.type

> `readonly` **properties.borderRadius.type**: `"number"` = `'number'`

###### properties.borderRightColor

> `readonly` **properties.borderRightColor**: `object`

###### properties.borderRightColor.type

> `readonly` **properties.borderRightColor.type**: `"string"` = `'string'`

###### properties.borderRightStyle

> `readonly` **properties.borderRightStyle**: `object` = `borderStyle`

###### properties.borderRightStyle.enum

> `readonly` **properties.borderRightStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.borderRightStyle.type

> `readonly` **properties.borderRightStyle.type**: `"string"` = `'string'`

###### properties.borderRightWidth

> `readonly` **properties.borderRightWidth**: `object` = `nonNegativeNumber`

###### properties.borderRightWidth.minimum

> `readonly` **properties.borderRightWidth.minimum**: `0` = `0`

###### properties.borderRightWidth.type

> `readonly` **properties.borderRightWidth.type**: `"number"` = `'number'`

###### properties.borderStyle

> `readonly` **properties.borderStyle**: `object` = `borderStyle`

###### properties.borderStyle.enum

> `readonly` **properties.borderStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.borderStyle.type

> `readonly` **properties.borderStyle.type**: `"string"` = `'string'`

###### properties.borderTopColor

> `readonly` **properties.borderTopColor**: `object`

###### properties.borderTopColor.type

> `readonly` **properties.borderTopColor.type**: `"string"` = `'string'`

###### properties.borderTopLeftRadius

> `readonly` **properties.borderTopLeftRadius**: `object` = `nonNegativeNumber`

###### properties.borderTopLeftRadius.minimum

> `readonly` **properties.borderTopLeftRadius.minimum**: `0` = `0`

###### properties.borderTopLeftRadius.type

> `readonly` **properties.borderTopLeftRadius.type**: `"number"` = `'number'`

###### properties.borderTopRightRadius

> `readonly` **properties.borderTopRightRadius**: `object` = `nonNegativeNumber`

###### properties.borderTopRightRadius.minimum

> `readonly` **properties.borderTopRightRadius.minimum**: `0` = `0`

###### properties.borderTopRightRadius.type

> `readonly` **properties.borderTopRightRadius.type**: `"number"` = `'number'`

###### properties.borderTopStyle

> `readonly` **properties.borderTopStyle**: `object` = `borderStyle`

###### properties.borderTopStyle.enum

> `readonly` **properties.borderTopStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.borderTopStyle.type

> `readonly` **properties.borderTopStyle.type**: `"string"` = `'string'`

###### properties.borderTopWidth

> `readonly` **properties.borderTopWidth**: `object` = `nonNegativeNumber`

###### properties.borderTopWidth.minimum

> `readonly` **properties.borderTopWidth.minimum**: `0` = `0`

###### properties.borderTopWidth.type

> `readonly` **properties.borderTopWidth.type**: `"number"` = `'number'`

###### properties.borderWidth

> `readonly` **properties.borderWidth**: `object` = `nonNegativeNumber`

###### properties.borderWidth.minimum

> `readonly` **properties.borderWidth.minimum**: `0` = `0`

###### properties.borderWidth.type

> `readonly` **properties.borderWidth.type**: `"number"` = `'number'`

###### properties.bottom

> `readonly` **properties.bottom**: `object`

###### properties.bottom.type

> `readonly` **properties.bottom.type**: `"number"` = `'number'`

###### properties.boxShadow

> `readonly` **properties.boxShadow**: `object`

###### properties.boxShadow.type

> `readonly` **properties.boxShadow.type**: `"string"` = `'string'`

###### properties.display

> `readonly` **properties.display**: `object`

###### properties.display.enum

> `readonly` **properties.display.enum**: readonly [`"flex"`, `"none"`]

###### properties.display.type

> `readonly` **properties.display.type**: `"string"` = `'string'`

###### properties.flexBasis

> `readonly` **properties.flexBasis**: `object` = `nonNegativeNumber`

###### properties.flexBasis.minimum

> `readonly` **properties.flexBasis.minimum**: `0` = `0`

###### properties.flexBasis.type

> `readonly` **properties.flexBasis.type**: `"number"` = `'number'`

###### properties.flexDirection

> `readonly` **properties.flexDirection**: `object`

###### properties.flexDirection.enum

> `readonly` **properties.flexDirection.enum**: readonly [`"row"`, `"row-reverse"`, `"column"`, `"column-reverse"`]

###### properties.flexDirection.type

> `readonly` **properties.flexDirection.type**: `"string"` = `'string'`

###### properties.flexGrow

> `readonly` **properties.flexGrow**: `object` = `nonNegativeNumber`

###### properties.flexGrow.minimum

> `readonly` **properties.flexGrow.minimum**: `0` = `0`

###### properties.flexGrow.type

> `readonly` **properties.flexGrow.type**: `"number"` = `'number'`

###### properties.flexShrink

> `readonly` **properties.flexShrink**: `object` = `nonNegativeNumber`

###### properties.flexShrink.minimum

> `readonly` **properties.flexShrink.minimum**: `0` = `0`

###### properties.flexShrink.type

> `readonly` **properties.flexShrink.type**: `"number"` = `'number'`

###### properties.flexWrap

> `readonly` **properties.flexWrap**: `object`

###### properties.flexWrap.enum

> `readonly` **properties.flexWrap.enum**: readonly [`"nowrap"`, `"wrap"`, `"wrap-reverse"`]

###### properties.flexWrap.type

> `readonly` **properties.flexWrap.type**: `"string"` = `'string'`

###### properties.gap

> `readonly` **properties.gap**: `object` = `nonNegativeNumber`

###### properties.gap.minimum

> `readonly` **properties.gap.minimum**: `0` = `0`

###### properties.gap.type

> `readonly` **properties.gap.type**: `"number"` = `'number'`

###### properties.height

> `readonly` **properties.height**: `object` = `nonNegativeNumber`

###### properties.height.minimum

> `readonly` **properties.height.minimum**: `0` = `0`

###### properties.height.type

> `readonly` **properties.height.type**: `"number"` = `'number'`

###### properties.justifyContent

> `readonly` **properties.justifyContent**: `object`

###### properties.justifyContent.enum

> `readonly` **properties.justifyContent.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`, `"space-around"`]

###### properties.justifyContent.type

> `readonly` **properties.justifyContent.type**: `"string"` = `'string'`

###### properties.left

> `readonly` **properties.left**: `object`

###### properties.left.type

> `readonly` **properties.left.type**: `"number"` = `'number'`

###### properties.margin

> `readonly` **properties.margin**: `object`

###### properties.margin.type

> `readonly` **properties.margin.type**: `"number"` = `'number'`

###### properties.marginBottom

> `readonly` **properties.marginBottom**: `object`

###### properties.marginBottom.type

> `readonly` **properties.marginBottom.type**: `"number"` = `'number'`

###### properties.marginLeft

> `readonly` **properties.marginLeft**: `object`

###### properties.marginLeft.type

> `readonly` **properties.marginLeft.type**: `"number"` = `'number'`

###### properties.marginRight

> `readonly` **properties.marginRight**: `object`

###### properties.marginRight.type

> `readonly` **properties.marginRight.type**: `"number"` = `'number'`

###### properties.marginTop

> `readonly` **properties.marginTop**: `object`

###### properties.marginTop.type

> `readonly` **properties.marginTop.type**: `"number"` = `'number'`

###### properties.maxHeight

> `readonly` **properties.maxHeight**: `object` = `nonNegativeNumber`

###### properties.maxHeight.minimum

> `readonly` **properties.maxHeight.minimum**: `0` = `0`

###### properties.maxHeight.type

> `readonly` **properties.maxHeight.type**: `"number"` = `'number'`

###### properties.maxWidth

> `readonly` **properties.maxWidth**: `object` = `nonNegativeNumber`

###### properties.maxWidth.minimum

> `readonly` **properties.maxWidth.minimum**: `0` = `0`

###### properties.maxWidth.type

> `readonly` **properties.maxWidth.type**: `"number"` = `'number'`

###### properties.minHeight

> `readonly` **properties.minHeight**: `object` = `nonNegativeNumber`

###### properties.minHeight.minimum

> `readonly` **properties.minHeight.minimum**: `0` = `0`

###### properties.minHeight.type

> `readonly` **properties.minHeight.type**: `"number"` = `'number'`

###### properties.minWidth

> `readonly` **properties.minWidth**: `object` = `nonNegativeNumber`

###### properties.minWidth.minimum

> `readonly` **properties.minWidth.minimum**: `0` = `0`

###### properties.minWidth.type

> `readonly` **properties.minWidth.type**: `"number"` = `'number'`

###### properties.objectFit

> `readonly` **properties.objectFit**: `object`

###### properties.objectFit.enum

> `readonly` **properties.objectFit.enum**: readonly [`"none"`, `"contain"`, `"cover"`]

###### properties.objectFit.type

> `readonly` **properties.objectFit.type**: `"string"` = `'string'`

###### properties.opacity

> `readonly` **properties.opacity**: `object` = `nonNegativeNumber`

###### properties.opacity.minimum

> `readonly` **properties.opacity.minimum**: `0` = `0`

###### properties.opacity.type

> `readonly` **properties.opacity.type**: `"number"` = `'number'`

###### properties.overflow

> `readonly` **properties.overflow**: `object`

###### properties.overflow.enum

> `readonly` **properties.overflow.enum**: readonly [`"visible"`, `"hidden"`]

###### properties.overflow.type

> `readonly` **properties.overflow.type**: `"string"` = `'string'`

###### properties.padding

> `readonly` **properties.padding**: `object` = `nonNegativeNumber`

###### properties.padding.minimum

> `readonly` **properties.padding.minimum**: `0` = `0`

###### properties.padding.type

> `readonly` **properties.padding.type**: `"number"` = `'number'`

###### properties.paddingBottom

> `readonly` **properties.paddingBottom**: `object` = `nonNegativeNumber`

###### properties.paddingBottom.minimum

> `readonly` **properties.paddingBottom.minimum**: `0` = `0`

###### properties.paddingBottom.type

> `readonly` **properties.paddingBottom.type**: `"number"` = `'number'`

###### properties.paddingLeft

> `readonly` **properties.paddingLeft**: `object` = `nonNegativeNumber`

###### properties.paddingLeft.minimum

> `readonly` **properties.paddingLeft.minimum**: `0` = `0`

###### properties.paddingLeft.type

> `readonly` **properties.paddingLeft.type**: `"number"` = `'number'`

###### properties.paddingRight

> `readonly` **properties.paddingRight**: `object` = `nonNegativeNumber`

###### properties.paddingRight.minimum

> `readonly` **properties.paddingRight.minimum**: `0` = `0`

###### properties.paddingRight.type

> `readonly` **properties.paddingRight.type**: `"number"` = `'number'`

###### properties.paddingTop

> `readonly` **properties.paddingTop**: `object` = `nonNegativeNumber`

###### properties.paddingTop.minimum

> `readonly` **properties.paddingTop.minimum**: `0` = `0`

###### properties.paddingTop.type

> `readonly` **properties.paddingTop.type**: `"number"` = `'number'`

###### properties.position

> `readonly` **properties.position**: `object`

###### properties.position.enum

> `readonly` **properties.position.enum**: readonly [`"relative"`, `"absolute"`]

###### properties.position.type

> `readonly` **properties.position.type**: `"string"` = `'string'`

###### properties.right

> `readonly` **properties.right**: `object`

###### properties.right.type

> `readonly` **properties.right.type**: `"number"` = `'number'`

###### properties.top

> `readonly` **properties.top**: `object`

###### properties.top.type

> `readonly` **properties.top.type**: `"number"` = `'number'`

###### properties.width

> `readonly` **properties.width**: `object` = `nonNegativeNumber`

###### properties.width.minimum

> `readonly` **properties.width.minimum**: `0` = `0`

###### properties.width.type

> `readonly` **properties.width.type**: `"number"` = `'number'`

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### boxV0

> `const` **boxV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.props

> `readonly` **properties.props**: `object` = `boxPropsV0`

###### properties.props.additionalProperties

> `readonly` **properties.props.additionalProperties**: `false` = `false`

###### properties.props.properties

> `readonly` **properties.props.properties**: `object`

###### properties.props.properties.children

> `readonly` **properties.props.properties.children**: `object`

###### properties.props.properties.children.items

> `readonly` **properties.props.properties.children.items**: `object` = `boxChildrenV0`

###### properties.props.properties.children.items.anyOf

> `readonly` **properties.props.properties.children.items.anyOf**: readonly [`object`, `object`]

###### properties.props.properties.children.type

> `readonly` **properties.props.properties.children.type**: `"array"` = `'array'`

###### properties.props.properties.key

> `readonly` **properties.props.properties.key**: `object`

###### properties.props.properties.key.type

> `readonly` **properties.props.properties.key.type**: `"string"` = `'string'`

###### properties.props.properties.style

> `readonly` **properties.props.properties.style**: `object` = `boxStyleV0`

###### properties.props.properties.style.additionalProperties

> `readonly` **properties.props.properties.style.additionalProperties**: `false` = `false`

###### properties.props.properties.style.properties

> `readonly` **properties.props.properties.style.properties**: `object`

###### properties.props.properties.style.properties.alignItems

> `readonly` **properties.props.properties.style.properties.alignItems**: `object`

###### properties.props.properties.style.properties.alignItems.enum

> `readonly` **properties.props.properties.style.properties.alignItems.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`]

###### properties.props.properties.style.properties.alignItems.type

> `readonly` **properties.props.properties.style.properties.alignItems.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.alignSelf

> `readonly` **properties.props.properties.style.properties.alignSelf**: `object`

###### properties.props.properties.style.properties.alignSelf.enum

> `readonly` **properties.props.properties.style.properties.alignSelf.enum**: readonly [`"auto"`, `"flex-start"`, `"center"`, `"flex-end"`]

###### properties.props.properties.style.properties.alignSelf.type

> `readonly` **properties.props.properties.style.properties.alignSelf.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundClip

> `readonly` **properties.props.properties.style.properties.backgroundClip**: `object`

###### properties.props.properties.style.properties.backgroundClip.enum

> `readonly` **properties.props.properties.style.properties.backgroundClip.enum**: readonly [`"border-box"`, `"text"`]

###### properties.props.properties.style.properties.backgroundClip.type

> `readonly` **properties.props.properties.style.properties.backgroundClip.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundColor

> `readonly` **properties.props.properties.style.properties.backgroundColor**: `object`

###### properties.props.properties.style.properties.backgroundColor.type

> `readonly` **properties.props.properties.style.properties.backgroundColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundImage

> `readonly` **properties.props.properties.style.properties.backgroundImage**: `object`

###### properties.props.properties.style.properties.backgroundImage.type

> `readonly` **properties.props.properties.style.properties.backgroundImage.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundPosition

> `readonly` **properties.props.properties.style.properties.backgroundPosition**: `object`

###### properties.props.properties.style.properties.backgroundPosition.type

> `readonly` **properties.props.properties.style.properties.backgroundPosition.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundRepeat

> `readonly` **properties.props.properties.style.properties.backgroundRepeat**: `object`

###### properties.props.properties.style.properties.backgroundRepeat.enum

> `readonly` **properties.props.properties.style.properties.backgroundRepeat.enum**: readonly [`"repeat"`, `"repeat-x"`, `"repeat-y"`, `"no-repeat"`]

###### properties.props.properties.style.properties.backgroundRepeat.type

> `readonly` **properties.props.properties.style.properties.backgroundRepeat.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundSize

> `readonly` **properties.props.properties.style.properties.backgroundSize**: `object`

###### properties.props.properties.style.properties.backgroundSize.type

> `readonly` **properties.props.properties.style.properties.backgroundSize.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomColor

> `readonly` **properties.props.properties.style.properties.borderBottomColor**: `object`

###### properties.props.properties.style.properties.borderBottomColor.type

> `readonly` **properties.props.properties.style.properties.borderBottomColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomLeftRadius

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomLeftRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomLeftRadius.type

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderBottomRightRadius

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomRightRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomRightRadius.type

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderBottomStyle

> `readonly` **properties.props.properties.style.properties.borderBottomStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderBottomStyle.enum

> `readonly` **properties.props.properties.style.properties.borderBottomStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderBottomStyle.type

> `readonly` **properties.props.properties.style.properties.borderBottomStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomWidth

> `readonly` **properties.props.properties.style.properties.borderBottomWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomWidth.type

> `readonly` **properties.props.properties.style.properties.borderBottomWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderColor

> `readonly` **properties.props.properties.style.properties.borderColor**: `object`

###### properties.props.properties.style.properties.borderColor.type

> `readonly` **properties.props.properties.style.properties.borderColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftColor

> `readonly` **properties.props.properties.style.properties.borderLeftColor**: `object`

###### properties.props.properties.style.properties.borderLeftColor.type

> `readonly` **properties.props.properties.style.properties.borderLeftColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftStyle

> `readonly` **properties.props.properties.style.properties.borderLeftStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderLeftStyle.enum

> `readonly` **properties.props.properties.style.properties.borderLeftStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderLeftStyle.type

> `readonly` **properties.props.properties.style.properties.borderLeftStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftWidth

> `readonly` **properties.props.properties.style.properties.borderLeftWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderLeftWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderLeftWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderLeftWidth.type

> `readonly` **properties.props.properties.style.properties.borderLeftWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderRadius

> `readonly` **properties.props.properties.style.properties.borderRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderRadius.type

> `readonly` **properties.props.properties.style.properties.borderRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderRightColor

> `readonly` **properties.props.properties.style.properties.borderRightColor**: `object`

###### properties.props.properties.style.properties.borderRightColor.type

> `readonly` **properties.props.properties.style.properties.borderRightColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderRightStyle

> `readonly` **properties.props.properties.style.properties.borderRightStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderRightStyle.enum

> `readonly` **properties.props.properties.style.properties.borderRightStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderRightStyle.type

> `readonly` **properties.props.properties.style.properties.borderRightStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderRightWidth

> `readonly` **properties.props.properties.style.properties.borderRightWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderRightWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderRightWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderRightWidth.type

> `readonly` **properties.props.properties.style.properties.borderRightWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderStyle

> `readonly` **properties.props.properties.style.properties.borderStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderStyle.enum

> `readonly` **properties.props.properties.style.properties.borderStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderStyle.type

> `readonly` **properties.props.properties.style.properties.borderStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopColor

> `readonly` **properties.props.properties.style.properties.borderTopColor**: `object`

###### properties.props.properties.style.properties.borderTopColor.type

> `readonly` **properties.props.properties.style.properties.borderTopColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopLeftRadius

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopLeftRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopLeftRadius.type

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderTopRightRadius

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopRightRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopRightRadius.type

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderTopStyle

> `readonly` **properties.props.properties.style.properties.borderTopStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderTopStyle.enum

> `readonly` **properties.props.properties.style.properties.borderTopStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderTopStyle.type

> `readonly` **properties.props.properties.style.properties.borderTopStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopWidth

> `readonly` **properties.props.properties.style.properties.borderTopWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderTopWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopWidth.type

> `readonly` **properties.props.properties.style.properties.borderTopWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderWidth

> `readonly` **properties.props.properties.style.properties.borderWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderWidth.type

> `readonly` **properties.props.properties.style.properties.borderWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.bottom

> `readonly` **properties.props.properties.style.properties.bottom**: `object`

###### properties.props.properties.style.properties.bottom.type

> `readonly` **properties.props.properties.style.properties.bottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.boxShadow

> `readonly` **properties.props.properties.style.properties.boxShadow**: `object`

###### properties.props.properties.style.properties.boxShadow.type

> `readonly` **properties.props.properties.style.properties.boxShadow.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.display

> `readonly` **properties.props.properties.style.properties.display**: `object`

###### properties.props.properties.style.properties.display.enum

> `readonly` **properties.props.properties.style.properties.display.enum**: readonly [`"flex"`, `"none"`]

###### properties.props.properties.style.properties.display.type

> `readonly` **properties.props.properties.style.properties.display.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.flexBasis

> `readonly` **properties.props.properties.style.properties.flexBasis**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexBasis.minimum

> `readonly` **properties.props.properties.style.properties.flexBasis.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexBasis.type

> `readonly` **properties.props.properties.style.properties.flexBasis.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexDirection

> `readonly` **properties.props.properties.style.properties.flexDirection**: `object`

###### properties.props.properties.style.properties.flexDirection.enum

> `readonly` **properties.props.properties.style.properties.flexDirection.enum**: readonly [`"row"`, `"row-reverse"`, `"column"`, `"column-reverse"`]

###### properties.props.properties.style.properties.flexDirection.type

> `readonly` **properties.props.properties.style.properties.flexDirection.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.flexGrow

> `readonly` **properties.props.properties.style.properties.flexGrow**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexGrow.minimum

> `readonly` **properties.props.properties.style.properties.flexGrow.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexGrow.type

> `readonly` **properties.props.properties.style.properties.flexGrow.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexShrink

> `readonly` **properties.props.properties.style.properties.flexShrink**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexShrink.minimum

> `readonly` **properties.props.properties.style.properties.flexShrink.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexShrink.type

> `readonly` **properties.props.properties.style.properties.flexShrink.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexWrap

> `readonly` **properties.props.properties.style.properties.flexWrap**: `object`

###### properties.props.properties.style.properties.flexWrap.enum

> `readonly` **properties.props.properties.style.properties.flexWrap.enum**: readonly [`"nowrap"`, `"wrap"`, `"wrap-reverse"`]

###### properties.props.properties.style.properties.flexWrap.type

> `readonly` **properties.props.properties.style.properties.flexWrap.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.gap

> `readonly` **properties.props.properties.style.properties.gap**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.gap.minimum

> `readonly` **properties.props.properties.style.properties.gap.minimum**: `0` = `0`

###### properties.props.properties.style.properties.gap.type

> `readonly` **properties.props.properties.style.properties.gap.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.height

> `readonly` **properties.props.properties.style.properties.height**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.height.minimum

> `readonly` **properties.props.properties.style.properties.height.minimum**: `0` = `0`

###### properties.props.properties.style.properties.height.type

> `readonly` **properties.props.properties.style.properties.height.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.justifyContent

> `readonly` **properties.props.properties.style.properties.justifyContent**: `object`

###### properties.props.properties.style.properties.justifyContent.enum

> `readonly` **properties.props.properties.style.properties.justifyContent.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`, `"space-around"`]

###### properties.props.properties.style.properties.justifyContent.type

> `readonly` **properties.props.properties.style.properties.justifyContent.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.left

> `readonly` **properties.props.properties.style.properties.left**: `object`

###### properties.props.properties.style.properties.left.type

> `readonly` **properties.props.properties.style.properties.left.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.margin

> `readonly` **properties.props.properties.style.properties.margin**: `object`

###### properties.props.properties.style.properties.margin.type

> `readonly` **properties.props.properties.style.properties.margin.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginBottom

> `readonly` **properties.props.properties.style.properties.marginBottom**: `object`

###### properties.props.properties.style.properties.marginBottom.type

> `readonly` **properties.props.properties.style.properties.marginBottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginLeft

> `readonly` **properties.props.properties.style.properties.marginLeft**: `object`

###### properties.props.properties.style.properties.marginLeft.type

> `readonly` **properties.props.properties.style.properties.marginLeft.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginRight

> `readonly` **properties.props.properties.style.properties.marginRight**: `object`

###### properties.props.properties.style.properties.marginRight.type

> `readonly` **properties.props.properties.style.properties.marginRight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginTop

> `readonly` **properties.props.properties.style.properties.marginTop**: `object`

###### properties.props.properties.style.properties.marginTop.type

> `readonly` **properties.props.properties.style.properties.marginTop.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.maxHeight

> `readonly` **properties.props.properties.style.properties.maxHeight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.maxHeight.minimum

> `readonly` **properties.props.properties.style.properties.maxHeight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.maxHeight.type

> `readonly` **properties.props.properties.style.properties.maxHeight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.maxWidth

> `readonly` **properties.props.properties.style.properties.maxWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.maxWidth.minimum

> `readonly` **properties.props.properties.style.properties.maxWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.maxWidth.type

> `readonly` **properties.props.properties.style.properties.maxWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.minHeight

> `readonly` **properties.props.properties.style.properties.minHeight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.minHeight.minimum

> `readonly` **properties.props.properties.style.properties.minHeight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.minHeight.type

> `readonly` **properties.props.properties.style.properties.minHeight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.minWidth

> `readonly` **properties.props.properties.style.properties.minWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.minWidth.minimum

> `readonly` **properties.props.properties.style.properties.minWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.minWidth.type

> `readonly` **properties.props.properties.style.properties.minWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.objectFit

> `readonly` **properties.props.properties.style.properties.objectFit**: `object`

###### properties.props.properties.style.properties.objectFit.enum

> `readonly` **properties.props.properties.style.properties.objectFit.enum**: readonly [`"none"`, `"contain"`, `"cover"`]

###### properties.props.properties.style.properties.objectFit.type

> `readonly` **properties.props.properties.style.properties.objectFit.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.opacity

> `readonly` **properties.props.properties.style.properties.opacity**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.opacity.minimum

> `readonly` **properties.props.properties.style.properties.opacity.minimum**: `0` = `0`

###### properties.props.properties.style.properties.opacity.type

> `readonly` **properties.props.properties.style.properties.opacity.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.overflow

> `readonly` **properties.props.properties.style.properties.overflow**: `object`

###### properties.props.properties.style.properties.overflow.enum

> `readonly` **properties.props.properties.style.properties.overflow.enum**: readonly [`"visible"`, `"hidden"`]

###### properties.props.properties.style.properties.overflow.type

> `readonly` **properties.props.properties.style.properties.overflow.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.padding

> `readonly` **properties.props.properties.style.properties.padding**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.padding.minimum

> `readonly` **properties.props.properties.style.properties.padding.minimum**: `0` = `0`

###### properties.props.properties.style.properties.padding.type

> `readonly` **properties.props.properties.style.properties.padding.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingBottom

> `readonly` **properties.props.properties.style.properties.paddingBottom**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingBottom.minimum

> `readonly` **properties.props.properties.style.properties.paddingBottom.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingBottom.type

> `readonly` **properties.props.properties.style.properties.paddingBottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingLeft

> `readonly` **properties.props.properties.style.properties.paddingLeft**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingLeft.minimum

> `readonly` **properties.props.properties.style.properties.paddingLeft.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingLeft.type

> `readonly` **properties.props.properties.style.properties.paddingLeft.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingRight

> `readonly` **properties.props.properties.style.properties.paddingRight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingRight.minimum

> `readonly` **properties.props.properties.style.properties.paddingRight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingRight.type

> `readonly` **properties.props.properties.style.properties.paddingRight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingTop

> `readonly` **properties.props.properties.style.properties.paddingTop**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingTop.minimum

> `readonly` **properties.props.properties.style.properties.paddingTop.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingTop.type

> `readonly` **properties.props.properties.style.properties.paddingTop.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.position

> `readonly` **properties.props.properties.style.properties.position**: `object`

###### properties.props.properties.style.properties.position.enum

> `readonly` **properties.props.properties.style.properties.position.enum**: readonly [`"relative"`, `"absolute"`]

###### properties.props.properties.style.properties.position.type

> `readonly` **properties.props.properties.style.properties.position.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.right

> `readonly` **properties.props.properties.style.properties.right**: `object`

###### properties.props.properties.style.properties.right.type

> `readonly` **properties.props.properties.style.properties.right.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.top

> `readonly` **properties.props.properties.style.properties.top**: `object`

###### properties.props.properties.style.properties.top.type

> `readonly` **properties.props.properties.style.properties.top.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.width

> `readonly` **properties.props.properties.style.properties.width**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.width.minimum

> `readonly` **properties.props.properties.style.properties.width.minimum**: `0` = `0`

###### properties.props.properties.style.properties.width.type

> `readonly` **properties.props.properties.style.properties.width.type**: `"number"` = `'number'`

###### properties.props.properties.style.type

> `readonly` **properties.props.properties.style.type**: `"object"` = `'object'`

###### properties.props.type

> `readonly` **properties.props.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object`

###### properties.type.const

> `readonly` **properties.type.const**: `"Box"` = `'Box'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"props"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### didSignType

> `const` **didSignType**: `object`

#### Type declaration

##### const

> `readonly` **const**: `"tairu:did/sign"` = `'tairu:did/sign'`

##### type

> `readonly` **type**: `"string"` = `'string'`

***

### didSubmitType

> `const` **didSubmitType**: `object`

#### Type declaration

##### const

> `readonly` **const**: `"tairu:did/submit"` = `'tairu:did/submit'`

##### type

> `readonly` **type**: `"string"` = `'string'`

***

### elementTypeV0

> `const` **elementTypeV0**: `object`

#### Type declaration

##### enum

> `readonly` **enum**: readonly [`"Box"`, `"Image"`, `"Text"`]

##### type

> `readonly` **type**: `"string"` = `'string'`

***

### elementV0

> `const` **elementV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.props

> `readonly` **properties.props**: `object`

###### properties.props.type

> `readonly` **properties.props.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object` = `elementTypeV0`

###### properties.type.enum

> `readonly` **properties.type.enum**: readonly [`"Box"`, `"Image"`, `"Text"`]

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"props"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### handlerFormatV0

> `const` **handlerFormatV0**: `object`

#### Type declaration

##### enum

> `readonly` **enum**: readonly [`"html"`, `"html-embed"`, `"json"`, `"svg"`]

##### type

> `readonly` **type**: `"string"` = `'string'`

***

### handlerQueryParamsV0

> `const` **handlerQueryParamsV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `true` = `true`

##### properties

> `readonly` **properties**: `object`

###### properties.tile-format

> `readonly` **properties.tile-format**: `object` = `handlerFormatV0`

###### properties.tile-format.enum

> `readonly` **properties.tile-format.enum**: readonly [`"html"`, `"html-embed"`, `"json"`, `"svg"`]

###### properties.tile-format.type

> `readonly` **properties.tile-format.type**: `"string"` = `'string'`

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### imagePropsV0

> `const` **imagePropsV0**: `object`

#### Type declaration

##### properties

> `readonly` **properties**: `object`

###### properties.alt

> `readonly` **properties.alt**: `object`

###### properties.alt.type

> `readonly` **properties.alt.type**: `"string"` = `'string'`

###### properties.height

> `readonly` **properties.height**: `object` = `nonNegativeNumber`

###### properties.height.minimum

> `readonly` **properties.height.minimum**: `0` = `0`

###### properties.height.type

> `readonly` **properties.height.type**: `"number"` = `'number'`

###### properties.key

> `readonly` **properties.key**: `object`

###### properties.key.type

> `readonly` **properties.key.type**: `"string"` = `'string'`

###### properties.src

> `readonly` **properties.src**: `object`

###### properties.src.type

> `readonly` **properties.src.type**: `"string"` = `'string'`

###### properties.width

> `readonly` **properties.width**: `object` = `nonNegativeNumber`

###### properties.width.minimum

> `readonly` **properties.width.minimum**: `0` = `0`

###### properties.width.type

> `readonly` **properties.width.type**: `"number"` = `'number'`

##### required

> `readonly` **required**: readonly [`"src"`, `"alt"`, `"height"`, `"width"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### imageV0

> `const` **imageV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.props

> `readonly` **properties.props**: `object` = `imagePropsV0`

###### properties.props.properties

> `readonly` **properties.props.properties**: `object`

###### properties.props.properties.alt

> `readonly` **properties.props.properties.alt**: `object`

###### properties.props.properties.alt.type

> `readonly` **properties.props.properties.alt.type**: `"string"` = `'string'`

###### properties.props.properties.height

> `readonly` **properties.props.properties.height**: `object` = `nonNegativeNumber`

###### properties.props.properties.height.minimum

> `readonly` **properties.props.properties.height.minimum**: `0` = `0`

###### properties.props.properties.height.type

> `readonly` **properties.props.properties.height.type**: `"number"` = `'number'`

###### properties.props.properties.key

> `readonly` **properties.props.properties.key**: `object`

###### properties.props.properties.key.type

> `readonly` **properties.props.properties.key.type**: `"string"` = `'string'`

###### properties.props.properties.src

> `readonly` **properties.props.properties.src**: `object`

###### properties.props.properties.src.type

> `readonly` **properties.props.properties.src.type**: `"string"` = `'string'`

###### properties.props.properties.width

> `readonly` **properties.props.properties.width**: `object` = `nonNegativeNumber`

###### properties.props.properties.width.minimum

> `readonly` **properties.props.properties.width.minimum**: `0` = `0`

###### properties.props.properties.width.type

> `readonly` **properties.props.properties.width.type**: `"number"` = `'number'`

###### properties.props.required

> `readonly` **properties.props.required**: readonly [`"src"`, `"alt"`, `"height"`, `"width"`]

###### properties.props.type

> `readonly` **properties.props.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object`

###### properties.type.const

> `readonly` **properties.type.const**: `"Image"` = `'Image'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"props"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### inputOptionV0

> `const` **inputOptionV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.label

> `readonly` **properties.label**: `object`

###### properties.label.type

> `readonly` **properties.label.type**: `"string"` = `'string'`

###### properties.value

> `readonly` **properties.value**: `object` = `optionValueV0`

###### properties.value.anyOf

> `readonly` **properties.value.anyOf**: readonly [`object`, `object`, `object`]

##### required

> `readonly` **required**: readonly [`"label"`, `"value"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### inputV0

> `const` **inputV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`]

***

### openActionV0

> `const` **openActionV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.label

> `readonly` **properties.label**: `object`

###### properties.label.type

> `readonly` **properties.label.type**: `"string"` = `'string'`

###### properties.type

> `readonly` **properties.type**: `object` = `uriOpenActionType`

###### properties.type.const

> `readonly` **properties.type.const**: `"tairu:uri/open"` = `'tairu:uri/open'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

###### properties.uri

> `readonly` **properties.uri**: `object`

###### properties.uri.type

> `readonly` **properties.uri.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"label"`, `"uri"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### optionsInputV0

> `const` **optionsInputV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.multiple

> `readonly` **properties.multiple**: `object`

###### properties.multiple.type

> `readonly` **properties.multiple.type**: `"boolean"` = `'boolean'`

###### properties.options

> `readonly` **properties.options**: `object`

###### properties.options.items

> `readonly` **properties.options.items**: `object` = `inputOptionV0`

###### properties.options.items.additionalProperties

> `readonly` **properties.options.items.additionalProperties**: `false` = `false`

###### properties.options.items.properties

> `readonly` **properties.options.items.properties**: `object`

###### properties.options.items.properties.label

> `readonly` **properties.options.items.properties.label**: `object`

###### properties.options.items.properties.label.type

> `readonly` **properties.options.items.properties.label.type**: `"string"` = `'string'`

###### properties.options.items.properties.value

> `readonly` **properties.options.items.properties.value**: `object` = `optionValueV0`

###### properties.options.items.properties.value.anyOf

> `readonly` **properties.options.items.properties.value.anyOf**: readonly [`object`, `object`, `object`]

###### properties.options.items.required

> `readonly` **properties.options.items.required**: readonly [`"label"`, `"value"`]

###### properties.options.items.type

> `readonly` **properties.options.items.type**: `"object"` = `'object'`

###### properties.options.minItems

> `readonly` **properties.options.minItems**: `1` = `1`

###### properties.options.type

> `readonly` **properties.options.type**: `"array"` = `'array'`

###### properties.type

> `readonly` **properties.type**: `object`

###### properties.type.const

> `readonly` **properties.type.const**: `"options"` = `'options'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"options"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### optionValueV0

> `const` **optionValueV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`, `object`]

***

### postActionV0

> `const` **postActionV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`]

***

### signActionV0

> `const` **signActionV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.label

> `readonly` **properties.label**: `object`

###### properties.label.type

> `readonly` **properties.label.type**: `"string"` = `'string'`

###### properties.payload

> `readonly` **properties.payload**: `object`

###### properties.payload.type

> `readonly` **properties.payload.type**: `"object"` = `'object'`

###### properties.state

> `readonly` **properties.state**: `object`

###### properties.state.type

> `readonly` **properties.state.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object` = `didSignType`

###### properties.type.const

> `readonly` **properties.type.const**: `"tairu:did/sign"` = `'tairu:did/sign'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"label"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### signedActionV0

> `const` **signedActionV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.jwt

> `readonly` **properties.jwt**: `object`

###### properties.jwt.type

> `readonly` **properties.jwt.type**: `"string"` = `'string'`

###### properties.state

> `readonly` **properties.state**: `object`

###### properties.state.type

> `readonly` **properties.state.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object` = `didSignType`

###### properties.type.const

> `readonly` **properties.type.const**: `"tairu:did/sign"` = `'tairu:did/sign'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"jwt"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### submitActionV0

> `const` **submitActionV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.label

> `readonly` **properties.label**: `object`

###### properties.label.type

> `readonly` **properties.label.type**: `"string"` = `'string'`

###### properties.state

> `readonly` **properties.state**: `object`

###### properties.state.type

> `readonly` **properties.state.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object` = `didSubmitType`

###### properties.type.const

> `readonly` **properties.type.const**: `"tairu:did/submit"` = `'tairu:did/submit'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"label"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### submittedActionV0

> `const` **submittedActionV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.state

> `readonly` **properties.state**: `object`

###### properties.state.type

> `readonly` **properties.state.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object` = `didSubmitType`

###### properties.type.const

> `readonly` **properties.type.const**: `"tairu:did/submit"` = `'tairu:did/submit'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

###### properties.value

> `readonly` **properties.value**: `object` = `submitValueV0`

###### properties.value.anyOf

> `readonly` **properties.value.anyOf**: readonly [`object`, `object`]

##### required

> `readonly` **required**: readonly [`"type"`, `"value"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### submitValueV0

> `const` **submitValueV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`]

***

### textChildrenV0

> `const` **textChildrenV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`]

***

### textInputV0

> `const` **textInputV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.defaultValue

> `readonly` **properties.defaultValue**: `object`

###### properties.defaultValue.type

> `readonly` **properties.defaultValue.type**: `"string"` = `'string'`

###### properties.label

> `readonly` **properties.label**: `object`

###### properties.label.type

> `readonly` **properties.label.type**: `"string"` = `'string'`

###### properties.placeholder

> `readonly` **properties.placeholder**: `object`

###### properties.placeholder.type

> `readonly` **properties.placeholder.type**: `"string"` = `'string'`

###### properties.secure

> `readonly` **properties.secure**: `object`

###### properties.secure.type

> `readonly` **properties.secure.type**: `"boolean"` = `'boolean'`

###### properties.type

> `readonly` **properties.type**: `object`

###### properties.type.const

> `readonly` **properties.type.const**: `"text"` = `'text'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"label"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### textNodeV0

> `const` **textNodeV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`]

***

### textPropsV0

> `const` **textPropsV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.children

> `readonly` **properties.children**: `object` = `textChildrenV0`

###### properties.children.anyOf

> `readonly` **properties.children.anyOf**: readonly [`object`, `object`]

###### properties.key

> `readonly` **properties.key**: `object`

###### properties.key.type

> `readonly` **properties.key.type**: `"string"` = `'string'`

###### properties.style

> `readonly` **properties.style**: `object` = `textStyleV0`

###### properties.style.additionalProperties

> `readonly` **properties.style.additionalProperties**: `false` = `false`

###### properties.style.properties

> `readonly` **properties.style.properties**: `object`

###### properties.style.properties.color

> `readonly` **properties.style.properties.color**: `object`

###### properties.style.properties.color.type

> `readonly` **properties.style.properties.color.type**: `"string"` = `'string'`

###### properties.style.properties.fontFamily

> `readonly` **properties.style.properties.fontFamily**: `object`

###### properties.style.properties.fontFamily.type

> `readonly` **properties.style.properties.fontFamily.type**: `"string"` = `'string'`

###### properties.style.properties.fontSize

> `readonly` **properties.style.properties.fontSize**: `object` = `nonNegativeNumber`

###### properties.style.properties.fontSize.minimum

> `readonly` **properties.style.properties.fontSize.minimum**: `0` = `0`

###### properties.style.properties.fontSize.type

> `readonly` **properties.style.properties.fontSize.type**: `"number"` = `'number'`

###### properties.style.properties.fontStyle

> `readonly` **properties.style.properties.fontStyle**: `object`

###### properties.style.properties.fontStyle.enum

> `readonly` **properties.style.properties.fontStyle.enum**: readonly [`"normal"`, `"italic"`]

###### properties.style.properties.fontStyle.type

> `readonly` **properties.style.properties.fontStyle.type**: `"string"` = `'string'`

###### properties.style.properties.fontWeight

> `readonly` **properties.style.properties.fontWeight**: `object`

###### properties.style.properties.fontWeight.enum

> `readonly` **properties.style.properties.fontWeight.enum**: readonly [`"normal"`, `"bold"`, `"100"`, `"200"`, `"300"`, `"400"`, `"500"`, `"600"`, `"700"`, `"800"`, `"900"`, `"ultralight"`, `"thin"`, `"light"`, `"medium"`, `"regular"`, `"semibold"`, `"condensedBold"`, `"condensed"`, `"heavy"`, `"black"`]

###### properties.style.properties.fontWeight.type

> `readonly` **properties.style.properties.fontWeight.type**: `"string"` = `'string'`

###### properties.style.properties.letterSpacing

> `readonly` **properties.style.properties.letterSpacing**: `object` = `nonNegativeNumber`

###### properties.style.properties.letterSpacing.minimum

> `readonly` **properties.style.properties.letterSpacing.minimum**: `0` = `0`

###### properties.style.properties.letterSpacing.type

> `readonly` **properties.style.properties.letterSpacing.type**: `"number"` = `'number'`

###### properties.style.properties.lineHeight

> `readonly` **properties.style.properties.lineHeight**: `object` = `nonNegativeNumber`

###### properties.style.properties.lineHeight.minimum

> `readonly` **properties.style.properties.lineHeight.minimum**: `0` = `0`

###### properties.style.properties.lineHeight.type

> `readonly` **properties.style.properties.lineHeight.type**: `"number"` = `'number'`

###### properties.style.properties.textAlign

> `readonly` **properties.style.properties.textAlign**: `object`

###### properties.style.properties.textAlign.enum

> `readonly` **properties.style.properties.textAlign.enum**: readonly [`"left"`, `"right"`, `"center"`, `"justify"`]

###### properties.style.properties.textAlign.type

> `readonly` **properties.style.properties.textAlign.type**: `"string"` = `'string'`

###### properties.style.properties.textDecoration

> `readonly` **properties.style.properties.textDecoration**: `object`

###### properties.style.properties.textDecoration.type

> `readonly` **properties.style.properties.textDecoration.type**: `"string"` = `'string'`

###### properties.style.properties.textOverflow

> `readonly` **properties.style.properties.textOverflow**: `object`

###### properties.style.properties.textOverflow.enum

> `readonly` **properties.style.properties.textOverflow.enum**: readonly [`"clip"`, `"ellipsis"`]

###### properties.style.properties.textOverflow.type

> `readonly` **properties.style.properties.textOverflow.type**: `"string"` = `'string'`

###### properties.style.properties.textShadow

> `readonly` **properties.style.properties.textShadow**: `object`

###### properties.style.properties.textShadow.type

> `readonly` **properties.style.properties.textShadow.type**: `"string"` = `'string'`

###### properties.style.properties.textTransform

> `readonly` **properties.style.properties.textTransform**: `object`

###### properties.style.properties.textTransform.enum

> `readonly` **properties.style.properties.textTransform.enum**: readonly [`"none"`, `"uppercase"`, `"lowercase"`, `"capitalize"`]

###### properties.style.properties.textTransform.type

> `readonly` **properties.style.properties.textTransform.type**: `"string"` = `'string'`

###### properties.style.properties.textWrap

> `readonly` **properties.style.properties.textWrap**: `object`

###### properties.style.properties.textWrap.enum

> `readonly` **properties.style.properties.textWrap.enum**: readonly [`"wrap"`, `"balance"`]

###### properties.style.properties.textWrap.type

> `readonly` **properties.style.properties.textWrap.type**: `"string"` = `'string'`

###### properties.style.properties.whiteSpace

> `readonly` **properties.style.properties.whiteSpace**: `object`

###### properties.style.properties.whiteSpace.enum

> `readonly` **properties.style.properties.whiteSpace.enum**: readonly [`"normal"`, `"pre"`, `"pre-wrap"`, `"pre-line"`, `"nowrap"`]

###### properties.style.properties.whiteSpace.type

> `readonly` **properties.style.properties.whiteSpace.type**: `"string"` = `'string'`

###### properties.style.properties.wordBreak

> `readonly` **properties.style.properties.wordBreak**: `object`

###### properties.style.properties.wordBreak.enum

> `readonly` **properties.style.properties.wordBreak.enum**: readonly [`"normal"`, `"break-all"`, `"break-word"`, `"keep-all"`]

###### properties.style.properties.wordBreak.type

> `readonly` **properties.style.properties.wordBreak.type**: `"string"` = `'string'`

###### properties.style.type

> `readonly` **properties.style.type**: `"object"` = `'object'`

##### required

> `readonly` **required**: readonly [`"children"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### textStyleV0

> `const` **textStyleV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.color

> `readonly` **properties.color**: `object`

###### properties.color.type

> `readonly` **properties.color.type**: `"string"` = `'string'`

###### properties.fontFamily

> `readonly` **properties.fontFamily**: `object`

###### properties.fontFamily.type

> `readonly` **properties.fontFamily.type**: `"string"` = `'string'`

###### properties.fontSize

> `readonly` **properties.fontSize**: `object` = `nonNegativeNumber`

###### properties.fontSize.minimum

> `readonly` **properties.fontSize.minimum**: `0` = `0`

###### properties.fontSize.type

> `readonly` **properties.fontSize.type**: `"number"` = `'number'`

###### properties.fontStyle

> `readonly` **properties.fontStyle**: `object`

###### properties.fontStyle.enum

> `readonly` **properties.fontStyle.enum**: readonly [`"normal"`, `"italic"`]

###### properties.fontStyle.type

> `readonly` **properties.fontStyle.type**: `"string"` = `'string'`

###### properties.fontWeight

> `readonly` **properties.fontWeight**: `object`

###### properties.fontWeight.enum

> `readonly` **properties.fontWeight.enum**: readonly [`"normal"`, `"bold"`, `"100"`, `"200"`, `"300"`, `"400"`, `"500"`, `"600"`, `"700"`, `"800"`, `"900"`, `"ultralight"`, `"thin"`, `"light"`, `"medium"`, `"regular"`, `"semibold"`, `"condensedBold"`, `"condensed"`, `"heavy"`, `"black"`]

###### properties.fontWeight.type

> `readonly` **properties.fontWeight.type**: `"string"` = `'string'`

###### properties.letterSpacing

> `readonly` **properties.letterSpacing**: `object` = `nonNegativeNumber`

###### properties.letterSpacing.minimum

> `readonly` **properties.letterSpacing.minimum**: `0` = `0`

###### properties.letterSpacing.type

> `readonly` **properties.letterSpacing.type**: `"number"` = `'number'`

###### properties.lineHeight

> `readonly` **properties.lineHeight**: `object` = `nonNegativeNumber`

###### properties.lineHeight.minimum

> `readonly` **properties.lineHeight.minimum**: `0` = `0`

###### properties.lineHeight.type

> `readonly` **properties.lineHeight.type**: `"number"` = `'number'`

###### properties.textAlign

> `readonly` **properties.textAlign**: `object`

###### properties.textAlign.enum

> `readonly` **properties.textAlign.enum**: readonly [`"left"`, `"right"`, `"center"`, `"justify"`]

###### properties.textAlign.type

> `readonly` **properties.textAlign.type**: `"string"` = `'string'`

###### properties.textDecoration

> `readonly` **properties.textDecoration**: `object`

###### properties.textDecoration.type

> `readonly` **properties.textDecoration.type**: `"string"` = `'string'`

###### properties.textOverflow

> `readonly` **properties.textOverflow**: `object`

###### properties.textOverflow.enum

> `readonly` **properties.textOverflow.enum**: readonly [`"clip"`, `"ellipsis"`]

###### properties.textOverflow.type

> `readonly` **properties.textOverflow.type**: `"string"` = `'string'`

###### properties.textShadow

> `readonly` **properties.textShadow**: `object`

###### properties.textShadow.type

> `readonly` **properties.textShadow.type**: `"string"` = `'string'`

###### properties.textTransform

> `readonly` **properties.textTransform**: `object`

###### properties.textTransform.enum

> `readonly` **properties.textTransform.enum**: readonly [`"none"`, `"uppercase"`, `"lowercase"`, `"capitalize"`]

###### properties.textTransform.type

> `readonly` **properties.textTransform.type**: `"string"` = `'string'`

###### properties.textWrap

> `readonly` **properties.textWrap**: `object`

###### properties.textWrap.enum

> `readonly` **properties.textWrap.enum**: readonly [`"wrap"`, `"balance"`]

###### properties.textWrap.type

> `readonly` **properties.textWrap.type**: `"string"` = `'string'`

###### properties.whiteSpace

> `readonly` **properties.whiteSpace**: `object`

###### properties.whiteSpace.enum

> `readonly` **properties.whiteSpace.enum**: readonly [`"normal"`, `"pre"`, `"pre-wrap"`, `"pre-line"`, `"nowrap"`]

###### properties.whiteSpace.type

> `readonly` **properties.whiteSpace.type**: `"string"` = `'string'`

###### properties.wordBreak

> `readonly` **properties.wordBreak**: `object`

###### properties.wordBreak.enum

> `readonly` **properties.wordBreak.enum**: readonly [`"normal"`, `"break-all"`, `"break-word"`, `"keep-all"`]

###### properties.wordBreak.type

> `readonly` **properties.wordBreak.type**: `"string"` = `'string'`

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### textV0

> `const` **textV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.props

> `readonly` **properties.props**: `object` = `textPropsV0`

###### properties.props.additionalProperties

> `readonly` **properties.props.additionalProperties**: `false` = `false`

###### properties.props.properties

> `readonly` **properties.props.properties**: `object`

###### properties.props.properties.children

> `readonly` **properties.props.properties.children**: `object` = `textChildrenV0`

###### properties.props.properties.children.anyOf

> `readonly` **properties.props.properties.children.anyOf**: readonly [`object`, `object`]

###### properties.props.properties.key

> `readonly` **properties.props.properties.key**: `object`

###### properties.props.properties.key.type

> `readonly` **properties.props.properties.key.type**: `"string"` = `'string'`

###### properties.props.properties.style

> `readonly` **properties.props.properties.style**: `object` = `textStyleV0`

###### properties.props.properties.style.additionalProperties

> `readonly` **properties.props.properties.style.additionalProperties**: `false` = `false`

###### properties.props.properties.style.properties

> `readonly` **properties.props.properties.style.properties**: `object`

###### properties.props.properties.style.properties.color

> `readonly` **properties.props.properties.style.properties.color**: `object`

###### properties.props.properties.style.properties.color.type

> `readonly` **properties.props.properties.style.properties.color.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.fontFamily

> `readonly` **properties.props.properties.style.properties.fontFamily**: `object`

###### properties.props.properties.style.properties.fontFamily.type

> `readonly` **properties.props.properties.style.properties.fontFamily.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.fontSize

> `readonly` **properties.props.properties.style.properties.fontSize**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.fontSize.minimum

> `readonly` **properties.props.properties.style.properties.fontSize.minimum**: `0` = `0`

###### properties.props.properties.style.properties.fontSize.type

> `readonly` **properties.props.properties.style.properties.fontSize.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.fontStyle

> `readonly` **properties.props.properties.style.properties.fontStyle**: `object`

###### properties.props.properties.style.properties.fontStyle.enum

> `readonly` **properties.props.properties.style.properties.fontStyle.enum**: readonly [`"normal"`, `"italic"`]

###### properties.props.properties.style.properties.fontStyle.type

> `readonly` **properties.props.properties.style.properties.fontStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.fontWeight

> `readonly` **properties.props.properties.style.properties.fontWeight**: `object`

###### properties.props.properties.style.properties.fontWeight.enum

> `readonly` **properties.props.properties.style.properties.fontWeight.enum**: readonly [`"normal"`, `"bold"`, `"100"`, `"200"`, `"300"`, `"400"`, `"500"`, `"600"`, `"700"`, `"800"`, `"900"`, `"ultralight"`, `"thin"`, `"light"`, `"medium"`, `"regular"`, `"semibold"`, `"condensedBold"`, `"condensed"`, `"heavy"`, `"black"`]

###### properties.props.properties.style.properties.fontWeight.type

> `readonly` **properties.props.properties.style.properties.fontWeight.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.letterSpacing

> `readonly` **properties.props.properties.style.properties.letterSpacing**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.letterSpacing.minimum

> `readonly` **properties.props.properties.style.properties.letterSpacing.minimum**: `0` = `0`

###### properties.props.properties.style.properties.letterSpacing.type

> `readonly` **properties.props.properties.style.properties.letterSpacing.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.lineHeight

> `readonly` **properties.props.properties.style.properties.lineHeight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.lineHeight.minimum

> `readonly` **properties.props.properties.style.properties.lineHeight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.lineHeight.type

> `readonly` **properties.props.properties.style.properties.lineHeight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.textAlign

> `readonly` **properties.props.properties.style.properties.textAlign**: `object`

###### properties.props.properties.style.properties.textAlign.enum

> `readonly` **properties.props.properties.style.properties.textAlign.enum**: readonly [`"left"`, `"right"`, `"center"`, `"justify"`]

###### properties.props.properties.style.properties.textAlign.type

> `readonly` **properties.props.properties.style.properties.textAlign.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.textDecoration

> `readonly` **properties.props.properties.style.properties.textDecoration**: `object`

###### properties.props.properties.style.properties.textDecoration.type

> `readonly` **properties.props.properties.style.properties.textDecoration.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.textOverflow

> `readonly` **properties.props.properties.style.properties.textOverflow**: `object`

###### properties.props.properties.style.properties.textOverflow.enum

> `readonly` **properties.props.properties.style.properties.textOverflow.enum**: readonly [`"clip"`, `"ellipsis"`]

###### properties.props.properties.style.properties.textOverflow.type

> `readonly` **properties.props.properties.style.properties.textOverflow.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.textShadow

> `readonly` **properties.props.properties.style.properties.textShadow**: `object`

###### properties.props.properties.style.properties.textShadow.type

> `readonly` **properties.props.properties.style.properties.textShadow.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.textTransform

> `readonly` **properties.props.properties.style.properties.textTransform**: `object`

###### properties.props.properties.style.properties.textTransform.enum

> `readonly` **properties.props.properties.style.properties.textTransform.enum**: readonly [`"none"`, `"uppercase"`, `"lowercase"`, `"capitalize"`]

###### properties.props.properties.style.properties.textTransform.type

> `readonly` **properties.props.properties.style.properties.textTransform.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.textWrap

> `readonly` **properties.props.properties.style.properties.textWrap**: `object`

###### properties.props.properties.style.properties.textWrap.enum

> `readonly` **properties.props.properties.style.properties.textWrap.enum**: readonly [`"wrap"`, `"balance"`]

###### properties.props.properties.style.properties.textWrap.type

> `readonly` **properties.props.properties.style.properties.textWrap.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.whiteSpace

> `readonly` **properties.props.properties.style.properties.whiteSpace**: `object`

###### properties.props.properties.style.properties.whiteSpace.enum

> `readonly` **properties.props.properties.style.properties.whiteSpace.enum**: readonly [`"normal"`, `"pre"`, `"pre-wrap"`, `"pre-line"`, `"nowrap"`]

###### properties.props.properties.style.properties.whiteSpace.type

> `readonly` **properties.props.properties.style.properties.whiteSpace.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.wordBreak

> `readonly` **properties.props.properties.style.properties.wordBreak**: `object`

###### properties.props.properties.style.properties.wordBreak.enum

> `readonly` **properties.props.properties.style.properties.wordBreak.enum**: readonly [`"normal"`, `"break-all"`, `"break-word"`, `"keep-all"`]

###### properties.props.properties.style.properties.wordBreak.type

> `readonly` **properties.props.properties.style.properties.wordBreak.type**: `"string"` = `'string'`

###### properties.props.properties.style.type

> `readonly` **properties.props.properties.style.type**: `"object"` = `'object'`

###### properties.props.required

> `readonly` **properties.props.required**: readonly [`"children"`]

###### properties.props.type

> `readonly` **properties.props.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object`

###### properties.type.const

> `readonly` **properties.type.const**: `"Text"` = `'Text'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"props"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### tile

> `const` **tile**: `object` = `tileV0`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.props

> `readonly` **properties.props**: `object` = `tilePropsV0`

###### properties.props.additionalProperties

> `readonly` **properties.props.additionalProperties**: `false` = `false`

###### properties.props.properties

> `readonly` **properties.props.properties**: `object`

###### properties.props.properties.actions

> `readonly` **properties.props.properties.actions**: `object`

###### properties.props.properties.actions.items

> `readonly` **properties.props.properties.actions.items**: `object` = `actionV0`

###### properties.props.properties.actions.items.anyOf

> `readonly` **properties.props.properties.actions.items.anyOf**: readonly [`object`, `object`, `object`]

###### properties.props.properties.actions.type

> `readonly` **properties.props.properties.actions.type**: `"array"` = `'array'`

###### properties.props.properties.children

> `readonly` **properties.props.properties.children**: `object`

###### properties.props.properties.children.items

> `readonly` **properties.props.properties.children.items**: `object` = `boxChildrenV0`

###### properties.props.properties.children.items.anyOf

> `readonly` **properties.props.properties.children.items.anyOf**: readonly [`object`, `object`]

###### properties.props.properties.children.type

> `readonly` **properties.props.properties.children.type**: `"array"` = `'array'`

###### properties.props.properties.description

> `readonly` **properties.props.properties.description**: `object`

###### properties.props.properties.description.type

> `readonly` **properties.props.properties.description.type**: `"string"` = `'string'`

###### properties.props.properties.input

> `readonly` **properties.props.properties.input**: `object` = `inputV0`

###### properties.props.properties.input.anyOf

> `readonly` **properties.props.properties.input.anyOf**: readonly [`object`, `object`]

###### properties.props.properties.key

> `readonly` **properties.props.properties.key**: `object`

###### properties.props.properties.key.type

> `readonly` **properties.props.properties.key.type**: `"string"` = `'string'`

###### properties.props.properties.style

> `readonly` **properties.props.properties.style**: `object` = `boxStyleV0`

###### properties.props.properties.style.additionalProperties

> `readonly` **properties.props.properties.style.additionalProperties**: `false` = `false`

###### properties.props.properties.style.properties

> `readonly` **properties.props.properties.style.properties**: `object`

###### properties.props.properties.style.properties.alignItems

> `readonly` **properties.props.properties.style.properties.alignItems**: `object`

###### properties.props.properties.style.properties.alignItems.enum

> `readonly` **properties.props.properties.style.properties.alignItems.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`]

###### properties.props.properties.style.properties.alignItems.type

> `readonly` **properties.props.properties.style.properties.alignItems.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.alignSelf

> `readonly` **properties.props.properties.style.properties.alignSelf**: `object`

###### properties.props.properties.style.properties.alignSelf.enum

> `readonly` **properties.props.properties.style.properties.alignSelf.enum**: readonly [`"auto"`, `"flex-start"`, `"center"`, `"flex-end"`]

###### properties.props.properties.style.properties.alignSelf.type

> `readonly` **properties.props.properties.style.properties.alignSelf.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundClip

> `readonly` **properties.props.properties.style.properties.backgroundClip**: `object`

###### properties.props.properties.style.properties.backgroundClip.enum

> `readonly` **properties.props.properties.style.properties.backgroundClip.enum**: readonly [`"border-box"`, `"text"`]

###### properties.props.properties.style.properties.backgroundClip.type

> `readonly` **properties.props.properties.style.properties.backgroundClip.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundColor

> `readonly` **properties.props.properties.style.properties.backgroundColor**: `object`

###### properties.props.properties.style.properties.backgroundColor.type

> `readonly` **properties.props.properties.style.properties.backgroundColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundImage

> `readonly` **properties.props.properties.style.properties.backgroundImage**: `object`

###### properties.props.properties.style.properties.backgroundImage.type

> `readonly` **properties.props.properties.style.properties.backgroundImage.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundPosition

> `readonly` **properties.props.properties.style.properties.backgroundPosition**: `object`

###### properties.props.properties.style.properties.backgroundPosition.type

> `readonly` **properties.props.properties.style.properties.backgroundPosition.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundRepeat

> `readonly` **properties.props.properties.style.properties.backgroundRepeat**: `object`

###### properties.props.properties.style.properties.backgroundRepeat.enum

> `readonly` **properties.props.properties.style.properties.backgroundRepeat.enum**: readonly [`"repeat"`, `"repeat-x"`, `"repeat-y"`, `"no-repeat"`]

###### properties.props.properties.style.properties.backgroundRepeat.type

> `readonly` **properties.props.properties.style.properties.backgroundRepeat.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundSize

> `readonly` **properties.props.properties.style.properties.backgroundSize**: `object`

###### properties.props.properties.style.properties.backgroundSize.type

> `readonly` **properties.props.properties.style.properties.backgroundSize.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomColor

> `readonly` **properties.props.properties.style.properties.borderBottomColor**: `object`

###### properties.props.properties.style.properties.borderBottomColor.type

> `readonly` **properties.props.properties.style.properties.borderBottomColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomLeftRadius

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomLeftRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomLeftRadius.type

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderBottomRightRadius

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomRightRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomRightRadius.type

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderBottomStyle

> `readonly` **properties.props.properties.style.properties.borderBottomStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderBottomStyle.enum

> `readonly` **properties.props.properties.style.properties.borderBottomStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderBottomStyle.type

> `readonly` **properties.props.properties.style.properties.borderBottomStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomWidth

> `readonly` **properties.props.properties.style.properties.borderBottomWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomWidth.type

> `readonly` **properties.props.properties.style.properties.borderBottomWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderColor

> `readonly` **properties.props.properties.style.properties.borderColor**: `object`

###### properties.props.properties.style.properties.borderColor.type

> `readonly` **properties.props.properties.style.properties.borderColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftColor

> `readonly` **properties.props.properties.style.properties.borderLeftColor**: `object`

###### properties.props.properties.style.properties.borderLeftColor.type

> `readonly` **properties.props.properties.style.properties.borderLeftColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftStyle

> `readonly` **properties.props.properties.style.properties.borderLeftStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderLeftStyle.enum

> `readonly` **properties.props.properties.style.properties.borderLeftStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderLeftStyle.type

> `readonly` **properties.props.properties.style.properties.borderLeftStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftWidth

> `readonly` **properties.props.properties.style.properties.borderLeftWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderLeftWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderLeftWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderLeftWidth.type

> `readonly` **properties.props.properties.style.properties.borderLeftWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderRadius

> `readonly` **properties.props.properties.style.properties.borderRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderRadius.type

> `readonly` **properties.props.properties.style.properties.borderRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderRightColor

> `readonly` **properties.props.properties.style.properties.borderRightColor**: `object`

###### properties.props.properties.style.properties.borderRightColor.type

> `readonly` **properties.props.properties.style.properties.borderRightColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderRightStyle

> `readonly` **properties.props.properties.style.properties.borderRightStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderRightStyle.enum

> `readonly` **properties.props.properties.style.properties.borderRightStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderRightStyle.type

> `readonly` **properties.props.properties.style.properties.borderRightStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderRightWidth

> `readonly` **properties.props.properties.style.properties.borderRightWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderRightWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderRightWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderRightWidth.type

> `readonly` **properties.props.properties.style.properties.borderRightWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderStyle

> `readonly` **properties.props.properties.style.properties.borderStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderStyle.enum

> `readonly` **properties.props.properties.style.properties.borderStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderStyle.type

> `readonly` **properties.props.properties.style.properties.borderStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopColor

> `readonly` **properties.props.properties.style.properties.borderTopColor**: `object`

###### properties.props.properties.style.properties.borderTopColor.type

> `readonly` **properties.props.properties.style.properties.borderTopColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopLeftRadius

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopLeftRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopLeftRadius.type

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderTopRightRadius

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopRightRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopRightRadius.type

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderTopStyle

> `readonly` **properties.props.properties.style.properties.borderTopStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderTopStyle.enum

> `readonly` **properties.props.properties.style.properties.borderTopStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderTopStyle.type

> `readonly` **properties.props.properties.style.properties.borderTopStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopWidth

> `readonly` **properties.props.properties.style.properties.borderTopWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderTopWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopWidth.type

> `readonly` **properties.props.properties.style.properties.borderTopWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderWidth

> `readonly` **properties.props.properties.style.properties.borderWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderWidth.type

> `readonly` **properties.props.properties.style.properties.borderWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.bottom

> `readonly` **properties.props.properties.style.properties.bottom**: `object`

###### properties.props.properties.style.properties.bottom.type

> `readonly` **properties.props.properties.style.properties.bottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.boxShadow

> `readonly` **properties.props.properties.style.properties.boxShadow**: `object`

###### properties.props.properties.style.properties.boxShadow.type

> `readonly` **properties.props.properties.style.properties.boxShadow.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.display

> `readonly` **properties.props.properties.style.properties.display**: `object`

###### properties.props.properties.style.properties.display.enum

> `readonly` **properties.props.properties.style.properties.display.enum**: readonly [`"flex"`, `"none"`]

###### properties.props.properties.style.properties.display.type

> `readonly` **properties.props.properties.style.properties.display.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.flexBasis

> `readonly` **properties.props.properties.style.properties.flexBasis**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexBasis.minimum

> `readonly` **properties.props.properties.style.properties.flexBasis.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexBasis.type

> `readonly` **properties.props.properties.style.properties.flexBasis.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexDirection

> `readonly` **properties.props.properties.style.properties.flexDirection**: `object`

###### properties.props.properties.style.properties.flexDirection.enum

> `readonly` **properties.props.properties.style.properties.flexDirection.enum**: readonly [`"row"`, `"row-reverse"`, `"column"`, `"column-reverse"`]

###### properties.props.properties.style.properties.flexDirection.type

> `readonly` **properties.props.properties.style.properties.flexDirection.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.flexGrow

> `readonly` **properties.props.properties.style.properties.flexGrow**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexGrow.minimum

> `readonly` **properties.props.properties.style.properties.flexGrow.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexGrow.type

> `readonly` **properties.props.properties.style.properties.flexGrow.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexShrink

> `readonly` **properties.props.properties.style.properties.flexShrink**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexShrink.minimum

> `readonly` **properties.props.properties.style.properties.flexShrink.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexShrink.type

> `readonly` **properties.props.properties.style.properties.flexShrink.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexWrap

> `readonly` **properties.props.properties.style.properties.flexWrap**: `object`

###### properties.props.properties.style.properties.flexWrap.enum

> `readonly` **properties.props.properties.style.properties.flexWrap.enum**: readonly [`"nowrap"`, `"wrap"`, `"wrap-reverse"`]

###### properties.props.properties.style.properties.flexWrap.type

> `readonly` **properties.props.properties.style.properties.flexWrap.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.gap

> `readonly` **properties.props.properties.style.properties.gap**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.gap.minimum

> `readonly` **properties.props.properties.style.properties.gap.minimum**: `0` = `0`

###### properties.props.properties.style.properties.gap.type

> `readonly` **properties.props.properties.style.properties.gap.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.height

> `readonly` **properties.props.properties.style.properties.height**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.height.minimum

> `readonly` **properties.props.properties.style.properties.height.minimum**: `0` = `0`

###### properties.props.properties.style.properties.height.type

> `readonly` **properties.props.properties.style.properties.height.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.justifyContent

> `readonly` **properties.props.properties.style.properties.justifyContent**: `object`

###### properties.props.properties.style.properties.justifyContent.enum

> `readonly` **properties.props.properties.style.properties.justifyContent.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`, `"space-around"`]

###### properties.props.properties.style.properties.justifyContent.type

> `readonly` **properties.props.properties.style.properties.justifyContent.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.left

> `readonly` **properties.props.properties.style.properties.left**: `object`

###### properties.props.properties.style.properties.left.type

> `readonly` **properties.props.properties.style.properties.left.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.margin

> `readonly` **properties.props.properties.style.properties.margin**: `object`

###### properties.props.properties.style.properties.margin.type

> `readonly` **properties.props.properties.style.properties.margin.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginBottom

> `readonly` **properties.props.properties.style.properties.marginBottom**: `object`

###### properties.props.properties.style.properties.marginBottom.type

> `readonly` **properties.props.properties.style.properties.marginBottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginLeft

> `readonly` **properties.props.properties.style.properties.marginLeft**: `object`

###### properties.props.properties.style.properties.marginLeft.type

> `readonly` **properties.props.properties.style.properties.marginLeft.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginRight

> `readonly` **properties.props.properties.style.properties.marginRight**: `object`

###### properties.props.properties.style.properties.marginRight.type

> `readonly` **properties.props.properties.style.properties.marginRight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginTop

> `readonly` **properties.props.properties.style.properties.marginTop**: `object`

###### properties.props.properties.style.properties.marginTop.type

> `readonly` **properties.props.properties.style.properties.marginTop.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.maxHeight

> `readonly` **properties.props.properties.style.properties.maxHeight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.maxHeight.minimum

> `readonly` **properties.props.properties.style.properties.maxHeight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.maxHeight.type

> `readonly` **properties.props.properties.style.properties.maxHeight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.maxWidth

> `readonly` **properties.props.properties.style.properties.maxWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.maxWidth.minimum

> `readonly` **properties.props.properties.style.properties.maxWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.maxWidth.type

> `readonly` **properties.props.properties.style.properties.maxWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.minHeight

> `readonly` **properties.props.properties.style.properties.minHeight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.minHeight.minimum

> `readonly` **properties.props.properties.style.properties.minHeight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.minHeight.type

> `readonly` **properties.props.properties.style.properties.minHeight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.minWidth

> `readonly` **properties.props.properties.style.properties.minWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.minWidth.minimum

> `readonly` **properties.props.properties.style.properties.minWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.minWidth.type

> `readonly` **properties.props.properties.style.properties.minWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.objectFit

> `readonly` **properties.props.properties.style.properties.objectFit**: `object`

###### properties.props.properties.style.properties.objectFit.enum

> `readonly` **properties.props.properties.style.properties.objectFit.enum**: readonly [`"none"`, `"contain"`, `"cover"`]

###### properties.props.properties.style.properties.objectFit.type

> `readonly` **properties.props.properties.style.properties.objectFit.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.opacity

> `readonly` **properties.props.properties.style.properties.opacity**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.opacity.minimum

> `readonly` **properties.props.properties.style.properties.opacity.minimum**: `0` = `0`

###### properties.props.properties.style.properties.opacity.type

> `readonly` **properties.props.properties.style.properties.opacity.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.overflow

> `readonly` **properties.props.properties.style.properties.overflow**: `object`

###### properties.props.properties.style.properties.overflow.enum

> `readonly` **properties.props.properties.style.properties.overflow.enum**: readonly [`"visible"`, `"hidden"`]

###### properties.props.properties.style.properties.overflow.type

> `readonly` **properties.props.properties.style.properties.overflow.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.padding

> `readonly` **properties.props.properties.style.properties.padding**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.padding.minimum

> `readonly` **properties.props.properties.style.properties.padding.minimum**: `0` = `0`

###### properties.props.properties.style.properties.padding.type

> `readonly` **properties.props.properties.style.properties.padding.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingBottom

> `readonly` **properties.props.properties.style.properties.paddingBottom**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingBottom.minimum

> `readonly` **properties.props.properties.style.properties.paddingBottom.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingBottom.type

> `readonly` **properties.props.properties.style.properties.paddingBottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingLeft

> `readonly` **properties.props.properties.style.properties.paddingLeft**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingLeft.minimum

> `readonly` **properties.props.properties.style.properties.paddingLeft.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingLeft.type

> `readonly` **properties.props.properties.style.properties.paddingLeft.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingRight

> `readonly` **properties.props.properties.style.properties.paddingRight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingRight.minimum

> `readonly` **properties.props.properties.style.properties.paddingRight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingRight.type

> `readonly` **properties.props.properties.style.properties.paddingRight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingTop

> `readonly` **properties.props.properties.style.properties.paddingTop**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingTop.minimum

> `readonly` **properties.props.properties.style.properties.paddingTop.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingTop.type

> `readonly` **properties.props.properties.style.properties.paddingTop.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.position

> `readonly` **properties.props.properties.style.properties.position**: `object`

###### properties.props.properties.style.properties.position.enum

> `readonly` **properties.props.properties.style.properties.position.enum**: readonly [`"relative"`, `"absolute"`]

###### properties.props.properties.style.properties.position.type

> `readonly` **properties.props.properties.style.properties.position.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.right

> `readonly` **properties.props.properties.style.properties.right**: `object`

###### properties.props.properties.style.properties.right.type

> `readonly` **properties.props.properties.style.properties.right.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.top

> `readonly` **properties.props.properties.style.properties.top**: `object`

###### properties.props.properties.style.properties.top.type

> `readonly` **properties.props.properties.style.properties.top.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.width

> `readonly` **properties.props.properties.style.properties.width**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.width.minimum

> `readonly` **properties.props.properties.style.properties.width.minimum**: `0` = `0`

###### properties.props.properties.style.properties.width.type

> `readonly` **properties.props.properties.style.properties.width.type**: `"number"` = `'number'`

###### properties.props.properties.style.type

> `readonly` **properties.props.properties.style.type**: `"object"` = `'object'`

###### properties.props.properties.title

> `readonly` **properties.props.properties.title**: `object`

###### properties.props.properties.title.type

> `readonly` **properties.props.properties.title.type**: `"string"` = `'string'`

###### properties.props.required

> `readonly` **properties.props.required**: readonly [`"title"`]

###### properties.props.type

> `readonly` **properties.props.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object`

###### properties.type.const

> `readonly` **properties.type.const**: `"Tile"` = `'Tile'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

###### properties.version

> `readonly` **properties.version**: `object`

###### properties.version.enum

> `readonly` **properties.version.enum**: readonly [`"0.1"`]

###### properties.version.type

> `readonly` **properties.version.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"version"`, `"props"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### tileInteractiveV0

> `const` **tileInteractiveV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.actions

> `readonly` **properties.actions**: `object`

###### properties.actions.items

> `readonly` **properties.actions.items**: `object` = `actionV0`

###### properties.actions.items.anyOf

> `readonly` **properties.actions.items.anyOf**: readonly [`object`, `object`, `object`]

###### properties.actions.type

> `readonly` **properties.actions.type**: `"array"` = `'array'`

###### properties.input

> `readonly` **properties.input**: `object` = `inputV0`

###### properties.input.anyOf

> `readonly` **properties.input.anyOf**: readonly [`object`, `object`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### tileMetaV0

> `const` **tileMetaV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.description

> `readonly` **properties.description**: `object`

###### properties.description.type

> `readonly` **properties.description.type**: `"string"` = `'string'`

###### properties.title

> `readonly` **properties.title**: `object`

###### properties.title.type

> `readonly` **properties.title.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"title"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### tilePropsV0

> `const` **tilePropsV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.actions

> `readonly` **properties.actions**: `object`

###### properties.actions.items

> `readonly` **properties.actions.items**: `object` = `actionV0`

###### properties.actions.items.anyOf

> `readonly` **properties.actions.items.anyOf**: readonly [`object`, `object`, `object`]

###### properties.actions.type

> `readonly` **properties.actions.type**: `"array"` = `'array'`

###### properties.children

> `readonly` **properties.children**: `object`

###### properties.children.items

> `readonly` **properties.children.items**: `object` = `boxChildrenV0`

###### properties.children.items.anyOf

> `readonly` **properties.children.items.anyOf**: readonly [`object`, `object`]

###### properties.children.type

> `readonly` **properties.children.type**: `"array"` = `'array'`

###### properties.description

> `readonly` **properties.description**: `object`

###### properties.description.type

> `readonly` **properties.description.type**: `"string"` = `'string'`

###### properties.input

> `readonly` **properties.input**: `object` = `inputV0`

###### properties.input.anyOf

> `readonly` **properties.input.anyOf**: readonly [`object`, `object`]

###### properties.key

> `readonly` **properties.key**: `object`

###### properties.key.type

> `readonly` **properties.key.type**: `"string"` = `'string'`

###### properties.style

> `readonly` **properties.style**: `object` = `boxStyleV0`

###### properties.style.additionalProperties

> `readonly` **properties.style.additionalProperties**: `false` = `false`

###### properties.style.properties

> `readonly` **properties.style.properties**: `object`

###### properties.style.properties.alignItems

> `readonly` **properties.style.properties.alignItems**: `object`

###### properties.style.properties.alignItems.enum

> `readonly` **properties.style.properties.alignItems.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`]

###### properties.style.properties.alignItems.type

> `readonly` **properties.style.properties.alignItems.type**: `"string"` = `'string'`

###### properties.style.properties.alignSelf

> `readonly` **properties.style.properties.alignSelf**: `object`

###### properties.style.properties.alignSelf.enum

> `readonly` **properties.style.properties.alignSelf.enum**: readonly [`"auto"`, `"flex-start"`, `"center"`, `"flex-end"`]

###### properties.style.properties.alignSelf.type

> `readonly` **properties.style.properties.alignSelf.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundClip

> `readonly` **properties.style.properties.backgroundClip**: `object`

###### properties.style.properties.backgroundClip.enum

> `readonly` **properties.style.properties.backgroundClip.enum**: readonly [`"border-box"`, `"text"`]

###### properties.style.properties.backgroundClip.type

> `readonly` **properties.style.properties.backgroundClip.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundColor

> `readonly` **properties.style.properties.backgroundColor**: `object`

###### properties.style.properties.backgroundColor.type

> `readonly` **properties.style.properties.backgroundColor.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundImage

> `readonly` **properties.style.properties.backgroundImage**: `object`

###### properties.style.properties.backgroundImage.type

> `readonly` **properties.style.properties.backgroundImage.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundPosition

> `readonly` **properties.style.properties.backgroundPosition**: `object`

###### properties.style.properties.backgroundPosition.type

> `readonly` **properties.style.properties.backgroundPosition.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundRepeat

> `readonly` **properties.style.properties.backgroundRepeat**: `object`

###### properties.style.properties.backgroundRepeat.enum

> `readonly` **properties.style.properties.backgroundRepeat.enum**: readonly [`"repeat"`, `"repeat-x"`, `"repeat-y"`, `"no-repeat"`]

###### properties.style.properties.backgroundRepeat.type

> `readonly` **properties.style.properties.backgroundRepeat.type**: `"string"` = `'string'`

###### properties.style.properties.backgroundSize

> `readonly` **properties.style.properties.backgroundSize**: `object`

###### properties.style.properties.backgroundSize.type

> `readonly` **properties.style.properties.backgroundSize.type**: `"string"` = `'string'`

###### properties.style.properties.borderBottomColor

> `readonly` **properties.style.properties.borderBottomColor**: `object`

###### properties.style.properties.borderBottomColor.type

> `readonly` **properties.style.properties.borderBottomColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderBottomLeftRadius

> `readonly` **properties.style.properties.borderBottomLeftRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderBottomLeftRadius.minimum

> `readonly` **properties.style.properties.borderBottomLeftRadius.minimum**: `0` = `0`

###### properties.style.properties.borderBottomLeftRadius.type

> `readonly` **properties.style.properties.borderBottomLeftRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderBottomRightRadius

> `readonly` **properties.style.properties.borderBottomRightRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderBottomRightRadius.minimum

> `readonly` **properties.style.properties.borderBottomRightRadius.minimum**: `0` = `0`

###### properties.style.properties.borderBottomRightRadius.type

> `readonly` **properties.style.properties.borderBottomRightRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderBottomStyle

> `readonly` **properties.style.properties.borderBottomStyle**: `object` = `borderStyle`

###### properties.style.properties.borderBottomStyle.enum

> `readonly` **properties.style.properties.borderBottomStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderBottomStyle.type

> `readonly` **properties.style.properties.borderBottomStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderBottomWidth

> `readonly` **properties.style.properties.borderBottomWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderBottomWidth.minimum

> `readonly` **properties.style.properties.borderBottomWidth.minimum**: `0` = `0`

###### properties.style.properties.borderBottomWidth.type

> `readonly` **properties.style.properties.borderBottomWidth.type**: `"number"` = `'number'`

###### properties.style.properties.borderColor

> `readonly` **properties.style.properties.borderColor**: `object`

###### properties.style.properties.borderColor.type

> `readonly` **properties.style.properties.borderColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderLeftColor

> `readonly` **properties.style.properties.borderLeftColor**: `object`

###### properties.style.properties.borderLeftColor.type

> `readonly` **properties.style.properties.borderLeftColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderLeftStyle

> `readonly` **properties.style.properties.borderLeftStyle**: `object` = `borderStyle`

###### properties.style.properties.borderLeftStyle.enum

> `readonly` **properties.style.properties.borderLeftStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderLeftStyle.type

> `readonly` **properties.style.properties.borderLeftStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderLeftWidth

> `readonly` **properties.style.properties.borderLeftWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderLeftWidth.minimum

> `readonly` **properties.style.properties.borderLeftWidth.minimum**: `0` = `0`

###### properties.style.properties.borderLeftWidth.type

> `readonly` **properties.style.properties.borderLeftWidth.type**: `"number"` = `'number'`

###### properties.style.properties.borderRadius

> `readonly` **properties.style.properties.borderRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderRadius.minimum

> `readonly` **properties.style.properties.borderRadius.minimum**: `0` = `0`

###### properties.style.properties.borderRadius.type

> `readonly` **properties.style.properties.borderRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderRightColor

> `readonly` **properties.style.properties.borderRightColor**: `object`

###### properties.style.properties.borderRightColor.type

> `readonly` **properties.style.properties.borderRightColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderRightStyle

> `readonly` **properties.style.properties.borderRightStyle**: `object` = `borderStyle`

###### properties.style.properties.borderRightStyle.enum

> `readonly` **properties.style.properties.borderRightStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderRightStyle.type

> `readonly` **properties.style.properties.borderRightStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderRightWidth

> `readonly` **properties.style.properties.borderRightWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderRightWidth.minimum

> `readonly` **properties.style.properties.borderRightWidth.minimum**: `0` = `0`

###### properties.style.properties.borderRightWidth.type

> `readonly` **properties.style.properties.borderRightWidth.type**: `"number"` = `'number'`

###### properties.style.properties.borderStyle

> `readonly` **properties.style.properties.borderStyle**: `object` = `borderStyle`

###### properties.style.properties.borderStyle.enum

> `readonly` **properties.style.properties.borderStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderStyle.type

> `readonly` **properties.style.properties.borderStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderTopColor

> `readonly` **properties.style.properties.borderTopColor**: `object`

###### properties.style.properties.borderTopColor.type

> `readonly` **properties.style.properties.borderTopColor.type**: `"string"` = `'string'`

###### properties.style.properties.borderTopLeftRadius

> `readonly` **properties.style.properties.borderTopLeftRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderTopLeftRadius.minimum

> `readonly` **properties.style.properties.borderTopLeftRadius.minimum**: `0` = `0`

###### properties.style.properties.borderTopLeftRadius.type

> `readonly` **properties.style.properties.borderTopLeftRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderTopRightRadius

> `readonly` **properties.style.properties.borderTopRightRadius**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderTopRightRadius.minimum

> `readonly` **properties.style.properties.borderTopRightRadius.minimum**: `0` = `0`

###### properties.style.properties.borderTopRightRadius.type

> `readonly` **properties.style.properties.borderTopRightRadius.type**: `"number"` = `'number'`

###### properties.style.properties.borderTopStyle

> `readonly` **properties.style.properties.borderTopStyle**: `object` = `borderStyle`

###### properties.style.properties.borderTopStyle.enum

> `readonly` **properties.style.properties.borderTopStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.style.properties.borderTopStyle.type

> `readonly` **properties.style.properties.borderTopStyle.type**: `"string"` = `'string'`

###### properties.style.properties.borderTopWidth

> `readonly` **properties.style.properties.borderTopWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderTopWidth.minimum

> `readonly` **properties.style.properties.borderTopWidth.minimum**: `0` = `0`

###### properties.style.properties.borderTopWidth.type

> `readonly` **properties.style.properties.borderTopWidth.type**: `"number"` = `'number'`

###### properties.style.properties.borderWidth

> `readonly` **properties.style.properties.borderWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.borderWidth.minimum

> `readonly` **properties.style.properties.borderWidth.minimum**: `0` = `0`

###### properties.style.properties.borderWidth.type

> `readonly` **properties.style.properties.borderWidth.type**: `"number"` = `'number'`

###### properties.style.properties.bottom

> `readonly` **properties.style.properties.bottom**: `object`

###### properties.style.properties.bottom.type

> `readonly` **properties.style.properties.bottom.type**: `"number"` = `'number'`

###### properties.style.properties.boxShadow

> `readonly` **properties.style.properties.boxShadow**: `object`

###### properties.style.properties.boxShadow.type

> `readonly` **properties.style.properties.boxShadow.type**: `"string"` = `'string'`

###### properties.style.properties.display

> `readonly` **properties.style.properties.display**: `object`

###### properties.style.properties.display.enum

> `readonly` **properties.style.properties.display.enum**: readonly [`"flex"`, `"none"`]

###### properties.style.properties.display.type

> `readonly` **properties.style.properties.display.type**: `"string"` = `'string'`

###### properties.style.properties.flexBasis

> `readonly` **properties.style.properties.flexBasis**: `object` = `nonNegativeNumber`

###### properties.style.properties.flexBasis.minimum

> `readonly` **properties.style.properties.flexBasis.minimum**: `0` = `0`

###### properties.style.properties.flexBasis.type

> `readonly` **properties.style.properties.flexBasis.type**: `"number"` = `'number'`

###### properties.style.properties.flexDirection

> `readonly` **properties.style.properties.flexDirection**: `object`

###### properties.style.properties.flexDirection.enum

> `readonly` **properties.style.properties.flexDirection.enum**: readonly [`"row"`, `"row-reverse"`, `"column"`, `"column-reverse"`]

###### properties.style.properties.flexDirection.type

> `readonly` **properties.style.properties.flexDirection.type**: `"string"` = `'string'`

###### properties.style.properties.flexGrow

> `readonly` **properties.style.properties.flexGrow**: `object` = `nonNegativeNumber`

###### properties.style.properties.flexGrow.minimum

> `readonly` **properties.style.properties.flexGrow.minimum**: `0` = `0`

###### properties.style.properties.flexGrow.type

> `readonly` **properties.style.properties.flexGrow.type**: `"number"` = `'number'`

###### properties.style.properties.flexShrink

> `readonly` **properties.style.properties.flexShrink**: `object` = `nonNegativeNumber`

###### properties.style.properties.flexShrink.minimum

> `readonly` **properties.style.properties.flexShrink.minimum**: `0` = `0`

###### properties.style.properties.flexShrink.type

> `readonly` **properties.style.properties.flexShrink.type**: `"number"` = `'number'`

###### properties.style.properties.flexWrap

> `readonly` **properties.style.properties.flexWrap**: `object`

###### properties.style.properties.flexWrap.enum

> `readonly` **properties.style.properties.flexWrap.enum**: readonly [`"nowrap"`, `"wrap"`, `"wrap-reverse"`]

###### properties.style.properties.flexWrap.type

> `readonly` **properties.style.properties.flexWrap.type**: `"string"` = `'string'`

###### properties.style.properties.gap

> `readonly` **properties.style.properties.gap**: `object` = `nonNegativeNumber`

###### properties.style.properties.gap.minimum

> `readonly` **properties.style.properties.gap.minimum**: `0` = `0`

###### properties.style.properties.gap.type

> `readonly` **properties.style.properties.gap.type**: `"number"` = `'number'`

###### properties.style.properties.height

> `readonly` **properties.style.properties.height**: `object` = `nonNegativeNumber`

###### properties.style.properties.height.minimum

> `readonly` **properties.style.properties.height.minimum**: `0` = `0`

###### properties.style.properties.height.type

> `readonly` **properties.style.properties.height.type**: `"number"` = `'number'`

###### properties.style.properties.justifyContent

> `readonly` **properties.style.properties.justifyContent**: `object`

###### properties.style.properties.justifyContent.enum

> `readonly` **properties.style.properties.justifyContent.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`, `"space-around"`]

###### properties.style.properties.justifyContent.type

> `readonly` **properties.style.properties.justifyContent.type**: `"string"` = `'string'`

###### properties.style.properties.left

> `readonly` **properties.style.properties.left**: `object`

###### properties.style.properties.left.type

> `readonly` **properties.style.properties.left.type**: `"number"` = `'number'`

###### properties.style.properties.margin

> `readonly` **properties.style.properties.margin**: `object`

###### properties.style.properties.margin.type

> `readonly` **properties.style.properties.margin.type**: `"number"` = `'number'`

###### properties.style.properties.marginBottom

> `readonly` **properties.style.properties.marginBottom**: `object`

###### properties.style.properties.marginBottom.type

> `readonly` **properties.style.properties.marginBottom.type**: `"number"` = `'number'`

###### properties.style.properties.marginLeft

> `readonly` **properties.style.properties.marginLeft**: `object`

###### properties.style.properties.marginLeft.type

> `readonly` **properties.style.properties.marginLeft.type**: `"number"` = `'number'`

###### properties.style.properties.marginRight

> `readonly` **properties.style.properties.marginRight**: `object`

###### properties.style.properties.marginRight.type

> `readonly` **properties.style.properties.marginRight.type**: `"number"` = `'number'`

###### properties.style.properties.marginTop

> `readonly` **properties.style.properties.marginTop**: `object`

###### properties.style.properties.marginTop.type

> `readonly` **properties.style.properties.marginTop.type**: `"number"` = `'number'`

###### properties.style.properties.maxHeight

> `readonly` **properties.style.properties.maxHeight**: `object` = `nonNegativeNumber`

###### properties.style.properties.maxHeight.minimum

> `readonly` **properties.style.properties.maxHeight.minimum**: `0` = `0`

###### properties.style.properties.maxHeight.type

> `readonly` **properties.style.properties.maxHeight.type**: `"number"` = `'number'`

###### properties.style.properties.maxWidth

> `readonly` **properties.style.properties.maxWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.maxWidth.minimum

> `readonly` **properties.style.properties.maxWidth.minimum**: `0` = `0`

###### properties.style.properties.maxWidth.type

> `readonly` **properties.style.properties.maxWidth.type**: `"number"` = `'number'`

###### properties.style.properties.minHeight

> `readonly` **properties.style.properties.minHeight**: `object` = `nonNegativeNumber`

###### properties.style.properties.minHeight.minimum

> `readonly` **properties.style.properties.minHeight.minimum**: `0` = `0`

###### properties.style.properties.minHeight.type

> `readonly` **properties.style.properties.minHeight.type**: `"number"` = `'number'`

###### properties.style.properties.minWidth

> `readonly` **properties.style.properties.minWidth**: `object` = `nonNegativeNumber`

###### properties.style.properties.minWidth.minimum

> `readonly` **properties.style.properties.minWidth.minimum**: `0` = `0`

###### properties.style.properties.minWidth.type

> `readonly` **properties.style.properties.minWidth.type**: `"number"` = `'number'`

###### properties.style.properties.objectFit

> `readonly` **properties.style.properties.objectFit**: `object`

###### properties.style.properties.objectFit.enum

> `readonly` **properties.style.properties.objectFit.enum**: readonly [`"none"`, `"contain"`, `"cover"`]

###### properties.style.properties.objectFit.type

> `readonly` **properties.style.properties.objectFit.type**: `"string"` = `'string'`

###### properties.style.properties.opacity

> `readonly` **properties.style.properties.opacity**: `object` = `nonNegativeNumber`

###### properties.style.properties.opacity.minimum

> `readonly` **properties.style.properties.opacity.minimum**: `0` = `0`

###### properties.style.properties.opacity.type

> `readonly` **properties.style.properties.opacity.type**: `"number"` = `'number'`

###### properties.style.properties.overflow

> `readonly` **properties.style.properties.overflow**: `object`

###### properties.style.properties.overflow.enum

> `readonly` **properties.style.properties.overflow.enum**: readonly [`"visible"`, `"hidden"`]

###### properties.style.properties.overflow.type

> `readonly` **properties.style.properties.overflow.type**: `"string"` = `'string'`

###### properties.style.properties.padding

> `readonly` **properties.style.properties.padding**: `object` = `nonNegativeNumber`

###### properties.style.properties.padding.minimum

> `readonly` **properties.style.properties.padding.minimum**: `0` = `0`

###### properties.style.properties.padding.type

> `readonly` **properties.style.properties.padding.type**: `"number"` = `'number'`

###### properties.style.properties.paddingBottom

> `readonly` **properties.style.properties.paddingBottom**: `object` = `nonNegativeNumber`

###### properties.style.properties.paddingBottom.minimum

> `readonly` **properties.style.properties.paddingBottom.minimum**: `0` = `0`

###### properties.style.properties.paddingBottom.type

> `readonly` **properties.style.properties.paddingBottom.type**: `"number"` = `'number'`

###### properties.style.properties.paddingLeft

> `readonly` **properties.style.properties.paddingLeft**: `object` = `nonNegativeNumber`

###### properties.style.properties.paddingLeft.minimum

> `readonly` **properties.style.properties.paddingLeft.minimum**: `0` = `0`

###### properties.style.properties.paddingLeft.type

> `readonly` **properties.style.properties.paddingLeft.type**: `"number"` = `'number'`

###### properties.style.properties.paddingRight

> `readonly` **properties.style.properties.paddingRight**: `object` = `nonNegativeNumber`

###### properties.style.properties.paddingRight.minimum

> `readonly` **properties.style.properties.paddingRight.minimum**: `0` = `0`

###### properties.style.properties.paddingRight.type

> `readonly` **properties.style.properties.paddingRight.type**: `"number"` = `'number'`

###### properties.style.properties.paddingTop

> `readonly` **properties.style.properties.paddingTop**: `object` = `nonNegativeNumber`

###### properties.style.properties.paddingTop.minimum

> `readonly` **properties.style.properties.paddingTop.minimum**: `0` = `0`

###### properties.style.properties.paddingTop.type

> `readonly` **properties.style.properties.paddingTop.type**: `"number"` = `'number'`

###### properties.style.properties.position

> `readonly` **properties.style.properties.position**: `object`

###### properties.style.properties.position.enum

> `readonly` **properties.style.properties.position.enum**: readonly [`"relative"`, `"absolute"`]

###### properties.style.properties.position.type

> `readonly` **properties.style.properties.position.type**: `"string"` = `'string'`

###### properties.style.properties.right

> `readonly` **properties.style.properties.right**: `object`

###### properties.style.properties.right.type

> `readonly` **properties.style.properties.right.type**: `"number"` = `'number'`

###### properties.style.properties.top

> `readonly` **properties.style.properties.top**: `object`

###### properties.style.properties.top.type

> `readonly` **properties.style.properties.top.type**: `"number"` = `'number'`

###### properties.style.properties.width

> `readonly` **properties.style.properties.width**: `object` = `nonNegativeNumber`

###### properties.style.properties.width.minimum

> `readonly` **properties.style.properties.width.minimum**: `0` = `0`

###### properties.style.properties.width.type

> `readonly` **properties.style.properties.width.type**: `"number"` = `'number'`

###### properties.style.type

> `readonly` **properties.style.type**: `"object"` = `'object'`

###### properties.title

> `readonly` **properties.title**: `object`

###### properties.title.type

> `readonly` **properties.title.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"title"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### tileV0

> `const` **tileV0**: `object`

#### Type declaration

##### additionalProperties

> `readonly` **additionalProperties**: `false` = `false`

##### properties

> `readonly` **properties**: `object`

###### properties.props

> `readonly` **properties.props**: `object` = `tilePropsV0`

###### properties.props.additionalProperties

> `readonly` **properties.props.additionalProperties**: `false` = `false`

###### properties.props.properties

> `readonly` **properties.props.properties**: `object`

###### properties.props.properties.actions

> `readonly` **properties.props.properties.actions**: `object`

###### properties.props.properties.actions.items

> `readonly` **properties.props.properties.actions.items**: `object` = `actionV0`

###### properties.props.properties.actions.items.anyOf

> `readonly` **properties.props.properties.actions.items.anyOf**: readonly [`object`, `object`, `object`]

###### properties.props.properties.actions.type

> `readonly` **properties.props.properties.actions.type**: `"array"` = `'array'`

###### properties.props.properties.children

> `readonly` **properties.props.properties.children**: `object`

###### properties.props.properties.children.items

> `readonly` **properties.props.properties.children.items**: `object` = `boxChildrenV0`

###### properties.props.properties.children.items.anyOf

> `readonly` **properties.props.properties.children.items.anyOf**: readonly [`object`, `object`]

###### properties.props.properties.children.type

> `readonly` **properties.props.properties.children.type**: `"array"` = `'array'`

###### properties.props.properties.description

> `readonly` **properties.props.properties.description**: `object`

###### properties.props.properties.description.type

> `readonly` **properties.props.properties.description.type**: `"string"` = `'string'`

###### properties.props.properties.input

> `readonly` **properties.props.properties.input**: `object` = `inputV0`

###### properties.props.properties.input.anyOf

> `readonly` **properties.props.properties.input.anyOf**: readonly [`object`, `object`]

###### properties.props.properties.key

> `readonly` **properties.props.properties.key**: `object`

###### properties.props.properties.key.type

> `readonly` **properties.props.properties.key.type**: `"string"` = `'string'`

###### properties.props.properties.style

> `readonly` **properties.props.properties.style**: `object` = `boxStyleV0`

###### properties.props.properties.style.additionalProperties

> `readonly` **properties.props.properties.style.additionalProperties**: `false` = `false`

###### properties.props.properties.style.properties

> `readonly` **properties.props.properties.style.properties**: `object`

###### properties.props.properties.style.properties.alignItems

> `readonly` **properties.props.properties.style.properties.alignItems**: `object`

###### properties.props.properties.style.properties.alignItems.enum

> `readonly` **properties.props.properties.style.properties.alignItems.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`]

###### properties.props.properties.style.properties.alignItems.type

> `readonly` **properties.props.properties.style.properties.alignItems.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.alignSelf

> `readonly` **properties.props.properties.style.properties.alignSelf**: `object`

###### properties.props.properties.style.properties.alignSelf.enum

> `readonly` **properties.props.properties.style.properties.alignSelf.enum**: readonly [`"auto"`, `"flex-start"`, `"center"`, `"flex-end"`]

###### properties.props.properties.style.properties.alignSelf.type

> `readonly` **properties.props.properties.style.properties.alignSelf.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundClip

> `readonly` **properties.props.properties.style.properties.backgroundClip**: `object`

###### properties.props.properties.style.properties.backgroundClip.enum

> `readonly` **properties.props.properties.style.properties.backgroundClip.enum**: readonly [`"border-box"`, `"text"`]

###### properties.props.properties.style.properties.backgroundClip.type

> `readonly` **properties.props.properties.style.properties.backgroundClip.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundColor

> `readonly` **properties.props.properties.style.properties.backgroundColor**: `object`

###### properties.props.properties.style.properties.backgroundColor.type

> `readonly` **properties.props.properties.style.properties.backgroundColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundImage

> `readonly` **properties.props.properties.style.properties.backgroundImage**: `object`

###### properties.props.properties.style.properties.backgroundImage.type

> `readonly` **properties.props.properties.style.properties.backgroundImage.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundPosition

> `readonly` **properties.props.properties.style.properties.backgroundPosition**: `object`

###### properties.props.properties.style.properties.backgroundPosition.type

> `readonly` **properties.props.properties.style.properties.backgroundPosition.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundRepeat

> `readonly` **properties.props.properties.style.properties.backgroundRepeat**: `object`

###### properties.props.properties.style.properties.backgroundRepeat.enum

> `readonly` **properties.props.properties.style.properties.backgroundRepeat.enum**: readonly [`"repeat"`, `"repeat-x"`, `"repeat-y"`, `"no-repeat"`]

###### properties.props.properties.style.properties.backgroundRepeat.type

> `readonly` **properties.props.properties.style.properties.backgroundRepeat.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.backgroundSize

> `readonly` **properties.props.properties.style.properties.backgroundSize**: `object`

###### properties.props.properties.style.properties.backgroundSize.type

> `readonly` **properties.props.properties.style.properties.backgroundSize.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomColor

> `readonly` **properties.props.properties.style.properties.borderBottomColor**: `object`

###### properties.props.properties.style.properties.borderBottomColor.type

> `readonly` **properties.props.properties.style.properties.borderBottomColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomLeftRadius

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomLeftRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomLeftRadius.type

> `readonly` **properties.props.properties.style.properties.borderBottomLeftRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderBottomRightRadius

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomRightRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomRightRadius.type

> `readonly` **properties.props.properties.style.properties.borderBottomRightRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderBottomStyle

> `readonly` **properties.props.properties.style.properties.borderBottomStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderBottomStyle.enum

> `readonly` **properties.props.properties.style.properties.borderBottomStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderBottomStyle.type

> `readonly` **properties.props.properties.style.properties.borderBottomStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderBottomWidth

> `readonly` **properties.props.properties.style.properties.borderBottomWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderBottomWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderBottomWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderBottomWidth.type

> `readonly` **properties.props.properties.style.properties.borderBottomWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderColor

> `readonly` **properties.props.properties.style.properties.borderColor**: `object`

###### properties.props.properties.style.properties.borderColor.type

> `readonly` **properties.props.properties.style.properties.borderColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftColor

> `readonly` **properties.props.properties.style.properties.borderLeftColor**: `object`

###### properties.props.properties.style.properties.borderLeftColor.type

> `readonly` **properties.props.properties.style.properties.borderLeftColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftStyle

> `readonly` **properties.props.properties.style.properties.borderLeftStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderLeftStyle.enum

> `readonly` **properties.props.properties.style.properties.borderLeftStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderLeftStyle.type

> `readonly` **properties.props.properties.style.properties.borderLeftStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderLeftWidth

> `readonly` **properties.props.properties.style.properties.borderLeftWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderLeftWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderLeftWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderLeftWidth.type

> `readonly` **properties.props.properties.style.properties.borderLeftWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderRadius

> `readonly` **properties.props.properties.style.properties.borderRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderRadius.type

> `readonly` **properties.props.properties.style.properties.borderRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderRightColor

> `readonly` **properties.props.properties.style.properties.borderRightColor**: `object`

###### properties.props.properties.style.properties.borderRightColor.type

> `readonly` **properties.props.properties.style.properties.borderRightColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderRightStyle

> `readonly` **properties.props.properties.style.properties.borderRightStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderRightStyle.enum

> `readonly` **properties.props.properties.style.properties.borderRightStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderRightStyle.type

> `readonly` **properties.props.properties.style.properties.borderRightStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderRightWidth

> `readonly` **properties.props.properties.style.properties.borderRightWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderRightWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderRightWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderRightWidth.type

> `readonly` **properties.props.properties.style.properties.borderRightWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderStyle

> `readonly` **properties.props.properties.style.properties.borderStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderStyle.enum

> `readonly` **properties.props.properties.style.properties.borderStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderStyle.type

> `readonly` **properties.props.properties.style.properties.borderStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopColor

> `readonly` **properties.props.properties.style.properties.borderTopColor**: `object`

###### properties.props.properties.style.properties.borderTopColor.type

> `readonly` **properties.props.properties.style.properties.borderTopColor.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopLeftRadius

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopLeftRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopLeftRadius.type

> `readonly` **properties.props.properties.style.properties.borderTopLeftRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderTopRightRadius

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopRightRadius.minimum

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopRightRadius.type

> `readonly` **properties.props.properties.style.properties.borderTopRightRadius.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderTopStyle

> `readonly` **properties.props.properties.style.properties.borderTopStyle**: `object` = `borderStyle`

###### properties.props.properties.style.properties.borderTopStyle.enum

> `readonly` **properties.props.properties.style.properties.borderTopStyle.enum**: readonly [`"solid"`, `"dashed"`]

###### properties.props.properties.style.properties.borderTopStyle.type

> `readonly` **properties.props.properties.style.properties.borderTopStyle.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.borderTopWidth

> `readonly` **properties.props.properties.style.properties.borderTopWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderTopWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderTopWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderTopWidth.type

> `readonly` **properties.props.properties.style.properties.borderTopWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.borderWidth

> `readonly` **properties.props.properties.style.properties.borderWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.borderWidth.minimum

> `readonly` **properties.props.properties.style.properties.borderWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.borderWidth.type

> `readonly` **properties.props.properties.style.properties.borderWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.bottom

> `readonly` **properties.props.properties.style.properties.bottom**: `object`

###### properties.props.properties.style.properties.bottom.type

> `readonly` **properties.props.properties.style.properties.bottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.boxShadow

> `readonly` **properties.props.properties.style.properties.boxShadow**: `object`

###### properties.props.properties.style.properties.boxShadow.type

> `readonly` **properties.props.properties.style.properties.boxShadow.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.display

> `readonly` **properties.props.properties.style.properties.display**: `object`

###### properties.props.properties.style.properties.display.enum

> `readonly` **properties.props.properties.style.properties.display.enum**: readonly [`"flex"`, `"none"`]

###### properties.props.properties.style.properties.display.type

> `readonly` **properties.props.properties.style.properties.display.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.flexBasis

> `readonly` **properties.props.properties.style.properties.flexBasis**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexBasis.minimum

> `readonly` **properties.props.properties.style.properties.flexBasis.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexBasis.type

> `readonly` **properties.props.properties.style.properties.flexBasis.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexDirection

> `readonly` **properties.props.properties.style.properties.flexDirection**: `object`

###### properties.props.properties.style.properties.flexDirection.enum

> `readonly` **properties.props.properties.style.properties.flexDirection.enum**: readonly [`"row"`, `"row-reverse"`, `"column"`, `"column-reverse"`]

###### properties.props.properties.style.properties.flexDirection.type

> `readonly` **properties.props.properties.style.properties.flexDirection.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.flexGrow

> `readonly` **properties.props.properties.style.properties.flexGrow**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexGrow.minimum

> `readonly` **properties.props.properties.style.properties.flexGrow.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexGrow.type

> `readonly` **properties.props.properties.style.properties.flexGrow.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexShrink

> `readonly` **properties.props.properties.style.properties.flexShrink**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.flexShrink.minimum

> `readonly` **properties.props.properties.style.properties.flexShrink.minimum**: `0` = `0`

###### properties.props.properties.style.properties.flexShrink.type

> `readonly` **properties.props.properties.style.properties.flexShrink.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.flexWrap

> `readonly` **properties.props.properties.style.properties.flexWrap**: `object`

###### properties.props.properties.style.properties.flexWrap.enum

> `readonly` **properties.props.properties.style.properties.flexWrap.enum**: readonly [`"nowrap"`, `"wrap"`, `"wrap-reverse"`]

###### properties.props.properties.style.properties.flexWrap.type

> `readonly` **properties.props.properties.style.properties.flexWrap.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.gap

> `readonly` **properties.props.properties.style.properties.gap**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.gap.minimum

> `readonly` **properties.props.properties.style.properties.gap.minimum**: `0` = `0`

###### properties.props.properties.style.properties.gap.type

> `readonly` **properties.props.properties.style.properties.gap.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.height

> `readonly` **properties.props.properties.style.properties.height**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.height.minimum

> `readonly` **properties.props.properties.style.properties.height.minimum**: `0` = `0`

###### properties.props.properties.style.properties.height.type

> `readonly` **properties.props.properties.style.properties.height.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.justifyContent

> `readonly` **properties.props.properties.style.properties.justifyContent**: `object`

###### properties.props.properties.style.properties.justifyContent.enum

> `readonly` **properties.props.properties.style.properties.justifyContent.enum**: readonly [`"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`, `"space-around"`]

###### properties.props.properties.style.properties.justifyContent.type

> `readonly` **properties.props.properties.style.properties.justifyContent.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.left

> `readonly` **properties.props.properties.style.properties.left**: `object`

###### properties.props.properties.style.properties.left.type

> `readonly` **properties.props.properties.style.properties.left.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.margin

> `readonly` **properties.props.properties.style.properties.margin**: `object`

###### properties.props.properties.style.properties.margin.type

> `readonly` **properties.props.properties.style.properties.margin.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginBottom

> `readonly` **properties.props.properties.style.properties.marginBottom**: `object`

###### properties.props.properties.style.properties.marginBottom.type

> `readonly` **properties.props.properties.style.properties.marginBottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginLeft

> `readonly` **properties.props.properties.style.properties.marginLeft**: `object`

###### properties.props.properties.style.properties.marginLeft.type

> `readonly` **properties.props.properties.style.properties.marginLeft.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginRight

> `readonly` **properties.props.properties.style.properties.marginRight**: `object`

###### properties.props.properties.style.properties.marginRight.type

> `readonly` **properties.props.properties.style.properties.marginRight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.marginTop

> `readonly` **properties.props.properties.style.properties.marginTop**: `object`

###### properties.props.properties.style.properties.marginTop.type

> `readonly` **properties.props.properties.style.properties.marginTop.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.maxHeight

> `readonly` **properties.props.properties.style.properties.maxHeight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.maxHeight.minimum

> `readonly` **properties.props.properties.style.properties.maxHeight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.maxHeight.type

> `readonly` **properties.props.properties.style.properties.maxHeight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.maxWidth

> `readonly` **properties.props.properties.style.properties.maxWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.maxWidth.minimum

> `readonly` **properties.props.properties.style.properties.maxWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.maxWidth.type

> `readonly` **properties.props.properties.style.properties.maxWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.minHeight

> `readonly` **properties.props.properties.style.properties.minHeight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.minHeight.minimum

> `readonly` **properties.props.properties.style.properties.minHeight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.minHeight.type

> `readonly` **properties.props.properties.style.properties.minHeight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.minWidth

> `readonly` **properties.props.properties.style.properties.minWidth**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.minWidth.minimum

> `readonly` **properties.props.properties.style.properties.minWidth.minimum**: `0` = `0`

###### properties.props.properties.style.properties.minWidth.type

> `readonly` **properties.props.properties.style.properties.minWidth.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.objectFit

> `readonly` **properties.props.properties.style.properties.objectFit**: `object`

###### properties.props.properties.style.properties.objectFit.enum

> `readonly` **properties.props.properties.style.properties.objectFit.enum**: readonly [`"none"`, `"contain"`, `"cover"`]

###### properties.props.properties.style.properties.objectFit.type

> `readonly` **properties.props.properties.style.properties.objectFit.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.opacity

> `readonly` **properties.props.properties.style.properties.opacity**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.opacity.minimum

> `readonly` **properties.props.properties.style.properties.opacity.minimum**: `0` = `0`

###### properties.props.properties.style.properties.opacity.type

> `readonly` **properties.props.properties.style.properties.opacity.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.overflow

> `readonly` **properties.props.properties.style.properties.overflow**: `object`

###### properties.props.properties.style.properties.overflow.enum

> `readonly` **properties.props.properties.style.properties.overflow.enum**: readonly [`"visible"`, `"hidden"`]

###### properties.props.properties.style.properties.overflow.type

> `readonly` **properties.props.properties.style.properties.overflow.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.padding

> `readonly` **properties.props.properties.style.properties.padding**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.padding.minimum

> `readonly` **properties.props.properties.style.properties.padding.minimum**: `0` = `0`

###### properties.props.properties.style.properties.padding.type

> `readonly` **properties.props.properties.style.properties.padding.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingBottom

> `readonly` **properties.props.properties.style.properties.paddingBottom**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingBottom.minimum

> `readonly` **properties.props.properties.style.properties.paddingBottom.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingBottom.type

> `readonly` **properties.props.properties.style.properties.paddingBottom.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingLeft

> `readonly` **properties.props.properties.style.properties.paddingLeft**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingLeft.minimum

> `readonly` **properties.props.properties.style.properties.paddingLeft.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingLeft.type

> `readonly` **properties.props.properties.style.properties.paddingLeft.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingRight

> `readonly` **properties.props.properties.style.properties.paddingRight**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingRight.minimum

> `readonly` **properties.props.properties.style.properties.paddingRight.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingRight.type

> `readonly` **properties.props.properties.style.properties.paddingRight.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.paddingTop

> `readonly` **properties.props.properties.style.properties.paddingTop**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.paddingTop.minimum

> `readonly` **properties.props.properties.style.properties.paddingTop.minimum**: `0` = `0`

###### properties.props.properties.style.properties.paddingTop.type

> `readonly` **properties.props.properties.style.properties.paddingTop.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.position

> `readonly` **properties.props.properties.style.properties.position**: `object`

###### properties.props.properties.style.properties.position.enum

> `readonly` **properties.props.properties.style.properties.position.enum**: readonly [`"relative"`, `"absolute"`]

###### properties.props.properties.style.properties.position.type

> `readonly` **properties.props.properties.style.properties.position.type**: `"string"` = `'string'`

###### properties.props.properties.style.properties.right

> `readonly` **properties.props.properties.style.properties.right**: `object`

###### properties.props.properties.style.properties.right.type

> `readonly` **properties.props.properties.style.properties.right.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.top

> `readonly` **properties.props.properties.style.properties.top**: `object`

###### properties.props.properties.style.properties.top.type

> `readonly` **properties.props.properties.style.properties.top.type**: `"number"` = `'number'`

###### properties.props.properties.style.properties.width

> `readonly` **properties.props.properties.style.properties.width**: `object` = `nonNegativeNumber`

###### properties.props.properties.style.properties.width.minimum

> `readonly` **properties.props.properties.style.properties.width.minimum**: `0` = `0`

###### properties.props.properties.style.properties.width.type

> `readonly` **properties.props.properties.style.properties.width.type**: `"number"` = `'number'`

###### properties.props.properties.style.type

> `readonly` **properties.props.properties.style.type**: `"object"` = `'object'`

###### properties.props.properties.title

> `readonly` **properties.props.properties.title**: `object`

###### properties.props.properties.title.type

> `readonly` **properties.props.properties.title.type**: `"string"` = `'string'`

###### properties.props.required

> `readonly` **properties.props.required**: readonly [`"title"`]

###### properties.props.type

> `readonly` **properties.props.type**: `"object"` = `'object'`

###### properties.type

> `readonly` **properties.type**: `object`

###### properties.type.const

> `readonly` **properties.type.const**: `"Tile"` = `'Tile'`

###### properties.type.type

> `readonly` **properties.type.type**: `"string"` = `'string'`

###### properties.version

> `readonly` **properties.version**: `object`

###### properties.version.enum

> `readonly` **properties.version.enum**: readonly [`"0.1"`]

###### properties.version.type

> `readonly` **properties.version.type**: `"string"` = `'string'`

##### required

> `readonly` **required**: readonly [`"type"`, `"version"`, `"props"`]

##### type

> `readonly` **type**: `"object"` = `'object'`

***

### uriOpenActionType

> `const` **uriOpenActionType**: `object`

#### Type declaration

##### const

> `readonly` **const**: `"tairu:uri/open"` = `'tairu:uri/open'`

##### type

> `readonly` **type**: `"string"` = `'string'`

***

### valueV0

> `const` **valueV0**: `object`

#### Type declaration

##### anyOf

> `readonly` **anyOf**: readonly [`object`, `object`, `object`]

## Functions

### postActionValidator()

> **postActionValidator**(`data`): `Result`\<\{`jwt`: `string`;`state`: `object`;`type`: `"tairu:did/sign"`; \} \| \{`state`: `object`;`type`: `"tairu:did/submit"`;`value`: `string` \| `number` \| `boolean` \| (`string` \| `number` \| `boolean`)[]; \}, `ValidationError`\>

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<\{`jwt`: `string`;`state`: `object`;`type`: `"tairu:did/sign"`; \} \| \{`state`: `object`;`type`: `"tairu:did/submit"`;`value`: `string` \| `number` \| `boolean` \| (`string` \| `number` \| `boolean`)[]; \}, `ValidationError`\>

***

### tileValidator()

> **tileValidator**(`data`): `Result`\<`object`, `ValidationError`\>

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<`object`, `ValidationError`\>

##### props

> **props**: `object`

###### props.actions?

> `optional` **props.actions**: (\{`label`: `string`;`type`: `"tairu:uri/open"`;`uri`: `string`; \} \| \{`label`: `string`;`payload`: `object`;`state`: `object`;`type`: `"tairu:did/sign"`; \} \| \{`label`: `string`;`state`: `object`;`type`: `"tairu:did/submit"`; \})[]

###### props.children?

> `optional` **props.children**: (\{`props`: `object`;`type`: `"Box"` \| `"Image"` \| `"Text"`; \} \| `object`[])[]

###### props.description?

> `optional` **props.description**: `string`

###### props.input?

> `optional` **props.input**: \{`multiple`: `boolean`;`options`: `object`[];`type`: `"options"`; \} \| \{`defaultValue`: `string`;`label`: `string`;`placeholder`: `string`;`secure`: `boolean`;`type`: `"text"`; \}

###### props.key?

> `optional` **props.key**: `string`

###### props.style?

> `optional` **props.style**: `object`

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

> **props.title**: `string`

##### type

> **type**: `"Tile"`

##### version

> **version**: `"0.1"`
