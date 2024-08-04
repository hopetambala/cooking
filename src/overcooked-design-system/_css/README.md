# Design Tokens

Primitive Tokens: These are the most basic form of tokens, reducing the infinite possibilities to a select few that are most relevant to the brand. This could range from a couple of dozen to a couple of hundred. The goal is to create a robust palette that resonates with your brand identity.

Looking at `--oc-color-prim-blue-100` which is the structure `color-primitives-[specificColor]-[colorRamp]`, we see that this token is a hex color value for blue at a defined ramp level of 100 (ramp is 100, 300, 500, 700).

## Semantic Tokens: 
These tokens are “semantic” in that they carry meaning and imply how and where they should be applied. They typically reference only the primitive tokens but include guidance on how colors should be used in text, the types of text to use, etc., embedding both meaning and guidance within

Looking at a `--oc-color-sem-background-dark`, we see the structure `color-semantic-[meaning]-[additionalMeaningIfNecessary]` which means that this token is for the color of a black dark background.

`--oc-color-sem-background-light` says that this token is for the color of a black dark background.

## Component Tokens: 
These tokens are specific to individual components and generally refer to semantic tokens. For example, a token defining the corner radius of a button applies exclusively to that button. Component tokens are valuable for theming scenarios where there is a need to alter not only primary colors but component-specific attributes that really empower themes to capture their unique look and feel 

A token like `--oc-color-comp-ad-banner-text` uses the structure `color-component-[componentType]-[componentElement]-[componentSubElementIfNecessary]`. This says that the token will have the color for the sub-component of "text" for the component "ad banner"

`--oc-color-comp-progress-bar-background` says that the token will have the color for the sub-component/element "background" of the component progress bar.





Examples
- Size
- Color
- Layout
- Space


