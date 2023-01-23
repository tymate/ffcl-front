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
