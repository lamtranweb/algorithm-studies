import { reverse } from "./reverse";
import { shuffle, range } from "lodash";
import { compose } from "lodash/fp";

const EMPTY_ARRAY = 0;
const EVEN_ARRAY = 10;
const ODD_ARRAY = 11;

const generate = compose(shuffle, range);

[EMPTY_ARRAY, EVEN_ARRAY, ODD_ARRAY].forEach(size =>
  it(`reverses array of size: ${size}`, () => {
    const input = generate(size);
    expect(reverse(input)).toEqual(input.reverse());
  })
);
