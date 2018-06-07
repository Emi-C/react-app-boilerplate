const creator = (type) => (payload) => ({
  type,
  payload,
});

const createActionDescriptors = (actionTypes) =>
  Object.keys(actionTypes).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: { type: actionTypes[curr], create: creator(actionTypes[curr]) },
      [`${curr}_SUCCESS`]: {
        type: `${actionTypes[curr]}_SUCCESS`,
        create: creator(`${actionTypes[curr]}_SUCCESS`),
      },
      [`${curr}_ERROR`]: {
        type: `${actionTypes[curr]}_ERROR`,
        create: creator(`${actionTypes[curr]}_ERROR`),
      },
    }),
    {}
  );

const createScopedActions = (scope, actions) =>
  Object.keys(actions).reduce((acc, curr) => {
    acc[curr] = `${scope}/${curr}`;
    return acc;
  }, actions);

const reducer = (a, b) => (scope, actions) => b(a(scope, actions));
const pipe = (...func) => func.reduce(reducer);
const getActions = pipe(
  createScopedActions,
  createActionDescriptors
);

/*
creates action cretors like
KEY:{type:'KEY', payload: payload},
KEY_SUCCESS:{type:'KEY_SUCCESS', payload: payload},
KEY_ERROR:{type:'KEY_ERROR', payload: payload}
*/
export default getActions;

export { createScopedActions };
