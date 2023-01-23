import _ from "lodash";

/**
 *
 *
 * **Arguments**
 *
 * Array: The array to inspect.
 *
 * [iteratee=_.identity] Function: The iteratee invoked per element.
 *
 * **Returns**
 *
 * Array: Returns the new duplicate free array.
 *
 *
 */
export const deleteDuplicate = (data, duplicate) => {
  return _.uniqBy(data, duplicate);
};

/**
 *
 *
 * **Arguments**
 *
 * count (Int): count the number of words.
 *
 * noun (String): singular noun.
 *
 * suffix (string): add 's' at the end of the word if plural ('s' by default).
 *
 * isCountVisible (boolean): show the count in front of the noun (false by default).
 *
 */

export const pluralize = (
  count,
  noun,
  suffix = "s",
  isCountVisible = false
) => {
  if (isCountVisible) {
    return `${count} ${noun}${count !== 1 ? suffix : ""}`;
  } else {
    return `${noun}${count !== 1 ? suffix : ""}`;
  }
};
