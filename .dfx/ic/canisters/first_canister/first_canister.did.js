export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'gree' : IDL.Func([IDL.Text], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
