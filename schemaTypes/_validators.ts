import type {
  PortableTextBlock,
  Rule,
  StringRule,
} from "sanity";

const reduceBy10Percent = (x: number) => x * 0.9;
const roundDownNearest10 = (x: number) => Math.round(x / 10) * 10;
const reduceBy10PercentAndRoundDown = (x: number) =>
  roundDownNearest10(reduceBy10Percent(x));

export const createTextValidator = (
  rule: StringRule,
  minLength: number,
  maxLength: number
) => [
  rule
    .required()
    .min(minLength)
    .error(
      `At least a mininum ${minLength} characters is required for this field.`
    ),
  rule
    .max(maxLength)
    .warning(
      `You're over ${maxLength} characters, you're strongly encouraged to target ${reduceBy10PercentAndRoundDown(maxLength)} characters, or two mini-paragraphs.`
    ),
];

export const createBlockTextValidator = (
  rule: Rule,
  minLength: number,
  maxLength: number
) => {
  const validateNotEmpty = (blockArray: PortableTextBlock[]): true | string => {
    if (!blockArray || !blockArray.length) return "No empty content blocks.";
    return true;
  };

  const validateMinLength = (
    blockArray: PortableTextBlock[]
  ): true | string => {
    if (!blockArray || !blockArray.length) return true;

    const text = blockArray
      .map((block: PortableTextBlock) => block.children)
      .flat()
      .map((span: any) => span.text)
      .join("");
    const length = text.length;

    if (length < minLength) {
      return `At least ${minLength} characters are required for this field.`;
    }
    return true;
  };

  const validateMaxLength = (
    blockArray: PortableTextBlock[]
  ): true | string => {
    if (!blockArray || !blockArray.length) return true;

    const text = blockArray
      .map((block: PortableTextBlock) => block.children)
      .flat()
      .map((span: any) => span.text)
      .join("");
    const length = text.length;

    if (length > maxLength) {
      return `You're over ${maxLength} characters (which is okay!). But maybe consider somewhere around ${reduceBy10PercentAndRoundDown(maxLength)} characters, 45 words, or one mini-paragraph. Keeping the reader moving through the page is key.`;
    }
    return true;
  };

  return [
    rule.custom(validateNotEmpty).warning(),
    rule.custom(validateMinLength).error(),
    rule.custom(validateMaxLength).warning(),
  ];
};
