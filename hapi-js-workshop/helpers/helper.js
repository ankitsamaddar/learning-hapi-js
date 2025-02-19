export default (context) => {
  const { query } = context.data.root;
  return query.name + query.suffix;
}
