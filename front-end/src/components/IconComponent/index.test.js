import { render, screen } from '@testing-library/react';
import IconComponent from './';

const setup = (type, value) =>
  render(<IconComponent type={type} value={value} />);

describe("GIVEN a user on a page with a CardInfo of type 'Calories'", () => {
  test("THEN 'Calories' and the value with the right unit are displayed", () => {
    setup('Calories', 1313);

    const cardType = screen.getByTestId('card-type');
    const cardMeasure = screen.getByTestId('card-measure');

    expect(cardType.textContent).toBe('Calories');
    expect(cardMeasure.textContent).toBe('1.313 kCal');
  });
});

describe("GIVEN a user on a page with a CardInfo of type 'Protéines'", () => {
  test("THEN 'Protéines' and the value with the right unit are displayed", () => {
    setup('Protéines', 1313);

    const cardType = screen.getByTestId('card-type');
    const cardMeasure = screen.getByTestId('card-measure');

    expect(cardType.textContent).toBe('Protéines');
    expect(cardMeasure.textContent).toBe('1.313 g');
  });
});

describe("GIVEN a user on a page with a CardInfo of type 'Glucides'", () => {
  test("THEN 'Glucides' and the value with the right unit are displayed", () => {
    setup('Glucides', 1313);

    const cardType = screen.getByTestId('card-type');
    const cardMeasure = screen.getByTestId('card-measure');

    expect(cardType.textContent).toBe('Glucides');
    expect(cardMeasure.textContent).toBe('1.313 g');
  });
});
