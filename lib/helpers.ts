export const metafield = (data: any, key: any) => {
  const json_response = data?.metafields?.edges.find(
    (item: any) => item?.node?.key === key
  )?.node.value;
  const convert = json_response ? JSON.parse(json_response) : null;
  return convert?.children[0]?.children[0]?.value;
};
